import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface CategoryCreationAttributes {
	title: string;
}

@Table({ tableName: 'categories', createdAt: false, updatedAt: false })
export class Category extends Model<Category, CategoryCreationAttributes> {

	@Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
	id: number;

	@Column({ type: DataType.STRING, allowNull: false })
	title: string;

	@Column({ type: DataType.TEXT })
	description: string;

	@Column({ type: DataType.STRING })
	icon: string;

	@Column({ type: DataType.JSON })
	children: any[]

	@Column({ type: DataType.INTEGER })
	parentId: number

	@Column({ type: DataType.INTEGER })
	itemsCount: number

	@Column({ type: DataType.STRING })
	url: string

	@Column({ type: DataType.BOOLEAN })
	isActive: boolean
}