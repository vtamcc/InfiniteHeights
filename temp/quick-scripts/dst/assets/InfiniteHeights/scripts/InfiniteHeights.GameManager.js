
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9JbmZpbml0ZUhlaWdodHMvc2NyaXB0cy9JbmZpbml0ZUhlaWdodHMuR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsbUVBQWtEO0FBRTVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBa0VDO1FBOURHLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLG1CQUFhLEdBQWMsRUFBRSxDQUFDO1FBRzlCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsbUJBQWEsR0FBcUIsRUFBRSxDQUFDO1FBR3JDLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBRzdCLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBR2hDLGlCQUFXLEdBQWMsRUFBRSxDQUFDO1FBQzVCLGlCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGlCQUFXLEdBQUcsQ0FBQyxDQUFDOztRQXlDaEIsaUJBQWlCO0lBQ3JCLENBQUM7b0JBbEVvQixXQUFXO0lBeUI1Qiw0QkFBTSxHQUFOO1FBQ0ksYUFBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNELDJCQUFLLEdBQUw7SUFFQSxDQUFDO0lBR0QsZ0NBQVUsR0FBVixVQUFXLGFBQXdCO1FBQy9CLCtCQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLCtCQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUMsSUFBSSwrQkFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQy9CLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2dCQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUs7Z0JBRTlCLElBQUksS0FBSyxHQUFHLCtCQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtvQkFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRywrQkFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7aUJBQ3RFO3FCQUFNO29CQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2lCQUN2QjtZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFHTCxDQUFDO0lBRUQsaUNBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFHRCwrQkFBUyxHQUFUO1FBQ0ksSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7SUE5RGEsb0JBQVEsR0FBZ0IsSUFBSSxDQUFDO0lBRTNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ1U7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDWTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNLO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0RBQ1k7SUFHckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztpREFDTztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNZO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ1U7SUF0QlgsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQWtFL0I7SUFBRCxrQkFBQztDQWxFRCxBQWtFQyxDQWxFd0MsRUFBRSxDQUFDLFNBQVMsR0FrRXBEO2tCQWxFb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgQmFsbG9uIGZyb20gXCIuL0dhbWUvSW5maW5pdGVIZWlnaHRzLkJhbGxvblwiO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4vSW5maW5pdGVIZWlnaHRzLkdsb2JhbFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogR2FtZU1hbmFnZXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJmR2FtZVZpZXc6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuTGlzdE5vZGVSYW5rOiBjYy5Ob2RlW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYnRlc3Q6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBsaXN0U3BmQmFsbG9uOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuUGFnZVZpZXcpXG4gICAgcGFnZVZpZXc6IGNjLlBhZ2VWaWV3ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgYmFsbG9uUHJlZmFiczogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5MaXN0QmFsbG9uOiBjYy5Ob2RlW10gPSBbXTtcbiAgICBpbmRleEJhbGxvbiA9IDE7XG4gICAgaXNDbGlja05leHQgPSAwO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgR2FtZU1hbmFnZXIuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICB0aGlzLnVwZGF0ZVJhbmsodGhpcy5uTGlzdE5vZGVSYW5rKTtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiBcbiAgICB1cGRhdGVSYW5rKGxpc3ROb2RlTGFiZWw6IGNjLk5vZGVbXSkge1xuICAgICAgICBHbG9iYWwuZGF0YVNjb3JlID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzY29yZXNcIikpIHx8IFtdO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRpZW0gbHV1IG5lIFwiLCBHbG9iYWwuZGF0YVNjb3JlKTtcbiAgICAgICAgaWYgKEdsb2JhbC5kYXRhU2NvcmUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBsaXN0Tm9kZUxhYmVsLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdE5vZGVMYWJlbC5mb3JFYWNoKChub2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IEdsb2JhbC5kYXRhU2NvcmUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IEdsb2JhbC5kYXRhU2NvcmVbaW5kZXhdICsgJyAnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgcmVtb3ZlQ2FjaGUoKSB7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICB9XG5cblxuICAgIGNsaWNrUGxheSgpIHtcbiAgICAgICAgbGV0IGdhbWVWaWV3ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZHYW1lVmlldylcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGdhbWVWaWV3KTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==