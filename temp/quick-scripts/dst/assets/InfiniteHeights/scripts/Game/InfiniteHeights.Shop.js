
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/InfiniteHeights/scripts/Game/InfiniteHeights.Shop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca106/9TXROP4idbyKoCVQC', 'InfiniteHeights.Shop');
// InfiniteHeights/scripts/Game/InfiniteHeights.Shop.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Shop = /** @class */ (function (_super) {
    __extends(Shop, _super);
    function Shop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listSpfBallon = [];
        _this.nBallon_0 = null;
        _this.nBallon_1 = null;
        _this.nBallon_2 = null;
        _this.nNext = null;
        _this.nPrev = null;
        return _this;
        // update (dt) {}
    }
    Shop_1 = Shop;
    Shop.prototype.onLoad = function () {
        Shop_1.instance = this;
        InfiniteHeights_Global_1.Global.unlockIndexBallon = JSON.parse(cc.sys.localStorage.getItem('unlockIndexBallon')) || InfiniteHeights_Global_1.Global.unlockIndexBallon;
        console.log("unLockIndex ", InfiniteHeights_Global_1.Global.unlockIndexBallon);
        console.log("indexBallon", InfiniteHeights_Global_1.Global.currentIndexBallon);
        this.updateShop();
    };
    Shop.prototype.start = function () {
    };
    // onNext() {
    //     Global.currentIndexBallon++;
    //     console.log("OnNext ", Global.currentIndexBallon);
    //     if (Global.currentIndexBallon > Global.unlockIndexBallon)
    //         Global.currentIndexBallon = Global.unlockIndexBallon;
    //     this.updateShop()
    // }
    // onPrev() {
    //     Global.currentIndexBallon--;
    //     console.log("OnPrev ", Global.currentIndexBallon);
    //     if (Global.currentIndexBallon < 0)
    //         Global.currentIndexBallon = 0;
    //     this.updateShop()
    // }
    Shop.prototype.onNext = function () {
        if (InfiniteHeights_Global_1.Global.currentIndexBallon < InfiniteHeights_Global_1.Global.unlockPoints.length - 1) {
            InfiniteHeights_Global_1.Global.currentIndexBallon++;
            this.updateShop();
            console.log("OnNext ", InfiniteHeights_Global_1.Global.currentIndexBallon);
            cc.sys.localStorage.setItem('currentIndexBallon', InfiniteHeights_Global_1.Global.currentIndexBallon);
        }
        else {
            this.nNext.active = false;
            console.log("sdasd");
        }
    };
    Shop.prototype.onPrev = function () {
        if (InfiniteHeights_Global_1.Global.currentIndexBallon > 0) {
            InfiniteHeights_Global_1.Global.currentIndexBallon--;
            this.updateShop();
            console.log("OnPrev ", InfiniteHeights_Global_1.Global.currentIndexBallon);
            cc.sys.localStorage.setItem('currentIndexBallon', InfiniteHeights_Global_1.Global.currentIndexBallon);
        }
    };
    Shop.prototype.updateShop = function () {
        // neu currentIndexBallon == 0 => an button Previous, Ballon 0
        // neu currentIndexBallon > 0 && < unlockIndexBallon => xu ly gi
        // neu currentIndexBallon == unlockIndexBallon =>an button Next, Ballon 2
        this.nBallon_1.spriteFrame = this.listSpfBallon[InfiniteHeights_Global_1.Global.currentIndexBallon];
        if (InfiniteHeights_Global_1.Global.currentIndexBallon === 0) {
            this.nPrev.active = false;
            this.nNext.active = true;
            this.nBallon_0.node.active = false;
            if (InfiniteHeights_Global_1.Global.unlockIndexBallon > 0) {
                this.nBallon_2.node.active = true;
                this.nBallon_2.spriteFrame = this.listSpfBallon[InfiniteHeights_Global_1.Global.currentIndexBallon + 1];
            }
            else {
                this.nBallon_2.node.active = false;
            }
        }
        else if (InfiniteHeights_Global_1.Global.currentIndexBallon === InfiniteHeights_Global_1.Global.unlockIndexBallon) {
            this.nPrev.active = true;
            this.nNext.active = false;
            this.nBallon_0.node.active = true;
            this.nBallon_0.spriteFrame = this.listSpfBallon[InfiniteHeights_Global_1.Global.currentIndexBallon - 1];
            this.nBallon_2.node.active = false;
        }
        else if (InfiniteHeights_Global_1.Global.currentIndexBallon > 0 && InfiniteHeights_Global_1.Global.currentIndexBallon < InfiniteHeights_Global_1.Global.unlockIndexBallon) {
            this.nPrev.active = true;
            this.nNext.active = true;
            this.nBallon_0.node.active = true;
            this.nBallon_2.node.active = true;
            this.nBallon_0.spriteFrame = this.listSpfBallon[InfiniteHeights_Global_1.Global.currentIndexBallon - 1];
            this.nBallon_2.spriteFrame = this.listSpfBallon[InfiniteHeights_Global_1.Global.currentIndexBallon + 1];
        }
        if (InfiniteHeights_Global_1.Global.currentIndexBallon > InfiniteHeights_Global_1.Global.unlockIndexBallon) {
            InfiniteHeights_Global_1.Global.currentIndexBallon = InfiniteHeights_Global_1.Global.unlockIndexBallon;
            this.updateShop();
        }
    };
    var Shop_1;
    Shop.instance = null;
    __decorate([
        property(cc.SpriteFrame)
    ], Shop.prototype, "listSpfBallon", void 0);
    __decorate([
        property(cc.Sprite)
    ], Shop.prototype, "nBallon_0", void 0);
    __decorate([
        property(cc.Sprite)
    ], Shop.prototype, "nBallon_1", void 0);
    __decorate([
        property(cc.Sprite)
    ], Shop.prototype, "nBallon_2", void 0);
    __decorate([
        property(cc.Node)
    ], Shop.prototype, "nNext", void 0);
    __decorate([
        property(cc.Node)
    ], Shop.prototype, "nPrev", void 0);
    Shop = Shop_1 = __decorate([
        ccclass
    ], Shop);
    return Shop;
}(cc.Component));
exports.default = Shop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSW5maW5pdGVIZWlnaHRzXFxzY3JpcHRzXFxHYW1lXFxJbmZpbml0ZUhlaWdodHMuU2hvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixvRUFBbUQ7QUFFN0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFrSEM7UUE5R0csbUJBQWEsR0FBcUIsRUFBRSxDQUFDO1FBR3JDLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFHNUIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUc1QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRzVCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsV0FBSyxHQUFZLElBQUksQ0FBQzs7UUE4RnRCLGlCQUFpQjtJQUNyQixDQUFDO2FBbEhvQixJQUFJO0lBcUJyQixxQkFBTSxHQUFOO1FBQ0ksTUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsK0JBQU0sQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksK0JBQU0sQ0FBQyxpQkFBaUIsQ0FBQztRQUNwSCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSwrQkFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsK0JBQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lB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QUUsQ0FBQyxNQUFNLENBQUM7MkNBQ1E7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1Q0FDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VDQUNJO0lBbkJMLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FrSHhCO0lBQUQsV0FBQztDQWxIRCxBQWtIQyxDQWxIaUMsRUFBRSxDQUFDLFNBQVMsR0FrSDdDO2tCQWxIb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi9JbmZpbml0ZUhlaWdodHMuR2xvYmFsXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogU2hvcCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBsaXN0U3BmQmFsbG9uOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIG5CYWxsb25fMDogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgbkJhbGxvbl8xOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBuQmFsbG9uXzI6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuTmV4dDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuUHJldjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIFNob3AuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIEdsb2JhbC51bmxvY2tJbmRleEJhbGxvbiA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1bmxvY2tJbmRleEJhbGxvbicpKSB8fCBHbG9iYWwudW5sb2NrSW5kZXhCYWxsb247XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1bkxvY2tJbmRleCBcIiwgR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluZGV4QmFsbG9uXCIsIEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24pO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2hvcCgpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIG9uTmV4dCgpIHtcclxuICAgIC8vICAgICBHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uKys7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJPbk5leHQgXCIsIEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24pO1xyXG4gICAgLy8gICAgIGlmIChHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uID4gR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uKVxyXG4gICAgLy8gICAgICAgICBHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uID0gR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uO1xyXG4gICAgLy8gICAgIHRoaXMudXBkYXRlU2hvcCgpXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gb25QcmV2KCkge1xyXG4gICAgLy8gICAgIEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24tLTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIk9uUHJldiBcIiwgR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbik7XHJcbiAgICAvLyAgICAgaWYgKEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24gPCAwKVxyXG4gICAgLy8gICAgICAgICBHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uID0gMDtcclxuXHJcbiAgICAvLyAgICAgdGhpcy51cGRhdGVTaG9wKClcclxuICAgIC8vIH1cclxuXHJcbiAgICBvbk5leHQoKSB7XHJcbiAgICAgICAgaWYgKEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24gPCBHbG9iYWwudW5sb2NrUG9pbnRzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbisrO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNob3AoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPbk5leHQgXCIsIEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24pO1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRJbmRleEJhbGxvbicsIEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24pO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5uTmV4dC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZGFzZFwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgb25QcmV2KCkge1xyXG4gICAgICAgIGlmIChHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uID4gMCkge1xyXG4gICAgICAgICAgICBHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uLS07XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2hvcCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9uUHJldiBcIiwgR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbik7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudEluZGV4QmFsbG9uJywgR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNob3AoKSB7XHJcbiAgICAgICAgLy8gbmV1IGN1cnJlbnRJbmRleEJhbGxvbiA9PSAwID0+IGFuIGJ1dHRvbiBQcmV2aW91cywgQmFsbG9uIDBcclxuICAgICAgICAvLyBuZXUgY3VycmVudEluZGV4QmFsbG9uID4gMCAmJiA8IHVubG9ja0luZGV4QmFsbG9uID0+IHh1IGx5IGdpXHJcbiAgICAgICAgLy8gbmV1IGN1cnJlbnRJbmRleEJhbGxvbiA9PSB1bmxvY2tJbmRleEJhbGxvbiA9PmFuIGJ1dHRvbiBOZXh0LCBCYWxsb24gMlxyXG5cclxuICAgICAgICB0aGlzLm5CYWxsb25fMS5zcHJpdGVGcmFtZSA9IHRoaXMubGlzdFNwZkJhbGxvbltHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uXVxyXG4gICAgICAgIGlmIChHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMublByZXYuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubk5leHQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5uQmFsbG9uXzAubm9kZS5hY3RpdmUgPSBmYWxzZTsgXHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKEdsb2JhbC51bmxvY2tJbmRleEJhbGxvbiA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubkJhbGxvbl8yLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubkJhbGxvbl8yLnNwcml0ZUZyYW1lID0gdGhpcy5saXN0U3BmQmFsbG9uW0dsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24gKyAxXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubkJhbGxvbl8yLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG5cclxuXHJcbiAgICAgICAgZWxzZSBpZiAoR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbiA9PT0gR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMublByZXYuYWN0aXZlID0gdHJ1ZTsgICBcclxuICAgICAgICAgICAgdGhpcy5uTmV4dC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5uQmFsbG9uXzAubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5CYWxsb25fMC5zcHJpdGVGcmFtZSA9IHRoaXMubGlzdFNwZkJhbGxvbltHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uIC0gMV07XHJcbiAgICAgICAgICAgIHRoaXMubkJhbGxvbl8yLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIGlmIChHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uID4gMCAmJiBHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uIDwgR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMublByZXYuYWN0aXZlID0gdHJ1ZTsgXHJcbiAgICAgICAgICAgIHRoaXMubk5leHQuYWN0aXZlID0gdHJ1ZTsgICBcclxuICAgICAgICAgICAgdGhpcy5uQmFsbG9uXzAubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5CYWxsb25fMi5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubkJhbGxvbl8wLnNwcml0ZUZyYW1lID0gdGhpcy5saXN0U3BmQmFsbG9uW0dsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24gLSAxXTtcclxuICAgICAgICAgICAgdGhpcy5uQmFsbG9uXzIuc3ByaXRlRnJhbWUgPSB0aGlzLmxpc3RTcGZCYWxsb25bR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbiArIDFdO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgaWYgKEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24gPiBHbG9iYWwudW5sb2NrSW5kZXhCYWxsb24pIHtcclxuICAgICAgICAgICAgR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbiA9IEdsb2JhbC51bmxvY2tJbmRleEJhbGxvbjtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTaG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=