import express from 'express';
import dotenv from 'dotenv'
import router from './routes/index.js';


dotenv.config();

const app = express();
app.use(express.json());
app.use(router)

app.listen(process.env.PORT || 5550, () => {
    console.log("rodando")
})

