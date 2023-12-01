// Create web server...
const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
// Create app
const app = express();
// Add middlewares
app.use(bodyParser.json());
app.use(cors());
// Create comments store
const commentsByPostId = {};
// Add routes
app.get('/posts/:id/comments', (req, res) => {
    // Get comments by post id
    const { id } = req.params;
    const comments = commentsByPostId[id] || [];
    // Send comments
    res.send(comments);
});
app.post('/posts/:id/comments', (req, res) => {
    // Create comment
    const { id } = req.params;
    const { content } = req.body;
    const commentId = randomBytes(4).toString('hex');
    const comments = commentsByPostId[id] || [];
    comments.push({ id: commentId, content });
    // Save comment
    commentsByPostId[id] = comments;
    // Send comment
    res.status(201).send(comments);
});
// Listen on port 4001
app.listen(4001, () => {
    console.log('Listening on 4001');
});
