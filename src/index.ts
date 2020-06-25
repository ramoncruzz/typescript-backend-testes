import express from 'express';
import cors from 'cors';
import route from './routes';

const app = express();

const getUserName =() =>{
    return 3;
}
app.use(cors());
app.use(route);


app.listen(3333);