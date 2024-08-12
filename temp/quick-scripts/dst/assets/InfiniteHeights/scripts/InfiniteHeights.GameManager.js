
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
        return _this;
        // update (dt) {}
    }
    GameManager_1 = GameManager;
    GameManager.prototype.onLoad = function () {
        GameManager_1.instance = this;
        this.updateRank(this.nListNodeRank);
        InfiniteHeights_Global_1.Global.dataBallon = JSON.parse(cc.sys.localStorage.getItem('dataBallons')) || InfiniteHeights_Global_1.Global.dataBallon;
        InfiniteHeights_Global_1.Global.currentIndex = JSON.parse(cc.sys.localStorage.getItem('indexBallon')) || 1;
        this.updateBallon();
        console.log("currentIndex", InfiniteHeights_Global_1.Global.currentIndex);
        console.log("data ", InfiniteHeights_Global_1.Global.dataBallon);
    };
    GameManager.prototype.start = function () {
    };
    GameManager.prototype.updateBallon = function () {
        this.nListBallon[1].active = true;
        this.nListBallon[1].getComponent(cc.Sprite).spriteFrame = this.listSpfBallon[0];
        var leftIndex = (InfiniteHeights_Global_1.Global.currentIndex + 2) % InfiniteHeights_Global_1.Global.dataBallon.length;
        if (leftIndex !== InfiniteHeights_Global_1.Global.currentIndex && InfiniteHeights_Global_1.Global.dataBallon[leftIndex].isUnlock) {
            this.nListBallon[0].active = true;
            this.nListBallon[0].getComponent(cc.Sprite).spriteFrame = this.listSpfBallon[leftIndex];
        }
        else {
            this.nListBallon[0].active = false;
        }
        var rightIndex = (InfiniteHeights_Global_1.Global.currentIndex) % InfiniteHeights_Global_1.Global.dataBallon.length;
        console.log("rightIndex ", rightIndex);
        console.log("rightData", InfiniteHeights_Global_1.Global.dataBallon[rightIndex]);
        if (InfiniteHeights_Global_1.Global.dataBallon[rightIndex].isUnlock) {
            this.nListBallon[2].active = true;
            this.nListBallon[2].getComponent(cc.Sprite).spriteFrame = this.listSpfBallon[rightIndex];
        }
        else {
            this.nListBallon[2].active = false;
        }
    };
    GameManager.prototype.updateRank = function (listNodeLabel) {
        InfiniteHeights_Global_1.Global.dataScore = JSON.parse(cc.sys.localStorage.getItem("scores")) || [];
        console.log("Diem luu ne ", InfiniteHeights_Global_1.Global.dataScore);
        if (InfiniteHeights_Global_1.Global.dataScore.length === 0) {
            //console.log("Mảng scores rỗng, ẩn tất cả các node.");
            listNodeLabel.forEach(function (node) {
                node.active = false;
            });
        }
        else {
            listNodeLabel.forEach(function (node, index) {
                //console.log("index ", index);
                //console.log("diem ", Global.dataScore)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSW5maW5pdGVIZWlnaHRzXFxzY3JpcHRzXFxJbmZpbml0ZUhlaWdodHMuR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsbUVBQWtEO0FBRTVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBOEZDO1FBMUZHLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLG1CQUFhLEdBQWMsRUFBRSxDQUFDO1FBRzlCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsbUJBQWEsR0FBcUIsRUFBRSxDQUFDO1FBR3JDLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBRzdCLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBR2hDLGlCQUFXLEdBQWMsRUFBRSxDQUFDO1FBQzVCLGlCQUFXLEdBQUcsQ0FBQyxDQUFDOztRQXNFaEIsaUJBQWlCO0lBQ3JCLENBQUM7b0JBOUZvQixXQUFXO0lBd0I1Qiw0QkFBTSxHQUFOO1FBQ0ksYUFBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEMsK0JBQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSwrQkFBTSxDQUFDLFVBQVUsQ0FBQztRQUNoRywrQkFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMs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QUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ1U7SUF0QlgsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQThGL0I7SUFBRCxrQkFBQztDQTlGRCxBQThGQyxDQTlGd0MsRUFBRSxDQUFDLFNBQVMsR0E4RnBEO2tCQTlGb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBCYWxsb24gZnJvbSBcIi4vR2FtZS9JbmZpbml0ZUhlaWdodHMuQmFsbG9uXCI7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuL0luZmluaXRlSGVpZ2h0cy5HbG9iYWxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogR2FtZU1hbmFnZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZkdhbWVWaWV3OiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbkxpc3ROb2RlUmFuazogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJ0ZXN0OiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgbGlzdFNwZkJhbGxvbjogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QYWdlVmlldylcclxuICAgIHBhZ2VWaWV3OiBjYy5QYWdlVmlldyA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGJhbGxvblByZWZhYnM6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuTGlzdEJhbGxvbjogY2MuTm9kZVtdID0gW107XHJcbiAgICBpbmRleEJhbGxvbiA9IDE7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgR2FtZU1hbmFnZXIuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmFuayh0aGlzLm5MaXN0Tm9kZVJhbmspO1xyXG4gICAgICAgIEdsb2JhbC5kYXRhQmFsbG9uID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGFCYWxsb25zJykpIHx8IEdsb2JhbC5kYXRhQmFsbG9uO1xyXG4gICAgICAgIEdsb2JhbC5jdXJyZW50SW5kZXggPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5kZXhCYWxsb24nKSkgfHwgMTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJhbGxvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudEluZGV4XCIsIEdsb2JhbC5jdXJyZW50SW5kZXgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBcIiwgR2xvYmFsLmRhdGFCYWxsb24pO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGVCYWxsb24oKSB7XHJcbiAgICAgICAgdGhpcy5uTGlzdEJhbGxvblsxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubkxpc3RCYWxsb25bMV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmxpc3RTcGZCYWxsb25bMF07XHJcbiAgICAgICAgbGV0IGxlZnRJbmRleCA9IChHbG9iYWwuY3VycmVudEluZGV4ICsgMikgJSBHbG9iYWwuZGF0YUJhbGxvbi5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGxlZnRJbmRleCAhPT0gR2xvYmFsLmN1cnJlbnRJbmRleCAmJiBHbG9iYWwuZGF0YUJhbGxvbltsZWZ0SW5kZXhdLmlzVW5sb2NrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubkxpc3RCYWxsb25bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5uTGlzdEJhbGxvblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMubGlzdFNwZkJhbGxvbltsZWZ0SW5kZXhdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubkxpc3RCYWxsb25bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByaWdodEluZGV4ID0gKEdsb2JhbC5jdXJyZW50SW5kZXgpICUgR2xvYmFsLmRhdGFCYWxsb24ubGVuZ3RoO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmlnaHRJbmRleCBcIiwgcmlnaHRJbmRleCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyaWdodERhdGFcIiwgR2xvYmFsLmRhdGFCYWxsb25bcmlnaHRJbmRleF0pO1xyXG4gICAgICAgIGlmIChHbG9iYWwuZGF0YUJhbGxvbltyaWdodEluZGV4XS5pc1VubG9jaykge1xyXG4gICAgICAgICAgICB0aGlzLm5MaXN0QmFsbG9uWzJdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubkxpc3RCYWxsb25bMl0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmxpc3RTcGZCYWxsb25bcmlnaHRJbmRleF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5uTGlzdEJhbGxvblsyXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZVJhbmsobGlzdE5vZGVMYWJlbDogY2MuTm9kZVtdKSB7XHJcbiAgICAgICAgR2xvYmFsLmRhdGFTY29yZSA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2NvcmVzXCIpKSB8fCBbXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRpZW0gbHV1IG5lIFwiLCBHbG9iYWwuZGF0YVNjb3JlKTtcclxuICAgICAgICBpZiAoR2xvYmFsLmRhdGFTY29yZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIk3huqNuZyBzY29yZXMgcuG7l25nLCDhuqluIHThuqV0IGPhuqMgY8OhYyBub2RlLlwiKTtcclxuICAgICAgICAgICAgbGlzdE5vZGVMYWJlbC5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGlzdE5vZGVMYWJlbC5mb3JFYWNoKChub2RlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImluZGV4IFwiLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGllbSBcIiwgR2xvYmFsLmRhdGFTY29yZSlcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IEdsb2JhbC5kYXRhU2NvcmUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBHbG9iYWwuZGF0YVNjb3JlW2luZGV4XSArICcgJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ2FjaGUoKSB7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjbGlja1BsYXkoKSB7XHJcbiAgICAgICAgbGV0IGdhbWVWaWV3ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZHYW1lVmlldylcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZ2FtZVZpZXcpO1xyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=