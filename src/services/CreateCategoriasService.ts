import { getRepository } from 'typeorm'
import { Categorias } from '../entities/Categories';

type CategoriasRequest = {
	name: string,
	description: string
};

export class CreateCategoriasService {

	async execute( {name, description}: CategoriasRequest ) : Promise<Categorias | Error> {
		const repo = getRepository(Categorias);

		const checar = await repo.findOne({name});

		if(	checar ){
			return new Error('Categoria existe.');
		}
		const cate = repo.create({
			name,
			description
		});
		await repo.save(cate);
		return cate;
	}

}
