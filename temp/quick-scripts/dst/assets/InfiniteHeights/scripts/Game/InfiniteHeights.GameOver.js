
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
var InfiniteHeights_Ballon_1 = require("./InfiniteHeights.Ballon");
var InfiniteHeights_GameView_1 = require("./InfiniteHeights.GameView");
var InfiniteHeights_Shop_1 = require("./InfiniteHeights.Shop");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameOver = /** @class */ (function (_super) {
    __extends(GameOver, _super);
    function GameOver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbScore = null;
        _this.lbDiamond = null;
        _this.lbTime = null;
        _this.nBallon = null;
        _this.nUnLockBallon = null;
        _this.index = 0;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    GameOver.prototype.onLoad = function () {
        //Global.unlockIndexBallon = JSON.parse(cc.sys.localStorage.getItem('unlockIndexBallon')) || Global.unlockIndexBallon;
        cc.sys.localStorage.setItem("scores", JSON.stringify(InfiniteHeights_Global_1.Global.dataScore));
        console.log("Global ", InfiniteHeights_Global_1.Global.unlockIndexBallon);
        InfiniteHeights_GameView_1.default.instance.updateLbTime(this.lbTime);
        InfiniteHeights_GameView_1.default.instance.updateLbDiamond(this.lbDiamond);
        InfiniteHeights_GameView_1.default.instance.updateLbScore(this.lbScore);
        this.checkUnlockBallon();
    };
    GameOver.prototype.onReplay = function () {
        InfiniteHeights_GameView_1.default.instance.resetGame();
        this.node.destroy();
    };
    GameOver.prototype.onHome = function () {
        InfiniteHeights_GameView_1.default.instance.gameDestroy();
        cc.sys.localStorage.removeItem('selectedBallonIndex');
        InfiniteHeights_Shop_1.default.instance.updateShop();
        InfiniteHeights_GameManager_1.default.instance.updateRank(InfiniteHeights_GameManager_1.default.instance.nListNodeRank);
        this.node.destroy();
    };
    GameOver.prototype.checkUnlockBallon = function () {
        var previousUnlockIndex = JSON.parse(cc.sys.localStorage.getItem('unlockIndexBallon')) || 0;
        if (InfiniteHeights_Global_1.Global.unlockIndexBallon > previousUnlockIndex) {
            this.nUnLockBallon.active = true;
            this.nBallon.setData(InfiniteHeights_Global_1.Global.unlockIndexBallon);
            cc.sys.localStorage.setItem('unlockIndexBallon', InfiniteHeights_Global_1.Global.unlockIndexBallon);
        }
        else {
            this.nUnLockBallon.active = false;
        }
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
    __decorate([
        property(InfiniteHeights_Ballon_1.default)
    ], GameOver.prototype, "nBallon", void 0);
    __decorate([
        property(cc.Node)
    ], GameOver.prototype, "nUnLockBallon", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSW5maW5pdGVIZWlnaHRzXFxzY3JpcHRzXFxHYW1lXFxJbmZpbml0ZUhlaWdodHMuR2FtZU92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsOEVBQXlEO0FBQ3pELG9FQUFtRDtBQUNuRCxtRUFBOEM7QUFDOUMsdUVBQWtEO0FBQ2xELCtEQUEwQztBQUVwQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTBEQztRQXZERSxhQUFPLEdBQWEsSUFBSSxDQUFDO1FBR3pCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0IsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixhQUFPLEdBQVcsSUFBSSxDQUFDO1FBR3ZCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLFdBQUssR0FBRyxDQUFDLENBQUM7O1FBeUNULGlCQUFpQjtJQUNyQixDQUFDO0lBekNHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksc0hBQXNIO1FBQ3RILEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQywrQkFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsK0JBQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2pELGtDQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsa0NBQVEsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRCxrQ0FBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0ksa0NBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUNJLGtDQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3RELDhCQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzNCLHFDQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxxQ0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxvQ0FBaUIsR0FBakI7UUFDSSxJQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFOUYsSUFBSSwrQkFBTSxDQUFDLGlCQUFpQixHQUFHLG1CQUFtQixFQUFFO1lBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDL0MsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLCtCQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUM5RTthQUFNO1lBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQUNELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBcERGO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ007SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDUTtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNLO0lBR3hCO1FBREMsUUFBUSxDQUFDLGdDQUFNLENBQUM7NkNBQ007SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDWTtJQWZaLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwRDVCO0lBQUQsZUFBQztDQTFERCxBQTBEQyxDQTFEcUMsRUFBRSxDQUFDLFNBQVMsR0EwRGpEO2tCQTFEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tIFwiLi4vSW5maW5pdGVIZWlnaHRzLkdhbWVNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi9JbmZpbml0ZUhlaWdodHMuR2xvYmFsXCI7XHJcbmltcG9ydCBCYWxsb24gZnJvbSBcIi4vSW5maW5pdGVIZWlnaHRzLkJhbGxvblwiO1xyXG5pbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4vSW5maW5pdGVIZWlnaHRzLkdhbWVWaWV3XCI7XHJcbmltcG9ydCBTaG9wIGZyb20gXCIuL0luZmluaXRlSGVpZ2h0cy5TaG9wXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPdmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgbGJTY29yZTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICBsYkRpYW1vbmQ6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgbGJUaW1lOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICBAcHJvcGVydHkoQmFsbG9uKVxyXG4gICBuQmFsbG9uOiBCYWxsb24gPSBudWxsO1xyXG5cclxuICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgIG5VbkxvY2tCYWxsb246IGNjLk5vZGUgPSBudWxsO1xyXG4gICBpbmRleCA9IDA7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8vR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VubG9ja0luZGV4QmFsbG9uJykpIHx8IEdsb2JhbC51bmxvY2tJbmRleEJhbGxvbjtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzY29yZXNcIiwgSlNPTi5zdHJpbmdpZnkoR2xvYmFsLmRhdGFTY29yZSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2xvYmFsIFwiLCBHbG9iYWwudW5sb2NrSW5kZXhCYWxsb24pO1xyXG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLnVwZGF0ZUxiVGltZSh0aGlzLmxiVGltZSk7XHJcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UudXBkYXRlTGJEaWFtb25kKHRoaXMubGJEaWFtb25kKTtcclxuICAgICAgICBHYW1lVmlldy5pbnN0YW5jZS51cGRhdGVMYlNjb3JlKHRoaXMubGJTY29yZSk7XHJcbiAgICAgICAgdGhpcy5jaGVja1VubG9ja0JhbGxvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVwbGF5KCkge1xyXG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLnJlc2V0R2FtZSgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ib21lKCkge1xyXG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLmdhbWVEZXN0cm95KCk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzZWxlY3RlZEJhbGxvbkluZGV4Jyk7XHJcbiAgICAgICAgU2hvcC5pbnN0YW5jZS51cGRhdGVTaG9wKCk7XHJcbiAgICAgICAgR2FtZU1hbmFnZXIuaW5zdGFuY2UudXBkYXRlUmFuayhHYW1lTWFuYWdlci5pbnN0YW5jZS5uTGlzdE5vZGVSYW5rKTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrVW5sb2NrQmFsbG9uKCkge1xyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzVW5sb2NrSW5kZXggPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndW5sb2NrSW5kZXhCYWxsb24nKSkgfHwgMDtcclxuICAgIFxyXG4gICAgICAgIGlmIChHbG9iYWwudW5sb2NrSW5kZXhCYWxsb24gPiBwcmV2aW91c1VubG9ja0luZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMublVuTG9ja0JhbGxvbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5CYWxsb24uc2V0RGF0YShHbG9iYWwudW5sb2NrSW5kZXhCYWxsb24pO1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VubG9ja0luZGV4QmFsbG9uJywgR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5VbkxvY2tCYWxsb24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==