// import { v4 as uuidV4 } from "uuid";

// const users = [
//   { i001_user_id: uuidV4(), i002_user_name: "David" },
//   { i001_user_id: uuidV4(), i002_user_name: "John" },
//   { i001_user_id: uuidV4(), i002_user_name: "Mike" },
//   { i001_user_id: uuidV4(), i002_user_name: "Dick" },
// ];

// const reactions = [
//   { i003_reaction_id: uuidV4(), i004_reaction: ":-)" },
//   { i003_reaction_id: uuidV4(), i004_reaction: ":-D" },
//   { i003_reaction_id: uuidV4(), i004_reaction: ";-}" },
// ];

// const posts = [
//   { ...users[0], i005_post_id: uuidV4(), i006_post: "Hello World!" },
//   {
//     ...users[3],
//     i005_post_id: uuidV4(),
//     i006_post: "AWS: 'As we speak' VS 'Amazon Web Services'",
//   },
//   { ...users[3], i005_post_id: uuidV4(), i006_post: "Single tables, FTW!" },
//   { ...users[3], i005_post_id: uuidV4(), i006_post: "Lorem ipsum?" },
//   { ...users[1], i005_post_id: uuidV4(), i006_post: "Testing 1, 2, 3..." },
//   { ...users[2], i005_post_id: uuidV4(), i006_post: "WHO LET THE DOGS OUT???" },
//   { ...users[2], i005_post_id: uuidV4(), i006_post: "Goodnight fellas..." },
// ];

// const postReactions = [
//   { ...posts[5], ...users[1], ...reactions[2] },
//   { ...posts[2], ...users[0], ...reactions[1] },
//   { ...posts[6], ...users[3], ...reactions[0] },
//   { ...posts[6], ...users[0], ...reactions[0] },
//   { ...posts[5], ...users[3], ...reactions[2] },
//   { ...posts[2], ...users[0], ...reactions[2] },
//   { ...posts[3], ...users[2], ...reactions[2] },
//   { ...posts[1], ...users[3], ...reactions[2] },
//   { ...posts[6], ...users[1], ...reactions[2] },
//   { ...posts[2], ...users[2], ...reactions[1] },
//   { ...posts[3], ...users[2], ...reactions[1] },
//   { ...posts[6], ...users[2], ...reactions[2] },
//   { ...posts[0], ...users[1], ...reactions[1] },
//   { ...posts[0], ...users[0], ...reactions[1] },
//   { ...posts[1], ...users[3], ...reactions[1] },
//   { ...posts[4], ...users[3], ...reactions[0] },
//   { ...posts[4], ...users[2], ...reactions[0] },
//   { ...posts[3], ...users[1], ...reactions[0] },
//   { ...posts[3], ...users[1], ...reactions[2] },
//   { ...posts[1], ...users[3], ...reactions[0] },
// ];

// const comments = [
//   { ...posts[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "" } },
//   { ...posts[], ...users[], ...{ i007_comment_id: uuidV4(), i008_comment: "" } },
//   { ...posts[], ...users[], ...{ i007_comment_id: uuidV4(), i008_comment: "" } },
//   { ...posts[], ...users[], ...{ i007_comment_id: uuidV4(), i008_comment: "" } },
//   { ...posts[], ...users[], ...{ i007_comment_id: uuidV4(), i008_comment: "" } },
//   { ...posts[], ...users[], ...{ i007_comment_id: uuidV4(), i008_comment: "" } },
//   { ...posts[], ...users[], ...{ i007_comment_id: uuidV4(), i008_comment: "" } },
//   { ...posts[], ...users[], ...{ i007_comment_id: uuidV4(), i008_comment: "" } },
//   { ...posts[], ...users[], ...{ i007_comment_id: uuidV4(), i008_comment: "" } },
//   { ...posts[], ...users[], ...{ i007_comment_id: uuidV4(), i008_comment: "" } },
//   { ...posts[], ...users[], ...{ i007_comment_id: uuidV4(), i008_comment: "" } },
//   { ...posts[], ...users[], ...{ i007_comment_id: uuidV4(), i008_comment: "" } },
//   { ...posts[], ...users[], ...{ i007_comment_id: uuidV4(), i008_comment: "" } },
//   { ...posts[], ...users[], ...{ i007_comment_id: uuidV4(), i008_comment: "" } },
//   { ...posts[], ...users[], ...{ i007_comment_id: uuidV4(), i008_comment: "" } },
//   { ...posts[], ...users[], ...{ i007_comment_id: uuidV4(), i008_comment: "" } },
//   { ...posts[], ...users[], ...{ i007_comment_id: uuidV4(), i008_comment: "" } },
//   { ...posts[], ...users[], ...{ i007_comment_id: uuidV4(), i008_comment: "" } },
//   { ...posts[], ...users[], ...{ i007_comment_id: uuidV4(), i008_comment: "" } },
//   { ...posts[], ...users[], ...{ i007_comment_id: uuidV4(), i008_comment: "" } },
//   { ...posts[], ...users[], ...{ i007_comment_id: uuidV4(), i008_comment: "" } },
//   { ...posts[], ...users[], ...{ i007_comment_id: uuidV4(), i008_comment: "" } },
// ];

