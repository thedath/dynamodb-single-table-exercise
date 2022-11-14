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

export const posts: WriteRequest[] = [
  {
    PutRequest: {
      Item: {
        ...users[2].PutRequest?.Item,
        ...{
          i00_index: generateIndex(),
          i05_post_id: { S: uuidV4() },
          i06_post: { S: "Hello world!" },
        },
      },
    },
  },
  {
    PutRequest: {
      Item: {
        ...users[2].PutRequest?.Item,
        ...{
          i00_index: generateIndex(),
          i05_post_id: { S: uuidV4() },
          i06_post: { S: "Single tables, FTW! 🥳" },
        },
      },
    },
  },
  {
    PutRequest: {
      Item: {
        ...users[0].PutRequest?.Item,
        ...{
          i00_index: generateIndex(),
          i05_post_id: { S: uuidV4() },
          i06_post: { S: "AWS: 'As we speak' VS 'Amazon Web Services'" },
        },
      },
    },
  },
  {
    PutRequest: {
      Item: {
        ...users[1].PutRequest?.Item,
        ...{
          i00_index: generateIndex(),
          i05_post_id: { S: uuidV4() },
          i06_post: { S: "Lorem ipsum?" },
        },
      },
    },
  },
  {
    PutRequest: {
      Item: {
        ...users[3].PutRequest?.Item,
        ...{
          i00_index: generateIndex(),
          i05_post_id: { S: uuidV4() },
          i06_post: { S: "Testing 1, 2, 3..." },
        },
      },
    },
  },
  {
    PutRequest: {
      Item: {
        ...users[3].PutRequest?.Item,
        ...{
          i00_index: generateIndex(),
          i05_post_id: { S: uuidV4() },
          i06_post: { S: "Good bye guys!!!" },
        },
      },
    },
  },
  {
    PutRequest: {
      Item: {
        ...users[3].PutRequest?.Item,
        ...{
          i00_index: generateIndex(),
          i05_post_id: { S: uuidV4() },
          i06_post: { S: "WHO LET THE DOGS OUT???" },
        },
      },
    },
  },
];

export const postReactions: WriteRequest[] = [
  {
    PutRequest: {
      Item: {
        ...users[0].PutRequest?.Item,
        ...posts[0].PutRequest?.Item,
        ...reactions[0].PutRequest?.Item,
        ...{
          i00_index: generateIndex(),
        },
      },
    },
  },
];

export const postComments: WriteRequest[] = [
  {
    PutRequest: {
      Item: {
        ...users[3].PutRequest?.Item,
        ...{
          i00_index: generateIndex(),
          i05_post_id: { S: uuidV4() },
          i06_post: { S: "WHO LET THE DOGS OUT???" },
        },
      },
    },
  },
];
