"use strict";
cc._RF.push(module, 'ca106/9TXROP4idbyKoCVQC', 'InfiniteHeights.Shop');
// InfiniteHeights/scripts/Game/InfiniteHeights.Shop.ts

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
var InfiniteHeights_Global_1 = require("../InfiniteHeights.Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Shop = /** @class */ (function (_super) {
    __extends(Shop, _super);
    function Shop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listSpfBallon = [];
        _this.nBallon_0 = null;
        _this.nBallon_1 = null;
        _this.nBallon_2 = null;
        _this.nNext = null;
        _this.nPrev = null;
        return _this;
        // update (dt) {}
    }
    Shop_1 = Shop;
    Shop.prototype.onLoad = function () {
        Shop_1.instance = this;
        InfiniteHeights_Global_1.Global.unlockIndexBallon = JSON.parse(cc.sys.localStorage.getItem('unlockIndexBallon')) || InfiniteHeights_Global_1.Global.unlockIndexBallon;
        console.log("unLockIndex ", InfiniteHeights_Global_1.Global.unlockIndexBallon);
        console.log("indexBallon", InfiniteHeights_Global_1.Global.currentIndexBallon);
        this.updateShop();
    };
    Shop.prototype.start = function () {
    };
    // onNext() {
    //     Global.currentIndexBallon++;
    //     console.log("OnNext ", Global.currentIndexBallon);
    //     if (Global.currentIndexBallon > Global.unlockIndexBallon)
    //         Global.currentIndexBallon = Global.unlockIndexBallon;
    //     this.updateShop()
    // }
    // onPrev() {
    //     Global.currentIndexBallon--;
    //     console.log("OnPrev ", Global.currentIndexBallon);
    //     if (Global.currentIndexBallon < 0)
    //         Global.currentIndexBallon = 0;
    //     this.updateShop()
    // }
    Shop.prototype.onNext = function () {
        if (InfiniteHeights_Global_1.Global.currentIndexBallon < InfiniteHeights_Global_1.Global.unlockPoints.length - 1) {
            InfiniteHeights_Global_1.Global.currentIndexBallon++;
            this.updateShop();
            console.log("OnNext ", InfiniteHeights_Global_1.Global.currentIndexBallon);
            cc.sys.localStorage.setItem('currentIndexBallon', InfiniteHeights_Global_1.Global.currentIndexBallon);
        }
        else {
            this.nNext.active = false;
            console.log("sdasd");
        }
    };
    Shop.prototype.onPrev = function () {
        if (InfiniteHeights_Global_1.Global.currentIndexBallon > 0) {
            InfiniteHeights_Global_1.Global.currentIndexBallon--;
            this.updateShop();
            console.log("OnPrev ", InfiniteHeights_Global_1.Global.currentIndexBallon);
            cc.sys.localStorage.setItem('currentIndexBallon', InfiniteHeights_Global_1.Global.currentIndexBallon);
        }
    };
    Shop.prototype.updateShop = function () {
        // neu currentIndexBallon == 0 => an button Previous, Ballon 0
        // neu currentIndexBallon > 0 && < unlockIndexBallon => xu ly gi
        // neu currentIndexBallon == unlockIndexBallon =>an button Next, Ballon 2
        this.nBallon_1.spriteFrame = this.listSpfBallon[InfiniteHeights_Global_1.Global.currentIndexBallon];
        if (InfiniteHeights_Global_1.Global.currentIndexBallon === 0) {
            this.nPrev.active = false;
            this.nNext.active = true;
            this.nBallon_0.node.active = false;
            if (InfiniteHeights_Global_1.Global.unlockIndexBallon > 0) {
                this.nBallon_2.node.active = true;
                this.nBallon_2.spriteFrame = this.listSpfBallon[InfiniteHeights_Global_1.Global.currentIndexBallon + 1];
            }
            else {
                this.nBallon_2.node.active = false;
            }
        }
        else if (InfiniteHeights_Global_1.Global.currentIndexBallon === InfiniteHeights_Global_1.Global.unlockIndexBallon) {
            this.nPrev.active = true;
            this.nNext.active = false;
            this.nBallon_0.node.active = true;
            this.nBallon_0.spriteFrame = this.listSpfBallon[InfiniteHeights_Global_1.Global.currentIndexBallon - 1];
            this.nBallon_2.node.active = false;
        }
        else if (InfiniteHeights_Global_1.Global.currentIndexBallon > 0 && InfiniteHeights_Global_1.Global.currentIndexBallon < InfiniteHeights_Global_1.Global.unlockIndexBallon) {
            this.nPrev.active = true;
            this.nNext.active = true;
            this.nBallon_0.node.active = true;
            this.nBallon_2.node.active = true;
            this.nBallon_0.spriteFrame = this.listSpfBallon[InfiniteHeights_Global_1.Global.currentIndexBallon - 1];
            this.nBallon_2.spriteFrame = this.listSpfBallon[InfiniteHeights_Global_1.Global.currentIndexBallon + 1];
        }
        if (InfiniteHeights_Global_1.Global.currentIndexBallon > InfiniteHeights_Global_1.Global.unlockIndexBallon) {
            InfiniteHeights_Global_1.Global.currentIndexBallon = InfiniteHeights_Global_1.Global.unlockIndexBallon;
            this.updateShop();
        }
    };
    var Shop_1;
    Shop.instance = null;
    __decorate([
        property(cc.SpriteFrame)
    ], Shop.prototype, "listSpfBallon", void 0);
    __decorate([
        property(cc.Sprite)
    ], Shop.prototype, "nBallon_0", void 0);
    __decorate([
        property(cc.Sprite)
    ], Shop.prototype, "nBallon_1", void 0);
    __decorate([
        property(cc.Sprite)
    ], Shop.prototype, "nBallon_2", void 0);
    __decorate([
        property(cc.Node)
    ], Shop.prototype, "nNext", void 0);
    __decorate([
        property(cc.Node)
    ], Shop.prototype, "nPrev", void 0);
    Shop = Shop_1 = __decorate([
        ccclass
    ], Shop);
    return Shop;
}(cc.Component));
exports.default = Shop;

cc._RF.pop();