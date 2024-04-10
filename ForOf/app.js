// const subreddits = [
//   "programming",
//   "web_design",
//   "webdev",
//   "javascript",
//   "node",
//   "coding",
//   "learnprogramming",
//   "programminghumor",
//   "learnjavascript",
// ];

// for (let i = 0; i < subreddits.length; i++) {
//   console.log(`Visit reddit.com/r/${subreddits[i]}`);
// }
// for (let subreddit of subreddits) {
//   console.log(`Visit reddit.com/r/${subreddit}`);
// }

// const seatingChart = [
//   ["伊藤", "橋本", "山崎"],
//   ["田中", "高木", "山田", "倉田"],
//   ["Stevie", "John", "沿道"],
// ];

// for (let i = 0; i < seatingChart.length; i++) {
//   const row = seatingChart[i];
//   console.log(`${i + 1}行目`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }
// for (let row of seatingChart) {
//   for (let student of row) {
//     console.log(student);
//   }
// }

// for(let char of 'hello world') {
//   console.log(char);
// }

const testScores = {
  ken: 80,
  yuki: 89,
  taro: 77,
  yudai: 78,
  yuma: 90,
  yuko: 87,
  koki: 91,
  ryota: 76,
  saeko: 67,
};

for (let student of Object.keys(testScores)) {
  console.log(`${student}さんは${testScores[student]}`);
}

// for (let student in testScores) {
//   console.log(`${student}さんは${testScores[student]}`);
// }
