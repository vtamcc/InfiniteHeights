
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
require('./assets/InfiniteHeights/scripts/Game/InfiniteHeights.Shop');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSW5maW5pdGVIZWlnaHRzXFxzY3JpcHRzXFxHYW1lXFxJbmZpbml0ZUhlaWdodHMuR2FtZU92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsOEVBQXlEO0FBQ3pELG9FQUFtRDtBQUNuRCxtRUFBOEM7QUFDOUMsdUVBQWtEO0FBQ2xELCtEQUEwQztBQUVwQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTBEQztRQXZERSxhQUFPLEdBQWEsSUFBSSxDQUFDO1FBR3pCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0IsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixhQUFPLEdBQVcsSUFBSSxDQUFDO1FBR3ZCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLFdBQUssR0FBRyxDQUFDLENBQUM7O1FBeUNULGlCQUFpQjtJQUNyQixDQUFDO0lBekNHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksc0hBQXNIO1FBQ3RILEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQywrQkFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsK0JBQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2pELGtDQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsa0NBQVEsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRCxrQ0FBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0ksa0NBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUNJLGtDQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3RELDhCQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzNCLHFDQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxxQ0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxvQ0FBaUIsR0FBakI7UUFDSSxJQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFOUYsSUFBSSwrQkFBTSxDQUFDLGlCQUFpQixHQUFHLG1CQUFtQixFQUFFO1lBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDL0MsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLCtCQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUM5RTthQUFNO1lBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQUNELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBcERGO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ007SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDUTtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNLO0lBR3hCO1FBREMsUUFBUSxDQUFDLGdDQUFNLENBQUM7NkNBQ007SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDWTtJQWZaLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwRDVCO0lBQUQsZUFBQztDQTFERCxBQTBEQyxDQTFEcUMsRUFBRSxDQUFDLFNBQVMsR0EwRGpEO2tCQTFEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi4vSW5maW5pdGVIZWlnaHRzLkdhbWVNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi9JbmZpbml0ZUhlaWdodHMuR2xvYmFsXCI7XHJcbmltcG9ydCBCYWxsb24gZnJvbSBcIi4vSW5maW5pdGVIZWlnaHRzLkJhbGxvblwiO1xyXG5pbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4vSW5maW5pdGVIZWlnaHRzLkdhbWVWaWV3XCI7XHJcbmltcG9ydCBTaG9wIGZyb20gXCIuL0luZmluaXRlSGVpZ2h0cy5TaG9wXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPdmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgbGJTY29yZTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICBsYkRpYW1vbmQ6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgbGJUaW1lOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICBAcHJvcGVydHkoQmFsbG9uKVxyXG4gICBuQmFsbG9uOiBCYWxsb24gPSBudWxsO1xyXG5cclxuICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgIG5VbkxvY2tCYWxsb246IGNjLk5vZGUgPSBudWxsO1xyXG4gICBpbmRleCA9IDA7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8vR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VubG9ja0luZGV4QmFsbG9uJykpIHx8IEdsb2JhbC51bmxvY2tJbmRleEJhbGxvbjtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzY29yZXNcIiwgSlNPTi5zdHJpbmdpZnkoR2xvYmFsLmRhdGFTY29yZSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2xvYmFsIFwiLCBHbG9iYWwudW5sb2NrSW5kZXhCYWxsb24pO1xyXG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLnVwZGF0ZUxiVGltZSh0aGlzLmxiVGltZSk7XHJcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UudXBkYXRlTGJEaWFtb25kKHRoaXMubGJEaWFtb25kKTtcclxuICAgICAgICBHYW1lVmlldy5pbnN0YW5jZS51cGRhdGVMYlNjb3JlKHRoaXMubGJTY29yZSk7XHJcbiAgICAgICAgdGhpcy5jaGVja1VubG9ja0JhbGxvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVwbGF5KCkge1xyXG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLnJlc2V0R2FtZSgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ib21lKCkge1xyXG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLmdhbWVEZXN0cm95KCk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzZWxlY3RlZEJhbGxvbkluZGV4Jyk7XHJcbiAgICAgICAgU2hvcC5pbnN0YW5jZS51cGRhdGVTaG9wKCk7XHJcbiAgICAgICAgR2FtZU1hbmFnZXIuaW5zdGFuY2UudXBkYXRlUmFuayhHYW1lTWFuYWdlci5pbnN0YW5jZS5uTGlzdE5vZGVSYW5rKTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrVW5sb2NrQmFsbG9uKCkge1xyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzVW5sb2NrSW5kZXggPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndW5sb2NrSW5kZXhCYWxsb24nKSkgfHwgMDtcclxuICAgIFxyXG4gICAgICAgIGlmIChHbG9iYWwudW5sb2NrSW5kZXhCYWxsb24gPiBwcmV2aW91c1VubG9ja0luZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMublVuTG9ja0JhbGxvbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5CYWxsb24uc2V0RGF0YShHbG9iYWwudW5sb2NrSW5kZXhCYWxsb24pO1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VubG9ja0luZGV4QmFsbG9uJywgR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5VbkxvY2tCYWxsb24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/InfiniteHeights/scripts/Game/InfiniteHeights.Shop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSW5maW5pdGVIZWlnaHRzXFxzY3JpcHRzXFxHYW1lXFxJbmZpbml0ZUhlaWdodHMuU2hvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixvRUFBbUQ7QUFFN0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFrSEM7UUE5R0csbUJBQWEsR0FBcUIsRUFBRSxDQUFDO1FBR3JDLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFHNUIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUc1QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRzVCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsV0FBSyxHQUFZLElBQUksQ0FBQzs7UUE4RnRCLGlCQUFpQjtJQUNyQixDQUFDO2FBbEhvQixJQUFJO0lBcUJyQixxQkFBTSxHQUFOO1FBQ0ksTUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsK0JBQU0sQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksK0JBQU0sQ0FBQyxpQkFBaUIsQ0FBQztRQUNwSCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSwrQkFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsK0JBQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lB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QUUsQ0FBQyxNQUFNLENBQUM7MkNBQ1E7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1Q0FDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VDQUNJO0lBbkJMLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FrSHhCO0lBQUQsV0FBQztDQWxIRCxBQWtIQyxDQWxIaUMsRUFBRSxDQUFDLFNBQVMsR0FrSDdDO2tCQWxIb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi9JbmZpbml0ZUhlaWdodHMuR2xvYmFsXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogU2hvcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBsaXN0U3BmQmFsbG9uOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIG5CYWxsb25fMDogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgbkJhbGxvbl8xOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBuQmFsbG9uXzI6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuTmV4dDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuUHJldjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIFNob3AuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIEdsb2JhbC51bmxvY2tJbmRleEJhbGxvbiA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1bmxvY2tJbmRleEJhbGxvbicpKSB8fCBHbG9iYWwudW5sb2NrSW5kZXhCYWxsb247XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1bkxvY2tJbmRleCBcIiwgR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluZGV4QmFsbG9uXCIsIEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24pO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2hvcCgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIG9uTmV4dCgpIHtcclxuICAgIC8vICAgICBHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uKys7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJPbk5leHQgXCIsIEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24pO1xyXG4gICAgLy8gICAgIGlmIChHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uID4gR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uKVxyXG4gICAgLy8gICAgICAgICBHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uID0gR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uO1xyXG4gICAgLy8gICAgIHRoaXMudXBkYXRlU2hvcCgpXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gb25QcmV2KCkge1xyXG4gICAgLy8gICAgIEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24tLTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIk9uUHJldiBcIiwgR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbik7XHJcbiAgICAvLyAgICAgaWYgKEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24gPCAwKVxyXG4gICAgLy8gICAgICAgICBHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uID0gMDtcclxuXHJcbiAgICAvLyAgICAgdGhpcy51cGRhdGVTaG9wKClcclxuICAgIC8vIH1cclxuXHJcbiAgICBvbk5leHQoKSB7XHJcbiAgICAgICAgaWYgKEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24gPCBHbG9iYWwudW5sb2NrUG9pbnRzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbisrO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNob3AoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPbk5leHQgXCIsIEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24pO1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRJbmRleEJhbGxvbicsIEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24pO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5uTmV4dC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZGFzZFwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgb25QcmV2KCkge1xyXG4gICAgICAgIGlmIChHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uID4gMCkge1xyXG4gICAgICAgICAgICBHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uLS07XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2hvcCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9uUHJldiBcIiwgR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbik7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudEluZGV4QmFsbG9uJywgR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNob3AoKSB7XHJcbiAgICAgICAgLy8gbmV1IGN1cnJlbnRJbmRleEJhbGxvbiA9PSAwID0+IGFuIGJ1dHRvbiBQcmV2aW91cywgQmFsbG9uIDBcclxuICAgICAgICAvLyBuZXUgY3VycmVudEluZGV4QmFsbG9uID4gMCAmJiA8IHVubG9ja0luZGV4QmFsbG9uID0+IHh1IGx5IGdpXHJcbiAgICAgICAgLy8gbmV1IGN1cnJlbnRJbmRleEJhbGxvbiA9PSB1bmxvY2tJbmRleEJhbGxvbiA9PmFuIGJ1dHRvbiBOZXh0LCBCYWxsb24gMlxyXG5cclxuICAgICAgICB0aGlzLm5CYWxsb25fMS5zcHJpdGVGcmFtZSA9IHRoaXMubGlzdFNwZkJhbGxvbltHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uXVxyXG4gICAgICAgIGlmIChHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMublByZXYuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubk5leHQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5uQmFsbG9uXzAubm9kZS5hY3RpdmUgPSBmYWxzZTsgXHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKEdsb2JhbC51bmxvY2tJbmRleEJhbGxvbiA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubkJhbGxvbl8yLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubkJhbGxvbl8yLnNwcml0ZUZyYW1lID0gdGhpcy5saXN0U3BmQmFsbG9uW0dsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24gKyAxXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubkJhbGxvbl8yLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG5cclxuXHJcbiAgICAgICAgZWxzZSBpZiAoR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbiA9PT0gR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMublByZXYuYWN0aXZlID0gdHJ1ZTsgICBcclxuICAgICAgICAgICAgdGhpcy5uTmV4dC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5uQmFsbG9uXzAubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5CYWxsb25fMC5zcHJpdGVGcmFtZSA9IHRoaXMubGlzdFNwZkJhbGxvbltHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uIC0gMV07XHJcbiAgICAgICAgICAgIHRoaXMubkJhbGxvbl8yLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmIChHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uID4gMCAmJiBHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uIDwgR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMublByZXYuYWN0aXZlID0gdHJ1ZTsgXHJcbiAgICAgICAgICAgIHRoaXMubk5leHQuYWN0aXZlID0gdHJ1ZTsgICBcclxuICAgICAgICAgICAgdGhpcy5uQmFsbG9uXzAubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5CYWxsb25fMi5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubkJhbGxvbl8wLnNwcml0ZUZyYW1lID0gdGhpcy5saXN0U3BmQmFsbG9uW0dsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24gLSAxXTtcclxuICAgICAgICAgICAgdGhpcy5uQmFsbG9uXzIuc3ByaXRlRnJhbWUgPSB0aGlzLmxpc3RTcGZCYWxsb25bR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbiArIDFdO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgaWYgKEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24gPiBHbG9iYWwudW5sb2NrSW5kZXhCYWxsb24pIHtcclxuICAgICAgICAgICAgR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbiA9IEdsb2JhbC51bmxvY2tJbmRleEJhbGxvbjtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTaG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
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
    Ballon.prototype.setData = function (id) {
        this.id = id;
        this.spBallon.spriteFrame = InfiniteHeights_GameManager_1.default.instance.listSpfBallon[this.id];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSW5maW5pdGVIZWlnaHRzXFxzY3JpcHRzXFxHYW1lXFxJbmZpbml0ZUhlaWdodHMuQmFsbG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLDhFQUF5RDtBQUVuRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQStCQztRQTVCRyxjQUFRLEdBQWMsSUFBSSxDQUFDO1FBQzNCLFFBQUUsR0FBRyxDQUFDLENBQUM7UUFDUCx3QkFBd0I7UUFDeEIsY0FBUSxHQUFHLEtBQUssQ0FBQzs7UUF3QmpCLGlCQUFpQjtJQUNyQixDQUFDO0lBeEJHLHVCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELDZCQUFZLEdBQVo7UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbEIsYUFBYSxDQUNWLEVBQUUsQ0FBQyxLQUFLLEVBQUU7YUFDVCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUM7YUFDcEIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUMsQ0FBQzthQUNwQixLQUFLLEVBQUUsQ0FDWCxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2IsQ0FBQztJQUVELHdCQUFPLEdBQVAsVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxxQ0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxzQkFBSyxHQUFMO0lBRUEsQ0FBQztJQXpCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNPO0lBSFYsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQStCMUI7SUFBRCxhQUFDO0NBL0JELEFBK0JDLENBL0JtQyxFQUFFLENBQUMsU0FBUyxHQStCL0M7a0JBL0JvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuLi9JbmZpbml0ZUhlaWdodHMuR2FtZU1hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbG9uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgc3BCYWxsb246IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBpZCA9IDA7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIGlzVW5sb2NrID0gZmFsc2U7XHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuRWZmZWN0QmFsbG9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgRWZmZWN0QmFsbG9uKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgICAgY2MudHdlZW4oKVxyXG4gICAgICAgICAgICAudG8oMC44LCB7YW5nbGU6LTEwfSlcclxuICAgICAgICAgICAgLnRvKDAuOSwge2FuZ2xlOiAxMH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgKS5zdGFydCgpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGF0YShpZCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLnNwQmFsbG9uLnNwcml0ZUZyYW1lID0gR2FtZU1hbmFnZXIuaW5zdGFuY2UubGlzdFNwZkJhbGxvblt0aGlzLmlkXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
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
        InfiniteHeights_Global_1.Global.unlockIndexBallon = JSON.parse(cc.sys.localStorage.getItem('unlockIndexBallon')) || InfiniteHeights_Global_1.Global.unlockIndexBallon;
        console.log("index ", InfiniteHeights_Global_1.Global.unlockIndexBallon);
        InfiniteHeights_Global_1.Global.currentIndexBallon = JSON.parse(cc.sys.localStorage.getItem('currentIndexBallon')) || 0;
        this.ballon = cc.instantiate(this.prfBallon).getComponent(InfiniteHeights_Ballon_1.default);
        this.ballon.node.y = -500;
        this.ballon.setData(InfiniteHeights_Global_1.Global.currentIndexBallon);
        this.nBallon.addChild(this.ballon.node);
        this.genObstacle();
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
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
        cc.tween(this.ballon.node)
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
        this.ballon.node.y = -500;
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
        if (scores >= InfiniteHeights_Global_1.Global.unlockPoints[InfiniteHeights_Global_1.Global.unlockIndexBallon + 1]) {
            InfiniteHeights_Global_1.Global.unlockIndexBallon++;
            cc.sys.localStorage.setItem('unlockIndexBallon', InfiniteHeights_Global_1.Global.unlockIndexBallon);
            console.log("unLockIndex ", InfiniteHeights_Global_1.Global.unlockIndexBallon);
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
            this.ballon.node.setPosition(this.ballon.node.position.x, this.ballon.node.position.y + 180 * dt, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSW5maW5pdGVIZWlnaHRzXFxzY3JpcHRzXFxHYW1lXFxJbmZpbml0ZUhlaWdodHMuR2FtZVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsb0VBQW1EO0FBRW5ELG1FQUE4QztBQUM5Qyx1RUFBa0Q7QUFDbEQscUZBQWdFO0FBRTFELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBMk1DO1FBdk1HLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIscUJBQXFCO1FBQ3JCLCtCQUErQjtRQUUvQixxQkFBZSxHQUFnQixFQUFFLENBQUM7UUFFbEMsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFFaEMsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRTVCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFjLEVBQUUsQ0FBQztRQUd2QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRzNCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUM5QixVQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1Qsa0JBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZ0JBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsWUFBTSxHQUFHLElBQUksQ0FBQzs7UUFrS2Qsb0JBQW9CO1FBQ3BCLDZCQUE2QjtRQUM3QixnRkFBZ0Y7UUFDaEYsbUJBQW1CO1FBRW5CLGlDQUFpQztRQUVqQyxJQUFJO0lBQ1IsQ0FBQztpQkEz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QUMsQ0FBQyxDQUFDO1NBQ3hHO0lBQ0wsQ0FBQzs7SUFoTWEsaUJBQVEsR0FBYSxJQUFJLENBQUM7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQUkxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNjO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7bURBQ1k7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNRO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNRO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ0s7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDTTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNVO0lBN0JiLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EyTTVCO0lBQUQsZUFBQztDQTNNRCxBQTJNQyxDQTNNcUMsRUFBRSxDQUFDLFNBQVMsR0EyTWpEO2tCQTNNb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi4vSW5maW5pdGVIZWlnaHRzLkdhbWVNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi9JbmZpbml0ZUhlaWdodHMuR2xvYmFsXCI7XHJcbmltcG9ydCBCYWNrR3JvdW5kIGZyb20gXCIuL0luZmluaXRlSGVpZ2h0cy5CYWNrR3JvdW5kXCI7XHJcbmltcG9ydCBCYWxsb24gZnJvbSBcIi4vSW5maW5pdGVIZWlnaHRzLkJhbGxvblwiO1xyXG5pbXBvcnQgR2FtZU92ZXIgZnJvbSBcIi4vSW5maW5pdGVIZWlnaHRzLkdhbWVPdmVyXCI7XHJcbmltcG9ydCBvYnN0YWNsZU1hbmFnZXIgZnJvbSBcIi4vSW5maW5pdGVIZWlnaHRzLk9ic3RhY2xlTWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBHYW1lVmlldyA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5PYnN0YWNsZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIG5PYnN0YWNsZV8yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBsaXN0UHJmT2JzdGFjbGU6IGNjLlByZWZhYltdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJmQmFja0dyb3VuZDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbkJnR2FtZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJmQmFsbG9uOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuQmFsbG9uOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdEJnOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYkRpYW1vbmQ6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYlRpbWU6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYlNjb3JlOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJmR2FtZU92ZXI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICB0aW1lID0gMDtcclxuICAgIGlzRmlyc3RUb3VjaCA9IGZhbHNlO1xyXG4gICAgaXNHYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgYmFsbG9uID0gbnVsbDtcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIC8vdGhpcy5jcmVhdGVPYnN0YWNsZSgpO1xyXG4gICAgICAgIC8vdGhpcy5nZW5PYnN0YWNsZV8yKCk7XHJcbiAgICAgICAgR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VubG9ja0luZGV4QmFsbG9uJykpIHx8IEdsb2JhbC51bmxvY2tJbmRleEJhbGxvbjtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluZGV4IFwiLCBHbG9iYWwudW5sb2NrSW5kZXhCYWxsb24pO1xyXG4gICAgICAgIEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24gPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudEluZGV4QmFsbG9uJykpIHx8IDAgO1xyXG4gICAgICAgIHRoaXMuYmFsbG9uID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZCYWxsb24pLmdldENvbXBvbmVudChCYWxsb24pXHJcbiAgICAgICAgdGhpcy5iYWxsb24ubm9kZS55ID0gLTUwMDtcclxuICAgICAgICB0aGlzLmJhbGxvbi5zZXREYXRhKEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24pXHJcbiAgICAgICAgdGhpcy5uQmFsbG9uLmFkZENoaWxkKHRoaXMuYmFsbG9uLm5vZGUpO1xyXG4gICAgICAgIHRoaXMuZ2VuT2JzdGFjbGUoKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVzZXRHYW1lKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVPYnN0YWNsZShub2RlOiBjYy5Ob2RlKSB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGlzdFByZk9ic3RhY2xlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGxldCBvYnN0YWNsZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdFByZk9ic3RhY2xlW2luZGV4XSk7XHJcbiAgICAgICAgICAgIGxldCBvYnN0YWNsZUNvbXBvbmVudCA9IG9ic3RhY2xlLmdldENvbXBvbmVudChvYnN0YWNsZU1hbmFnZXIpO1xyXG4gICAgICAgICAgICBpZiAob2JzdGFjbGVDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIG9ic3RhY2xlID0gb2JzdGFjbGVDb21wb25lbnQubm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYnN0YWNsZS55ID0gLTM0MCArIGkgKiA2ODA7XHJcbiAgICAgICAgICAgIG5vZGUuYWRkQ2hpbGQob2JzdGFjbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZW5PYnN0YWNsZSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU9ic3RhY2xlKHRoaXMubGlzdEJnW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvblRvdWNoU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3RUb3VjaCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzRmlyc3RUb3VjaCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVUaW1lLCAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZhbGwoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZhbGwoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5iYWxsb24uc2V0UG9zaXRpb24odGhpcy5iYWxsb24ucG9zaXRpb24ueCwgdGhpcy5iYWxsb24ucG9zaXRpb24ueSAtIDgwLDApO1xyXG4gICAgICAgIGlmICh0aGlzLmlzR2FtZU92ZXIpIHJldHVybjtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmJhbGxvbi5ub2RlKVxyXG4gICAgICAgICAgICAuYnkoMC4yLCB7IHk6IC04MCB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdXBkYXRlVGltZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0ZpcnN0VG91Y2ggJiYgIXRoaXMuaXNHYW1lT3Zlcikge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWUgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVMYlRpbWUodGhpcy5sYlRpbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxiU2NvcmUodGhpcy5sYlNjb3JlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGVMYkRpYW1vbmQobGJEaWFtb25kKSB7XHJcbiAgICAgICAgLy9pZiAodGhpcy5pc0dhbWVPdmVyKSByZXR1cm47XHJcbiAgICAgICAgbGJEaWFtb25kLnN0cmluZyA9IEdsb2JhbC5kaWFNb25kICsgJyAnO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGJTY29yZSh0aGlzLmxiU2NvcmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUxiVGltZShsYlRpbWU6IGNjLkxhYmVsKSB7XHJcbiAgICAgICAgbGJUaW1lLnN0cmluZyA9IHRoaXMudGltZSArICcgJztcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVMYlNjb3JlKGxiU2NvcmU6IGNjLkxhYmVsKSB7XHJcbiAgICAgICAgbGJTY29yZS5zdHJpbmcgPSB0aGlzLnRpbWUgKyBHbG9iYWwuZGlhTW9uZCArICcgJztcclxuICAgIH1cclxuXHJcbiAgICByZXNldEdhbWUoKSB7XHJcbiAgICAgICAgR2xvYmFsLmRpYU1vbmQgPSAwO1xyXG4gICAgICAgIEdsb2JhbC5zY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy50aW1lID0gMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxiU2NvcmUodGhpcy5sYlNjb3JlKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxiVGltZSh0aGlzLmxiVGltZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMYkRpYW1vbmQodGhpcy5sYkRpYW1vbmQpO1xyXG4gICAgICAgIHRoaXMuYmFsbG9uLm5vZGUueSA9IC01MDA7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNGaXJzdFRvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5saXN0QmcuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIHZhbHVlLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmxpc3RCZ1swXS55ID0gMzEyMDtcclxuICAgICAgICB0aGlzLmxpc3RCZ1sxXS55ID0gMTg0MDtcclxuICAgICAgICB0aGlzLmxpc3RCZ1syXS55ID0gNTYwO1xyXG4gICAgICAgIHRoaXMubGlzdEJnWzNdLnkgPSAtNzIwO1xyXG4gICAgICAgIHRoaXMubGlzdEJnWzNdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nZW5PYnN0YWNsZSgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdhbWVPdmVyKCkge1xyXG4gICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgbGV0IGdhbWVPdmVyID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZHYW1lT3ZlcikuZ2V0Q29tcG9uZW50KEdhbWVPdmVyKS5ub2RlXHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGdhbWVPdmVyKTtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy51cGRhdGVUaW1lKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmJhbGxvbikuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBzY29yZXMgPSB0aGlzLnRpbWUgKyBHbG9iYWwuZGlhTW9uZDtcclxuICAgICAgICBHbG9iYWwuZGF0YVNjb3JlLnB1c2goc2NvcmVzKTtcclxuICAgICAgICBHbG9iYWwuZGF0YVNjb3JlLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGEgPiBiID8gLSAxIDogMDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2F2ZScsIEdsb2JhbC5kYXRhU2NvcmUpXHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzY29yZXMnLCBKU09OLnN0cmluZ2lmeShHbG9iYWwuZGF0YVNjb3JlKSk7XHJcblxyXG4gICAgICAgIGlmIChzY29yZXMgPj0gR2xvYmFsLnVubG9ja1BvaW50c1tHbG9iYWwudW5sb2NrSW5kZXhCYWxsb24gKyAxXSkge1xyXG4gICAgICAgICAgICBHbG9iYWwudW5sb2NrSW5kZXhCYWxsb24rKztcclxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1bmxvY2tJbmRleEJhbGxvbicsIEdsb2JhbC51bmxvY2tJbmRleEJhbGxvbik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidW5Mb2NrSW5kZXggXCIsIEdsb2JhbC51bmxvY2tJbmRleEJhbGxvbik7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vR2xvYmFsLmJhbGxvbi5mb3JFYWNoKClcclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGVja0FuZFVubG9ja0JhbGxvb25zKHNjb3JlczogbnVtYmVyKSB7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IEdsb2JhbC5jdXJyZW50SW5kZXg7IGkgPCBHbG9iYWwuZGF0YUJhbGxvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBpZiAoc2NvcmVzID49IEdsb2JhbC5kYXRhQmFsbG9uW2ldLnNjb3JlICYmICFHbG9iYWwuZGF0YUJhbGxvbltpXS5pc1VubG9jaykge1xyXG4gICAgLy8gICAgICAgICAgICAgR2xvYmFsLmRhdGFCYWxsb25baV0uaXNVbmxvY2sgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICAgICAgR2xvYmFsLmN1cnJlbnRJbmRleCA9IGkgKyAxO1xyXG4gICAgLy8gICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXRhQmFsbG9uJywgSlNPTi5zdHJpbmdpZnkoR2xvYmFsLmRhdGFCYWxsb24pKTtcclxuICAgIC8vICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudEluZGV4JywgR2xvYmFsLmN1cnJlbnRJbmRleC50b1N0cmluZygpKTtcclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgZ2FtZURlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZShkdCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0ZpcnN0VG91Y2gpIHtcclxuICAgICAgICAgICAgdGhpcy5iYWxsb24ubm9kZS5zZXRQb3NpdGlvbih0aGlzLmJhbGxvbi5ub2RlLnBvc2l0aW9uLngsIHRoaXMuYmFsbG9uLm5vZGUucG9zaXRpb24ueSArIDE4MCAqIGR0LCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBnZW5CYWNrR3JvdW5kKCkge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwic2FkYXNkXCIpO1xyXG4gICAgLy8gICAgIGxldCBiZyA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmQmFja0dyb3VuZCkuZ2V0Q29tcG9uZW50KEJhY2tHcm91bmQpLm5vZGVcclxuICAgIC8vICAgICBiZy55ID0gMTkwMDtcclxuXHJcbiAgICAvLyAgICAgdGhpcy5uQmdHYW1lLmFkZENoaWxkKGJnKTtcclxuXHJcbiAgICAvLyB9XHJcbn1cclxuIl19
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
    Global.unlockPoints = [0, 10, 20, 30, 40, 50, 60, 70, 80];
    Global.currentIndexBallon = 0;
    Global.unlockIndexBallon = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSW5maW5pdGVIZWlnaHRzXFxzY3JpcHRzXFxJbmZpbml0ZUhlaWdodHMuR2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7O0FBRWxGO0lBQUE7SUFPQSxDQUFDO0lBTlUsY0FBTyxHQUFHLENBQUMsQ0FBQztJQUNaLFlBQUssR0FBRyxDQUFDLENBQUM7SUFDVixnQkFBUyxHQUFHLEVBQUUsQ0FBQztJQUNmLG1CQUFZLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELHlCQUFrQixHQUFHLENBQUMsQ0FBQztJQUN2Qix3QkFBaUIsR0FBRyxDQUFDLENBQUM7SUFDakMsYUFBQztDQVBELEFBT0MsSUFBQTtBQVBZLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuZXhwb3J0IGNsYXNzIEdsb2JhbHtcclxuICAgIHN0YXRpYyBkaWFNb25kID0gMDtcclxuICAgIHN0YXRpYyBzY29yZSA9IDA7XHJcbiAgICBzdGF0aWMgZGF0YVNjb3JlID0gW107XHJcbiAgICBzdGF0aWMgdW5sb2NrUG9pbnRzID0gWzAsIDEwLCAyMCwgMzAsIDQwLCA1MCwgNjAsIDcwLCA4MF07XHJcbiAgICBzdGF0aWMgY3VycmVudEluZGV4QmFsbG9uID0gMDtcclxuICAgIHN0YXRpYyB1bmxvY2tJbmRleEJhbGxvbiA9IDA7XHJcbn1cclxuIl19
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
        _this.isClickNext = 0;
        return _this;
        // update (dt) {}
    }
    GameManager_1 = GameManager;
    GameManager.prototype.onLoad = function () {
        GameManager_1.instance = this;
        this.updateRank(this.nListNodeRank);
    };
    GameManager.prototype.start = function () {
    };
    GameManager.prototype.updateRank = function (listNodeLabel) {
        InfiniteHeights_Global_1.Global.dataScore = JSON.parse(cc.sys.localStorage.getItem("scores")) || [];
        console.log("Diem luu ne ", InfiniteHeights_Global_1.Global.dataScore);
        if (InfiniteHeights_Global_1.Global.dataScore.length === 0) {
            listNodeLabel.forEach(function (node) {
                node.active = false;
            });
        }
        else {
            listNodeLabel.forEach(function (node, index) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSW5maW5pdGVIZWlnaHRzXFxzY3JpcHRzXFxJbmZpbml0ZUhlaWdodHMuR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsbUVBQWtEO0FBRTVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBa0VDO1FBOURHLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLG1CQUFhLEdBQWMsRUFBRSxDQUFDO1FBRzlCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsbUJBQWEsR0FBcUIsRUFBRSxDQUFDO1FBR3JDLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBRzdCLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBR2hDLGlCQUFXLEdBQWMsRUFBRSxDQUFDO1FBQzVCLGlCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGlCQUFXLEdBQUcsQ0FBQyxDQUFDOztRQXlDaEIsaUJBQWlCO0lBQ3JCLENBQUM7b0JBbEVvQixXQUFXO0lBeUI1Qiw0QkFBTSxHQUFOO1FBQ0ksYUFBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNELDJCQUFLLEdBQUw7SUFFQSxDQUFDO0lBR0QsZ0NBQVUsR0FBVixVQUFXLGFBQXdCO1FBQy9CLCtCQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLCtCQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUMsSUFBSSwrQkFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQy9CLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2dCQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUs7Z0JBRTlCLElBQUksS0FBSyxHQUFHLCtCQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtvQkFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRywrQkFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7aUJBQ3RFO3FCQUFNO29CQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2lCQUN2QjtZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFHTCxDQUFDO0lBRUQsaUNBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFHRCwrQkFBUyxHQUFUO1FBQ0ksSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7SUE5RGEsb0JBQVEsR0FBZ0IsSUFBSSxDQUFDO0lBRTNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ1U7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDWTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNLO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0RBQ1k7SUFHckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztpREFDTztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNZO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ1U7SUF0QlgsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQWtFL0I7SUFBRCxrQkFBQztDQWxFRCxBQWtFQyxDQWxFd0MsRUFBRSxDQUFDLFNBQVMsR0FrRXBEO2tCQWxFb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBCYWxsb24gZnJvbSBcIi4vR2FtZS9JbmZpbml0ZUhlaWdodHMuQmFsbG9uXCI7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuL0luZmluaXRlSGVpZ2h0cy5HbG9iYWxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogR2FtZU1hbmFnZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZkdhbWVWaWV3OiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbkxpc3ROb2RlUmFuazogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJ0ZXN0OiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgbGlzdFNwZkJhbGxvbjogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QYWdlVmlldylcclxuICAgIHBhZ2VWaWV3OiBjYy5QYWdlVmlldyA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGJhbGxvblByZWZhYnM6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuTGlzdEJhbGxvbjogY2MuTm9kZVtdID0gW107XHJcbiAgICBpbmRleEJhbGxvbiA9IDE7XHJcbiAgICBpc0NsaWNrTmV4dCA9IDA7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgR2FtZU1hbmFnZXIuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmFuayh0aGlzLm5MaXN0Tm9kZVJhbmspO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuIFxyXG4gICAgdXBkYXRlUmFuayhsaXN0Tm9kZUxhYmVsOiBjYy5Ob2RlW10pIHtcclxuICAgICAgICBHbG9iYWwuZGF0YVNjb3JlID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzY29yZXNcIikpIHx8IFtdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGllbSBsdXUgbmUgXCIsIEdsb2JhbC5kYXRhU2NvcmUpO1xyXG4gICAgICAgIGlmIChHbG9iYWwuZGF0YVNjb3JlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBsaXN0Tm9kZUxhYmVsLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaXN0Tm9kZUxhYmVsLmZvckVhY2goKG5vZGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IEdsb2JhbC5kYXRhU2NvcmUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBHbG9iYWwuZGF0YVNjb3JlW2luZGV4XSArICcgJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ2FjaGUoKSB7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjbGlja1BsYXkoKSB7XHJcbiAgICAgICAgbGV0IGdhbWVWaWV3ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZHYW1lVmlldylcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZ2FtZVZpZXcpO1xyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------
