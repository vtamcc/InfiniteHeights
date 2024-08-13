
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
var NameGame_Shop = /** @class */ (function (_super) {
    __extends(NameGame_Shop, _super);
    function NameGame_Shop() {
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
    NameGame_Shop.prototype.onLoad = function () {
        // index ballon hien thi
        // index ballon dc mo khoa
        // Global.currentIndexBallon = JSON.parse(cc.sys.localStorage.getItem('currentIndex')) || Global.currentIndexBallon;
        InfiniteHeights_Global_1.Global.unlockIndexBallon = JSON.parse(cc.sys.localStorage.getItem('unlockIndexBallon')) || InfiniteHeights_Global_1.Global.unlockIndexBallon;
        // console.log("currentIndexBallon ", Global.currentIndexBallon);
        console.log("unLockIndex ", InfiniteHeights_Global_1.Global.unlockIndexBallon);
        this.updateShop();
    };
    NameGame_Shop.prototype.start = function () {
    };
    NameGame_Shop.prototype.onNext = function () {
        InfiniteHeights_Global_1.Global.currentIndexBallon++;
        console.log("OnNext ", InfiniteHeights_Global_1.Global.currentIndexBallon);
        if (InfiniteHeights_Global_1.Global.currentIndexBallon > InfiniteHeights_Global_1.Global.unlockIndexBallon)
            InfiniteHeights_Global_1.Global.currentIndexBallon = InfiniteHeights_Global_1.Global.unlockIndexBallon;
        this.updateShop();
    };
    NameGame_Shop.prototype.onPrev = function () {
        InfiniteHeights_Global_1.Global.currentIndexBallon--;
        console.log("OnPrev ", InfiniteHeights_Global_1.Global.currentIndexBallon);
        if (InfiniteHeights_Global_1.Global.currentIndexBallon < 0)
            InfiniteHeights_Global_1.Global.currentIndexBallon = 0;
        this.updateShop();
    };
    NameGame_Shop.prototype.updateShop = function () {
        // neu currentIndexBallon == 0 => an button Previous, Ballon 0
        // neu currentIndexBallon > 0 && < unlockIndexBallon => xu ly gi
        // neu currentIndexBallon == unlockIndexBallon =>an button Next, Ballon 2
        this.nBallon_1.spriteFrame = this.listSpfBallon[InfiniteHeights_Global_1.Global.currentIndexBallon];
        if (InfiniteHeights_Global_1.Global.currentIndexBallon === 0) {
            this.nPrev.active = false;
            this.nBallon_0.node.active = false;
            console.log("if 1");
        }
        if (InfiniteHeights_Global_1.Global.currentIndexBallon > 0 && InfiniteHeights_Global_1.Global.currentIndexBallon < InfiniteHeights_Global_1.Global.unlockIndexBallon) {
            this.nPrev.active = true;
            this.nBallon_0.node.active = true;
            this.nNext.active = true;
            this.nBallon_2.node.active = true;
            this.nBallon_0.spriteFrame = this.listSpfBallon[InfiniteHeights_Global_1.Global.currentIndexBallon - 1];
            this.nBallon_2.spriteFrame = this.listSpfBallon[InfiniteHeights_Global_1.Global.currentIndexBallon + 1];
            console.log("if 2");
        }
        if (InfiniteHeights_Global_1.Global.currentIndexBallon === InfiniteHeights_Global_1.Global.unlockIndexBallon) {
            this.nNext.active = false;
            this.nBallon_2.node.active = false;
            console.log("if 3");
        }
    };
    __decorate([
        property(cc.SpriteFrame)
    ], NameGame_Shop.prototype, "listSpfBallon", void 0);
    __decorate([
        property(cc.Sprite)
    ], NameGame_Shop.prototype, "nBallon_0", void 0);
    __decorate([
        property(cc.Sprite)
    ], NameGame_Shop.prototype, "nBallon_1", void 0);
    __decorate([
        property(cc.Sprite)
    ], NameGame_Shop.prototype, "nBallon_2", void 0);
    __decorate([
        property(cc.Node)
    ], NameGame_Shop.prototype, "nNext", void 0);
    __decorate([
        property(cc.Node)
    ], NameGame_Shop.prototype, "nPrev", void 0);
    NameGame_Shop = __decorate([
        ccclass
    ], NameGame_Shop);
    return NameGame_Shop;
}(cc.Component));
exports.default = NameGame_Shop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9JbmZpbml0ZUhlaWdodHMvc2NyaXB0cy9HYW1lL0luZmluaXRlSGVpZ2h0cy5TaG9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLG9FQUFtRDtBQUU3QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQW9GQztRQWpGRyxtQkFBYSxHQUFxQixFQUFFLENBQUM7UUFHckMsZUFBUyxHQUFjLElBQUksQ0FBQztRQUc1QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRzVCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFHNUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixXQUFLLEdBQVksSUFBSSxDQUFDOztRQWlFdEIsaUJBQWlCO0lBQ3JCLENBQUM7SUFoRUcsOEJBQU0sR0FBTjtRQUNJLHdCQUF3QjtRQUN4QiwwQkFBMEI7UUFDMUIsb0hBQW9IO1FBQ3BILCtCQUFNLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLCtCQUFNLENBQUMsaUJBQWlCLENBQUM7UUFFcEgsaUVBQWlFO1FBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLCtCQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVELDZCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNJLCtCQUFNLENBQUMsa0JBQWtCLEVB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O2dEQUNJO0lBbEJMLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FvRmpDO0lBQUQsb0JBQUM7Q0FwRkQsQUFvRkMsQ0FwRjBDLEVBQUUsQ0FBQyxTQUFTLEdBb0Z0RDtrQkFwRm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4uL0luZmluaXRlSGVpZ2h0cy5HbG9iYWxcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hbWVHYW1lX1Nob3AgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGxpc3RTcGZCYWxsb246IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgbkJhbGxvbl8wOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBuQmFsbG9uXzE6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIG5CYWxsb25fMjogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5OZXh0OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5QcmV2OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8gaW5kZXggYmFsbG9uIGhpZW4gdGhpXG4gICAgICAgIC8vIGluZGV4IGJhbGxvbiBkYyBtbyBraG9hXG4gICAgICAgIC8vIEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24gPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudEluZGV4JykpIHx8IEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb247XG4gICAgICAgIEdsb2JhbC51bmxvY2tJbmRleEJhbGxvbiA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1bmxvY2tJbmRleEJhbGxvbicpKSB8fCBHbG9iYWwudW5sb2NrSW5kZXhCYWxsb247XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjdXJyZW50SW5kZXhCYWxsb24gXCIsIEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24pO1xuICAgICAgICBjb25zb2xlLmxvZyhcInVuTG9ja0luZGV4IFwiLCBHbG9iYWwudW5sb2NrSW5kZXhCYWxsb24pO1xuICAgICAgICB0aGlzLnVwZGF0ZVNob3AoKVxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgb25OZXh0KCkge1xuICAgICAgICBHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uKys7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25OZXh0IFwiLCBHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uKTtcbiAgICAgICAgaWYgKEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24gPiBHbG9iYWwudW5sb2NrSW5kZXhCYWxsb24pXG4gICAgICAgICAgICBHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uID0gR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uO1xuICAgICAgICB0aGlzLnVwZGF0ZVNob3AoKVxuICAgIH1cblxuICAgIG9uUHJldigpIHtcbiAgICAgICAgR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbi0tO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk9uUHJldiBcIiwgR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbik7XG4gICAgICAgIGlmIChHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uIDwgMClcbiAgICAgICAgICAgIEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24gPSAwO1xuXG4gICAgICAgIHRoaXMudXBkYXRlU2hvcCgpXG4gICAgfVxuXG4gICAgdXBkYXRlU2hvcCgpIHtcbiAgICAgICAgLy8gbmV1IGN1cnJlbnRJbmRleEJhbGxvbiA9PSAwID0+IGFuIGJ1dHRvbiBQcmV2aW91cywgQmFsbG9uIDBcbiAgICAgICAgLy8gbmV1IGN1cnJlbnRJbmRleEJhbGxvbiA+IDAgJiYgPCB1bmxvY2tJbmRleEJhbGxvbiA9PiB4dSBseSBnaVxuICAgICAgICAvLyBuZXUgY3VycmVudEluZGV4QmFsbG9uID09IHVubG9ja0luZGV4QmFsbG9uID0+YW4gYnV0dG9uIE5leHQsIEJhbGxvbiAyXG5cbiAgICAgICAgdGhpcy5uQmFsbG9uXzEuc3ByaXRlRnJhbWUgPSB0aGlzLmxpc3RTcGZCYWxsb25bR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbl1cblxuICAgICAgICBpZiAoR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbiA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5uUHJldi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubkJhbGxvbl8wLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImlmIDFcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uID4gMCAmJiBHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uIDwgR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uICkge1xuICAgICAgICAgICAgdGhpcy5uUHJldi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5uQmFsbG9uXzAubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5uTmV4dC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5uQmFsbG9uXzIubm9kZS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLm5CYWxsb25fMC5zcHJpdGVGcmFtZSA9IHRoaXMubGlzdFNwZkJhbGxvbltHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uIC0gMV1cbiAgICAgICAgICAgIHRoaXMubkJhbGxvbl8yLnNwcml0ZUZyYW1lID0gdGhpcy5saXN0U3BmQmFsbG9uW0dsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24gKyAxXVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpZiAyXCIpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbiA9PT0gR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uICkge1xuICAgICAgICAgICAgdGhpcy5uTmV4dC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubkJhbGxvbl8yLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImlmIDNcIilcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=