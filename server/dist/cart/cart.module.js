"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartModule = void 0;
const common_1 = require("@nestjs/common");
const cart_service_1 = require("./cart.service");
const cart_controller_1 = require("./cart.controller");
const sequelize_1 = require("@nestjs/sequelize");
const product_model_1 = require("../product/product.model");
const users_model_1 = require("../users/users.model");
const cart_model_1 = require("./cart.model");
const roles_module_1 = require("../roles/roles.module");
const auth_module_1 = require("../auth/auth.module");
const product_module_1 = require("../product/product.module");
let CartModule = class CartModule {
};
CartModule = __decorate([
    (0, common_1.Module)({
        providers: [cart_service_1.CartService],
        controllers: [cart_controller_1.CartController],
        imports: [
            sequelize_1.SequelizeModule.forFeature([users_model_1.User, product_model_1.Product, cart_model_1.CartItem]),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
            (0, common_1.forwardRef)(() => product_module_1.ProductModule),
            roles_module_1.RolesModule
        ],
    })
], CartModule);
exports.CartModule = CartModule;
//# sourceMappingURL=cart.module.js.map