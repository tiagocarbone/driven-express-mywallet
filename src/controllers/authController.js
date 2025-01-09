import bcrypt from 'bcrypt';
import db from '../db/db.js';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config();



export async function signUp(req, res) {
    const user = req.body;
    try{
    const usuarioCadastrado = await db.collection('users').findOne({email : user.email});
    if(usuarioCadastrado) return res.send(409)

    const passwordHash = bcrypt.hashSync(user.password, 10);
    await db.collection('users').insertOne({ ...user, password: passwordHash });

    res.sendStatus(201);
    }catch(error){
        console.log(error.message)
    }
}

export async function signIn(req, res) {
    const usuario = req.body;
    try{

    
    const usuarioCadastrado = await db.collection('users').findOne({ email: usuario.email });
    if (!usuarioCadastrado) return res.sendStatus(404);

    if (bcrypt.compareSync(usuario.password, usuarioCadastrado.password)) {
        const token = jwt.sign(
            { userId: usuarioCadastrado._id }, 
            process.env.JWT_SECRET,
            { expiresIn: 86400 }
        );

        return res.status(201).send(token);
    } else {
        res.sendStatus(401);
    }
    }catch(error){
        return res.status(500).send(error.message)
    }
}
