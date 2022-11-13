import * as dotenv from "dotenv";
import {
  DynamoDBClient,
  CreateTableCommand,
  DescribeTableCommand,
  DescribeTableOutput,
  CreateGlobalSecondaryIndexAction,
  UpdateTableCommand,
  ScanCommand,
  ResourceNotFoundException,
  CreateTableOutput,
} from "@aws-sdk/client-dynamodb";

dotenv.config();

const TableName = "single-table";

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
    tableDescription = await dynamoDb.send(describeTable);
    console.log("Table found. Status: ", tableDescription?.Table?.TableStatus);
  } catch (error: unknown) {
    if (!(error instanceof ResourceNotFoundException)) throw error;
    console.log("Table not found");
  } finally {
    if (!tableDescription?.Table?.TableStatus) {
      console.log("Creating table");
      const createTable = new CreateTableCommand({
        TableName,
        AttributeDefinitions: [{ AttributeName: "", AttributeType: "" }],
        KeySchema: [{ AttributeName: "", KeyType: "" }],
      });
      const createdTable = (await dynamoDb.send(
        createTable
      )) as CreateTableOutput;
      console.log(
        "Table created. Status: ",
        createdTable?.TableDescription?.TableStatus
      );
    }
  }

  // console.log(tableDescription);

  // new UpdateTableCommand({
  //   TableName: "",
  //   GlobalSecondaryIndexUpdates: [
  //     {
  //       Create: {
  //         IndexName: "",
  //         KeySchema: [{ AttributeName: "", KeyType: "" }],
  //         Projection: {  }
  //       },
  //     },
  //   ],
  // });

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
