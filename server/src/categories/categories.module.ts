import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilesModule } from 'src/files/files.module';
import { ProductModule } from 'src/product/product.module';
import { CategoriesController } from './categories.controller';
import { Category } from './categories.model';
import { CategoriesService } from './categories.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [
    SequelizeModule.forFeature([Category]),
    forwardRef(() => ProductModule),
    FilesModule
  ],
  exports: [CategoriesService]
})
export class CategoriesModule { }
