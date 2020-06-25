import { Router } from 'express';
import controller from './controllers/UserController';
const route = Router();
route.get('/',(_,res)=>{
    return res.send('Rodando 6');
});

route.get('/users',controller.index);
route.post('/users',controller.create);


export default route;
