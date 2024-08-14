
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
        this.timeResume = 4;
        this.lbTimeResume.node.active = true;
        this.isCountDown = true;
        console.log("Starting countdown with timeResume:", this.time);
        this.schedule(this.updateTimeResume, 1);
    };
    GameView.prototype.updateTimeResume = function () {
        if (this.timeResume > 0) {
            this.timeResume--;
            this.lbTimeResume.string = this.timeResume + " ";
            console.log("Time remaining:", this.timeResume);
        }
        else {
            this.isGameOver = false;
            this.isCountDown = false;
            this.handsDestroy();
            this.lbTimeResume.node.active = false;
            this.unschedule(this.updateTimeResume);
            console.log('chay', this.isGameOver);
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
            if (!_this.isGameOver) {
                _this.hands.active = false;
            }
        }, 2.5);
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
        this.ballon.node.y = -480;
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
        console.log('dung', this.isGameOver);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9JbmZpbml0ZUhlaWdodHMvc2NyaXB0cy9HYW1lL0luZmluaXRlSGVpZ2h0cy5HYW1lVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRixvRUFBbUQ7QUFFbkQsbUVBQThDO0FBQzlDLHVFQUFrRDtBQUNsRCxxRkFBZ0U7QUFDaEUsaUVBQTRDO0FBRXRDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcVBDO1FBalBHLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIscUJBQXFCO1FBQ3JCLCtCQUErQjtRQUUvQixxQkFBZSxHQUFnQixFQUFFLENBQUM7UUFFbEMsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFFaEMsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRTVCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFjLEVBQUUsQ0FBQztRQUd2QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRzNCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsa0JBQVksR0FBYSxJQUFJLENBQUM7UUFDOUIsVUFBSSxHQUFHLENBQUMsQ0FBQztRQUNULGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2Ysa0JBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZ0JBQVUsR0FBRyxLQUFLLENBQUM7UUFD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QUFDO1NBQ3hHO0lBQ0wsQ0FBQzs7SUFsUGEsaUJBQVEsR0FBYSxJQUFJLENBQUM7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQUkxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNjO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7bURBQ1k7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNRO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNRO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ0s7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDTTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNVO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ087SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNXO0lBckNiLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FxUDVCO0lBQUQsZUFBQztDQXJQRCxBQXFQQyxDQXJQcUMsRUFBRSxDQUFDLFNBQVMsR0FxUGpEO2tCQXJQb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4uL0luZmluaXRlSGVpZ2h0cy5HYW1lTWFuYWdlclwiO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4uL0luZmluaXRlSGVpZ2h0cy5HbG9iYWxcIjtcbmltcG9ydCBCYWNrR3JvdW5kIGZyb20gXCIuL0luZmluaXRlSGVpZ2h0cy5CYWNrR3JvdW5kXCI7XG5pbXBvcnQgQmFsbG9uIGZyb20gXCIuL0luZmluaXRlSGVpZ2h0cy5CYWxsb25cIjtcbmltcG9ydCBHYW1lT3ZlciBmcm9tIFwiLi9JbmZpbml0ZUhlaWdodHMuR2FtZU92ZXJcIjtcbmltcG9ydCBvYnN0YWNsZU1hbmFnZXIgZnJvbSBcIi4vSW5maW5pdGVIZWlnaHRzLk9ic3RhY2xlTWFuYWdlclwiO1xuaW1wb3J0IFBhdXNlIGZyb20gXCIuL0luZmluaXRlSGVpZ2h0cy5QYXVzZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogR2FtZVZpZXcgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5PYnN0YWNsZTogY2MuTm9kZSA9IG51bGw7XG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gbk9ic3RhY2xlXzI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgbGlzdFByZk9ic3RhY2xlOiBjYy5QcmVmYWJbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJmQmFja0dyb3VuZDogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuQmdHYW1lOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZkJhbGxvbjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuQmFsbG9uOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaXN0Qmc6IGNjLk5vZGVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiRGlhbW9uZDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiVGltZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiU2NvcmU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZkdhbWVPdmVyOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmZQYXVzZTogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBoYW5kczogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJUaW1lUmVzdW1lOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgdGltZSA9IDA7XG4gICAgdGltZVJlc3VtZSA9IDQ7XG4gICAgaXNGaXJzdFRvdWNoID0gZmFsc2U7XG4gICAgaXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgIGJhbGxvbiA9IG51bGw7XG4gICAgdW5Mb2NrQmFsbG9uID0gZmFsc2VcbiAgICBpc0NvdW50RG93biA9IGZhbHNlO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuXG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgLy90aGlzLmNyZWF0ZU9ic3RhY2xlKCk7XG4gICAgICAgIC8vdGhpcy5nZW5PYnN0YWNsZV8yKCk7XG4gICAgICAgIEdsb2JhbC51bmxvY2tJbmRleEJhbGxvbiA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1bmxvY2tJbmRleEJhbGxvbicpKSB8fCBHbG9iYWwudW5sb2NrSW5kZXhCYWxsb247XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5kZXggXCIsIEdsb2JhbC51bmxvY2tJbmRleEJhbGxvbik7XG4gICAgICAgIEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24gPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudEluZGV4QmFsbG9uJykpIHx8IDA7XG4gICAgICAgIHRoaXMuYmFsbG9uID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZCYWxsb24pLmdldENvbXBvbmVudChCYWxsb24pXG4gICAgICAgIHRoaXMuYmFsbG9uLm5vZGUueSA9IC00MjA7XG4gICAgICAgIHRoaXMuYmFsbG9uLnNldERhdGEoR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbilcbiAgICAgICAgdGhpcy5uQmFsbG9uLmFkZENoaWxkKHRoaXMuYmFsbG9uLm5vZGUpO1xuICAgICAgICB0aGlzLmdlbk9ic3RhY2xlKCk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRzRGVzdHJveSgpXG4gICAgICAgIHRoaXMucmVzZXRHYW1lKCk7XG5cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIHN0YXJ0VGltZVJlc3VtZSgpIHtcbiAgICAgICAgdGhpcy50aW1lUmVzdW1lID0gNDtcbiAgICAgICAgdGhpcy5sYlRpbWVSZXN1bWUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzQ291bnREb3duID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJTdGFydGluZyBjb3VudGRvd24gd2l0aCB0aW1lUmVzdW1lOlwiLCB0aGlzLnRpbWUpXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVUaW1lUmVzdW1lLDEpO1xuXG4gICAgICAgIFxuICAgIH1cblxuICAgIHVwZGF0ZVRpbWVSZXN1bWUoKSB7XG4gICAgICAgIGlmKHRoaXMudGltZVJlc3VtZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudGltZVJlc3VtZS0tO1xuICAgICAgICAgICAgdGhpcy5sYlRpbWVSZXN1bWUuc3RyaW5nID0gdGhpcy50aW1lUmVzdW1lICsgXCIgXCI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRpbWUgcmVtYWluaW5nOlwiLCB0aGlzLnRpbWVSZXN1bWUpOyBcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzQ291bnREb3duID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmhhbmRzRGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5sYlRpbWVSZXN1bWUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnVwZGF0ZVRpbWVSZXN1bWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoYXknLCB0aGlzLmlzR2FtZU92ZXIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY3JlYXRlT2JzdGFjbGUobm9kZTogY2MuTm9kZSkge1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxpc3RQcmZPYnN0YWNsZS5sZW5ndGgpO1xuICAgICAgICAgICAgbGV0IG9ic3RhY2xlID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0UHJmT2JzdGFjbGVbaW5kZXhdKTtcbiAgICAgICAgICAgIGxldCBvYnN0YWNsZUNvbXBvbmVudCA9IG9ic3RhY2xlLmdldENvbXBvbmVudChvYnN0YWNsZU1hbmFnZXIpO1xuICAgICAgICAgICAgaWYgKG9ic3RhY2xlQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgb2JzdGFjbGUgPSBvYnN0YWNsZUNvbXBvbmVudC5ub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2JzdGFjbGUueSA9IC0zNDAgKyBpICogNjgwO1xuICAgICAgICAgICAgbm9kZS5hZGRDaGlsZChvYnN0YWNsZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZW5PYnN0YWNsZSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlT2JzdGFjbGUodGhpcy5saXN0QmdbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uVG91Y2hTdGFydCgpIHtcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICB9XG5cbiAgICBzdGFydEdhbWUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0ZpcnN0VG91Y2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdFRvdWNoID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVUaW1lLCAxKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZHNEZXN0cm95KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZhbGwoKTtcbiAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kc0Rlc3Ryb3koKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0ZpcnN0VG91Y2gpIHJldHVybjtcblxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNHYW1lT3Zlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZHMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDIuNSk7XG4gICAgfVxuXG4gICAgZmFsbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNHYW1lT3ZlcikgcmV0dXJuO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmJhbGxvbi5ub2RlKVxuICAgICAgICAgICAgLmJ5KDAuMiwgeyB5OiAtODAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cblxuXG4gICAgdXBkYXRlVGltZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNGaXJzdFRvdWNoICYmICF0aGlzLmlzR2FtZU92ZXIpIHtcbiAgICAgICAgICAgIHRoaXMudGltZSArPSAxO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMYlRpbWUodGhpcy5sYlRpbWUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMYlNjb3JlKHRoaXMubGJTY29yZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlTGJEaWFtb25kKGxiRGlhbW9uZCkge1xuICAgICAgICBsYkRpYW1vbmQuc3RyaW5nID0gR2xvYmFsLmRpYU1vbmQgKyAnICc7XG4gICAgICAgIHRoaXMudXBkYXRlTGJTY29yZSh0aGlzLmxiU2NvcmUpO1xuICAgIH1cblxuICAgIHVwZGF0ZUxiVGltZShsYlRpbWU6IGNjLkxhYmVsKSB7XG4gICAgICAgIGxiVGltZS5zdHJpbmcgPSB0aGlzLnRpbWUgKyAnICc7XG4gICAgfVxuXG4gICAgdXBkYXRlTGJTY29yZShsYlNjb3JlOiBjYy5MYWJlbCkge1xuICAgICAgICBsYlNjb3JlLnN0cmluZyA9IHRoaXMudGltZSArIEdsb2JhbC5kaWFNb25kICsgJyAnO1xuICAgIH1cblxuICAgIHJlc2V0R2FtZSgpIHtcbiAgICAgICAgR2xvYmFsLmRpYU1vbmQgPSAwO1xuICAgICAgICBHbG9iYWwuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnRpbWUgPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZUxiU2NvcmUodGhpcy5sYlNjb3JlKTtcbiAgICAgICAgdGhpcy51cGRhdGVMYlRpbWUodGhpcy5sYlRpbWUpO1xuICAgICAgICB0aGlzLnVwZGF0ZUxiRGlhbW9uZCh0aGlzLmxiRGlhbW9uZCk7XG4gICAgICAgIHRoaXMuYmFsbG9uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5iYWxsb24ubm9kZS55ID0gLTQ4MDtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmlyc3RUb3VjaCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzR2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5saXN0QmcuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICB2YWx1ZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLmhhbmRzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubGlzdEJnWzBdLnkgPSAzMTIwO1xuICAgICAgICB0aGlzLmxpc3RCZ1sxXS55ID0gMTg0MDtcbiAgICAgICAgdGhpcy5saXN0QmdbMl0ueSA9IDU2MDtcbiAgICAgICAgdGhpcy5saXN0QmdbM10ueSA9IC03MjA7XG4gICAgICAgIHRoaXMubGlzdEJnWzNdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2VuT2JzdGFjbGUoKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKSB7XG5cbiAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5oYW5kcy5hY3RpdmUgPSBmYWxzZVxuICAgICAgICBsZXQgZ2FtZU92ZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkdhbWVPdmVyKS5nZXRDb21wb25lbnQoR2FtZU92ZXIpLm5vZGVcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudXBkYXRlVGltZSk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuYmFsbG9uKS5zdG9wKCk7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHNjb3JlcyA9IHRoaXMudGltZSArIEdsb2JhbC5kaWFNb25kO1xuICAgICAgICB0aGlzLnVuTG9ja0JhbGxvbiA9IGZhbHNlXG4gICAgICAgIGxldCBNQVhfU0NPUkVTID0gMTA7XG5cbiAgICAgICAgR2xvYmFsLmRhdGFTY29yZS5wdXNoKHNjb3Jlcyk7XG4gICAgICAgIEdsb2JhbC5kYXRhU2NvcmUuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGEgPiBiID8gLTEgOiAxO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoR2xvYmFsLmRhdGFTY29yZS5sZW5ndGggPiBNQVhfU0NPUkVTKSB7XG4gICAgICAgICAgICBHbG9iYWwuZGF0YVNjb3JlID0gR2xvYmFsLmRhdGFTY29yZS5zbGljZSgwLCBNQVhfU0NPUkVTKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnc2F2ZScsIEdsb2JhbC5kYXRhU2NvcmUpXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2NvcmVzJywgSlNPTi5zdHJpbmdpZnkoR2xvYmFsLmRhdGFTY29yZSkpO1xuICAgICAgICBpZiAoc2NvcmVzID49IEdsb2JhbC51bmxvY2tQb2ludHNbR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uICsgMV0pIHtcbiAgICAgICAgICAgIEdsb2JhbC51bmxvY2tJbmRleEJhbGxvbisrO1xuICAgICAgICAgICAgdGhpcy51bkxvY2tCYWxsb24gPSB0cnVlO1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1bmxvY2tJbmRleEJhbGxvbicsIEdsb2JhbC51bmxvY2tJbmRleEJhbGxvbik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInVuTG9ja0luZGV4IFwiLCBHbG9iYWwudW5sb2NrSW5kZXhCYWxsb24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmFsbG9uLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChnYW1lT3Zlcik7XG4gICAgICAgIH0sIDAuMylcblxuXG4gICAgfVxuXG4gICAgcGF1c2VHYW1lKCkge1xuICAgICAgICB0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZygnZHVuZycsIHRoaXMuaXNHYW1lT3ZlcilcbiAgICAgICAgbGV0IHBhdXNlR2FtZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmUGF1c2UpLmdldENvbXBvbmVudChQYXVzZSlcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHBhdXNlR2FtZS5ub2RlKTtcbiAgICB9XG5cbiAgICBnYW1lRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLmlzR2FtZU92ZXIpIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuaXNGaXJzdFRvdWNoKSB7XG4gICAgICAgICAgICB0aGlzLmJhbGxvbi5ub2RlLnNldFBvc2l0aW9uKHRoaXMuYmFsbG9uLm5vZGUucG9zaXRpb24ueCwgdGhpcy5iYWxsb24ubm9kZS5wb3NpdGlvbi55ICsgMTgwICogZHQsIDApO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19