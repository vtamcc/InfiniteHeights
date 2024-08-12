
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/InfiniteHeights/scripts/Game/InfiniteHeights.BackGround');
require('./assets/InfiniteHeights/scripts/Game/InfiniteHeights.Ballon');
require('./assets/InfiniteHeights/scripts/Game/InfiniteHeights.ColliderManager');
require('./assets/InfiniteHeights/scripts/Game/InfiniteHeights.GameOver');
require('./assets/InfiniteHeights/scripts/Game/InfiniteHeights.GameView');
require('./assets/InfiniteHeights/scripts/Game/InfiniteHeights.ObstacleManager');
require('./assets/InfiniteHeights/scripts/InfiniteHeights.GameManager');
require('./assets/InfiniteHeights/scripts/InfiniteHeights.Global');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/InfiniteHeights/scripts/Game/InfiniteHeights.GameOver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
var InfiniteHeights_GameView_1 = require("./InfiniteHeights.GameView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameOver = /** @class */ (function (_super) {
    __extends(GameOver, _super);
    function GameOver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbScore = null;
        _this.lbDiamond = null;
        _this.lbTime = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    GameOver.prototype.onLoad = function () {
        cc.sys.localStorage.setItem("scores", JSON.stringify(InfiniteHeights_Global_1.Global.dataScore));
        InfiniteHeights_GameView_1.default.instance.updateLbTime(this.lbTime);
        InfiniteHeights_GameView_1.default.instance.updateLbDiamond(this.lbDiamond);
        InfiniteHeights_GameView_1.default.instance.updateLbScore(this.lbScore);
    };
    GameOver.prototype.onReplay = function () {
        InfiniteHeights_GameView_1.default.instance.resetGame();
        this.node.destroy();
    };
    GameOver.prototype.onHome = function () {
        InfiniteHeights_GameView_1.default.instance.gameDestroy();
        InfiniteHeights_GameManager_1.default.instance.updateRank(InfiniteHeights_GameManager_1.default.instance.nListNodeRank);
        this.node.destroy();
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
    GameOver = __decorate([
        ccclass
    ], GameOver);
    return GameOver;
}(cc.Component));
exports.default = GameOver;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSW5maW5pdGVIZWlnaHRzXFxzY3JpcHRzXFxHYW1lXFxJbmZpbml0ZUhlaWdodHMuR2FtZU92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsOEVBQXlEO0FBQ3pELG9FQUFtRDtBQUNuRCx1RUFBa0Q7QUFFNUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFtQ0M7UUFoQ0UsYUFBTyxHQUFhLElBQUksQ0FBQztRQUd6QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRzNCLFlBQU0sR0FBYSxJQUFJLENBQUM7O1FBeUJ2QixpQkFBaUI7SUFDckIsQ0FBQztJQXhCRyx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQywrQkFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsa0NBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxrQ0FBUSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELGtDQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELDJCQUFRLEdBQVI7UUFDSSxrQ0FBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQ0ksa0NBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEMscUNBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLHFDQUFXLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBN0JGO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ007SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDUTtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNLO0lBVE4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW1DNUI7SUFBRCxlQUFDO0NBbkNELEFBbUNDLENBbkNxQyxFQUFFLENBQUMsU0FBUyxHQW1DakQ7a0JBbkNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuLi9JbmZpbml0ZUhlaWdodHMuR2FtZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4uL0luZmluaXRlSGVpZ2h0cy5HbG9iYWxcIjtcclxuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL0luZmluaXRlSGVpZ2h0cy5HYW1lVmlld1wiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT3ZlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgIGxiU2NvcmU6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgbGJEaWFtb25kOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgIGxiVGltZTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2NvcmVzXCIsIEpTT04uc3RyaW5naWZ5KEdsb2JhbC5kYXRhU2NvcmUpKTtcclxuICAgICAgICBHYW1lVmlldy5pbnN0YW5jZS51cGRhdGVMYlRpbWUodGhpcy5sYlRpbWUpO1xyXG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLnVwZGF0ZUxiRGlhbW9uZCh0aGlzLmxiRGlhbW9uZCk7XHJcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UudXBkYXRlTGJTY29yZSh0aGlzLmxiU2NvcmUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVwbGF5KCkge1xyXG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLnJlc2V0R2FtZSgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ib21lKCkge1xyXG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLmdhbWVEZXN0cm95KCk7XHJcbiAgICAgICAgR2FtZU1hbmFnZXIuaW5zdGFuY2UudXBkYXRlUmFuayhHYW1lTWFuYWdlci5pbnN0YW5jZS5uTGlzdE5vZGVSYW5rKTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/InfiniteHeights/scripts/InfiniteHeights.GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6be9dHncelMS7oOeeLh1jsq', 'InfiniteHeights.GameManager');
// InfiniteHeights/scripts/InfiniteHeights.GameManager.ts

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
var InfiniteHeights_Global_1 = require("./InfiniteHeights.Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prfGameView = null;
        _this.nListNodeRank = [];
        _this.lbtest = null;
        _this.listSpfBallon = [];
        _this.pageView = null;
        _this.ballonPrefabs = null;
        _this.nListBallon = [];
        _this.indexBallon = 1;
        return _this;
        // update (dt) {}
    }
    GameManager_1 = GameManager;
    GameManager.prototype.onLoad = function () {
        GameManager_1.instance = this;
        this.updateRank(this.nListNodeRank);
        InfiniteHeights_Global_1.Global.dataBallon = JSON.parse(cc.sys.localStorage.getItem('dataBallons')) || InfiniteHeights_Global_1.Global.dataBallon;
        InfiniteHeights_Global_1.Global.currentIndex = JSON.parse(cc.sys.localStorage.getItem('indexBallon')) || 1;
        this.updateBallon();
        console.log("currentIndex", InfiniteHeights_Global_1.Global.currentIndex);
        console.log("data ", InfiniteHeights_Global_1.Global.dataBallon);
    };
    GameManager.prototype.start = function () {
    };
    GameManager.prototype.updateBallon = function () {
        this.nListBallon[1].active = true;
        this.nListBallon[1].getComponent(cc.Sprite).spriteFrame = this.listSpfBallon[0];
        var leftIndex = (InfiniteHeights_Global_1.Global.currentIndex + 2) % InfiniteHeights_Global_1.Global.dataBallon.length;
        if (leftIndex !== InfiniteHeights_Global_1.Global.currentIndex && InfiniteHeights_Global_1.Global.dataBallon[leftIndex].isUnlock) {
            this.nListBallon[0].active = true;
            this.nListBallon[0].getComponent(cc.Sprite).spriteFrame = this.listSpfBallon[leftIndex];
        }
        else {
            this.nListBallon[0].active = false;
        }
        var rightIndex = (InfiniteHeights_Global_1.Global.currentIndex) % InfiniteHeights_Global_1.Global.dataBallon.length;
        console.log("rightIndex ", rightIndex);
        console.log("rightData", InfiniteHeights_Global_1.Global.dataBallon[rightIndex]);
        if (InfiniteHeights_Global_1.Global.dataBallon[rightIndex].isUnlock) {
            this.nListBallon[2].active = true;
            this.nListBallon[2].getComponent(cc.Sprite).spriteFrame = this.listSpfBallon[rightIndex];
        }
        else {
            this.nListBallon[2].active = false;
        }
    };
    GameManager.prototype.updateRank = function (listNodeLabel) {
        InfiniteHeights_Global_1.Global.dataScore = JSON.parse(cc.sys.localStorage.getItem("scores")) || [];
        console.log("Diem luu ne ", InfiniteHeights_Global_1.Global.dataScore);
        if (InfiniteHeights_Global_1.Global.dataScore.length === 0) {
            //console.log("Mảng scores rỗng, ẩn tất cả các node.");
            listNodeLabel.forEach(function (node) {
                node.active = false;
            });
        }
        else {
            listNodeLabel.forEach(function (node, index) {
                //console.log("index ", index);
                //console.log("diem ", Global.dataScore)
                if (index < InfiniteHeights_Global_1.Global.dataScore.length) {
                    node.active = true;
                    node.getComponent(cc.Label).string = InfiniteHeights_Global_1.Global.dataScore[index] + ' ';
                }
                else {
                    node.active = false;
                }
            });
        }
    };
    GameManager.prototype.removeCache = function () {
        cc.sys.localStorage.clear();
    };
    GameManager.prototype.clickPlay = function () {
        var gameView = cc.instantiate(this.prfGameView);
        this.node.addChild(gameView);
    };
    var GameManager_1;
    GameManager.instance = null;
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "prfGameView", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "nListNodeRank", void 0);
    __decorate([
        property(cc.Label)
    ], GameManager.prototype, "lbtest", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "listSpfBallon", void 0);
    __decorate([
        property(cc.PageView)
    ], GameManager.prototype, "pageView", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "ballonPrefabs", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "nListBallon", void 0);
    GameManager = GameManager_1 = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSW5maW5pdGVIZWlnaHRzXFxzY3JpcHRzXFxJbmZpbml0ZUhlaWdodHMuR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsbUVBQWtEO0FBRTVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBOEZDO1FBMUZHLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLG1CQUFhLEdBQWMsRUFBRSxDQUFDO1FBRzlCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsbUJBQWEsR0FBcUIsRUFBRSxDQUFDO1FBR3JDLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBRzdCLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBR2hDLGlCQUFXLEdBQWMsRUFBRSxDQUFDO1FBQzVCLGlCQUFXLEdBQUcsQ0FBQyxDQUFDOztRQXNFaEIsaUJBQWlCO0lBQ3JCLENBQUM7b0JBOUZvQixXQUFXO0lBd0I1Qiw0QkFBTSxHQUFOO1FBQ0ksYUFBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEMsK0JBQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSwrQkFBTSxDQUFDLFVBQVUsQ0FBQztRQUNoRywrQkFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMs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QUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ1U7SUF0QlgsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQThGL0I7SUFBRCxrQkFBQztDQTlGRCxBQThGQyxDQTlGd0MsRUFBRSxDQUFDLFNBQVMsR0E4RnBEO2tCQTlGb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBCYWxsb24gZnJvbSBcIi4vR2FtZS9JbmZpbml0ZUhlaWdodHMuQmFsbG9uXCI7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuL0luZmluaXRlSGVpZ2h0cy5HbG9iYWxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogR2FtZU1hbmFnZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZkdhbWVWaWV3OiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbkxpc3ROb2RlUmFuazogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJ0ZXN0OiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgbGlzdFNwZkJhbGxvbjogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QYWdlVmlldylcclxuICAgIHBhZ2VWaWV3OiBjYy5QYWdlVmlldyA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGJhbGxvblByZWZhYnM6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuTGlzdEJhbGxvbjogY2MuTm9kZVtdID0gW107XHJcbiAgICBpbmRleEJhbGxvbiA9IDE7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgR2FtZU1hbmFnZXIuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmFuayh0aGlzLm5MaXN0Tm9kZVJhbmspO1xyXG4gICAgICAgIEdsb2JhbC5kYXRhQmFsbG9uID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGFCYWxsb25zJykpIHx8IEdsb2JhbC5kYXRhQmFsbG9uO1xyXG4gICAgICAgIEdsb2JhbC5jdXJyZW50SW5kZXggPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5kZXhCYWxsb24nKSkgfHwgMTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJhbGxvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudEluZGV4XCIsIEdsb2JhbC5jdXJyZW50SW5kZXgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBcIiwgR2xvYmFsLmRhdGFCYWxsb24pO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGVCYWxsb24oKSB7XHJcbiAgICAgICAgdGhpcy5uTGlzdEJhbGxvblsxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubkxpc3RCYWxsb25bMV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmxpc3RTcGZCYWxsb25bMF07XHJcbiAgICAgICAgbGV0IGxlZnRJbmRleCA9IChHbG9iYWwuY3VycmVudEluZGV4ICsgMikgJSBHbG9iYWwuZGF0YUJhbGxvbi5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGxlZnRJbmRleCAhPT0gR2xvYmFsLmN1cnJlbnRJbmRleCAmJiBHbG9iYWwuZGF0YUJhbGxvbltsZWZ0SW5kZXhdLmlzVW5sb2NrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubkxpc3RCYWxsb25bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5uTGlzdEJhbGxvblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMubGlzdFNwZkJhbGxvbltsZWZ0SW5kZXhdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubkxpc3RCYWxsb25bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByaWdodEluZGV4ID0gKEdsb2JhbC5jdXJyZW50SW5kZXgpICUgR2xvYmFsLmRhdGFCYWxsb24ubGVuZ3RoO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmlnaHRJbmRleCBcIiwgcmlnaHRJbmRleCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyaWdodERhdGFcIiwgR2xvYmFsLmRhdGFCYWxsb25bcmlnaHRJbmRleF0pO1xyXG4gICAgICAgIGlmIChHbG9iYWwuZGF0YUJhbGxvbltyaWdodEluZGV4XS5pc1VubG9jaykge1xyXG4gICAgICAgICAgICB0aGlzLm5MaXN0QmFsbG9uWzJdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubkxpc3RCYWxsb25bMl0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmxpc3RTcGZCYWxsb25bcmlnaHRJbmRleF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5uTGlzdEJhbGxvblsyXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZVJhbmsobGlzdE5vZGVMYWJlbDogY2MuTm9kZVtdKSB7XHJcbiAgICAgICAgR2xvYmFsLmRhdGFTY29yZSA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2NvcmVzXCIpKSB8fCBbXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRpZW0gbHV1IG5lIFwiLCBHbG9iYWwuZGF0YVNjb3JlKTtcclxuICAgICAgICBpZiAoR2xvYmFsLmRhdGFTY29yZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIk3huqNuZyBzY29yZXMgcuG7l25nLCDhuqluIHThuqV0IGPhuqMgY8OhYyBub2RlLlwiKTtcclxuICAgICAgICAgICAgbGlzdE5vZGVMYWJlbC5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGlzdE5vZGVMYWJlbC5mb3JFYWNoKChub2RlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImluZGV4IFwiLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGllbSBcIiwgR2xvYmFsLmRhdGFTY29yZSlcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IEdsb2JhbC5kYXRhU2NvcmUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBHbG9iYWwuZGF0YVNjb3JlW2luZGV4XSArICcgJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ2FjaGUoKSB7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjbGlja1BsYXkoKSB7XHJcbiAgICAgICAgbGV0IGdhbWVWaWV3ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZHYW1lVmlldylcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZ2FtZVZpZXcpO1xyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/InfiniteHeights/scripts/Game/InfiniteHeights.ColliderManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ae8414UvFJOtK1XM2yY+K4f', 'InfiniteHeights.ColliderManager');
