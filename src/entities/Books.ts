import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Categorias } from './Categories';

@Entity('livros')
export class Livros {

	@PrimaryColumn()
	id: string;
	@Column()
	name: string;
	@Column()
	description: string;
	@CreateDateColumn()
	created_at: Date;

	@ManyToOne(() => Categorias)
	@JoinColumn({name: 'categorias_id'})
	categorias_id: Categorias;

	@Column()
	categorias_texto: string;

	constructor() {
		if(!this.id) {
			this.id = uuid();
		}
	}
}
