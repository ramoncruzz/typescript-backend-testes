import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    {
        name: 'Ramon Cruz',
        email: 'ramon@ramon.cruz.br'
    },
    {
        name: 'Priscila Santa Cruz',
        email: 'ramon@ramon.cruz.br'
    }
];

export default {
    async index( req: Request, res: Response){
        return res.json(users);
    },
    async create(req: Request, res: Response){
        const emailService = new EmailService();
        emailService.sendMail({
           to: { email: 'ramon@email.com', name: 'Ramon ' },
           message: { subject: 'ola' , body: 'mensagem' }
        });
        return res.send();
    }
}