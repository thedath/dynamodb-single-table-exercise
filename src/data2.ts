import { v4 as uuidV4 } from "uuid";

export const users = [
  { i001_user_id: uuidV4(), i002_user_name: "David" },
  { i001_user_id: uuidV4(), i002_user_name: "John" },
  { i001_user_id: uuidV4(), i002_user_name: "Mike" },
  { i001_user_id: uuidV4(), i002_user_name: "Dick" },
];

export const reactions = [
  { i003_reaction_id: uuidV4(), i004_reaction: ":-)" },
  { i003_reaction_id: uuidV4(), i004_reaction: ":-D" },
  { i003_reaction_id: uuidV4(), i004_reaction: ";-}" },
];

export const posts = [
  { ...users[0], i005_post_id: uuidV4(), i006_post: "Hello World!" },
  {
    ...users[3],
    i005_post_id: uuidV4(),
    i006_post: "AWS: 'As we speak' VS 'Amazon Web Services'",
  },
  { ...users[3], i005_post_id: uuidV4(), i006_post: "Single tables, FTW!" },
  { ...users[3], i005_post_id: uuidV4(), i006_post: "Lorem ipsum?" },
  { ...users[1], i005_post_id: uuidV4(), i006_post: "Testing 1, 2, 3..." },
  { ...users[2], i005_post_id: uuidV4(), i006_post: "WHO LET THE DOGS OUT???" },
  { ...users[2], i005_post_id: uuidV4(), i006_post: "Goodnight fellas..." },
];

export const postReactions = [
  { ...posts[5], ...users[1], ...reactions[2] },
  { ...posts[2], ...users[0], ...reactions[1] },
  { ...posts[6], ...users[3], ...reactions[0] },
  { ...posts[6], ...users[0], ...reactions[0] },
  { ...posts[5], ...users[3], ...reactions[2] },
  { ...posts[2], ...users[0], ...reactions[2] },
  { ...posts[3], ...users[2], ...reactions[2] },
  { ...posts[1], ...users[3], ...reactions[2] },
  { ...posts[6], ...users[1], ...reactions[2] },
  { ...posts[2], ...users[2], ...reactions[1] },
  { ...posts[3], ...users[2], ...reactions[1] },
  { ...posts[6], ...users[2], ...reactions[2] },
  { ...posts[0], ...users[1], ...reactions[1] },
  { ...posts[0], ...users[0], ...reactions[1] },
  { ...posts[1], ...users[3], ...reactions[1] },
  { ...posts[4], ...users[3], ...reactions[0] },
  { ...posts[4], ...users[2], ...reactions[0] },
  { ...posts[3], ...users[1], ...reactions[0] },
  { ...posts[3], ...users[1], ...reactions[2] },
  { ...posts[1], ...users[3], ...reactions[0] },
];

