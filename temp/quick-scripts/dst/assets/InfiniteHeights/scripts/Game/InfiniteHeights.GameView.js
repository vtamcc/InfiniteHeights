
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
        _this.unLockBallon = false;
        _this.isScoreAdded = false;
        return _this;
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
        this.isScoreAdded = false;
        InfiniteHeights_Global_1.Global.diaMond = 0;
        InfiniteHeights_Global_1.Global.score = 0;
        this.time = 0;
        this.updateLbScore(this.lbScore);
        this.updateLbTime(this.lbTime);
        this.updateLbDiamond(this.lbDiamond);
        this.ballon.node.active = true;
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
        var _this = this;
        if (this.isScoreAdded) {
            return;
        }
        this.isGameOver = true;
        var gameOver = cc.instantiate(this.prfGameOver).getComponent(InfiniteHeights_GameOver_1.default).node;
        this.unschedule(this.updateTime);
        cc.tween(this.ballon).stop();
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        cc.director.getCollisionManager().enabled = false;
        var scores = this.time + InfiniteHeights_Global_1.Global.diaMond;
        this.unLockBallon = false;
        InfiniteHeights_Global_1.Global.dataScore.push(scores);
        var MAX_SCORES = 10;
        InfiniteHeights_Global_1.Global.dataScore.push(scores);
        InfiniteHeights_Global_1.Global.dataScore.sort(function (a, b) {
            return a > b ? -1 : 1;
        });
        if (InfiniteHeights_Global_1.Global.dataScore.length > MAX_SCORES) {
            InfiniteHeights_Global_1.Global.dataScore = InfiniteHeights_Global_1.Global.dataScore.slice(0, MAX_SCORES);
        }
        console.log('save', InfiniteHeights_Global_1.Global.dataScore);
        cc.sys.localStorage.setItem('scores', JSON.stringify(InfiniteHeights_Global_1.Global.dataScore));
        if (scores >= InfiniteHeights_Global_1.Global.unlockPoints[InfiniteHeights_Global_1.Global.unlockIndexBallon + 1]) {
            InfiniteHeights_Global_1.Global.unlockIndexBallon++;
            this.unLockBallon = true;
            cc.sys.localStorage.setItem('unlockIndexBallon', InfiniteHeights_Global_1.Global.unlockIndexBallon);
            console.log("unLockIndex ", InfiniteHeights_Global_1.Global.unlockIndexBallon);
        }
        this.isScoreAdded = true;
        this.ballon.node.active = false;
        this.scheduleOnce(function () {
            _this.node.addChild(gameOver);
        }, 0.3);
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9JbmZpbml0ZUhlaWdodHMvc2NyaXB0cy9HYW1lL0luZmluaXRlSGVpZ2h0cy5HYW1lVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRixvRUFBbUQ7QUFFbkQsbUVBQThDO0FBQzlDLHVFQUFrRDtBQUNsRCxxRkFBZ0U7QUFFMUQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFvTUM7UUFoTUcsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixxQkFBcUI7UUFDckIsK0JBQStCO1FBRS9CLHFCQUFlLEdBQWdCLEVBQUUsQ0FBQztRQUVsQyxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUVoQyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFFNUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixZQUFNLEdBQWMsRUFBRSxDQUFDO1FBR3ZCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0IsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBQzlCLFVBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxrQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixZQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2Qsa0JBQVksR0FBRyxLQUFLLENBQUE7UUFDcEIsa0JBQVksR0FBRyxLQUFLLENBQUE7O0lBaUt4QixDQUFDO2lCQXBNb0IsUUFBUTtJQW9DekIsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFFSSxVQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN6Qix3QkFBd0I7UUFDeEIsdUJBQXVCO1FBQ3ZCLCtCQUFNLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLCtCQUFNLENBQUMsaUJBQWlCLENBQUM7UUFDcEgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsK0JBQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2hELCtCQUFNLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxnQ0FBTSxDQUFDLENBQUE7UUFDakUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLCtCQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFFckIsQ0FBQztJQUVELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsaUNBQWMsR0FBZCxVQUFlLElBQWE7UUFFeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BFLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzNELElBQUksaUJBQWlCLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyx5Q0FBZSxDQUFDLENBQUM7WUFDL0QsSUFBSSxpQkFBaUIsRUFBRTtnQkFDbkIsUUFBUSxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQzthQUNyQztZQUNELFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzNCO0lBQ0wsQ0FBQztJQUVELDhCQUFXLEdBQVg7UUFDSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztJQUNELCtCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDckM7YUFBTTtZQUNILElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUVmO0lBQ0wsQ0FBQztJQUVELHVCQUFJLEdBQUo7UUFDSSxJQUFJLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTztRQUM1QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQ3JCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzthQUNuQixLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBR0QsNkJBQVUsR0FBVjtRQUNJLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDdkMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwQztJQUNMLENBQUM7SUFDRCxrQ0FBZSxHQUFmLFVBQWdCLFNBQVM7UUFDckIsU0FBUyxDQUFDLE1BQU0sR0FBRywrQkFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELCtCQUFZLEdBQVosVUFBYSxNQUFnQjtRQUN6QixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxnQ0FBYSxHQUFiLFVBQWMsT0FBaUI7UUFDM0IsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLCtCQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUN0RCxDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLCtCQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNuQiwrQkFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUMxQixFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNqRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7WUFDckIsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQUEsaUJBdUNDO1FBdENHLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsa0NBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQTtRQUMzRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RSxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNsRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLCtCQUFNLENBQUMsT0FBTyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFBO1FBQ3pCLCtCQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFFcEIsK0JBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTlCLCtCQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksK0JBQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVUsRUFBRTtZQUN0QywrQkFBTSxDQUFDLFNBQVMsR0FBRywrQkFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsK0JBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUNyQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsK0JBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksTUFBTSxJQUFJLCtCQUFNLENBQUMsWUFBWSxDQUFDLCtCQUFNLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDN0QsK0JBQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSwrQkFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDM0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsK0JBQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBR1gsQ0FBQztJQUVELDhCQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRCx5QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksSUFBSSxDQUFDLFVBQVU7WUFBRSxPQUFPO1FBQzVCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDeEc7SUFDTCxDQUFDOztJQWpNYSxpQkFBUSxHQUFhLElBQUksQ0FBQztJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBSTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ2M7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDWTtJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ1E7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ1E7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ1U7SUE3QmIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW9NNUI7SUFBRCxlQUFDO0NBcE1ELEFBb01DLENBcE1xQyxFQUFFLENBQUMsU0FBUyxHQW9NakQ7a0JBcE1vQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi4vSW5maW5pdGVIZWlnaHRzLkdhbWVNYW5hZ2VyXCI7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vSW5maW5pdGVIZWlnaHRzLkdsb2JhbFwiO1xuaW1wb3J0IEJhY2tHcm91bmQgZnJvbSBcIi4vSW5maW5pdGVIZWlnaHRzLkJhY2tHcm91bmRcIjtcbmltcG9ydCBCYWxsb24gZnJvbSBcIi4vSW5maW5pdGVIZWlnaHRzLkJhbGxvblwiO1xuaW1wb3J0IEdhbWVPdmVyIGZyb20gXCIuL0luZmluaXRlSGVpZ2h0cy5HYW1lT3ZlclwiO1xuaW1wb3J0IG9ic3RhY2xlTWFuYWdlciBmcm9tIFwiLi9JbmZpbml0ZUhlaWdodHMuT2JzdGFjbGVNYW5hZ2VyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBHYW1lVmlldyA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbk9ic3RhY2xlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAvLyBuT2JzdGFjbGVfMjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBsaXN0UHJmT2JzdGFjbGU6IGNjLlByZWZhYltdID0gW107XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmZCYWNrR3JvdW5kOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5CZ0dhbWU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJmQmFsbG9uOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5CYWxsb246IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RCZzogY2MuTm9kZVtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJEaWFtb25kOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJUaW1lOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJTY29yZTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJmR2FtZU92ZXI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgdGltZSA9IDA7XG4gICAgaXNGaXJzdFRvdWNoID0gZmFsc2U7XG4gICAgaXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgIGJhbGxvbiA9IG51bGw7XG4gICAgdW5Mb2NrQmFsbG9uID0gZmFsc2VcbiAgICBpc1Njb3JlQWRkZWQgPSBmYWxzZVxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuXG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgLy90aGlzLmNyZWF0ZU9ic3RhY2xlKCk7XG4gICAgICAgIC8vdGhpcy5nZW5PYnN0YWNsZV8yKCk7XG4gICAgICAgIEdsb2JhbC51bmxvY2tJbmRleEJhbGxvbiA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1bmxvY2tJbmRleEJhbGxvbicpKSB8fCBHbG9iYWwudW5sb2NrSW5kZXhCYWxsb247XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5kZXggXCIsIEdsb2JhbC51bmxvY2tJbmRleEJhbGxvbik7XG4gICAgICAgIEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24gPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudEluZGV4QmFsbG9uJykpIHx8IDA7XG4gICAgICAgIHRoaXMuYmFsbG9uID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZCYWxsb24pLmdldENvbXBvbmVudChCYWxsb24pXG4gICAgICAgIHRoaXMuYmFsbG9uLm5vZGUueSA9IC01MDA7XG4gICAgICAgIHRoaXMuYmFsbG9uLnNldERhdGEoR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbilcbiAgICAgICAgdGhpcy5uQmFsbG9uLmFkZENoaWxkKHRoaXMuYmFsbG9uLm5vZGUpO1xuICAgICAgICB0aGlzLmdlbk9ic3RhY2xlKCk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLnJlc2V0R2FtZSgpO1xuXG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBjcmVhdGVPYnN0YWNsZShub2RlOiBjYy5Ob2RlKSB7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGlzdFByZk9ic3RhY2xlLmxlbmd0aCk7XG4gICAgICAgICAgICBsZXQgb2JzdGFjbGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RQcmZPYnN0YWNsZVtpbmRleF0pO1xuICAgICAgICAgICAgbGV0IG9ic3RhY2xlQ29tcG9uZW50ID0gb2JzdGFjbGUuZ2V0Q29tcG9uZW50KG9ic3RhY2xlTWFuYWdlcik7XG4gICAgICAgICAgICBpZiAob2JzdGFjbGVDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBvYnN0YWNsZSA9IG9ic3RhY2xlQ29tcG9uZW50Lm5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvYnN0YWNsZS55ID0gLTM0MCArIGkgKiA2ODA7XG4gICAgICAgICAgICBub2RlLmFkZENoaWxkKG9ic3RhY2xlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdlbk9ic3RhY2xlKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVPYnN0YWNsZSh0aGlzLmxpc3RCZ1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25Ub3VjaFN0YXJ0KCkge1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuICAgIH1cblxuICAgIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3RUb3VjaCkge1xuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0VG91Y2ggPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZVRpbWUsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mYWxsKCk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZhbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzR2FtZU92ZXIpIHJldHVybjtcbiAgICAgICAgY2MudHdlZW4odGhpcy5iYWxsb24ubm9kZSlcbiAgICAgICAgICAgIC5ieSgwLjIsIHsgeTogLTgwIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cblxuICAgIHVwZGF0ZVRpbWUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRmlyc3RUb3VjaCAmJiAhdGhpcy5pc0dhbWVPdmVyKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWUgKz0gMTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGJUaW1lKHRoaXMubGJUaW1lKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGJTY29yZSh0aGlzLmxiU2NvcmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZUxiRGlhbW9uZChsYkRpYW1vbmQpIHtcbiAgICAgICAgbGJEaWFtb25kLnN0cmluZyA9IEdsb2JhbC5kaWFNb25kICsgJyAnO1xuICAgICAgICB0aGlzLnVwZGF0ZUxiU2NvcmUodGhpcy5sYlNjb3JlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVMYlRpbWUobGJUaW1lOiBjYy5MYWJlbCkge1xuICAgICAgICBsYlRpbWUuc3RyaW5nID0gdGhpcy50aW1lICsgJyAnO1xuICAgIH1cblxuICAgIHVwZGF0ZUxiU2NvcmUobGJTY29yZTogY2MuTGFiZWwpIHtcbiAgICAgICAgbGJTY29yZS5zdHJpbmcgPSB0aGlzLnRpbWUgKyBHbG9iYWwuZGlhTW9uZCArICcgJztcbiAgICB9XG5cbiAgICByZXNldEdhbWUoKSB7XG4gICAgICAgIHRoaXMuaXNTY29yZUFkZGVkID0gZmFsc2U7XG4gICAgICAgIEdsb2JhbC5kaWFNb25kID0gMDtcbiAgICAgICAgR2xvYmFsLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy50aW1lID0gMDtcbiAgICAgICAgdGhpcy51cGRhdGVMYlNjb3JlKHRoaXMubGJTY29yZSk7XG4gICAgICAgIHRoaXMudXBkYXRlTGJUaW1lKHRoaXMubGJUaW1lKTtcbiAgICAgICAgdGhpcy51cGRhdGVMYkRpYW1vbmQodGhpcy5sYkRpYW1vbmQpO1xuICAgICAgICB0aGlzLmJhbGxvbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYmFsbG9uLm5vZGUueSA9IC01MDA7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZpcnN0VG91Y2ggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGlzdEJnLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgdmFsdWUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5saXN0QmdbMF0ueSA9IDMxMjA7XG4gICAgICAgIHRoaXMubGlzdEJnWzFdLnkgPSAxODQwO1xuICAgICAgICB0aGlzLmxpc3RCZ1syXS55ID0gNTYwO1xuICAgICAgICB0aGlzLmxpc3RCZ1szXS55ID0gLTcyMDtcbiAgICAgICAgdGhpcy5saXN0QmdbM10uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nZW5PYnN0YWNsZSgpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcbiAgICB9XG5cbiAgICBnYW1lT3ZlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTY29yZUFkZGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgbGV0IGdhbWVPdmVyID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZHYW1lT3ZlcikuZ2V0Q29tcG9uZW50KEdhbWVPdmVyKS5ub2RlXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnVwZGF0ZVRpbWUpO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmJhbGxvbikuc3RvcCgpO1xuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIGxldCBzY29yZXMgPSB0aGlzLnRpbWUgKyBHbG9iYWwuZGlhTW9uZDtcbiAgICAgICAgdGhpcy51bkxvY2tCYWxsb24gPSBmYWxzZVxuICAgICAgICBHbG9iYWwuZGF0YVNjb3JlLnB1c2goc2NvcmVzKTtcbiAgICAgICAgbGV0IE1BWF9TQ09SRVMgPSAxMDtcblxuICAgICAgICBHbG9iYWwuZGF0YVNjb3JlLnB1c2goc2NvcmVzKTtcblxuICAgICAgICBHbG9iYWwuZGF0YVNjb3JlLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhID4gYiA/IC0xIDogMTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKEdsb2JhbC5kYXRhU2NvcmUubGVuZ3RoID4gTUFYX1NDT1JFUykge1xuICAgICAgICAgICAgR2xvYmFsLmRhdGFTY29yZSA9IEdsb2JhbC5kYXRhU2NvcmUuc2xpY2UoMCwgTUFYX1NDT1JFUyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ3NhdmUnLCBHbG9iYWwuZGF0YVNjb3JlKVxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Njb3JlcycsIEpTT04uc3RyaW5naWZ5KEdsb2JhbC5kYXRhU2NvcmUpKTtcbiAgICAgICAgaWYgKHNjb3JlcyA+PSBHbG9iYWwudW5sb2NrUG9pbnRzW0dsb2JhbC51bmxvY2tJbmRleEJhbGxvbiArIDFdKSB7XG4gICAgICAgICAgICBHbG9iYWwudW5sb2NrSW5kZXhCYWxsb24rKztcbiAgICAgICAgICAgIHRoaXMudW5Mb2NrQmFsbG9uID0gdHJ1ZTtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndW5sb2NrSW5kZXhCYWxsb24nLCBHbG9iYWwudW5sb2NrSW5kZXhCYWxsb24pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1bkxvY2tJbmRleCBcIiwgR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzU2NvcmVBZGRlZCA9IHRydWU7IFxuICAgICAgICB0aGlzLmJhbGxvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZ2FtZU92ZXIpO1xuICAgICAgICB9LCAwLjMpXG5cblxuICAgIH1cblxuICAgIGdhbWVEZXN0cm95KCkge1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNHYW1lT3ZlcikgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5pc0ZpcnN0VG91Y2gpIHtcbiAgICAgICAgICAgIHRoaXMuYmFsbG9uLm5vZGUuc2V0UG9zaXRpb24odGhpcy5iYWxsb24ubm9kZS5wb3NpdGlvbi54LCB0aGlzLmJhbGxvbi5ub2RlLnBvc2l0aW9uLnkgKyAxODAgKiBkdCwgMCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=