import 'reflect-metadata';

import express from 'express';
import './database/index';

const app = express();

const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello world.');
})

app.listen(port, console.log('Servidor iniciado. '+(new Date().toLocaleString())));