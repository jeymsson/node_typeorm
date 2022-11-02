import 'reflect-metadata';

import express from 'express';
import './database/index';
import { routes as categoria_rota } from './routes/Categories';

const app = express();

app.use(express.json());
app.use(categoria_rota);

const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello world.');
})

app.listen(port, console.log('Servidor iniciado. '+(new Date().toLocaleString())));