import { Router } from 'express';
import { CategoriasController } from '../cotrollers/CategoriasController';

const routes = Router();

routes.post('/categorias', new CategoriasController().handle);

export {routes};
