import {
  BatchWriteItemCommand,
  BatchWriteItemCommandOutput,
  CreateTableCommand,
  CreateTableOutput,
  DescribeTableCommand,
  DescribeTableOutput,
  DynamoDBClient,
  ResourceNotFoundException,
  UpdateTableCommand,
  UpdateTableCommandOutput,
} from "@aws-sdk/client-dynamodb";
import * as dotenv from "dotenv";
import { reactions, users } from "./data";

dotenv.config();

const TableName = "single-table";

async function waitWhile<T>(
  doer: () => Promise<T>,
  checker: (input: T) => boolean
) {
  let running = true;
  let output;
  while (running) {
    output = await doer();
    running = await checker(output);
  }
  return output;
}

async function run() {
  const dynamoDb = new DynamoDBClient({
    region: process.env.AWS_REGION!,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  });

  const describeTable = new DescribeTableCommand({ TableName });

  let tableDescription: DescribeTableOutput | undefined = undefined;
  try {
    // check whether table already exists or not
    // throws an error if table doesn't exist
    tableDescription = await dynamoDb.send(describeTable);
    console.log("Table found. Status: ", tableDescription?.Table?.TableStatus);
  } catch (error: unknown) {
    // check if the error because of not existing table
    // if not, stop continuing
    if (!(error instanceof ResourceNotFoundException)) throw error;
    console.log("Table not found");
  } finally {
    if (!tableDescription?.Table?.TableStatus) {
      console.log("Creating table");

      // creating the table
      const createTable = new CreateTableCommand({
        TableName,
        BillingMode: "PAY_PER_REQUEST",
        AttributeDefinitions: [
          { AttributeName: "i00_index", AttributeType: "N" },
        ],
        KeySchema: [{ AttributeName: "i00_index", KeyType: "HASH" }],
      });
      const createTableResponse: CreateTableOutput = await dynamoDb.send(
        createTable
      );

      console.log(
        "Table creation initiated. Status: ",
        createTableResponse?.TableDescription?.TableStatus
      );

      // waiting for table to be created as it takes few seconds
      let flagTableCreated = false;
      while (!flagTableCreated) {
        tableDescription = await dynamoDb.send(describeTable);
        console.log(
          "Checking  table creation status. Status: ",
          tableDescription?.Table?.TableStatus
        );
        if (tableDescription?.Table?.TableStatus === "ACTIVE")
          flagTableCreated = true;
      }
      console.log(
        "Table created. Status: ",
        tableDescription?.Table?.TableStatus
      );

      console.log("Users creation started.");

      // inserting dummy data for the newly created table
      const insertUsers = new BatchWriteItemCommand({
        RequestItems: {
          [TableName]: users,
        },
      });
      await dynamoDb.send(insertUsers);
      console.log("Users created.");

      // creating global index for user by user_id
      const addUserIndex = new UpdateTableCommand({
        TableName,
        AttributeDefinitions: [
          { AttributeName: "i01_user_id", AttributeType: "S" },
        ],
        GlobalSecondaryIndexUpdates: [
          {
            Create: {
              IndexName: "UserIdIndex",
              KeySchema: [{ AttributeName: "i01_user_id", KeyType: "HASH" }],
              Projection: {
                ProjectionType: "ALL",
              },
            },
          },
        ],
      });
      const addUserIndexResponse: UpdateTableCommandOutput =
        await dynamoDb.send(addUserIndex);
      console.log("User index added. Response: ", addUserIndexResponse);

      // inserting reaction dummy data
      const insertReactions = new BatchWriteItemCommand({
        RequestItems: {
          [TableName]: reactions,
        },
      });
      await dynamoDb.send(insertReactions);
      console.log("Reactions created.");

      // creating global index for user by reaction_id
      const addReactionIndex = new UpdateTableCommand({
        TableName,
        AttributeDefinitions: [
          { AttributeName: "i03_reaction_id", AttributeType: "S" },
        ],
        GlobalSecondaryIndexUpdates: [
          {
            Create: {
              IndexName: "ReactionIdIndex",
              KeySchema: [
                { AttributeName: "i03_reaction_id", KeyType: "HASH" },
              ],
              Projection: {
                ProjectionType: "ALL",
              },
            },
          },
        ],
      });

      tableDescription = await waitWhile(
        async () => await dynamoDb.send(describeTable),
        (response) =>
          response?.Table?.GlobalSecondaryIndexes?.find(
            (gsi) => gsi.IndexName === "ReactionIdIndex"
          )?.IndexStatus === "ACTIVE"
      );

      const addReactionIndexResponse: UpdateTableCommandOutput =
        await dynamoDb.send(addReactionIndex);
      console.log("Reaction index added. Response: ", addReactionIndexResponse);
    }
  }

  // console.log(tableDescription);

  // const getAllUsers = new ScanCommand({
  //   TableName: "single-table",
  //   FilterExpression:
  //     "NOT attribute_not_exists(user_id) AND NOT attribute_not_exists(user_name)",
  //   ProjectionExpression: "user_id, user_name",
  // });

  // const res = await dynamoDb.send(getAllUsers);
  // console.log(res.Items);

  // const getAllReactionsOfAPostOfAUser = new ScanCommand({
  //   TableName: "single-table",
  //   FilterExpression:
  //     "NOT attribute_not_exists(user_id) AND NOT attribute_not_exists(user_name)",

  //   ProjectionExpression: "user_id, user_name",
  // });

  // const res2 = await dynamoDb.send(getAllReactionsOfAPostOfAUser);
  // console.log(res2.Items);

  dynamoDb.destroy();
}

run();
