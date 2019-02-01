import express from 'express';

const app = express();

// API example '/hello'
app.get('/hello', (req, res) =>  {
    res.send('Hello World!!');
});

// listen port 3000
app.listen(3000, () => {
    console.log("Listening on port 3000!!!");
});