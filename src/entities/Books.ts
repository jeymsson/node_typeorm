import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Categorias } from './Categories';

@Entity('livros')
export class Livros {

	@PrimaryColumn('id')
	id: string;
	@Column('name')
	name: string;
	@Column('description')
	description: string;
	@CreateDateColumn('created_at')
	created_at: Date;

	@ManyToOne(() => Categorias)
	@Column('categorias_id')
	categorias_id: Categorias;

	@Column()
	categorias_texto: string;

	constructor() {
		if(!this.id) {
			this.id = uuid();
		}
	}
}
