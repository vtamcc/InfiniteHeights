
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