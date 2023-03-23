import { forwardRef, Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from 'src/product/product.model';
import { User } from 'src/users/users.model';
import { CartItem } from './cart.model';
import { RolesModule } from 'src/roles/roles.module';
import { AuthModule } from 'src/auth/auth.module';
import { ProductModule } from 'src/product/product.module';

@Module({
  providers: [CartService],
  controllers: [CartController],
  imports: [
    SequelizeModule.forFeature([User, Product, CartItem]),
    forwardRef(() => AuthModule),
    forwardRef(() => ProductModule),
    RolesModule
  ],
})
export class CartModule {}
