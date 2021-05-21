import express from 'express';
import cors from 'cors';

import noteRoutes from './routes/notesRoutes.js';

const app = express();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/notes', noteRoutes);

app.get('/', (req, res) => {
  res.send({ message: 'Server connected WHOOOOOO' });
  console.log('in app.get');
});

app.listen(process.env.PORT || 3001, () =>
  console.log(`Example app listening at http://localhost:${port}`),
);