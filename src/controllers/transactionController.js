import db from '../db/db.js';
import dotenv from 'dotenv';
dotenv.config();


export async function getTransaction(req, res){
    res.send("oi transaction")
}

export async function transaction(req, res){
    const newTransaction = req.body;

    await db.collection("transactions").insertOne(newTransaction);

    res.sendStatus(201)

}