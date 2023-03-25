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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const sequelize_1 = require("@nestjs/sequelize");
const product_service_1 = require("../product/product.service");
const cart_model_1 = require("./cart.model");
let CartService = class CartService {
    constructor(cartRepository, jwtService, productService) {
        this.cartRepository = cartRepository;
        this.jwtService = jwtService;
        this.productService = productService;
    }
    async addToCart(dto, headers) {
        const bearer = headers.authorization.split(' ')[0];
        const token = headers.authorization.split(' ')[1];
        if (!bearer && !token) {
            throw new common_1.UnauthorizedException({ message: 'Пользователь не авторизован' });
        }
        const user = this.jwtService.decode(token);
        const ifAlreadyExist = await this.cartRepository.findOne({ where: { productId: dto.productId, userId: user.id } });
        if (ifAlreadyExist) {
            const items = await this.cartRepository.increment({ quantity: dto.quantity }, { where: { productId: dto.productId, userId: user.id } });
            const product = await this.productService.getProduct(dto.productId);
            const item = await this.cartRepository.findOne({ where: { productId: dto.productId } });
            return { product: product, quantity: item.quantity };
        }
        const items = await this.cartRepository.create(Object.assign(Object.assign({}, dto), { userId: user.id }));
        const product = await this.productService.getProduct(items.productId);
        return { product: product, quantity: items.quantity };
    }
    async getCartItems(headers) {
        const bearer = headers.authorization.split(' ')[0];
        const token = headers.authorization.split(' ')[1];
        if (!bearer && !token) {
            throw new common_1.UnauthorizedException({ message: 'Пользователь не авторизован' });
        }
        const user = this.jwtService.decode(token);
        const items = await this.cartRepository.findAll({ where: { userId: user.id } });
        const product = Promise.all(items.map(async (elem) => {
            const product = await this.productService.getProduct(elem.productId);
            return { product: product, quantity: elem.quantity };
        }));
        return product;
    }
    async removeFromCart(id, headers) {
        const bearer = headers.authorization.split(' ')[0];
        const token = headers.authorization.split(' ')[1];
        if (!bearer && !token) {
            throw new common_1.UnauthorizedException({ message: 'Пользователь не авторизован' });
        }
        const user = this.jwtService.decode(token);
        const item = await this.cartRepository.destroy({ where: { productId: id, userId: user.id } });
        return true;
    }
};
CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(cart_model_1.CartItem)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService,
        product_service_1.ProductService])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map