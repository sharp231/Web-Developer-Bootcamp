const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log('リクエストを受け付けました');
//     // res.send('リクエストを受けたので、レスポンスを返します');
//     // res.send({color: 'red'});
//     res.send('<h1>Hello World!</h1>');
// });
app.get('/cats', (req, res) => {
    res.send('にゃー');
});

app.post('/cats', (req, res) => {
    res.send('/catsにPOSTされたデータ');
});
app.get('/dogs', (req, res) => {
    res.send('ワン');
});

app.get('/', (req, res) => {
    res.send('HPへようこそ!!!');
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = (req.params);
    res.send(`<h1>${subreddit} subredditのページです</h1>`);
});

app.get('/r/:subreddit/:postId', (req, res) => {
    console.log(req.params);
    const { subreddit, postId } = (req.params);
    res.send(`<h1>${subreddit} subreddit Post ID: ${postId}のページです</h1>`);
});

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('検索ワードが入力されていません');
    } else {
        res.send(`<h1> 「${q}」検索結果:</h1> `);
    }
});

app.get('*', (req, res) => {
    res.send('そんなページはありません');
});

app.listen(8080, () => {
    console.log('リクエスト8080で待機中');
});