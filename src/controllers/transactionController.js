import db from '../db/db.js';
import dotenv from 'dotenv';
dotenv.config();


export async function getTransaction(req, res){

    let pagina = req.query.page;
    if(!pagina) pagina = 1
    if (pagina <= 0) return res.sendStatus(400);
    
    const limite = 2;
    const inicio = (pagina - 1) * limite;

    const transactions = await db.collection("transactions")
    .find()
    .sort({_id: -1})
    .skip(inicio)
    .limit(limite)
    .toArray();
    
    res.send(transactions)
}

export async function postTransaction(req, res){
    const newTransaction = req.body;

    await db.collection("transactions").insertOne({
        ...newTransaction,
        user:res.locals.user.email
    });

    res.sendStatus(201)

}

export async function putTransaction(req, res){
    const newTransatcion = req.body
}