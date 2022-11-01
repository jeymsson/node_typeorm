import { createConnection } from "typeorm";

createConnection()
	.then((el) => {
		console.log('Banco conectado'+(new Date().toLocaleString()));
	})
	.catch((er) => {
		console.log({'Erro': er});
		throw new Error('Erro de conexão ao banco.');

	})
;

