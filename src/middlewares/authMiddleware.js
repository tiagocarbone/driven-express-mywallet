import db from "../db/db.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { ObjectId } from "mongodb";

dotenv.config();


export async function validarToken(req, res, next){
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer", "").trim();
    if(!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, async (error, decoded) => {
        if(error) res.sendStatus(401);

        const user = await db.collection("users").findOne({
            _id: new ObjectId(decoded.userId)
        });

        if(!user) return res.sendStatus(401);

        return next();
    })


    next();
}


export default validarToken;