export const comments = [
  {
    ...posts[0],
    ...users[0],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "He found his art never progressed when he literally used his sweat and tears.",
    },
  },
  {
    ...posts[1],
    ...users[0],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "There have been days when I wished to be separated from my body, but today wasn’t one of those days.",
    },
  },
  {
    ...posts[4],
    ...users[0],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "She hadn't had her cup of coffee, and that made things all the worse.",
    },
  },
  {
    ...posts[1],
    ...users[0],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment: "Instead of a bachelorette party",
    },
  },
  {
    ...posts[4],
    ...users[1],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "He had a wall full of masks so she could wear a different face every day.",
    },
  },
  {
    ...posts[1],
    ...users[1],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment: "He drank life before spitting it out.",
    },
  },
  {
    ...posts[4],
    ...users[1],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "It's difficult to understand the lengths he'd go to remain short.",
    },
  },
  {
    ...posts[1],
    ...users[1],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "The clock within this blog and the clock on my laptop are 1 hour different from each other.",
    },
  },
  {
    ...posts[4],
    ...users[2],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment: "It was a really good Monday for being a Saturday.",
    },
  },
  {
    ...posts[2],
    ...users[2],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment: "She wrote him a long letter, but he didn't read it.",
    },
  },
  {
    ...posts[5],
    ...users[2],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment: "I covered my friend in baby oil.",
    },
  },
  {
    ...posts[2],
    ...users[2],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "There's probably enough glass in my cupboard to build an undersea aquarium.",
    },
  },
  {
    ...posts[5],
    ...users[3],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "The balloons floated away along with all my hopes and dreams.",
    },
  },
  {
    ...posts[2],
    ...users[3],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "He felt that dining on the bridge brought romance to his relationship with his cat.",
    },
  },
  {
    ...posts[5],
    ...users[3],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "The team members were hard to tell apart since they all wore their hair in a ponytail.",
    },
  },
  {
    ...posts[2],
    ...users[3],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "For oil spots on the floor, nothing beats parking a motorbike in the lounge.",
    },
  },
  {
    ...posts[5],
    ...users[0],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment: "Three years later, the coffin was still full of Jello.",
    },
  },
  {
    ...posts[3],
    ...users[0],
    ...{ i007_comment_id: uuidV4(), i008_comment: "She cried diamonds." },
  },
  {
    ...posts[6],
    ...users[1],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "His confidence would have bee admirable if it wasn't for his stupidity.",
    },
  },
  {
    ...posts[3],
    ...users[1],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "The clouds formed beautiful animals in the sky that eventually created a tornado to wreak havoc.",
    },
  },
  {
    ...posts[6],
    ...users[2],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "The wake behind the boat told of the past while the open sea for told life in the unknown future.",
    },
  },
  {
    ...posts[3],
    ...users[2],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "The tour bus was packed with teenage girls heading toward their next adventure.",
    },
  },
  {
    ...posts[6],
    ...users[3],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "He played the game as if his life depended on it and the truth was that it did.",
    },
  },
  {
    ...posts[3],
    ...users[3],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "The reservoir water level continued to lower while we enjoyed our long shower.",
    },
  },
];

export const commentsReactions = new Array(
  comments.length * users.length * reactions.length
)
  .fill(undefined)
  .map((_, i) => ({
    ...comments[i % comments.length],
    ...users[i % users.length],
    ...reactions[i % reactions.length],
  }));

