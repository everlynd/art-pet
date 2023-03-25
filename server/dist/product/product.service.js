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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const categories_service_1 = require("../categories/categories.service");
const files_service_1 = require("../files/files.service");
const product_model_1 = require("./product.model");
const sequelize_2 = require("sequelize");
const sequelize_3 = require("sequelize");
let ProductService = class ProductService {
    constructor(productRepository, fileService, categoryService) {
        this.productRepository = productRepository;
        this.fileService = fileService;
        this.categoryService = categoryService;
    }
    async getProducts(limits) {
        const totalProducts = await this.productRepository.findAll({ include: { all: true } });
        const allProducts = await this.productRepository.findAll({ include: { all: true }, limit: +limits.limit, offset: +limits.page * +limits.limit });
        return { allProducts, total: Math.ceil(totalProducts.length / limits.limit) };
    }
    async createProduct(dto, images) {
        if (dto.rating === 'null') {
            dto.rating = null;
        }
        if (dto.discount === '') {
            dto.discount = null;
        }
        else {
            dto.discount_price = String((+dto.price * (100 - +dto.discount)) / 100);
        }
        if (dto.discount_price === 'null') {
            dto.discount_price = null;
        }
        const fileNames = await Promise.all(images.images.map(async (img) => {
            return await this.fileService.createFile(img);
        }));
        const product = await this.productRepository.create(Object.assign(Object.assign({}, dto), { images: fileNames }));
        return product;
    }
    async getProduct(id) {
        const product = await this.productRepository.findByPk(id);
        return product;
    }
    async updateProduct(dto) {
        if (dto.rating === 'null') {
            dto.rating = null;
        }
        if (dto.discount === '') {
            dto.discount = null;
        }
        else {
            dto.discount_price = String((+dto.price * (100 - +dto.discount)) / 100);
        }
        if (dto.discount_price === 'null') {
            dto.discount_price = null;
        }
        const product = await this.productRepository.update(Object.assign({}, dto), { where: { id: dto.id } });
        return product;
    }
    async getProductsByCategory(id, filters) {
        const from = (filters === null || filters === void 0 ? void 0 : filters.from) || '0';
        const to = (filters === null || filters === void 0 ? void 0 : filters.to) || '99999999';
        const category = await this.categoryService.findByUrl(id);
        if (!category) {
            const products = await this.productRepository.findAll({ where: [sequelize_3.default.where(sequelize_3.default.cast(sequelize_3.default.col(`price`), 'SIGNED'), { [sequelize_2.Op.gte]: +from, [sequelize_2.Op.lte]: +to })], });
            return { products: products, filters: {} };
        }
        const categoryId = category.id || '';
        const products = await this.productRepository.findAll({ where: [sequelize_3.default.where(sequelize_3.default.cast(sequelize_3.default.col(`price`), 'SIGNED'), { [sequelize_2.Op.gte]: +from, [sequelize_2.Op.lte]: +to }), { categoryId: categoryId }], });
        return { products: products, filters: {} };
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(product_model_1.Product)),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => categories_service_1.CategoriesService))),
    __metadata("design:paramtypes", [Object, files_service_1.FilesService,
        categories_service_1.CategoriesService])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map