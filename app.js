import express from 'express';
import cors from 'cors';
 
const app = express();

// const port = 3001;

app.use(cors());

app.get('/', (req, res) => {
  res.send({ message: 'Hello World!' });
});

app.get('/newendpoint', (req, res) => {
  res.send('This is my new endpoint');
})
 
app.listen(process.env.PORT || 3001, () =>
  console.log(`Example app listening at http://localhost:3001`),
);