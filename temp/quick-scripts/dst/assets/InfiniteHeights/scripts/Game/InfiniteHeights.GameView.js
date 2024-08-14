
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
var InfiniteHeights_Pause_1 = require("./InfiniteHeights.Pause");
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
        _this.prfPause = null;
        _this.hands = null;
        _this.lbTimeResume = null;
        _this.time = 0;
        _this.timeResume = 4;
        _this.isFirstTouch = false;
        _this.isGameOver = false;
        _this.ballon = null;
        _this.unLockBallon = false;
        _this.isCountDown = false;
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
        this.ballon.node.y = -420;
        this.ballon.setData(InfiniteHeights_Global_1.Global.currentIndexBallon);
        this.nBallon.addChild(this.ballon.node);
        this.genObstacle();
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.handsDestroy();
        this.resetGame();
    };
    GameView.prototype.start = function () {
    };
    GameView.prototype.startTimeResume = function () {
        this.lbTimeResume.node.active = true;
        this.isCountDown = true;
        this.schedule(this.updateTimeResume, 1);
    };
    GameView.prototype.updateTimeResume = function () {
        if (this.timeResume > 0) {
            this.timeResume--;
            this.lbTimeResume.string = this.timeResume + " ";
        }
        else {
            this.isCountDown = false;
            this.isGameOver = false;
            this.lbTimeResume.node.active = false;
        }
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
            this.handsDestroy();
        }
        else {
            this.fall();
        }
    };
    GameView.prototype.handsDestroy = function () {
        var _this = this;
        if (!this.isFirstTouch)
            return;
        this.scheduleOnce(function () {
            if (!_this.isGameOver) { // Chỉ thực hiện khi game không bị tạm dừng
                _this.hands.active = false;
            }
        }, 3.5);
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
        InfiniteHeights_Global_1.Global.diaMond = 0;
        InfiniteHeights_Global_1.Global.score = 0;
        this.time = 0;
        this.updateLbScore(this.lbScore);
        this.updateLbTime(this.lbTime);
        this.updateLbDiamond(this.lbDiamond);
        this.ballon.node.active = true;
        this.ballon.node.y = -420;
        cc.director.getCollisionManager().enabled = true;
        this.isFirstTouch = false;
        this.isGameOver = false;
        this.listBg.forEach(function (value) {
            value.removeAllChildren();
        });
        this.hands.active = true;
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
        this.isGameOver = true;
        this.hands.active = false;
        var gameOver = cc.instantiate(this.prfGameOver).getComponent(InfiniteHeights_GameOver_1.default).node;
        this.unschedule(this.updateTime);
        cc.tween(this.ballon).stop();
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        cc.director.getCollisionManager().enabled = false;
        var scores = this.time + InfiniteHeights_Global_1.Global.diaMond;
        this.unLockBallon = false;
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
        this.ballon.node.active = false;
        this.scheduleOnce(function () {
            _this.node.addChild(gameOver);
        }, 0.3);
    };
    GameView.prototype.pauseGame = function () {
        this.isGameOver = true;
        var pauseGame = cc.instantiate(this.prfPause).getComponent(InfiniteHeights_Pause_1.default);
        this.node.addChild(pauseGame.node);
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
    __decorate([
        property(cc.Prefab)
    ], GameView.prototype, "prfPause", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "hands", void 0);
    __decorate([
        property(cc.Label)
    ], GameView.prototype, "lbTimeResume", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9JbmZpbml0ZUhlaWdodHMvc2NyaXB0cy9HYW1lL0luZmluaXRlSGVpZ2h0cy5HYW1lVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRixvRUFBbUQ7QUFFbkQsbUVBQThDO0FBQzlDLHVFQUFrRDtBQUNsRCxxRkFBZ0U7QUFDaEUsaUVBQTRDO0FBRXRDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNE9DO1FBeE9HLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIscUJBQXFCO1FBQ3JCLCtCQUErQjtRQUUvQixxQkFBZSxHQUFnQixFQUFFLENBQUM7UUFFbEMsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFFaEMsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRTVCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFjLEVBQUUsQ0FBQztRQUd2QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRzNCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsa0JBQVksR0FBYSxJQUFJLENBQUM7UUFDOUIsVUFBSSxHQUFHLENBQUMsQ0FBQztRQUNULGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2Ysa0JBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZ0JBQVUsR0FBRyxLQUFLLENBQUM7UUFD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Q0FBQyxJQUFJLENBQUM7NENBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDUTtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNLO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ007SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpREFDVTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNPO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDVztJQXJDYixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNE81QjtJQUFELGVBQUM7Q0E1T0QsQUE0T0MsQ0E1T3FDLEVBQUUsQ0FBQyxTQUFTLEdBNE9qRDtrQkE1T29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuLi9JbmZpbml0ZUhlaWdodHMuR2FtZU1hbmFnZXJcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi9JbmZpbml0ZUhlaWdodHMuR2xvYmFsXCI7XG5pbXBvcnQgQmFja0dyb3VuZCBmcm9tIFwiLi9JbmZpbml0ZUhlaWdodHMuQmFja0dyb3VuZFwiO1xuaW1wb3J0IEJhbGxvbiBmcm9tIFwiLi9JbmZpbml0ZUhlaWdodHMuQmFsbG9uXCI7XG5pbXBvcnQgR2FtZU92ZXIgZnJvbSBcIi4vSW5maW5pdGVIZWlnaHRzLkdhbWVPdmVyXCI7XG5pbXBvcnQgb2JzdGFjbGVNYW5hZ2VyIGZyb20gXCIuL0luZmluaXRlSGVpZ2h0cy5PYnN0YWNsZU1hbmFnZXJcIjtcbmltcG9ydCBQYXVzZSBmcm9tIFwiLi9JbmZpbml0ZUhlaWdodHMuUGF1c2VcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IEdhbWVWaWV3ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuT2JzdGFjbGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIC8vIG5PYnN0YWNsZV8yOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGxpc3RQcmZPYnN0YWNsZTogY2MuUHJlZmFiW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZkJhY2tHcm91bmQ6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkJnR2FtZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmZCYWxsb246IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkJhbGxvbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdEJnOiBjYy5Ob2RlW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkRpYW1vbmQ6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYlRpbWU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYlNjb3JlOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmZHYW1lT3ZlcjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJmUGF1c2U6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaGFuZHM6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiVGltZVJlc3VtZTogY2MuTGFiZWwgPSBudWxsO1xuICAgIHRpbWUgPSAwO1xuICAgIHRpbWVSZXN1bWUgPSA0O1xuICAgIGlzRmlyc3RUb3VjaCA9IGZhbHNlO1xuICAgIGlzR2FtZU92ZXIgPSBmYWxzZTtcbiAgICBiYWxsb24gPSBudWxsO1xuICAgIHVuTG9ja0JhbGxvbiA9IGZhbHNlXG4gICAgaXNDb3VudERvd24gPSBmYWxzZTtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcblxuICAgICAgICBHYW1lVmlldy5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIC8vdGhpcy5jcmVhdGVPYnN0YWNsZSgpO1xuICAgICAgICAvL3RoaXMuZ2VuT2JzdGFjbGVfMigpO1xuICAgICAgICBHbG9iYWwudW5sb2NrSW5kZXhCYWxsb24gPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndW5sb2NrSW5kZXhCYWxsb24nKSkgfHwgR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uO1xuICAgICAgICBjb25zb2xlLmxvZyhcImluZGV4IFwiLCBHbG9iYWwudW5sb2NrSW5kZXhCYWxsb24pO1xuICAgICAgICBHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRJbmRleEJhbGxvbicpKSB8fCAwO1xuICAgICAgICB0aGlzLmJhbGxvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmQmFsbG9uKS5nZXRDb21wb25lbnQoQmFsbG9uKVxuICAgICAgICB0aGlzLmJhbGxvbi5ub2RlLnkgPSAtNDIwO1xuICAgICAgICB0aGlzLmJhbGxvbi5zZXREYXRhKEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24pXG4gICAgICAgIHRoaXMubkJhbGxvbi5hZGRDaGlsZCh0aGlzLmJhbGxvbi5ub2RlKTtcbiAgICAgICAgdGhpcy5nZW5PYnN0YWNsZSgpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kc0Rlc3Ryb3koKVxuICAgICAgICB0aGlzLnJlc2V0R2FtZSgpO1xuXG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBzdGFydFRpbWVSZXN1bWUoKSB7XG4gICAgICAgIHRoaXMubGJUaW1lUmVzdW1lLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0NvdW50RG93biA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVUaW1lUmVzdW1lLDEpO1xuICAgIH1cblxuICAgIHVwZGF0ZVRpbWVSZXN1bWUoKSB7XG4gICAgICAgIGlmKHRoaXMudGltZVJlc3VtZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudGltZVJlc3VtZS0tO1xuICAgICAgICAgICAgdGhpcy5sYlRpbWVSZXN1bWUuc3RyaW5nID0gdGhpcy50aW1lUmVzdW1lICsgXCIgXCI7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNDb3VudERvd24gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sYlRpbWVSZXN1bWUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjcmVhdGVPYnN0YWNsZShub2RlOiBjYy5Ob2RlKSB7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGlzdFByZk9ic3RhY2xlLmxlbmd0aCk7XG4gICAgICAgICAgICBsZXQgb2JzdGFjbGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RQcmZPYnN0YWNsZVtpbmRleF0pO1xuICAgICAgICAgICAgbGV0IG9ic3RhY2xlQ29tcG9uZW50ID0gb2JzdGFjbGUuZ2V0Q29tcG9uZW50KG9ic3RhY2xlTWFuYWdlcik7XG4gICAgICAgICAgICBpZiAob2JzdGFjbGVDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBvYnN0YWNsZSA9IG9ic3RhY2xlQ29tcG9uZW50Lm5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvYnN0YWNsZS55ID0gLTM0MCArIGkgKiA2ODA7XG4gICAgICAgICAgICBub2RlLmFkZENoaWxkKG9ic3RhY2xlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdlbk9ic3RhY2xlKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVPYnN0YWNsZSh0aGlzLmxpc3RCZ1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25Ub3VjaFN0YXJ0KCkge1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuICAgIH1cblxuICAgIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3RUb3VjaCkge1xuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0VG91Y2ggPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZVRpbWUsIDEpO1xuICAgICAgICAgICAgdGhpcy5oYW5kc0Rlc3Ryb3koKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmFsbCgpO1xuICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRzRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3RUb3VjaCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0dhbWVPdmVyKSB7IC8vIENo4buJIHRo4buxYyBoaeG7h24ga2hpIGdhbWUga2jDtG5nIGLhu4sgdOG6oW0gZOG7q25nXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMy41KTtcbiAgICB9XG5cbiAgICBmYWxsKCkge1xuICAgICAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSByZXR1cm47XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuYmFsbG9uLm5vZGUpXG4gICAgICAgICAgICAuYnkoMC4yLCB7IHk6IC04MCB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG5cbiAgICB1cGRhdGVUaW1lKCkge1xuICAgICAgICBpZiAodGhpcy5pc0ZpcnN0VG91Y2ggJiYgIXRoaXMuaXNHYW1lT3Zlcikge1xuICAgICAgICAgICAgdGhpcy50aW1lICs9IDE7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxiVGltZSh0aGlzLmxiVGltZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxiU2NvcmUodGhpcy5sYlNjb3JlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVMYkRpYW1vbmQobGJEaWFtb25kKSB7XG4gICAgICAgIGxiRGlhbW9uZC5zdHJpbmcgPSBHbG9iYWwuZGlhTW9uZCArICcgJztcbiAgICAgICAgdGhpcy51cGRhdGVMYlNjb3JlKHRoaXMubGJTY29yZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlTGJUaW1lKGxiVGltZTogY2MuTGFiZWwpIHtcbiAgICAgICAgbGJUaW1lLnN0cmluZyA9IHRoaXMudGltZSArICcgJztcbiAgICB9XG5cbiAgICB1cGRhdGVMYlNjb3JlKGxiU2NvcmU6IGNjLkxhYmVsKSB7XG4gICAgICAgIGxiU2NvcmUuc3RyaW5nID0gdGhpcy50aW1lICsgR2xvYmFsLmRpYU1vbmQgKyAnICc7XG4gICAgfVxuXG4gICAgcmVzZXRHYW1lKCkge1xuICAgICAgICBHbG9iYWwuZGlhTW9uZCA9IDA7XG4gICAgICAgIEdsb2JhbC5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMudGltZSA9IDA7XG4gICAgICAgIHRoaXMudXBkYXRlTGJTY29yZSh0aGlzLmxiU2NvcmUpO1xuICAgICAgICB0aGlzLnVwZGF0ZUxiVGltZSh0aGlzLmxiVGltZSk7XG4gICAgICAgIHRoaXMudXBkYXRlTGJEaWFtb25kKHRoaXMubGJEaWFtb25kKTtcbiAgICAgICAgdGhpcy5iYWxsb24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmJhbGxvbi5ub2RlLnkgPSAtNDIwO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGaXJzdFRvdWNoID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxpc3RCZy5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHZhbHVlLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuaGFuZHMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5saXN0QmdbMF0ueSA9IDMxMjA7XG4gICAgICAgIHRoaXMubGlzdEJnWzFdLnkgPSAxODQwO1xuICAgICAgICB0aGlzLmxpc3RCZ1syXS55ID0gNTYwO1xuICAgICAgICB0aGlzLmxpc3RCZ1szXS55ID0gLTcyMDtcbiAgICAgICAgdGhpcy5saXN0QmdbM10uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nZW5PYnN0YWNsZSgpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcbiAgICB9XG5cbiAgICBnYW1lT3ZlcigpIHtcblxuICAgICAgICB0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLmhhbmRzLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIGxldCBnYW1lT3ZlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmR2FtZU92ZXIpLmdldENvbXBvbmVudChHYW1lT3Zlcikubm9kZVxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy51cGRhdGVUaW1lKTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5iYWxsb24pLnN0b3AoKTtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgc2NvcmVzID0gdGhpcy50aW1lICsgR2xvYmFsLmRpYU1vbmQ7XG4gICAgICAgIHRoaXMudW5Mb2NrQmFsbG9uID0gZmFsc2VcbiAgICAgICAgbGV0IE1BWF9TQ09SRVMgPSAxMDtcblxuICAgICAgICBHbG9iYWwuZGF0YVNjb3JlLnB1c2goc2NvcmVzKTtcbiAgICAgICAgR2xvYmFsLmRhdGFTY29yZS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYSA+IGIgPyAtMSA6IDE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChHbG9iYWwuZGF0YVNjb3JlLmxlbmd0aCA+IE1BWF9TQ09SRVMpIHtcbiAgICAgICAgICAgIEdsb2JhbC5kYXRhU2NvcmUgPSBHbG9iYWwuZGF0YVNjb3JlLnNsaWNlKDAsIE1BWF9TQ09SRVMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdzYXZlJywgR2xvYmFsLmRhdGFTY29yZSlcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzY29yZXMnLCBKU09OLnN0cmluZ2lmeShHbG9iYWwuZGF0YVNjb3JlKSk7XG4gICAgICAgIGlmIChzY29yZXMgPj0gR2xvYmFsLnVubG9ja1BvaW50c1tHbG9iYWwudW5sb2NrSW5kZXhCYWxsb24gKyAxXSkge1xuICAgICAgICAgICAgR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uKys7XG4gICAgICAgICAgICB0aGlzLnVuTG9ja0JhbGxvbiA9IHRydWU7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VubG9ja0luZGV4QmFsbG9uJywgR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidW5Mb2NrSW5kZXggXCIsIEdsb2JhbC51bmxvY2tJbmRleEJhbGxvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iYWxsb24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGdhbWVPdmVyKTtcbiAgICAgICAgfSwgMC4zKVxuXG5cbiAgICB9XG5cbiAgICBwYXVzZUdhbWUoKSB7XG4gICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG4gICAgICAgIGxldCBwYXVzZUdhbWUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZlBhdXNlKS5nZXRDb21wb25lbnQoUGF1c2UpXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChwYXVzZUdhbWUubm9kZSk7XG4gICAgfVxuXG4gICAgZ2FtZURlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfVxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmlzRmlyc3RUb3VjaCkge1xuICAgICAgICAgICAgdGhpcy5iYWxsb24ubm9kZS5zZXRQb3NpdGlvbih0aGlzLmJhbGxvbi5ub2RlLnBvc2l0aW9uLngsIHRoaXMuYmFsbG9uLm5vZGUucG9zaXRpb24ueSArIDE4MCAqIGR0LCAwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==