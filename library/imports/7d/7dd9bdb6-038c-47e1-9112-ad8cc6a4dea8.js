"use strict";
cc._RF.push(module, '7dd9b22A4xH4ZESrYzGpN6o', 'InfiniteHeights.GameOver');
// InfiniteHeights/scripts/Game/InfiniteHeights.GameOver.ts

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
var InfiniteHeights_GameManager_1 = require("../InfiniteHeights.GameManager");
var InfiniteHeights_Global_1 = require("../InfiniteHeights.Global");
var InfiniteHeights_Ballon_1 = require("./InfiniteHeights.Ballon");
var InfiniteHeights_GameView_1 = require("./InfiniteHeights.GameView");
var InfiniteHeights_Shop_1 = require("./InfiniteHeights.Shop");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameOver = /** @class */ (function (_super) {
    __extends(GameOver, _super);
    function GameOver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbScore = null;
        _this.lbDiamond = null;
        _this.lbTime = null;
        _this.nBallon = null;
        _this.nUnLockBallon = null;
        _this.index = 0;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    GameOver.prototype.onLoad = function () {
        //Global.unlockIndexBallon = JSON.parse(cc.sys.localStorage.getItem('unlockIndexBallon')) || Global.unlockIndexBallon;
        cc.sys.localStorage.setItem("scores", JSON.stringify(InfiniteHeights_Global_1.Global.dataScore));
        console.log("Global ", InfiniteHeights_Global_1.Global.unlockIndexBallon);
        InfiniteHeights_GameView_1.default.instance.updateLbTime(this.lbTime);
        InfiniteHeights_GameView_1.default.instance.updateLbDiamond(this.lbDiamond);
        InfiniteHeights_GameView_1.default.instance.updateLbScore(this.lbScore);
        this.checkUnlockBallon();
    };
    GameOver.prototype.onReplay = function () {
        InfiniteHeights_GameView_1.default.instance.resetGame();
        this.node.destroy();
    };
    GameOver.prototype.onHome = function () {
        InfiniteHeights_GameView_1.default.instance.gameDestroy();
        cc.sys.localStorage.removeItem('selectedBallonIndex');
        InfiniteHeights_Shop_1.default.instance.updateShop();
        InfiniteHeights_GameManager_1.default.instance.updateRank(InfiniteHeights_GameManager_1.default.instance.nListNodeRank);
        this.node.destroy();
    };
    GameOver.prototype.checkUnlockBallon = function () {
        var previousUnlockIndex = JSON.parse(cc.sys.localStorage.getItem('unlockIndexBallon')) || 0;
        if (InfiniteHeights_Global_1.Global.unlockIndexBallon > previousUnlockIndex) {
            this.nUnLockBallon.active = true;
            this.nBallon.setData(InfiniteHeights_Global_1.Global.unlockIndexBallon);
            cc.sys.localStorage.setItem('unlockIndexBallon', InfiniteHeights_Global_1.Global.unlockIndexBallon);
        }
        else {
            this.nUnLockBallon.active = false;
        }
    };
    GameOver.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], GameOver.prototype, "lbScore", void 0);
    __decorate([
        property(cc.Label)
    ], GameOver.prototype, "lbDiamond", void 0);
    __decorate([
        property(cc.Label)
    ], GameOver.prototype, "lbTime", void 0);
    __decorate([
        property(InfiniteHeights_Ballon_1.default)
    ], GameOver.prototype, "nBallon", void 0);
    __decorate([
        property(cc.Node)
    ], GameOver.prototype, "nUnLockBallon", void 0);
    GameOver = __decorate([
        ccclass
    ], GameOver);
    return GameOver;
}(cc.Component));
exports.default = GameOver;

cc._RF.pop();