// InfiniteHeights/scripts/Game/InfiniteHeights.ColliderManager.ts

"use strict";
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
var InfiniteHeights_GameView_1 = require("./InfiniteHeights.GameView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Collider = /** @class */ (function (_super) {
    __extends(Collider, _super);
    function Collider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Collider.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
    };
    Collider.prototype.start = function () {
    };
    Collider.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 2) {
            InfiniteHeights_GameView_1.default.instance.gameOver();
        }
        if (other.tag == 1) {
            InfiniteHeights_Global_1.Global.diaMond++;
            InfiniteHeights_GameView_1.default.instance.updateLbDiamond(InfiniteHeights_GameView_1.default.instance.lbDiamond);
            other.node.destroy();
        }
    };
    Collider = __decorate([
        ccclass
    ], Collider);
    return Collider;
}(cc.Component));
exports.default = Collider;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSW5maW5pdGVIZWlnaHRzXFxzY3JpcHRzXFxHYW1lXFxJbmZpbml0ZUhlaWdodHMuQ29sbGlkZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9FQUFtRDtBQUNuRCx1RUFBa0Q7QUFFNUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBcUJBLENBQUM7SUFuQkcseUJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JELENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELG1DQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUUsSUFBSTtRQUN4QixJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1lBQ2hCLGtDQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRztZQUNqQiwrQkFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLGtDQUFRLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxrQ0FBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMvRCxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQXBCZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXFCNUI7SUFBRCxlQUFDO0NBckJELEFBcUJDLENBckJxQyxFQUFFLENBQUMsU0FBUyxHQXFCakQ7a0JBckJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4uL0luZmluaXRlSGVpZ2h0cy5HbG9iYWxcIjtcclxuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL0luZmluaXRlSGVpZ2h0cy5HYW1lVmlld1wiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsaWRlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICBpZiAob3RoZXIudGFnID09IDIpIHtcclxuICAgICAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UuZ2FtZU92ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBpZiAob3RoZXIudGFnID09IDEgKSB7XHJcbiAgICAgICAgICAgIEdsb2JhbC5kaWFNb25kKys7XHJcbiAgICAgICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLnVwZGF0ZUxiRGlhbW9uZChHYW1lVmlldy5pbnN0YW5jZS5sYkRpYW1vbmQpO1xyXG4gICAgICAgICAgICBvdGhlci5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9ICAgXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/InfiniteHeights/scripts/InfiniteHeights.Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ee72/5AWBJWZj8nXFDg5Ed', 'InfiniteHeights.Global');
// InfiniteHeights/scripts/InfiniteHeights.Global.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
exports.Global = void 0;
var Global = /** @class */ (function () {
    function Global() {
    }
    Global.diaMond = 0;
    Global.score = 0;
    Global.dataScore = [];
    Global.dataBallon = [
        { score: 20, isUnlock: true },
        { score: 10, isUnlock: false },
        { score: 12, isUnlock: false },
        { score: 14, isUnlock: false },
        { score: 16, isUnlock: false },
        { score: 18, isUnlock: false },
        { score: 20, isUnlock: false },
        { score: 22, isUnlock: false },
        { score: 24, isUnlock: false },
    ];
    Global.currentIndex = 0;
    return Global;
}());
exports.Global = Global;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSW5maW5pdGVIZWlnaHRzXFxzY3JpcHRzXFxJbmZpbml0ZUhlaWdodHMuR2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7O0FBRWxGO0lBQUE7SUFnQkEsQ0FBQztJQWZVLGNBQU8sR0FBRyxDQUFDLENBQUM7SUFDWixZQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsZ0JBQVMsR0FBRyxFQUFFLENBQUM7SUFDZixpQkFBVSxHQUFHO1FBQ2hCLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO1FBQzNCLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO1FBQzVCLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO1FBQzVCLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO1FBQzVCLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO1FBQzVCLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO1FBQzVCLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO1FBQzVCLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO1FBQzVCLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO0tBQy9CLENBQUE7SUFDTSxtQkFBWSxHQUFHLENBQUMsQ0FBQztJQUM1QixhQUFDO0NBaEJELEFBZ0JDLElBQUE7QUFoQlksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5leHBvcnQgY2xhc3MgR2xvYmFse1xyXG4gICAgc3RhdGljIGRpYU1vbmQgPSAwO1xyXG4gICAgc3RhdGljIHNjb3JlID0gMDtcclxuICAgIHN0YXRpYyBkYXRhU2NvcmUgPSBbXTtcclxuICAgIHN0YXRpYyBkYXRhQmFsbG9uID0gW1xyXG4gICAgICAgIHtzY29yZTogMjAsIGlzVW5sb2NrOiB0cnVlfSxcclxuICAgICAgICB7c2NvcmU6IDEwLCBpc1VubG9jazogZmFsc2V9LFxyXG4gICAgICAgIHtzY29yZTogMTIsIGlzVW5sb2NrOiBmYWxzZX0sXHJcbiAgICAgICAge3Njb3JlOiAxNCwgaXNVbmxvY2s6IGZhbHNlfSxcclxuICAgICAgICB7c2NvcmU6IDE2LCBpc1VubG9jazogZmFsc2V9LFxyXG4gICAgICAgIHtzY29yZTogMTgsIGlzVW5sb2NrOiBmYWxzZX0sXHJcbiAgICAgICAge3Njb3JlOiAyMCwgaXNVbmxvY2s6IGZhbHNlfSxcclxuICAgICAgICB7c2NvcmU6IDIyLCBpc1VubG9jazogZmFsc2V9LFxyXG4gICAgICAgIHtzY29yZTogMjQsIGlzVW5sb2NrOiBmYWxzZX0sXHJcbiAgICBdXHJcbiAgICBzdGF0aWMgY3VycmVudEluZGV4ID0gMDtcclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/InfiniteHeights/scripts/Game/InfiniteHeights.ObstacleManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '85eb2mvb8lFEJXHCj+bPAXM', 'InfiniteHeights.ObstacleManager');
// InfiniteHeights/scripts/Game/InfiniteHeights.ObstacleManager.ts

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
var obstacleManager = /** @class */ (function (_super) {
    __extends(obstacleManager, _super);
    function obstacleManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idPrf = 0;
        _this.speed = 150;
        _this.speedAngle = 70;
        _this.listNode = [];
        _this.angle = 0;
        _this.isMovingRight = true;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    obstacleManager.prototype.onLoad = function () {
    };
    obstacleManager.prototype.start = function () {
    };
    obstacleManager.prototype.update = function (dt) {
        if (InfiniteHeights_GameView_1.default.instance.isGameOver)
            return;
        switch (this.idPrf) {
            case 0:
                var node = this.listNode[0];
                if (node) {
                    if (this.isMovingRight) {
                        node.x += this.speed * dt;
                        // Nếu node chạm biên phải của màn hình, thay đổi hướng di chuyển
                        if (node.x >= 200) {
                            this.isMovingRight = false;
                        }
                    }
                    else {
                        node.x -= this.speed * dt;
                        // Nếu node chạm biên trái của màn hình, thay đổi hướng di chuyển
                        if (node.x <= -200) {
                            this.isMovingRight = true;
                        }
                    }
                }
                break;
            case 1:
                if (this.listNode.length >= 2) {
                    var node1 = this.listNode[0];
                    var node2 = this.listNode[1];
                    // Node 1 di chuyển
                    if (this.isMovingRight) {
                        node1.x += this.speed * dt;
                        if (node1.x >= 200) {
                            this.isMovingRight = false;
                        }
                    }
                    else {
                        node1.x -= this.speed * dt;
                        if (node1.x <= -200) {
                            this.isMovingRight = true;
                        }
                    }
                    // Node 2 di chuyển ngược hướng với node 1
                    if (this.isMovingRight) {
                        node2.x -= this.speed * dt;
                        if (node2.x <= -200) {
                            this.isMovingRight = true;
                        }
                    }
                    else {
                        node2.x += this.speed * dt;
                        if (node2.x >= 200) {
                            this.isMovingRight = false;
                        }
                    }
                }
                break;
            case 2:
                if (this.listNode.length >= 2) {
                    var node1 = this.listNode[0];
                    var node2 = this.listNode[1];
                    if (this.isMovingRight) {
                        node1.x += this.speed * dt;
                        node2.x += this.speed * dt; // Node 2 di chuyển cùng hướng với node 1
                        if (node1.x >= 200 || node2.x >= 200) {
                            this.isMovingRight = false;
                        }
                    }
                    else {
                        node1.x -= this.speed * dt;
                        node2.x -= this.speed * dt; // Node 2 di chuyển cùng hướng với node 1
                        if (node1.x <= -200 || node2.x <= -200) {
                            this.isMovingRight = true;
                        }
                    }
                }
                break;
            case 3:
                if (this.listNode.length >= 3) {
                    var node1 = this.listNode[0];
                    var node2 = this.listNode[1];
                    var node3 = this.listNode[2];
                    if (this.isMovingRight) {
                        node1.x += this.speed * dt;
                        node2.x += this.speed * dt;
                        node3.x += this.speed * dt;
                        if (node3.x >= 300) {
                            this.isMovingRight = false;
                        }
                    }
                    else {
                        node1.x -= this.speed * dt;
                        node2.x -= this.speed * dt;
                        node3.x -= this.speed * dt;
                        if (node1.x <= -300) {
                            this.isMovingRight = true;
                        }
                    }
                }
                break;
            case 4:
                if (this.listNode.length) {
                    var node_1 = this.listNode[0];
                    if (node_1) {
                        if (this.isMovingRight) {
                            node_1.x += this.speed * dt;
                            if (node_1.x >= 200) {
                                this.isMovingRight = false;
                            }
                        }
                        else {
                            node_1.x -= this.speed * dt;
                            if (node_1.x <= -200) {
                                this.isMovingRight = true;
                            }
                        }
                    }
                }
                break;
            case 5:
                if (this.listNode.length >= 2) {
                    var node1 = this.listNode[0];
                    var node2 = this.listNode[1];
                    // Tăng giá trị góc quay dựa trên thời gian và tốc độ
                    node1.angle += this.speedAngle * dt;
                    // Giảm giá trị góc quay của node2 để nó quay ngược lại
                    node2.angle -= this.speedAngle * dt;
                    // Giới hạn giá trị góc quay trong khoảng 0 đến 360 độ
                    if (node1.angle >= 360) {
                        node1.angle -= 360;
                    }
                    if (node2.angle >= 360) {
                        node2.angle -= 360;
                    }
                    if (node1.angle < 0) {
                        node1.angle += 360;
                    }
                    if (node2.angle < 0) {
                        node2.angle += 360;
                    }
                }
                break;
            case 6:
                if (this.listNode.length) {
                    var node_2 = this.listNode[0];
                    node_2.angle += this.speedAngle * dt;
                }
                break;
            case 7:
                if (this.listNode.length) {
                    var node_3 = this.listNode[0];
                    node_3.angle += this.speedAngle * dt;
                }
                break;
            case 8:
                if (this.listNode.length) {
                    var node_4 = this.listNode[0];
                    node_4.angle += this.speedAngle * dt;
                }
                break;
            default:
                break;
        }
    };
    __decorate([
        property
    ], obstacleManager.prototype, "idPrf", void 0);
    __decorate([
        property(cc.Node)
    ], obstacleManager.prototype, "listNode", void 0);
    obstacleManager = __decorate([
        ccclass
    ], obstacleManager);
    return obstacleManager;
}(cc.Component));
exports.default = obstacleManager;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSW5maW5pdGVIZWlnaHRzXFxzY3JpcHRzXFxHYW1lXFxJbmZpbml0ZUhlaWdodHMuT2JzdGFjbGVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHVFQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQWlNQztRQTlMRyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFdBQUssR0FBVyxHQUFHLENBQUM7UUFDcEIsZ0JBQVUsR0FBRyxFQUFFLENBQUM7UUFFaEIsY0FBUSxHQUFjLEVBQUUsQ0FBQztRQUN6QixXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ0YsbUJBQWEsR0FBWSxJQUFJLENBQUM7O0lBd0wxQyxDQUFDO0lBdExHLHdCQUF3QjtJQUV4QixnQ0FBTSxHQUFOO0lBRUEsQ0FBQztJQUVELCtCQUFLLEdBQUw7SUFFQSxDQUFDO0lBR0QsZ0NBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFHLGtDQUFRLENBQUMsUUFBUSxDQUFDLFVBQVU7WUFBRSxPQUFPO1FBQ3hDLFFBQVEsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNoQixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxJQUFJLEVBQUU7b0JBQ04sSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO3dCQUNwQixJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO3dCQUMxQixpRUFBaUU7d0JBQ2pFLElB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RUksTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQTFMRDtRQURDLFFBQVE7a0RBQ1M7SUFJbEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDTztJQVBSLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0FpTW5DO0lBQUQsc0JBQUM7Q0FqTUQsQUFpTUMsQ0FqTTRDLEVBQUUsQ0FBQyxTQUFTLEdBaU14RDtrQkFqTW9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4vSW5maW5pdGVIZWlnaHRzLkdhbWVWaWV3XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgb2JzdGFjbGVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGlkUHJmOiBudW1iZXIgPSAwO1xyXG4gICAgc3BlZWQ6IG51bWJlciA9IDE1MDtcclxuICAgIHNwZWVkQW5nbGUgPSA3MDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdE5vZGU6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgYW5nbGUgPSAwO1xyXG4gICAgcHJpdmF0ZSBpc01vdmluZ1JpZ2h0OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZihHYW1lVmlldy5pbnN0YW5jZS5pc0dhbWVPdmVyKSByZXR1cm47XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmlkUHJmKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5saXN0Tm9kZVswXTtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmdSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnggKz0gdGhpcy5zcGVlZCAqIGR0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBO4bq/dSBub2RlIGNo4bqhbSBiacOqbiBwaOG6o2kgY+G7p2EgbcOgbiBow6xuaCwgdGhheSDEkeG7lWkgaMaw4bubbmcgZGkgY2h1eeG7g25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUueCA+PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS54IC09IHRoaXMuc3BlZWQgKiBkdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTuG6v3Ugbm9kZSBjaOG6oW0gYmnDqm4gdHLDoWkgY+G7p2EgbcOgbiBow6xuaCwgdGhheSDEkeG7lWkgaMaw4bubbmcgZGkgY2h1eeG7g25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUueCA8PSAtMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpc3ROb2RlLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUxID0gdGhpcy5saXN0Tm9kZVswXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZTIgPSB0aGlzLmxpc3ROb2RlWzFdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBOb2RlIDEgZGkgY2h1eeG7g25cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc01vdmluZ1JpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUxLnggKz0gdGhpcy5zcGVlZCAqIGR0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZTEueCA+PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTEueCAtPSB0aGlzLnNwZWVkICogZHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlMS54IDw9IC0yMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdSaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vZGUgMiBkaSBjaHV54buDbiBuZ8aw4bujYyBoxrDhu5tuZyB24bubaSBub2RlIDFcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc01vdmluZ1JpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUyLnggLT0gdGhpcy5zcGVlZCAqIGR0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZTIueCA8PSAtMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTIueCArPSB0aGlzLnNwZWVkICogZHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlMi54ID49IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdE5vZGUubGVuZ3RoID49IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZTEgPSB0aGlzLmxpc3ROb2RlWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlMiA9IHRoaXMubGlzdE5vZGVbMV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTW92aW5nUmlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTEueCArPSB0aGlzLnNwZWVkICogZHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUyLnggKz0gdGhpcy5zcGVlZCAqIGR0OyAvLyBOb2RlIDIgZGkgY2h1eeG7g24gY8O5bmcgaMaw4bubbmcgduG7m2kgbm9kZSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlMS54ID49IDIwMCB8fCBub2RlMi54ID49IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlMS54IC09IHRoaXMuc3BlZWQgKiBkdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTIueCAtPSB0aGlzLnNwZWVkICogZHQ7IC8vIE5vZGUgMiBkaSBjaHV54buDbiBjw7luZyBoxrDhu5tuZyB24bubaSBub2RlIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUxLnggPD0gLTIwMCB8fCBub2RlMi54IDw9IC0yMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdSaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdE5vZGUubGVuZ3RoID49IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZTEgPSB0aGlzLmxpc3ROb2RlWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlMiA9IHRoaXMubGlzdE5vZGVbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUzID0gdGhpcy5saXN0Tm9kZVsyXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmdSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlMS54ICs9IHRoaXMuc3BlZWQgKiBkdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTIueCArPSB0aGlzLnNwZWVkICogZHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUzLnggKz0gdGhpcy5zcGVlZCAqIGR0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZTMueCA+PSAzMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTEueCAtPSB0aGlzLnNwZWVkICogZHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUyLnggLT0gdGhpcy5zcGVlZCAqIGR0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlMy54IC09IHRoaXMuc3BlZWQgKiBkdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUxLnggPD0gLTMwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ1JpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0Tm9kZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMubGlzdE5vZGVbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTW92aW5nUmlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUueCArPSB0aGlzLnNwZWVkICogZHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS54ID49IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS54IC09IHRoaXMuc3BlZWQgKiBkdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnggPD0gLTIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdSaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpc3ROb2RlLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUxID0gdGhpcy5saXN0Tm9kZVswXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZTIgPSB0aGlzLmxpc3ROb2RlWzFdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBUxINuZyBnacOhIHRy4buLIGfDs2MgcXVheSBk4buxYSB0csOqbiB0aOG7nWkgZ2lhbiB2w6AgdOG7kWMgxJHhu5lcclxuICAgICAgICAgICAgICAgICAgICBub2RlMS5hbmdsZSArPSB0aGlzLnNwZWVkQW5nbGUgKiBkdDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gR2nhuqNtIGdpw6EgdHLhu4sgZ8OzYyBxdWF5IGPhu6dhIG5vZGUyIMSR4buDIG7DsyBxdWF5IG5nxrDhu6NjIGzhuqFpXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZTIuYW5nbGUgLT0gdGhpcy5zcGVlZEFuZ2xlICogZHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEdp4bubaSBo4bqhbiBnacOhIHRy4buLIGfDs2MgcXVheSB0cm9uZyBraG/huqNuZyAwIMSR4bq/biAzNjAgxJHhu5lcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZTEuYW5nbGUgPj0gMzYwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUxLmFuZ2xlIC09IDM2MDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUyLmFuZ2xlID49IDM2MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlMi5hbmdsZSAtPSAzNjA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZTEuYW5nbGUgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUxLmFuZ2xlICs9IDM2MDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUyLmFuZ2xlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlMi5hbmdsZSArPSAzNjA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0Tm9kZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMubGlzdE5vZGVbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hbmdsZSArPSB0aGlzLnNwZWVkQW5nbGUgKiBkdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0Tm9kZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMubGlzdE5vZGVbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hbmdsZSArPSB0aGlzLnNwZWVkQW5nbGUgKiBkdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdE5vZGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmxpc3ROb2RlWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYW5nbGUgKz0gdGhpcy5zcGVlZEFuZ2xlICogZHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/InfiniteHeights/scripts/Game/InfiniteHeights.GameView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b6dd7aYqLJCY7gZHiWV6nKt', 'InfiniteHeights.GameView');
// InfiniteHeights/scripts/Game/InfiniteHeights.GameView.ts

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
var InfiniteHeights_Ballon_1 = require("./InfiniteHeights.Ballon");
var InfiniteHeights_GameOver_1 = require("./InfiniteHeights.GameOver");
var InfiniteHeights_ObstacleManager_1 = require("./InfiniteHeights.ObstacleManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameView = /** @class */ (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nObstacle = null;
        // @property(cc.Node)
        // nObstacle_2: cc.Node = null;
        _this.listPrfObstacle = [];
        _this.prfBackGround = null;
        _this.nBgGame = null;
        _this.prfBallon = null;
        _this.nBallon = null;
        _this.listBg = [];
        _this.lbDiamond = null;
        _this.lbTime = null;
        _this.lbScore = null;
        _this.prfGameOver = null;
        _this.time = 0;
        _this.isFirstTouch = false;
        _this.isGameOver = false;
        _this.ballon = null;
        return _this;
        // genBackGround() {
        //     console.log("sadasd");
        //     let bg = cc.instantiate(this.prfBackGround).getComponent(BackGround).node
        //     bg.y = 1900;
        //     this.nBgGame.addChild(bg);
        // }
    }
    GameView_1 = GameView;
    // LIFE-CYCLE CALLBACKS:
    GameView.prototype.onLoad = function () {
        GameView_1.instance = this;
        //this.createObstacle();
        //this.genObstacle_2();
        this.ballon = cc.instantiate(this.prfBallon).getComponent(InfiniteHeights_Ballon_1.default).node;
        this.ballon.y = -500;
        this.nBallon.addChild(this.ballon);
        this.genObstacle();
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        InfiniteHeights_Global_1.Global.currentIndex = JSON.parse(cc.sys.localStorage.getItem("indexBallon")) || 1;
        console.log("index ", InfiniteHeights_Global_1.Global.currentIndex);
        this.resetGame();
    };
    GameView.prototype.start = function () {
    };
    GameView.prototype.createObstacle = function (node) {
        for (var i = 0; i < 2; i++) {
            var index = Math.floor(Math.random() * this.listPrfObstacle.length);
            var obstacle = cc.instantiate(this.listPrfObstacle[index]);
            var obstacleComponent = obstacle.getComponent(InfiniteHeights_ObstacleManager_1.default);
            if (obstacleComponent) {
                obstacle = obstacleComponent.node;
            }
            obstacle.y = -340 + i * 680;
            node.addChild(obstacle);
        }
    };
    GameView.prototype.genObstacle = function () {
        for (var i = 0; i < 3; i++) {
            this.createObstacle(this.listBg[i]);
        }
    };
    GameView.prototype.onTouchStart = function () {
        this.startGame();
    };
    GameView.prototype.startGame = function () {
        if (!this.isFirstTouch) {
            this.isFirstTouch = true;
            this.schedule(this.updateTime, 1);
        }
        else {
            this.fall();
        }
    };
    GameView.prototype.fall = function () {
        // this.ballon.setPosition(this.ballon.position.x, this.ballon.position.y - 80,0);
        if (this.isGameOver)
            return;
        cc.tween(this.ballon)
            .by(0.2, { y: -80 })
            .start();
    };
    GameView.prototype.updateTime = function () {
        if (this.isFirstTouch && !this.isGameOver) {
            this.time += 1;
            this.updateLbTime(this.lbTime);
            this.updateLbScore(this.lbScore);
        }
    };
    GameView.prototype.updateLbDiamond = function (lbDiamond) {
        //if (this.isGameOver) return;
        lbDiamond.string = InfiniteHeights_Global_1.Global.diaMond + ' ';
        this.updateLbScore(this.lbScore);
    };
    GameView.prototype.updateLbTime = function (lbTime) {
        lbTime.string = this.time + ' ';
    };
    GameView.prototype.updateLbScore = function (lbScore) {
        lbScore.string = this.time + InfiniteHeights_Global_1.Global.diaMond + ' ';
    };
    GameView.prototype.resetGame = function () {
        InfiniteHeights_Global_1.Global.diaMond = 0;
        InfiniteHeights_Global_1.Global.score = 0;
        this.time = 0;
        this.updateLbScore(this.lbScore);
        this.updateLbTime(this.lbTime);
        this.updateLbDiamond(this.lbDiamond);
        this.ballon.y = -500;
        cc.director.getCollisionManager().enabled = true;
        this.isFirstTouch = false;
        this.isGameOver = false;
        this.listBg.forEach(function (value) {
            value.removeAllChildren();
        });
        this.listBg[0].y = 3120;
        this.listBg[1].y = 1840;
        this.listBg[2].y = 560;
        this.listBg[3].y = -720;
        this.listBg[3].active = true;
        this.genObstacle();
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    };
    GameView.prototype.gameOver = function () {
        this.isGameOver = true;
        var gameOver = cc.instantiate(this.prfGameOver).getComponent(InfiniteHeights_GameOver_1.default).node;
        this.node.addChild(gameOver);
        this.unschedule(this.updateTime);
        cc.tween(this.ballon).stop();
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        cc.director.getCollisionManager().enabled = false;
        var scores = this.time + InfiniteHeights_Global_1.Global.diaMond;
        InfiniteHeights_Global_1.Global.dataScore.push(scores);
        InfiniteHeights_Global_1.Global.dataScore.sort(function (a, b) {
            return a > b ? -1 : 0;
        });
        console.log('save', InfiniteHeights_Global_1.Global.dataScore);
        cc.sys.localStorage.setItem('scores', JSON.stringify(InfiniteHeights_Global_1.Global.dataScore));
        //this.checkAndUnlockBalloons(scores);
        if (InfiniteHeights_Global_1.Global.currentIndex < InfiniteHeights_Global_1.Global.dataBallon.length) {
            if (scores >= InfiniteHeights_Global_1.Global.dataBallon[InfiniteHeights_Global_1.Global.currentIndex].score) {
                InfiniteHeights_Global_1.Global.dataBallon[InfiniteHeights_Global_1.Global.currentIndex].isUnlock = true;
                cc.sys.localStorage.setItem('dataBallons', JSON.stringify(InfiniteHeights_Global_1.Global.dataBallon));
                InfiniteHeights_Global_1.Global.currentIndex++;
                cc.sys.localStorage.setItem('indexBallon', JSON.stringify(InfiniteHeights_Global_1.Global.currentIndex));
                console.log("indexxxx ", InfiniteHeights_Global_1.Global.currentIndex);
            }
        }
        //Global.ballon.forEach()
    };
    // checkAndUnlockBalloons(scores: number) {
    //     for (let i = Global.currentIndex; i < Global.dataBallon.length; i++) {
    //         if (scores >= Global.dataBallon[i].score && !Global.dataBallon[i].isUnlock) {
    //             Global.dataBallon[i].isUnlock = true;
    //             Global.currentIndex = i + 1;
    //             cc.sys.localStorage.setItem('dataBallon', JSON.stringify(Global.dataBallon));
    //             cc.sys.localStorage.setItem('currentIndex', Global.currentIndex.toString());
    //             break;
    //         }
    //     }
    // }
    GameView.prototype.gameDestroy = function () {
        this.node.destroy();
    };
    GameView.prototype.update = function (dt) {
        if (this.isGameOver)
            return;
        if (this.isFirstTouch) {
            this.ballon.setPosition(this.ballon.position.x, this.ballon.position.y + 180 * dt, 0);
        }
    };
    var GameView_1;
    GameView.instance = null;
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "nObstacle", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameView.prototype, "listPrfObstacle", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameView.prototype, "prfBackGround", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "nBgGame", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameView.prototype, "prfBallon", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "nBallon", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "listBg", void 0);
    __decorate([
        property(cc.Label)
    ], GameView.prototype, "lbDiamond", void 0);
    __decorate([
        property(cc.Label)
    ], GameView.prototype, "lbTime", void 0);
    __decorate([
        property(cc.Label)
    ], GameView.prototype, "lbScore", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameView.prototype, "prfGameOver", void 0);
    GameView = GameView_1 = __decorate([
        ccclass
    ], GameView);
    return GameView;
}(cc.Component));
exports.default = GameView;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSW5maW5pdGVIZWlnaHRzXFxzY3JpcHRzXFxHYW1lXFxJbmZpbml0ZUhlaWdodHMuR2FtZVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsb0VBQW1EO0FBRW5ELG1FQUE4QztBQUM5Qyx1RUFBa0Q7QUFDbEQscUZBQWdFO0FBRTFELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNk1DO1FBek1HLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIscUJBQXFCO1FBQ3JCLCtCQUErQjtRQUUvQixxQkFBZSxHQUFnQixFQUFFLENBQUM7UUFFbEMsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFFaEMsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRTVCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFjLEVBQUUsQ0FBQztRQUd2QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRzNCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUM5QixVQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1Qsa0JBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZ0JBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsWUFBTSxHQUFHLElBQUksQ0FBQzs7UUFvS2Qsb0JBQW9CO1FBQ3BCLDZCQUE2QjtRQUM3QixnRkFBZ0Y7UUFDaEYsbUJBQW1CO1FBRW5CLGlDQUFpQztRQUVqQyxJQUFJO0lBQ1IsQ0FBQztpQkE3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QUFHLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQztTQUN2RjtJQUNMLENBQUM7O0lBbE1hLGlCQUFRLEdBQWEsSUFBSSxDQUFDO0lBRXhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1E7SUFJMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDYztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO21EQUNZO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDUTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDUTtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNLO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ007SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpREFDVTtJQTdCYixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNk01QjtJQUFELGVBQUM7Q0E3TUQsQUE2TUMsQ0E3TXFDLEVBQUUsQ0FBQyxTQUFTLEdBNk1qRDtrQkE3TW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4uL0luZmluaXRlSGVpZ2h0cy5HYW1lTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vSW5maW5pdGVIZWlnaHRzLkdsb2JhbFwiO1xyXG5pbXBvcnQgQmFja0dyb3VuZCBmcm9tIFwiLi9JbmZpbml0ZUhlaWdodHMuQmFja0dyb3VuZFwiO1xyXG5pbXBvcnQgQmFsbG9uIGZyb20gXCIuL0luZmluaXRlSGVpZ2h0cy5CYWxsb25cIjtcclxuaW1wb3J0IEdhbWVPdmVyIGZyb20gXCIuL0luZmluaXRlSGVpZ2h0cy5HYW1lT3ZlclwiO1xyXG5pbXBvcnQgb2JzdGFjbGVNYW5hZ2VyIGZyb20gXCIuL0luZmluaXRlSGVpZ2h0cy5PYnN0YWNsZU1hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogR2FtZVZpZXcgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuT2JzdGFjbGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICAvLyBuT2JzdGFjbGVfMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgbGlzdFByZk9ic3RhY2xlOiBjYy5QcmVmYWJbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZkJhY2tHcm91bmQ6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5CZ0dhbWU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZkJhbGxvbjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbkJhbGxvbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RCZzogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJEaWFtb25kOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJUaW1lOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJTY29yZTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZkdhbWVPdmVyOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgdGltZSA9IDA7XHJcbiAgICBpc0ZpcnN0VG91Y2ggPSBmYWxzZTtcclxuICAgIGlzR2FtZU92ZXIgPSBmYWxzZTtcclxuICAgIGJhbGxvbiA9IG51bGw7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIC8vdGhpcy5jcmVhdGVPYnN0YWNsZSgpO1xyXG4gICAgICAgIC8vdGhpcy5nZW5PYnN0YWNsZV8yKCk7XHJcbiAgICAgICAgdGhpcy5iYWxsb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkJhbGxvbikuZ2V0Q29tcG9uZW50KEJhbGxvbikubm9kZVxyXG4gICAgICAgIHRoaXMuYmFsbG9uLnkgPSAtNTAwO1xyXG4gICAgICAgIHRoaXMubkJhbGxvbi5hZGRDaGlsZCh0aGlzLmJhbGxvbik7XHJcbiAgICAgICAgdGhpcy5nZW5PYnN0YWNsZSgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCx0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgR2xvYmFsLmN1cnJlbnRJbmRleCA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaW5kZXhCYWxsb25cIikpIHx8IDE7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbmRleCBcIiwgR2xvYmFsLmN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgdGhpcy5yZXNldEdhbWUoKTtcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVPYnN0YWNsZShub2RlOiBjYy5Ob2RlKSB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGlzdFByZk9ic3RhY2xlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGxldCBvYnN0YWNsZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdFByZk9ic3RhY2xlW2luZGV4XSk7XHJcbiAgICAgICAgICAgIGxldCBvYnN0YWNsZUNvbXBvbmVudCA9IG9ic3RhY2xlLmdldENvbXBvbmVudChvYnN0YWNsZU1hbmFnZXIpO1xyXG4gICAgICAgICAgICBpZiAob2JzdGFjbGVDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIG9ic3RhY2xlID0gb2JzdGFjbGVDb21wb25lbnQubm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYnN0YWNsZS55ID0gLTM0MCArIGkgKiA2ODA7XHJcbiAgICAgICAgICAgIG5vZGUuYWRkQ2hpbGQob2JzdGFjbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZW5PYnN0YWNsZSgpIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlT2JzdGFjbGUodGhpcy5saXN0QmdbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uVG91Y2hTdGFydCgpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICBpZighdGhpcy5pc0ZpcnN0VG91Y2gpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0VG91Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlVGltZSwgMSk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZhbGwoKTtcclxuICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZhbGwoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5iYWxsb24uc2V0UG9zaXRpb24odGhpcy5iYWxsb24ucG9zaXRpb24ueCwgdGhpcy5iYWxsb24ucG9zaXRpb24ueSAtIDgwLDApO1xyXG4gICAgICAgIGlmKHRoaXMuaXNHYW1lT3ZlcikgcmV0dXJuO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuYmFsbG9uKVxyXG4gICAgICAgIC5ieSgwLjIsIHsgeTogLTgwfSlcclxuICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuICAgXHJcblxyXG4gICAgdXBkYXRlVGltZSgpIHtcclxuICAgICAgICBpZih0aGlzLmlzRmlyc3RUb3VjaCAmJiAhdGhpcy5pc0dhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZSArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxiVGltZSh0aGlzLmxiVGltZSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGJTY29yZSh0aGlzLmxiU2NvcmUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZUxiRGlhbW9uZChsYkRpYW1vbmQpIHtcclxuICAgICAgICAvL2lmICh0aGlzLmlzR2FtZU92ZXIpIHJldHVybjtcclxuICAgICAgICBsYkRpYW1vbmQuc3RyaW5nID0gR2xvYmFsLmRpYU1vbmQgKyAnICc7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMYlNjb3JlKHRoaXMubGJTY29yZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTGJUaW1lKGxiVGltZTogY2MuTGFiZWwpIHtcclxuICAgICAgICBsYlRpbWUuc3RyaW5nID0gdGhpcy50aW1lICsgJyAnO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUxiU2NvcmUobGJTY29yZTogY2MuTGFiZWwpIHtcclxuICAgICAgICBsYlNjb3JlLnN0cmluZyA9IHRoaXMudGltZSArIEdsb2JhbC5kaWFNb25kICsgJyAnO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0R2FtZSgpIHtcclxuICAgICAgICBHbG9iYWwuZGlhTW9uZCA9IDA7XHJcbiAgICAgICAgR2xvYmFsLnNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLnRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGJTY29yZSh0aGlzLmxiU2NvcmUpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGJUaW1lKHRoaXMubGJUaW1lKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxiRGlhbW9uZCh0aGlzLmxiRGlhbW9uZCk7XHJcbiAgICAgICAgdGhpcy5iYWxsb24ueSA9IC01MDA7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNGaXJzdFRvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5saXN0QmcuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIHZhbHVlLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmxpc3RCZ1swXS55ID0gMzEyMDtcclxuICAgICAgICB0aGlzLmxpc3RCZ1sxXS55ID0gMTg0MDtcclxuICAgICAgICB0aGlzLmxpc3RCZ1syXS55ID0gNTYwO1xyXG4gICAgICAgIHRoaXMubGlzdEJnWzNdLnkgPSAtNzIwO1xyXG4gICAgICAgIHRoaXMubGlzdEJnWzNdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nZW5PYnN0YWNsZSgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdhbWVPdmVyKCkge1xyXG4gICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgbGV0IGdhbWVPdmVyID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZHYW1lT3ZlcikuZ2V0Q29tcG9uZW50KEdhbWVPdmVyKS5ub2RlXHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGdhbWVPdmVyKTtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy51cGRhdGVUaW1lKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmJhbGxvbikuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBzY29yZXMgPSB0aGlzLnRpbWUgKyBHbG9iYWwuZGlhTW9uZDtcclxuICAgICAgICBHbG9iYWwuZGF0YVNjb3JlLnB1c2goc2NvcmVzKTtcclxuICAgICAgICBHbG9iYWwuZGF0YVNjb3JlLnNvcnQoKGEsYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYSA+IGIgPyAtIDEgOiAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYXZlJyxHbG9iYWwuZGF0YVNjb3JlKVxyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2NvcmVzJywgSlNPTi5zdHJpbmdpZnkoR2xvYmFsLmRhdGFTY29yZSkpOyAgICBcclxuICAgICAgICAvL3RoaXMuY2hlY2tBbmRVbmxvY2tCYWxsb29ucyhzY29yZXMpO1xyXG4gICAgICAgIGlmKEdsb2JhbC5jdXJyZW50SW5kZXggPCBHbG9iYWwuZGF0YUJhbGxvbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgaWYoc2NvcmVzID49IEdsb2JhbC5kYXRhQmFsbG9uW0dsb2JhbC5jdXJyZW50SW5kZXhdLnNjb3JlKSB7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGF0YUJhbGxvbltHbG9iYWwuY3VycmVudEluZGV4XS5pc1VubG9jayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhdGFCYWxsb25zJywgSlNPTi5zdHJpbmdpZnkoR2xvYmFsLmRhdGFCYWxsb24pKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgR2xvYmFsLmN1cnJlbnRJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbmRleEJhbGxvbicsIEpTT04uc3RyaW5naWZ5KEdsb2JhbC5jdXJyZW50SW5kZXgpKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImluZGV4eHh4IFwiLCBHbG9iYWwuY3VycmVudEluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG5cclxuICAgICAgICAvL0dsb2JhbC5iYWxsb24uZm9yRWFjaCgpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2hlY2tBbmRVbmxvY2tCYWxsb29ucyhzY29yZXM6IG51bWJlcikge1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSBHbG9iYWwuY3VycmVudEluZGV4OyBpIDwgR2xvYmFsLmRhdGFCYWxsb24ubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgaWYgKHNjb3JlcyA+PSBHbG9iYWwuZGF0YUJhbGxvbltpXS5zY29yZSAmJiAhR2xvYmFsLmRhdGFCYWxsb25baV0uaXNVbmxvY2spIHtcclxuICAgIC8vICAgICAgICAgICAgIEdsb2JhbC5kYXRhQmFsbG9uW2ldLmlzVW5sb2NrID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgICAgIEdsb2JhbC5jdXJyZW50SW5kZXggPSBpICsgMTtcclxuICAgIC8vICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGF0YUJhbGxvbicsIEpTT04uc3RyaW5naWZ5KEdsb2JhbC5kYXRhQmFsbG9uKSk7XHJcbiAgICAvLyAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRJbmRleCcsIEdsb2JhbC5jdXJyZW50SW5kZXgudG9TdHJpbmcoKSk7XHJcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIGdhbWVEZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuXHJcbiAgICAgICAgaWYodGhpcy5pc0dhbWVPdmVyKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICBpZih0aGlzLmlzRmlyc3RUb3VjaCkge1xyXG4gICAgICAgICAgICB0aGlzLmJhbGxvbi5zZXRQb3NpdGlvbih0aGlzLmJhbGxvbi5wb3NpdGlvbi54LHRoaXMuYmFsbG9uLnBvc2l0aW9uLnkgKyAxODAgKiBkdCwwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBnZW5CYWNrR3JvdW5kKCkge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwic2FkYXNkXCIpO1xyXG4gICAgLy8gICAgIGxldCBiZyA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmQmFja0dyb3VuZCkuZ2V0Q29tcG9uZW50KEJhY2tHcm91bmQpLm5vZGVcclxuICAgIC8vICAgICBiZy55ID0gMTkwMDtcclxuXHJcbiAgICAvLyAgICAgdGhpcy5uQmdHYW1lLmFkZENoaWxkKGJnKTtcclxuXHJcbiAgICAvLyB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/InfiniteHeights/scripts/Game/InfiniteHeights.BackGround.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
    BackGround.prototype.onLoad = function () {
    };
    BackGround.prototype.start = function () {
    };
    BackGround.prototype.update = function (dt) {
        if (!InfiniteHeights_GameView_1.default.instance.isFirstTouch || InfiniteHeights_GameView_1.default.instance.isGameOver) {
            return;
        }
        if (this.node.y <= -1280) {
            this.resetPos();
            this.destroyObstacle();
            InfiniteHeights_GameView_1.default.instance.createObstacle(this.node);
            if (this.idBg == 3) {
                this.node.active = false;
            }
        }
        this.node.y -= 2;
    };
    BackGround.prototype.resetPos = function () {
        this.node.y = 2560;
        this.isAdd = false;
    };
    BackGround.prototype.destroyObstacle = function () {
        for (var i = 0; i < this.node.childrenCount; i++) {
            this.node.children[i].destroy();
        }
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSW5maW5pdGVIZWlnaHRzXFxzY3JpcHRzXFxHYW1lXFxJbmZpbml0ZUhlaWdodHMuQmFja0dyb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix1RUFBa0Q7QUFFNUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUErQ0M7UUE3Q0UsV0FBSyxHQUFHLEtBQUssQ0FBQztRQUdkLFVBQUksR0FBVyxDQUFDLENBQUM7O0lBMENwQixDQUFDO0lBekNHLHdCQUF3QjtJQUV4QiwyQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELDBCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFHLENBQUMsa0NBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxJQUFJLGtDQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtZQUNoRSxPQUFPO1NBQ1Y7UUFFRCxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUVoQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsa0NBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QyxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUM1QjtTQUNKO1FBS0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCw2QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxvQ0FBZSxHQUFmO1FBQ0ksS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQXpDRjtRQURDLFFBQVE7NENBQ1E7SUFMQyxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBK0M5QjtJQUFELGlCQUFDO0NBL0NELEFBK0NDLENBL0N1QyxFQUFFLENBQUMsU0FBUyxHQStDbkQ7a0JBL0NvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL0luZmluaXRlSGVpZ2h0cy5HYW1lVmlld1wiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrR3JvdW5kIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgIGlzQWRkID0gZmFsc2U7XHJcbiAgIFxyXG4gICBAcHJvcGVydHlcclxuICAgaWRCZzogbnVtYmVyID0gMDtcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZighR2FtZVZpZXcuaW5zdGFuY2UuaXNGaXJzdFRvdWNoIHx8IEdhbWVWaWV3Lmluc3RhbmNlLmlzR2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5ub2RlLnkgPD0gLTEyODApIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvcygpO1xyXG4gICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5kZXN0cm95T2JzdGFjbGUoKTtcclxuICAgICAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UuY3JlYXRlT2JzdGFjbGUodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgaWYodGhpcy5pZEJnID09IDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS55IC09IDI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRQb3MoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnkgPSAyNTYwO1xyXG4gICAgICAgIHRoaXMuaXNBZGQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95T2JzdGFjbGUoKSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuW2ldLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/InfiniteHeights/scripts/Game/InfiniteHeights.Ballon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ae60F2FytPoYV4kQFV4eRt', 'InfiniteHeights.Ballon');
// InfiniteHeights/scripts/Game/InfiniteHeights.Ballon.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Ballon = /** @class */ (function (_super) {
    __extends(Ballon, _super);
    function Ballon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spBallon = null;
        _this.id = 0;
        // LIFE-CYCLE CALLBACKS:
        _this.isUnlock = false;
        return _this;
        // update (dt) {}
    }
    Ballon.prototype.onLoad = function () {
        this.EffectBallon();
    };
    Ballon.prototype.EffectBallon = function () {
        cc.tween(this.node)
            .repeatForever(cc.tween()
            .to(0.8, { angle: -10 })
            .to(0.9, { angle: 10 })
            .start()).start();
    };
    Ballon.prototype.setData = function (id, isUnlock) {
        this.id = id;
        this.isUnlock = isUnlock;
        this.spBallon.spriteFrame = InfiniteHeights_GameManager_1.default.instance.listSpfBallon[this.id];
        if (isUnlock) {
            this.node.opacity = 255;
        }
        else {
            this.node.opacity = 150;
        }
    };
    Ballon.prototype.start = function () {
    };
    __decorate([
        property(cc.Sprite)
    ], Ballon.prototype, "spBallon", void 0);
    Ballon = __decorate([
        ccclass
    ], Ballon);
    return Ballon;
}(cc.Component));
exports.default = Ballon;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSW5maW5pdGVIZWlnaHRzXFxzY3JpcHRzXFxHYW1lXFxJbmZpbml0ZUhlaWdodHMuQmFsbG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLDhFQUF5RDtBQUVuRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQXNDQztRQW5DRyxjQUFRLEdBQWMsSUFBSSxDQUFDO1FBQzNCLFFBQUUsR0FBRyxDQUFDLENBQUM7UUFDUCx3QkFBd0I7UUFDeEIsY0FBUSxHQUFHLEtBQUssQ0FBQzs7UUErQmpCLGlCQUFpQjtJQUNyQixDQUFDO0lBL0JHLHVCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELDZCQUFZLEdBQVo7UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbEIsYUFBYSxDQUNWLEVBQUUsQ0FBQyxLQUFLLEVBQUU7YUFDVCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUM7YUFDcEIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUMsQ0FBQzthQUNwQixLQUFLLEVBQUUsQ0FDWCxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2IsQ0FBQztJQUVELHdCQUFPLEdBQVAsVUFBUSxFQUFFLEVBQUMsUUFBUTtRQUNmLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcscUNBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV4RSxJQUFHLFFBQVEsRUFBRTtZQUNULElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztTQUMzQjthQUFLO1lBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1NBQzNCO0lBQ0wsQ0FBQztJQUVELHNCQUFLLEdBQUw7SUFFQSxDQUFDO0lBaENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ087SUFIVixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBc0MxQjtJQUFELGFBQUM7Q0F0Q0QsQUFzQ0MsQ0F0Q21DLEVBQUUsQ0FBQyxTQUFTLEdBc0MvQztrQkF0Q29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4uL0luZmluaXRlSGVpZ2h0cy5HYW1lTWFuYWdlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWxsb24gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBzcEJhbGxvbjogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIGlkID0gMDtcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgaXNVbmxvY2sgPSBmYWxzZTtcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5FZmZlY3RCYWxsb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBFZmZlY3RCYWxsb24oKSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgICBjYy50d2VlbigpXHJcbiAgICAgICAgICAgIC50bygwLjgsIHthbmdsZTotMTB9KVxyXG4gICAgICAgICAgICAudG8oMC45LCB7YW5nbGU6IDEwfSlcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICApLnN0YXJ0KClcclxuICAgIH1cclxuXHJcbiAgICBzZXREYXRhKGlkLGlzVW5sb2NrKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuaXNVbmxvY2sgPSBpc1VubG9jaztcclxuICAgICAgICB0aGlzLnNwQmFsbG9uLnNwcml0ZUZyYW1lID0gR2FtZU1hbmFnZXIuaW5zdGFuY2UubGlzdFNwZkJhbGxvblt0aGlzLmlkXTtcclxuXHJcbiAgICAgICAgaWYoaXNVbmxvY2spIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDE1MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
