import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());

app.use(compression());
app.disable('x-powered-by');
app.use(morgan("tiny"));

// * Add Routes here

app.use('*', (req, res) => {
  res.status(404).json({ message: 'There is nothing to see here' });
})



export default app;