export const replyComments = [
  {
    ...comments[1],
    ...users[0],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "His thought process was on so many levels that he gave himself a phobia of heights.",
      i009_parent_comment_id: comments[1].i007_comment_id,
    },
  },
  {
    ...comments[5],
    ...users[0],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment: "Today I dressed my unicorn in preparation for the race.",
      i009_parent_comment_id: comments[5].i007_comment_id,
    },
  },
  {
    ...comments[10],
    ...users[0],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "I only enjoy window shopping when the windows are transparent.",
      i009_parent_comment_id: comments[10].i007_comment_id,
    },
  },
  {
    ...comments[13],
    ...users[0],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "The miniature pet elephant became the envy of the neighborhood.",
      i009_parent_comment_id: comments[13].i007_comment_id,
    },
  },
  {
    ...comments[9],
    ...users[0],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "They finished building the road they knew no one would ever use.",
      i009_parent_comment_id: comments[9].i007_comment_id,
    },
  },
  {
    ...comments[16],
    ...users[0],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment: "He shaved the peach to prove a point.",
      i009_parent_comment_id: comments[16].i007_comment_id,
    },
  },
  {
    ...comments[0],
    ...users[0],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "He used to get confused between soldiers and shoulders, but as a military man, he now soldiers responsibility.",
      i009_parent_comment_id: comments[0].i007_comment_id,
    },
  },
  {
    ...comments[4],
    ...users[0],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment: "He decided to live his life by the big beats manifesto.",
      i009_parent_comment_id: comments[4].i007_comment_id,
    },
  },
  {
    ...comments[20],
    ...users[1],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "She had some amazing news to share but nobody to share it with.",
      i009_parent_comment_id: comments[20].i007_comment_id,
    },
  },
  {
    ...comments[9],
    ...users[1],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "Greetings from the galaxy MACS0647-JD, or what we call home.",
      i009_parent_comment_id: comments[9].i007_comment_id,
    },
  },
  {
    ...comments[19],
    ...users[1],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "The two walked down the slot canyon oblivious to the sound of thunder in the distance.",
      i009_parent_comment_id: comments[19].i007_comment_id,
    },
  },
  {
    ...comments[1],
    ...users[1],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "For oil spots on the floor, nothing beats parking a motorbike in the lounge.",
      i009_parent_comment_id: comments[1].i007_comment_id,
    },
  },
  {
    ...comments[16],
    ...users[1],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "You have every right to be angry, but that doesn't give you the right to be mean.",
      i009_parent_comment_id: comments[16].i007_comment_id,
    },
  },
  {
    ...comments[21],
    ...users[1],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment: "The crowd yells and screams for more memes.",
      i009_parent_comment_id: comments[21].i007_comment_id,
    },
  },
  {
    ...comments[8],
    ...users[1],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "Henry couldn't decide if he was an auto mechanic or a priest.",
      i009_parent_comment_id: comments[8].i007_comment_id,
    },
  },
  {
    ...comments[22],
    ...users[1],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "He picked up trash in his spare time to dump in his neighbor's yard.",
      i009_parent_comment_id: comments[22].i007_comment_id,
    },
  },
  {
    ...comments[12],
    ...users[2],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment: "I often see the time 11:11 or 12:34 on clocks.",
      i009_parent_comment_id: comments[12].i007_comment_id,
    },
  },
  {
    ...comments[15],
    ...users[2],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment: "The book is in front of the table.",
      i009_parent_comment_id: comments[15].i007_comment_id,
    },
  },
  {
    ...comments[2],
    ...users[2],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "He knew it was going to be a bad day when he saw mountain lions roaming the streets.",
      i009_parent_comment_id: comments[2].i007_comment_id,
    },
  },
  {
    ...comments[18],
    ...users[2],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment: "The shooter says goodbye to his love.",
      i009_parent_comment_id: comments[18].i007_comment_id,
    },
  },
  {
    ...comments[4],
    ...users[2],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "The beauty of the sunset was obscured by the industrial cranes.",
      i009_parent_comment_id: comments[4].i007_comment_id,
    },
  },
  {
    ...comments[23],
    ...users[2],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment: "The external scars tell only part of the story.",
      i009_parent_comment_id: comments[23].i007_comment_id,
    },
  },
  {
    ...comments[8],
    ...users[2],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment: "I trust everything that's written in purple ink.",
      i009_parent_comment_id: comments[8].i007_comment_id,
    },
  },
  {
    ...comments[13],
    ...users[2],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment: "He spiked his hair green to support his iguana.",
      i009_parent_comment_id: comments[13].i007_comment_id,
    },
  },
  {
    ...comments[17],
    ...users[3],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "She found it strange that people use their cellphones to actually talk to one another.",
      i009_parent_comment_id: comments[17].i007_comment_id,
    },
  },
  {
    ...comments[5],
    ...users[3],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment: "The door slammed on the watermelon.",
      i009_parent_comment_id: comments[5].i007_comment_id,
    },
  },
  {
    ...comments[10],
    ...users[3],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "The snow-covered path was no help in finding his way out of the back-country.",
      i009_parent_comment_id: comments[10].i007_comment_id,
    },
  },
  {
    ...comments[21],
    ...users[3],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "The rusty nail stood erect, angled at a 45-degree angle, just waiting for the perfect barefoot to come along.",
      i009_parent_comment_id: comments[21].i007_comment_id,
    },
  },
  {
    ...comments[7],
    ...users[3],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment: "Warm beer on a cold day isn't my idea of fun.",
      i009_parent_comment_id: comments[7].i007_comment_id,
    },
  },
  {
    ...comments[20],
    ...users[3],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "Despite what your teacher may have told you, there is a wrong way to wield a lasso.",
      i009_parent_comment_id: comments[20].i007_comment_id,
    },
  },
  {
    ...comments[11],
    ...users[3],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "He was the type of guy who liked Christmas lights on his house in the middle of July.",
      i009_parent_comment_id: comments[11].i007_comment_id,
    },
  },
  {
    ...comments[24],
    ...users[3],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment: "It was getting dark, and we weren’t there yet.",
      i009_parent_comment_id: comments[24].i007_comment_id,
    },
  },
  {
    ...comments[3],
    ...users[0],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "He barked orders at his daughters but they just stared back with amusement.",
      i009_parent_comment_id: comments[3].i007_comment_id,
    },
  },
  {
    ...comments[0],
    ...users[0],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "If you like tuna and tomato sauce, try combining the two, it’s really not as bad as it sounds.",
      i009_parent_comment_id: comments[0].i007_comment_id,
    },
  },
  {
    ...comments[14],
    ...users[0],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment: "She always speaks to him in a loud voice.",
      i009_parent_comment_id: comments[14].i007_comment_id,
    },
  },
  {
    ...comments[12],
    ...users[0],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.",
      i009_parent_comment_id: comments[12].i007_comment_id,
    },
  },
  {
    ...comments[17],
    ...users[1],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "Karen believed all traffic laws should be obeyed by all except herself.",
      i009_parent_comment_id: comments[17].i007_comment_id,
    },
  },
  {
    ...comments[6],
    ...users[1],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "Standing on one's head at job interviews forms a lasting impression.",
      i009_parent_comment_id: comments[6].i007_comment_id,
    },
  },
  {
    ...comments[24],
    ...users[1],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "Every manager should be able to recite at least ten nursery rhymes backward.",
      i009_parent_comment_id: comments[24].i007_comment_id,
    },
  },
  {
    ...comments[15],
    ...users[1],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "She was too busy always talking about what she wanted to do to actually do any of it.",
      i009_parent_comment_id: comments[15].i007_comment_id,
    },
  },
  {
    ...comments[23],
    ...users[2],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "I am happy to take your donation; any amount will be greatly appreciated.",
      i009_parent_comment_id: comments[23].i007_comment_id,
    },
  },
  {
    ...comments[7],
    ...users[2],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "He was surprised that his immense laziness was inspirational to others.",
      i009_parent_comment_id: comments[7].i007_comment_id,
    },
  },
  {
    ...comments[22],
    ...users[2],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "Martha came to the conclusion that shake weights are a great gift for any occasion.",
      i009_parent_comment_id: comments[22].i007_comment_id,
    },
  },
  {
    ...comments[18],
    ...users[2],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment: "The best key lime pie is still up for debate.",
      i009_parent_comment_id: comments[18].i007_comment_id,
    },
  },
  {
    ...comments[3],
    ...users[3],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "If you spin around three times, you'll start to feel melancholy.",
      i009_parent_comment_id: comments[3].i007_comment_id,
    },
  },
  {
    ...comments[19],
    ...users[3],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "People generally approve of dogs eating cat food but not cats eating dog food.",
      i009_parent_comment_id: comments[19].i007_comment_id,
    },
  },
  {
    ...comments[11],
    ...users[3],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "He wondered if she would appreciate his toenail collection.",
      i009_parent_comment_id: comments[11].i007_comment_id,
    },
  },
  {
    ...comments[14],
    ...users[3],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "While all her friends were positive that Mary had a sixth sense, she knew she actually had a seventh sense.",
      i009_parent_comment_id: comments[14].i007_comment_id,
    },
  },
  {
    ...comments[6],
    ...users[1],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment: "I checked to make sure that he was still alive.",
      i009_parent_comment_id: comments[6].i007_comment_id,
    },
  },
  {
    ...comments[2],
    ...users[2],
    ...{
      i007_comment_id: uuidV4(),
      i008_comment:
        "Kevin embraced his ability to be at the wrong place at the wrong time.",
      i009_parent_comment_id: comments[2].i007_comment_id,
    },
  },
];

export const replyCommentsReactions = new Array(
  replyComments.length * users.length * reactions.length
)
  .fill(undefined)
  .map((_, i) => ({
    ...replyComments[i % replyComments.length],
    ...users[i % users.length],
    ...reactions[i % reactions.length],
  }));
