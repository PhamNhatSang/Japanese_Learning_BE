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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const baseModel_1 = require("./baseModel");
const testItem_model_1 = __importDefault(require("./testItem.model"));
const typeorm_1 = require("typeorm");
const user_model_1 = __importDefault(require("./user.model"));
const course_model_1 = __importDefault(require("./course.model"));
let Test = class Test extends baseModel_1.BaseModel {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Test.prototype, "score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", default: false }),
    __metadata("design:type", Boolean)
], Test.prototype, "is_first_done", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_model_1.default, (user) => user.myTests, { nullable: true }),
    __metadata("design:type", user_model_1.default)
], Test.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => course_model_1.default, (course) => course.tests, { nullable: true }),
    __metadata("design:type", course_model_1.default)
], Test.prototype, "course", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => testItem_model_1.default, (testItem) => testItem.test, { nullable: true }),
    __metadata("design:type", Array)
], Test.prototype, "testItems", void 0);
Test = __decorate([
    (0, typeorm_1.Entity)({ name: "tests" })
], Test);
exports.default = Test;
//# sourceMappingURL=test.model.js.map