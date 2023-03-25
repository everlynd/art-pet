"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const files_service_1 = require("../files/files.service");
const helpers_1 = require("../helpers/helpers");
const product_service_1 = require("../product/product.service");
const categories_model_1 = require("./categories.model");
let CategoriesService = class CategoriesService {
    constructor(categoryRepository, productService, fileService) {
        this.categoryRepository = categoryRepository;
        this.productService = productService;
        this.fileService = fileService;
    }
    async getAllCategories() {
        const allCategories = await this.categoryRepository.findAll();
        return (0, helpers_1.appendChildrens)(allCategories, []);
    }
    async addCategory(dto, images) {
        const candidate = await this.categoryRepository.findOne({ where: { title: dto.title } });
        if (candidate) {
            throw new common_1.HttpException('Category with same title already exist', common_1.HttpStatus.BAD_REQUEST);
        }
        const category = await this.categoryRepository.create(dto);
        if (images.length) {
            const fileName = await this.fileService.createFile(images);
            category.icon = fileName;
        }
        category.url = (0, helpers_1.generateUrl)(category.title);
        category.children = [];
        category.isActive = true;
        category.itemsCount = 0;
        await category.save();
        if (dto.rootCategory) {
            category.parentId = +dto.rootCategory;
            await category.save();
        }
        return category;
    }
    async changeIsActive(categoryID) {
        const category = await this.categoryRepository.findByPk(categoryID);
        category.isActive = !category.isActive;
        await category.save();
        return category;
    }
    async getAllActiveCategories() {
        const categories = await this.categoryRepository.findAll({ where: { isActive: true } });
        const limits = { limit: 1000, page: 0 };
        const products = await this.productService.getProducts(limits);
        return (0, helpers_1.appendChildrens)(categories, products.allProducts);
    }
    async editCategory(newCategory, images) {
        const updatedCategory = Object.assign({}, newCategory);
        if (images.length) {
            const fileName = await this.fileService.createFile(images);
            updatedCategory.icon = fileName;
        }
        const category = await this.categoryRepository.update(Object.assign({}, updatedCategory), { where: { id: newCategory.id } });
        return category;
    }
    async getCategory(id) {
        const category = await this.categoryRepository.findByPk(id);
        return category;
    }
    async findByUrl(url) {
        const category = await this.categoryRepository.findOne({ where: { url: url } });
        return category;
    }
};
CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(categories_model_1.Category)),
    __metadata("design:paramtypes", [Object, product_service_1.ProductService,
        files_service_1.FilesService])
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map