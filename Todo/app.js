//while quitで終わり prompt追加new 配列 リスト index  splice機能ができればプログラムとしてOK
// const todo = {
//     ['new']
//     ['list']
//     ['delete']
//     ['quit']
// };

// let input = prompt("コマンドを入力してください(new,list,delete,quit)");

// while (true) {
//   input = prompt(input);
//   if (input === "new") break;
// }

// while (true) {
//   input = prompt(input);
//   if (input === "delete") break;
// }
// while (guess !== input) {
//   guess = prompt("もう一度入力してください");
// }

// while (true) {
//   input = prompt(input);
//   if (input === "quit") console.log("終了します");
//   break;
// }

const todos = ['水', '光'];

let command = prompt('コマンドを入力してください(new, list, delete, quit)');
while (command !== 'quit' && command !== 'q') {
  if (command === 'new') {
    let newTodo = prompt('新しいToDoを入力してください');
    todos.push(newTodo);
    console.log(`${newTodo}が追加されました`);
  } else if (command === 'list') {
    console.log('**********');
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log('**********');
  } else if (command === 'delete') {
    let i = prompt('削除するToDoの番号を入力してください');
    let deletedTodo = todos.splice(i - 1, 1);
    console.log(`${deletedTodo[0]}が削除されました`);
  } else {
    input = prompt('コマンドが間違っています(new, list, delete, quit)');
  }
  command = prompt('コマンドを入力してください(new, list, delete, quit)');
}

console.log('アプリを終了します');

// const todos = ['quit水やりをする', '掃除をする'];

// let input = prompt('コマンドを入力してください(new, list, delete, quit)');
// while (input !== 'quit' && input !== 'q') {
//   if (input === 'list') {
//     console.log('**********');
//     for (let i = 0; i < todos.length; i++) {
//       console.log(`${i}: ${todos[i]}`);
//     }
//     console.log('**********');
//   } else if (input === 'new') {
//     const newTodo = prompt('新しいToDoを入力してください');
//     todos.push(newTodo);
//     console.log(`${newTodo}が追加されました`);
//   } else if (input === 'delete') {
//     const index = parseInt(prompt('削除するToDoの番号を入力してください'));
//     if (!Number.isNaN(index)) {
//       const deleted = todos.splice(index, 1);
//       console.log(`${deleted[0]}が削除されました`);
//     } else {
//       console.log('有効なインデックスを入力してください');
//     }
//   }
//   input = prompt('もう一度入力してください(new, list, delete, quit)');
// }
// console.log('終了します');
