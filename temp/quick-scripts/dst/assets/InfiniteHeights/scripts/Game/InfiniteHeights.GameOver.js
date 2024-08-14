
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
        InfiniteHeights_Global_1.Global.unlockIndexBallon = JSON.parse(cc.sys.localStorage.getItem('unlockIndexBallon')) || InfiniteHeights_Global_1.Global.unlockIndexBallon;
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
        if (InfiniteHeights_GameView_1.default.instance.unLockBallon) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9JbmZpbml0ZUhlaWdodHMvc2NyaXB0cy9HYW1lL0luZmluaXRlSGVpZ2h0cy5HYW1lT3Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw4RUFBeUQ7QUFDekQsb0VBQW1EO0FBQ25ELG1FQUE4QztBQUM5Qyx1RUFBa0Q7QUFDbEQsK0RBQTBDO0FBRXBDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBeURDO1FBdERFLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFHekIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUczQixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBR3hCLGFBQU8sR0FBVyxJQUFJLENBQUM7UUFHdkIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIsV0FBSyxHQUFHLENBQUMsQ0FBQzs7UUF3Q1QsaUJBQWlCO0lBQ3JCLENBQUM7SUF4Q0csd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSwrQkFBTSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsSUFBSSwrQkFBTSxDQUFDLGlCQUFpQixDQUFDO1FBQ3BILEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQywrQkFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsK0JBQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2pELGtDQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsa0NBQVEsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRCxrQ0FBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0ksa0NBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUNJLGtDQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3RELDhCQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzNCLHFDQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxxQ0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxvQ0FBaUIsR0FBakI7UUFFSSxJQUFJLGtDQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRTtZQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQy9DLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSwrQkFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDOUU7YUFBTTtZQUNILElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQztJQUNMLENBQUM7SUFDRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQW5ERjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNNO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ1E7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxnQ0FBTSxDQUFDOzZDQUNNO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ1k7SUFmWixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBeUQ1QjtJQUFELGVBQUM7Q0F6REQsQUF5REMsQ0F6RHFDLEVBQUUsQ0FBQyxTQUFTLEdBeURqRDtrQkF6RG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuLi9JbmZpbml0ZUhlaWdodHMuR2FtZU1hbmFnZXJcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi9JbmZpbml0ZUhlaWdodHMuR2xvYmFsXCI7XG5pbXBvcnQgQmFsbG9uIGZyb20gXCIuL0luZmluaXRlSGVpZ2h0cy5CYWxsb25cIjtcbmltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi9JbmZpbml0ZUhlaWdodHMuR2FtZVZpZXdcIjtcbmltcG9ydCBTaG9wIGZyb20gXCIuL0luZmluaXRlSGVpZ2h0cy5TaG9wXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU92ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICBsYlNjb3JlOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgIGxiRGlhbW9uZDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICBsYlRpbWU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgQHByb3BlcnR5KEJhbGxvbilcbiAgIG5CYWxsb246IEJhbGxvbiA9IG51bGw7XG5cbiAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgblVuTG9ja0JhbGxvbjogY2MuTm9kZSA9IG51bGw7XG4gICBpbmRleCA9IDA7XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBHbG9iYWwudW5sb2NrSW5kZXhCYWxsb24gPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndW5sb2NrSW5kZXhCYWxsb24nKSkgfHwgR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzY29yZXNcIiwgSlNPTi5zdHJpbmdpZnkoR2xvYmFsLmRhdGFTY29yZSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkdsb2JhbCBcIiwgR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uKTtcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UudXBkYXRlTGJUaW1lKHRoaXMubGJUaW1lKTtcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UudXBkYXRlTGJEaWFtb25kKHRoaXMubGJEaWFtb25kKTtcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UudXBkYXRlTGJTY29yZSh0aGlzLmxiU2NvcmUpO1xuICAgICAgICB0aGlzLmNoZWNrVW5sb2NrQmFsbG9uKCk7XG4gICAgfVxuXG4gICAgb25SZXBsYXkoKSB7XG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLnJlc2V0R2FtZSgpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIG9uSG9tZSgpIHtcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UuZ2FtZURlc3Ryb3koKTtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzZWxlY3RlZEJhbGxvbkluZGV4Jyk7XG4gICAgICAgIFNob3AuaW5zdGFuY2UudXBkYXRlU2hvcCgpO1xuICAgICAgICBHYW1lTWFuYWdlci5pbnN0YW5jZS51cGRhdGVSYW5rKEdhbWVNYW5hZ2VyLmluc3RhbmNlLm5MaXN0Tm9kZVJhbmspO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGNoZWNrVW5sb2NrQmFsbG9uKCkge1xuICAgIFxuICAgICAgICBpZiAoR2FtZVZpZXcuaW5zdGFuY2UudW5Mb2NrQmFsbG9uKSB7XG4gICAgICAgICAgICB0aGlzLm5VbkxvY2tCYWxsb24uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubkJhbGxvbi5zZXREYXRhKEdsb2JhbC51bmxvY2tJbmRleEJhbGxvbik7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VubG9ja0luZGV4QmFsbG9uJywgR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMublVuTG9ja0JhbGxvbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19