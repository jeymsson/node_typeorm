import { Request, Response } from "express";
import { CreateCategoriasService } from '../services/CreateCategoriasService';

export class CategoriasController {

	async handdle( request: Request, response: Response ) : Promise<Categorias | Error> {
		const { name, description } = request.body;

		const service = new CreateCategoriasService();
		const result = await service.execute({name, description});
		if(	result instanceof Error ){
			return response.status(400).json(result.message);
		}
		return response.json(result);
	}

}
