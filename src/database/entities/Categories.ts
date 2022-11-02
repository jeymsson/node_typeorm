import { Entity, Column, CreateDateColumn, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('categorias')
export class Categorias {

	@PrimaryColumn('id')
	id: string;
	@Column('name')
	name: string;
	@Column('description')
	description: string;
	@CreateDateColumn('created_at')
	created_at: Date;

	constructor() {
		if(!this.id) {
			this.id = uuid();
		}
	}
}
