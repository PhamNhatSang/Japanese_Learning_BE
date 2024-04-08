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
const routing_controllers_1 = require("routing-controllers");
const base_controller_1 = require("./base-controller");
const user_service_1 = __importDefault(require("../services/user.service"));
let UserController = class UserController extends base_controller_1.BaseController {
    constructor() {
        super(new user_service_1.default());
    }
    getAllOne() {
        this.service.getAll();
        const data = "get all one";
        return this.service.getAll();
    }
};
__decorate([
    (0, routing_controllers_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAllOne", null);
UserController = __decorate([
    (0, routing_controllers_1.JsonController)("/users"),
    __metadata("design:paramtypes", [])
], UserController);
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map