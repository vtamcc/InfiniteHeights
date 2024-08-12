
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