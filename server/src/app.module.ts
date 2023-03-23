import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/users.model';
import { UsersModule } from './users/users.module';
// import { RolesService } from './roles/roles.service';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/roles.model';
import { UserRoles } from './roles/user-roles.model';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { Post } from './posts/posts.model';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ProductModule } from './product/product.module';
import { CategoriesModule } from './categories/categories.module';
import { CartModule } from './cart/cart.module';
import * as path from 'path'
import { CartItem } from './cart/cart.model';
import { Product } from './product/product.model';
import { Category } from './categories/categories.model';

@Module({
	controllers: [],
	providers: [],
	imports: [
		ConfigModule.forRoot({
			envFilePath: `.${process.env.NODE_ENV}.env`
		}),
		SequelizeModule.forRoot({
			dialect: 'mysql',
			host: process.env.MYSQL_HOST,
			port: +process.env.MYSQL_PORT,
			username: process.env.MYSQL_USERNAME,
			password: process.env.MYSQL_PASSWORD,
			database: process.env.MYSQL_DB,
			models: [User, Role, UserRoles, Post, CartItem, Product, Category],
			autoLoadModels: true,
		}),
		ServeStaticModule.forRoot({
			rootPath: path.resolve(__dirname, 'static'),
		}),
		UsersModule,
		RolesModule,
		AuthModule,
		PostsModule,
		FilesModule,
		CategoriesModule,
		ProductModule,
		CartModule,
	],
})
export class AppModule { }