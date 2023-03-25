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
exports.CategoriesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const categories_model_1 = require("./categories.model");
const categories_service_1 = require("./categories.service");
const create_category_dto_1 = require("./dto/create-category.dto");
let CategoriesController = class CategoriesController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    getAllCategories() {
        return this.categoryService.getAllCategories();
    }
    addCategory(dto, categoryBanner) {
        return this.categoryService.addCategory(dto, categoryBanner);
    }
    changeIsActive({ categoryId }) {
        return this.categoryService.changeIsActive(categoryId);
    }
    getAllActiveCategories() {
        return this.categoryService.getAllActiveCategories();
    }
    getCategory({ id }) {
        return this.categoryService.getCategory(id);
    }
    editCategory(newCategory, categoryBanner) {
        return this.categoryService.editCategory(newCategory, categoryBanner);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "getAllCategories", null);
__decorate([
    (0, common_1.Post)('/add'),
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_category_dto_1.CreateCategoryDto, Object]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "addCategory", null);
__decorate([
    (0, common_1.Post)('/changeIsActive'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "changeIsActive", null);
__decorate([
    (0, common_1.Get)('/active'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "getAllActiveCategories", null);
__decorate([
    (0, common_1.Post)('/get-category'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "getCategory", null);
__decorate([
    (0, common_1.Post)('/edit'),
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [categories_model_1.Category, Object]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "editCategory", null);
CategoriesController = __decorate([
    (0, common_1.Controller)('categories'),
    __metadata("design:paramtypes", [categories_service_1.CategoriesService])
], CategoriesController);
exports.CategoriesController = CategoriesController;
//# sourceMappingURL=categories.controller.js.map