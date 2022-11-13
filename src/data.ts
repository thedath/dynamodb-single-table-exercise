import {
  AttributeDefinition,
  AttributeValue,
  WriteRequest,
} from "@aws-sdk/client-dynamodb";
import { v4 as uuidV4 } from "uuid";

function generateIndex(): AttributeValue {
  const timeParts = process.hrtime();
  return { N: (timeParts[0] * Math.pow(10, 6) + timeParts[1]).toString() };
}

export const users: WriteRequest[] = [
  {
    PutRequest: {
      Item: {
        i00_index: generateIndex(),
        i01_user_id: { S: uuidV4() },
        i02_user_name: { S: "John" },
      },
    },
  },
  {
    PutRequest: {
      Item: {
        i00_index: generateIndex(),
        i01_user_id: { S: uuidV4() },
        i02_user_name: { S: "David" },
      },
    },
  },
  {
    PutRequest: {
      Item: {
        i00_index: generateIndex(),
        i01_user_id: { S: uuidV4() },
        i02_user_name: { S: "Kathy" },
      },
    },
  },
  {
    PutRequest: {
      Item: {
        i00_index: generateIndex(),
        i01_user_id: { S: uuidV4() },
        i02_user_name: { S: "Raj" },
      },
    },
  },
];

export const reactions: WriteRequest[] = [
  {
    PutRequest: {
      Item: {
        i00_index: generateIndex(),
        i03_reaction_id: { S: uuidV4() },
        i04_reaction: { S: ":-)" },
      },
    },
  },
  {
    PutRequest: {
      Item: {
        i00_index: generateIndex(),
        i03_reaction_id: { S: uuidV4() },
        i04_reaction: { S: ":-D" },
      },
    },
  },
  {
    PutRequest: {
      Item: {
        i00_index: generateIndex(),
        i03_reaction_id: { S: uuidV4() },
        i04_reaction: { S: ":-|" },
      },
    },
  },
  {
    PutRequest: {
      Item: {
        i00_index: generateIndex(),
        i03_reaction_id: { S: uuidV4() },
        i04_reaction: { S: ":-(" },
      },
    },
  },
  {
    PutRequest: {
      Item: {
        i00_index: generateIndex(),
        i03_reaction_id: { S: uuidV4() },
        i04_reaction: { S: ":-O" },
      },
    },
  },
];
