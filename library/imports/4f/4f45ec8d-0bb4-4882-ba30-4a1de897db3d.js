"use strict";
cc._RF.push(module, '4f45eyNC7RIgrowSh3ol9s9', 'InfiniteHeights.BackGround');
// InfiniteHeights/scripts/Game/InfiniteHeights.BackGround.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var InfiniteHeights_GameView_1 = require("./InfiniteHeights.GameView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BackGround = /** @class */ (function (_super) {
    __extends(BackGround, _super);
    function BackGround() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAdd = false;
        _this.idBg = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    BackGround.prototype.start = function () {
    };
    BackGround.prototype.update = function (dt) {
        if (!InfiniteHeights_GameView_1.default.instance.isFirstTouch) {
            return;
        }
        if (this.node.y <= -1600) {
            this.resetPos();
            if (this.idBg == 3) {
                this.node.destroy();
            }
        }
        if (!this.isAdd) {
            if (this.node.y === 640) {
                console.log("sadasd");
                this.isAdd = true;
            }
        }
        this.node.y -= 2;
    };
    BackGround.prototype.resetPos = function () {
        this.node.y = 1280;
    };
    __decorate([
        property
    ], BackGround.prototype, "idBg", void 0);
    BackGround = __decorate([
        ccclass
    ], BackGround);
    return BackGround;
}(cc.Component));
exports.default = BackGround;

cc._RF.pop();