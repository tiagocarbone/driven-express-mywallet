import db from '../db/db.js';
import dotenv from 'dotenv';
dotenv.config();


export async function getTransaction(req, res){
    const transactions = await db.collection("transactions").find().toArray();
    res.send(transactions.reverse())
}

export async function postTransaction(req, res){
    const newTransaction = req.body;

    await db.collection("transactions").insertOne(newTransaction);

    res.sendStatus(201)

}

export async function putTransaction(req, res){
    res.send("put")
}