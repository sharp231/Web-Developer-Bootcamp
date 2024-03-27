const password = prompt("パスワードを入力");

if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("素晴らしいパスワードです");
  } else {
    console.log("空白が含まれるパスワードです");
  }
} else {
  console.log("パスワードが短すぎる。6文字以上にしてください");
}
