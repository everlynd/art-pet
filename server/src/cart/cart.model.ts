import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Product } from 'src/product/product.model';
import { User } from 'src/users/users.model';

interface ItemCreatingAttribute {
	quantity: number;
}

@Table({ tableName: 'cart_items', createdAt: false, updatedAt: false })
export class CartItem extends Model<CartItem, ItemCreatingAttribute> {

	@Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
	id: number;

	@Column({ type: DataType.INTEGER, allowNull: false })
	quantity: number;

	@ForeignKey(() => Product)
	@Column({ type: DataType.INTEGER })
	productId: number;

	@ForeignKey(() => User)
	@Column({ type: DataType.INTEGER })
	userId: number;
}