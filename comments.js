// create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const comments = [];
let commentId = 1;

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const newComment = req.body;
  newComment.id = commentId;
  commentId++;
  comments.push(newComment);
  res.json(newComment);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});