// const commentsReactions = [
//   { ...comments[0], ...users[0], ...reactions[0] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
//   { ...comments[], ...users[], ...reactions[] },
// ];

// const replyComments = [
//   { ...comments[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "", i009_parent_comment_id: comments[0].i007_comment_id } },
//   { ...comments[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "", i009_parent_comment_id: comments[0].i007_comment_id } },
//   { ...comments[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "", i009_parent_comment_id: comments[0].i007_comment_id } },
//   { ...comments[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "", i009_parent_comment_id: comments[0].i007_comment_id } },
//   { ...comments[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "", i009_parent_comment_id: comments[0].i007_comment_id } },
//   { ...comments[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "", i009_parent_comment_id: comments[0].i007_comment_id } },
//   { ...comments[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "", i009_parent_comment_id: comments[0].i007_comment_id } },
//   { ...comments[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "", i009_parent_comment_id: comments[0].i007_comment_id } },
//   { ...comments[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "", i009_parent_comment_id: comments[0].i007_comment_id } },
//   { ...comments[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "", i009_parent_comment_id: comments[0].i007_comment_id } },
//   { ...comments[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "", i009_parent_comment_id: comments[0].i007_comment_id } },
//   { ...comments[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "", i009_parent_comment_id: comments[0].i007_comment_id } },
//   { ...comments[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "", i009_parent_comment_id: comments[0].i007_comment_id } },
//   { ...comments[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "", i009_parent_comment_id: comments[0].i007_comment_id } },
//   { ...comments[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "", i009_parent_comment_id: comments[0].i007_comment_id } },
//   { ...comments[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "", i009_parent_comment_id: comments[0].i007_comment_id } },
//   { ...comments[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "", i009_parent_comment_id: comments[0].i007_comment_id } },
//   { ...comments[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "", i009_parent_comment_id: comments[0].i007_comment_id } },
//   { ...comments[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "", i009_parent_comment_id: comments[0].i007_comment_id } },
//   { ...comments[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "", i009_parent_comment_id: comments[0].i007_comment_id } },
//   { ...comments[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "", i009_parent_comment_id: comments[0].i007_comment_id } },
//   { ...comments[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "", i009_parent_comment_id: comments[0].i007_comment_id } },
//   { ...comments[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "", i009_parent_comment_id: comments[0].i007_comment_id } },
//   { ...comments[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "", i009_parent_comment_id: comments[0].i007_comment_id } },
//   { ...comments[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "", i009_parent_comment_id: comments[0].i007_comment_id } },
//   { ...comments[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "", i009_parent_comment_id: comments[0].i007_comment_id } },
//   { ...comments[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "", i009_parent_comment_id: comments[0].i007_comment_id } },
//   { ...comments[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "", i009_parent_comment_id: comments[0].i007_comment_id } },
//   { ...comments[0], ...users[0], ...{ i007_comment_id: uuidV4(), i008_comment: "", i009_parent_comment_id: comments[0].i007_comment_id } },
// ];

// const replyCommentsReactions = [
//   { ...replyComments[0], ...users[0], ...reactions[0] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
//   { ...replyComments[], ...users[], ...reactions[] },
// ];
