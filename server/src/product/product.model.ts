import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface ProductCreationAttributes {
	title: string,
	quantity: string,
	price: string,
	SKU: string,
	description: string,
	characteristics: CharacteristicValues[],
	tags: string[],
	images: any,
	categoryId: number;
}

interface CharacteristicValues {
	[key: string]: string;
}


@Table({ tableName: 'products' })
export class Product extends Model<Product, ProductCreationAttributes> {

	@Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
	id: number;

	@Column({ type: DataType.STRING, allowNull: false })
	title: string;

	@Column({ type: DataType.STRING, allowNull: false })
	SKU: string;

	@Column({ type: DataType.STRING, allowNull: false })
	price: string;

	@Column({ type: DataType.STRING })
	quantity: string;

	@Column({ type: DataType.TEXT })
	description: string;

	@Column({ type: DataType.JSON })
	tags: string[];

	@Column({ type: DataType.JSON })
	images: any

	@Column({ type: DataType.JSON })
	characteristics: CharacteristicValues[];

	@Column({ type: DataType.INTEGER })
	categoryId: number;

	@Column({ type: DataType.INTEGER })
	rating: number;

	@Column({ type: DataType.INTEGER })
	discount: number;

	@Column({ type: DataType.INTEGER })
	discount_price: string;
}