import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { CartService } from './cart.service';
import { Headers } from '@nestjs/common';

@Controller('cart')
export class CartController {

	constructor(private cartService: CartService) {}

	@Post('/add')
	addToCart(@Body() dto: any, @Headers() headers: any) {
		return this.cartService.addToCart(dto, headers);
	}

	@UseGuards(JwtAuthGuard)
	@Get('/get-cart-items')
	getCartItems() {
		return this.cartService.getCartItems();
	}
}
