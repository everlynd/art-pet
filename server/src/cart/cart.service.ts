import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { ProductService } from 'src/product/product.service';
import { User } from 'src/users/users.model';
import { CartItem } from './cart.model';

@Injectable()
export class CartService {

	constructor(@InjectModel(CartItem) private cartRepository: typeof CartItem,
		private jwtService: JwtService,
		private productService: ProductService
	) { }

	async addToCart(dto: any, headers: any) {
		// const bearer = headers.authorization.split(' ')[0];
		const token = headers.authorization.split(' ')[1];
		if (!token) {
			throw new UnauthorizedException({ message: 'Пользователь не авторизован' })
		}
		const user = this.jwtService.decode(token) as User;
		const items = await this.cartRepository.create({ ...dto, userId: user.id })
		const product = await this.productService.getProduct(items.productId)
		return { product: product, quantity: items.quantity };
	}

	async getCartItems() {
		const items = await this.cartRepository.findAll()
		const product = Promise.all(items.map(async (elem) => {
			const product = await this.productService.getProduct(elem.productId)
			return { product: product, quantity: elem.quantity };
		}))
		return product;
	}
}
