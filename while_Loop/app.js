// let count = 0;
// while (count < 10) {
//   console.log(count);
//   count++;
// }

// while(!gameOver){
//     console.log("ゲーム続行中");
// }

// const SECRET = 'supersecret';
// let guess = prompt('あなたの答えを入力してください');

// while (guess!== SECRET) {
//   guess = prompt('もう一度入力してください');
// }
// console.log('正解です');

// let input = prompt("何かを入力してください");

// while (true) {
//   input = prompt(input);
//   if (input === "quit") break;
// }

// for (let i = 0; i < 1000; i++) {
//   console.log(i);
//   if(i === 100) break;
// }

let maximum = parseInt(prompt('数字に入力してください'));
while (!maximum) {
  maximum = parseInt(prompt('エラーが起きました。数字に入力してください'));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt('数字を決めたから当てて！');
let count = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === 'q') break;
  count++;
  if (guess > targetNum) {
    guess = prompt('その数字より小さいです。もう一度当ててみて');
  } else {
    guess = prompt('その数字より大きいです。もう一度当ててみて');
  }
}

if (guess === 'q') {
  console.log('ゲームを終了します');
} else {
  console.log(`Congratulations ${count}回`);
}