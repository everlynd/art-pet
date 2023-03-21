import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoriesModule } from 'src/categories/categories.module';
import { FilesModule } from 'src/files/files.module';
import { ProductController } from './product.controller';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [
    SequelizeModule.forFeature([Product]),
    forwardRef(() => CategoriesModule),
    FilesModule,
  ],
  exports: [ProductService]
})
export class ProductModule { }
