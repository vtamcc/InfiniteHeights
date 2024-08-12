
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