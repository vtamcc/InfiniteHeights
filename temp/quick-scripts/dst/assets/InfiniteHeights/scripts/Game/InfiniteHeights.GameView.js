
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
var InfiniteHeights_Ballon_1 = require("./InfiniteHeights.Ballon");
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
        _this.isFirstTouch = false;
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
        for (var i = 0; i < this.listBg.length; i++) {
            this.createObstacle(this.listBg[i]);
        }
    };
    GameView.prototype.onTouchStart = function () {
        this.startGame();
    };
    GameView.prototype.startGame = function () {
        if (!this.isFirstTouch) {
            this.isFirstTouch = true;
        }
        else {
            this.fall();
        }
    };
    GameView.prototype.fall = function () {
        // this.ballon.setPosition(this.ballon.position.x, this.ballon.position.y - 80,0);
        cc.tween(this.ballon)
            .by(0.2, { y: -80 })
            .start();
    };
    GameView.prototype.gameOver = function () {
        console.log("Thua con me may roi ");
    };
    GameView.prototype.update = function (dt) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9JbmZpbml0ZUhlaWdodHMvc2NyaXB0cy9HYW1lL0luZmluaXRlSGVpZ2h0cy5HYW1lVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRixtRUFBOEM7QUFDOUMscUZBQWdFO0FBRTFELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUdDO1FBN0ZHLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIscUJBQXFCO1FBQ3JCLCtCQUErQjtRQUUvQixxQkFBZSxHQUFnQixFQUFFLENBQUM7UUFFbEMsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFFaEMsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRTVCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFjLEVBQUUsQ0FBQztRQUN2QixrQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixZQUFNLEdBQUcsSUFBSSxDQUFDOztRQXFFZCxvQkFBb0I7UUFDcEIsNkJBQTZCO1FBQzdCLGdGQUFnRjtRQUNoRixtQkFBbUI7UUFFbkIsaUNBQWlDO1FBRWpDLElBQUk7SUFDUixDQUFDO2lCQWpHb0IsUUFBUTtJQXFCekIsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFFSSxVQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN6Qix3QkFBd0I7UUFDeEIsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLGdDQUFN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Q2M7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDWTtJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ1E7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBbEJOLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpRzVCO0lBQUQsZUFBQztDQWpHRCxBQWlHQyxDQWpHcUMsRUFBRSxDQUFDLFNBQVMsR0FpR2pEO2tCQWpHb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgQmFja0dyb3VuZCBmcm9tIFwiLi9JbmZpbml0ZUhlaWdodHMuQmFja0dyb3VuZFwiO1xuaW1wb3J0IEJhbGxvbiBmcm9tIFwiLi9JbmZpbml0ZUhlaWdodHMuQmFsbG9uXCI7XG5pbXBvcnQgb2JzdGFjbGVNYW5hZ2VyIGZyb20gXCIuL0luZmluaXRlSGVpZ2h0cy5PYnN0YWNsZU1hbmFnZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IEdhbWVWaWV3ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuT2JzdGFjbGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIC8vIG5PYnN0YWNsZV8yOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGxpc3RQcmZPYnN0YWNsZTogY2MuUHJlZmFiW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZkJhY2tHcm91bmQ6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkJnR2FtZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmZCYWxsb246IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkJhbGxvbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdEJnOiBjYy5Ob2RlW10gPSBbXTtcbiAgICBpc0ZpcnN0VG91Y2ggPSBmYWxzZTtcbiAgICBiYWxsb24gPSBudWxsO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICAvL3RoaXMuY3JlYXRlT2JzdGFjbGUoKTtcbiAgICAgICAgLy90aGlzLmdlbk9ic3RhY2xlXzIoKTtcbiAgICAgICAgdGhpcy5iYWxsb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkJhbGxvbikuZ2V0Q29tcG9uZW50KEJhbGxvbikubm9kZVxuICAgICAgICB0aGlzLmJhbGxvbi55ID0gLTUwMDtcbiAgICAgICAgdGhpcy5uQmFsbG9uLmFkZENoaWxkKHRoaXMuYmFsbG9uKTtcbiAgICAgICAgdGhpcy5nZW5PYnN0YWNsZSgpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuXG4gICAgICAgXG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBjcmVhdGVPYnN0YWNsZShub2RlOiBjYy5Ob2RlKSB7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGlzdFByZk9ic3RhY2xlLmxlbmd0aCk7XG4gICAgICAgICAgICBsZXQgb2JzdGFjbGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RQcmZPYnN0YWNsZVtpbmRleF0pO1xuICAgICAgICAgICAgbGV0IG9ic3RhY2xlQ29tcG9uZW50ID0gb2JzdGFjbGUuZ2V0Q29tcG9uZW50KG9ic3RhY2xlTWFuYWdlcik7XG4gICAgICAgICAgICBpZiAob2JzdGFjbGVDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBvYnN0YWNsZSA9IG9ic3RhY2xlQ29tcG9uZW50Lm5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvYnN0YWNsZS55ID0gLTM0MCArIGkgKiA2ODA7XG4gICAgICAgICAgICBub2RlLmFkZENoaWxkKG9ic3RhY2xlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdlbk9ic3RhY2xlKCkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0QmcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlT2JzdGFjbGUodGhpcy5saXN0QmdbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uVG91Y2hTdGFydCgpIHtcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICB9XG5cbiAgICBzdGFydEdhbWUoKSB7XG4gICAgICAgIGlmKCF0aGlzLmlzRmlyc3RUb3VjaCkge1xuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0VG91Y2ggPSB0cnVlO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZhbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZhbGwoKSB7XG4gICAgICAgIC8vIHRoaXMuYmFsbG9uLnNldFBvc2l0aW9uKHRoaXMuYmFsbG9uLnBvc2l0aW9uLngsIHRoaXMuYmFsbG9uLnBvc2l0aW9uLnkgLSA4MCwwKTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5iYWxsb24pXG4gICAgICAgIC5ieSgwLjIsIHsgeTogLTgwfSlcbiAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuICAgXG5cbiAgICBnYW1lT3ZlcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaHVhIGNvbiBtZSBtYXkgcm9pIFwiKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYodGhpcy5pc0ZpcnN0VG91Y2gpIHtcbiAgICAgICAgICAgIHRoaXMuYmFsbG9uLnNldFBvc2l0aW9uKHRoaXMuYmFsbG9uLnBvc2l0aW9uLngsdGhpcy5iYWxsb24ucG9zaXRpb24ueSArIDE4MCAqIGR0LDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGdlbkJhY2tHcm91bmQoKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwic2FkYXNkXCIpO1xuICAgIC8vICAgICBsZXQgYmcgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkJhY2tHcm91bmQpLmdldENvbXBvbmVudChCYWNrR3JvdW5kKS5ub2RlXG4gICAgLy8gICAgIGJnLnkgPSAxOTAwO1xuXG4gICAgLy8gICAgIHRoaXMubkJnR2FtZS5hZGRDaGlsZChiZyk7XG5cbiAgICAvLyB9XG59XG4iXX0=