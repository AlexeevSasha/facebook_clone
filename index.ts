import 'dotenv/config';
import express from 'express';
import {json} from "body-parser";
import cors from 'cors';
import {db} from './database/database'
import userRouter from './routes/userRouter';

const app = express();
const PORT = process.env.PORT || 8000;

db.authenticate().then(() => {
  console.log('Database connected...');
}).catch(err => {
  console.log('Error: ' + err);
})

app.use(cors());
app.use(json());

app.use('/api/auth', userRouter);

db.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
  });
}).catch(err => console.log("Error: " + err));
