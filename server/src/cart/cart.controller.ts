import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { CartService } from './cart.service';
import { Headers } from '@nestjs/common';

@Controller('cart')
export class CartController {

	constructor(private cartService: CartService) {}

	@UseGuards(JwtAuthGuard)
	@Post('/add')
	addToCart(@Body() dto: any, @Headers() headers: any) {
		return this.cartService.addToCart(dto, headers);
	}

	@UseGuards(JwtAuthGuard)
	@Get('/get-cart-items')
	getCartItems(@Headers() headers: any) {
		return this.cartService.getCartItems(headers);
	}
	@UseGuards(JwtAuthGuard)
	@Post('/remove')
	removeFromCart(@Body() {id}, @Headers() headers: any){
		return this.cartService.removeFromCart(id, headers)
	}
}
