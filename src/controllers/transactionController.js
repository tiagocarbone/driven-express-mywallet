import { ObjectId } from 'mongodb';
import db from '../db/db.js';
import dayjs from 'dayjs';
import dotenv from 'dotenv';
dotenv.config();

export async function getTransaction(req, res) {
    try {
        let pagina = req.query.page;
        if (!pagina) pagina = 1;
        if (pagina <= 0) return res.sendStatus(400);

        const limite = 10;
        const inicio = (pagina - 1) * limite;
        console.log(res.locals.user._id);

        const transactions = await db.collection("transactions")
            .find({ userId: res.locals.user._id })
            .sort({ _id: -1 })
            .skip(inicio)
            .limit(limite)
            .toArray();

        res.send(transactions);
    } catch (error) {
        console.log(error.message)
        res.status(500);
    }
}

export async function postTransaction(req, res) {
    try {
        const newTransaction = req.body;

        const dataAtual = dayjs().format('DD/MM/YYYY');
        newTransaction.date = dataAtual;

        await db.collection("transactions").insertOne({
            ...newTransaction,
            userId: res.locals.user._id,
        });

        console.log(res.locals.user._id);
        res.sendStatus(201);
    } catch (error) {
        console.log(error.message)
        res.status(500)
    }
}

export async function putTransaction(req, res) {
    try {
        const newTransaction = req.body;
        const id = req.params.id;
        const userId = res.locals.user._id;

        const transaction = await db.collection("transactions").findOne({
            _id: new ObjectId(id),
            userId: new ObjectId(userId),
        });

        if (!transaction) {
            return res.status(401)
        }

        // Atualiza a transação caso a verificação passe
        await db.collection("transactions").updateOne(
            { _id: new ObjectId(id) },
            { $set: newTransaction }
        );

        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}


export async function deleteTransaction(req, res) {
    try {
        const idTransaction = req.params.id;
        const userId = res.locals.user._id;

        const transaction = await db.collection("transactions").findOne({
            _id: new ObjectId(idTransaction),
            userId: new ObjectId(userId),
        });

        if (!transaction) {
            return res.status(401)
        }

        const deletedTransaction = await db.collection("transactions").deleteOne({
            _id: new ObjectId(idTransaction),
        });

        res.sendStatus(200);
    } catch (error) {
        console.log(error.message)
        res.status(500)
    }
}
