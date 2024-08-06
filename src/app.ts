import express, { Express, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import auth from './router/auth';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

app.use('/api', auth);

app.get('/', (request: Request, response: Response) => {
	response.send('Express + TypeScript Server');
});

app.listen(port, () => {
	console.log(`server listening on http://localhost:${port}`);
});
