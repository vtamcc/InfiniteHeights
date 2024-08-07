
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
var InfiniteHeights_ObstacleManager_1 = require("./InfiniteHeights.ObstacleManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameView = /** @class */ (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nObstacle = null;
        _this.nObstacle_2 = null;
        _this.listPrfObstacle = [];
        _this.prfBackGround = null;
        _this.nBgGame = null;
        _this.isFirstTouch = false;
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
        this.test();
        this.genObstacle_2();
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
    };
    GameView.prototype.start = function () {
    };
    GameView.prototype.test = function () {
        for (var i = 0; i < 2; i++) {
            var test = cc.instantiate(this.listPrfObstacle[i]).getComponent(InfiniteHeights_ObstacleManager_1.default).node;
            test.y = 300 + i * 600;
            this.nObstacle.addChild(test);
        }
    };
    GameView.prototype.onTouchBegan = function () {
        this.isFirstTouch = true;
        console.log("sdasdasd");
    };
    GameView.prototype.genObstacle_2 = function () {
        var obstracle = cc.instantiate(this.listPrfObstacle[5]).getComponent(InfiniteHeights_ObstacleManager_1.default).node;
        this.nObstacle_2.addChild(obstracle);
    };
    var GameView_1;
    GameView.instance = null;
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "nObstacle", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "nObstacle_2", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameView.prototype, "listPrfObstacle", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameView.prototype, "prfBackGround", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "nBgGame", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9JbmZpbml0ZUhlaWdodHMvc2NyaXB0cy9HYW1lL0luZmluaXRlSGVpZ2h0cy5HYW1lVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRixxRkFBZ0U7QUFFMUQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF5REM7UUFyREcsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixxQkFBZSxHQUFnQixFQUFFLENBQUM7UUFFbEMsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFFaEMsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixrQkFBWSxHQUFHLEtBQUssQ0FBQzs7UUFtQ3JCLG9CQUFvQjtRQUNwQiw2QkFBNkI7UUFDN0IsZ0ZBQWdGO1FBQ2hGLG1CQUFtQjtRQUVuQixpQ0FBaUM7UUFFakMsSUFBSTtJQUNSLENBQUM7aUJBekRvQixRQUFRO0lBZXpCLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBRUksVUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRXhFLENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHVCQUFJLEdBQUo7UUFDSSxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyx5Q0FBZSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3RGLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakM7SUFFTCxDQUFDO0lBRUQsK0JBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUVELGdDQUFhLEdBQWI7UUFDSSxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMseUNBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMzRixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QyxDQUFDOztJQTdDYSxpQkFBUSxHQUFhLElBQUksQ0FBQztJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDYztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO21EQUNZO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFaUCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBeUQ1QjtJQUFELGVBQUM7Q0F6REQsQUF5REMsQ0F6RHFDLEVBQUUsQ0FBQyxTQUFTLEdBeURqRDtrQkF6RG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEJhY2tHcm91bmQgZnJvbSBcIi4vSW5maW5pdGVIZWlnaHRzLkJhY2tHcm91bmRcIjtcbmltcG9ydCBvYnN0YWNsZU1hbmFnZXIgZnJvbSBcIi4vSW5maW5pdGVIZWlnaHRzLk9ic3RhY2xlTWFuYWdlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogR2FtZVZpZXcgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5PYnN0YWNsZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbk9ic3RhY2xlXzI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgbGlzdFByZk9ic3RhY2xlOiBjYy5QcmVmYWJbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJmQmFja0dyb3VuZDogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuQmdHYW1lOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGlzRmlyc3RUb3VjaCA9IGZhbHNlO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICB0aGlzLnRlc3QoKTtcbiAgICAgICAgdGhpcy5nZW5PYnN0YWNsZV8yKCk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCx0aGlzLm9uVG91Y2hCZWdhbiwgdGhpcyk7XG4gICAgICAgXG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICB0ZXN0KCkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdGVzdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdFByZk9ic3RhY2xlW2ldKS5nZXRDb21wb25lbnQob2JzdGFjbGVNYW5hZ2VyKS5ub2RlO1xuICAgICAgICAgICAgdGVzdC55ID0gMzAwICsgaSAqIDYwMDtcbiAgICAgICAgICAgIHRoaXMubk9ic3RhY2xlLmFkZENoaWxkKHRlc3QpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIG9uVG91Y2hCZWdhbigpIHtcbiAgICAgICAgdGhpcy5pc0ZpcnN0VG91Y2ggPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNkYXNkYXNkXCIpXG4gICAgfVxuXG4gICAgZ2VuT2JzdGFjbGVfMigpIHtcbiAgICAgICAgbGV0IG9ic3RyYWNsZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdFByZk9ic3RhY2xlWzVdKS5nZXRDb21wb25lbnQob2JzdGFjbGVNYW5hZ2VyKS5ub2RlO1xuICAgICAgICB0aGlzLm5PYnN0YWNsZV8yLmFkZENoaWxkKG9ic3RyYWNsZSk7XG4gICAgfVxuXG4gICAgLy8gZ2VuQmFja0dyb3VuZCgpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJzYWRhc2RcIik7XG4gICAgLy8gICAgIGxldCBiZyA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmQmFja0dyb3VuZCkuZ2V0Q29tcG9uZW50KEJhY2tHcm91bmQpLm5vZGVcbiAgICAvLyAgICAgYmcueSA9IDE5MDA7XG5cbiAgICAvLyAgICAgdGhpcy5uQmdHYW1lLmFkZENoaWxkKGJnKTtcblxuICAgIC8vIH1cbn1cbiJdfQ==