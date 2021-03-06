import express, { Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import expense from './routes/expense';
import category from './routes/category';
import user from './routes/user';
import product from './routes/product';
import report from './routes/report';
import dotenv from 'dotenv'

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(cors());
app.use('/expense', expense);
app.use('/category', category);
app.use('/report', report);
app.use('/user', user);
app.use('/product', product);

app.get('/', (_, res: Response) => {
  res.send('200');
});
app.all('*', (_, res) => {
  res.status(400).json({ message: 'Not found' });
});
console.log(process.env.CONNECTION_URL);
mongoose.connect(process.env.CONNECTION_URL!).then(() =>
  app.listen(process.env.PORT || 3001, () => console.log(`Server running`))).catch((error) => console.log(error));
