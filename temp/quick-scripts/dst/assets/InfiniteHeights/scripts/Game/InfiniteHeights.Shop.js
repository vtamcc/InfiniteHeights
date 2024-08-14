
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
        InfiniteHeights_Global_1.Global.currentIndexBallon = JSON.parse(cc.sys.localStorage.getItem('currentIndexBallon')) || 0;
        console.log("currentIndexBallon ", InfiniteHeights_Global_1.Global.currentIndexBallon);
        InfiniteHeights_Global_1.Global.unlockIndexBallon = JSON.parse(cc.sys.localStorage.getItem('unlockIndexBallon')) || InfiniteHeights_Global_1.Global.unlockIndexBallon;
        this.effectBallon(this.nBallon_0.node);
        this.effectBallon(this.nBallon_1.node);
        this.effectBallon(this.nBallon_2.node);
        console.log("unLockIndex ", InfiniteHeights_Global_1.Global.unlockIndexBallon);
        console.log("indexBallon", InfiniteHeights_Global_1.Global.currentIndexBallon);
        this.updateShop();
    };
    Shop.prototype.start = function () {
    };
    Shop.prototype.effectBallon = function (node) {
        cc.tween(node)
            .repeatForever(cc.tween()
            .to(0.8, { angle: -10 })
            .to(0.9, { angle: 10 })
            .start()).start();
    };
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
            this.nNext.active = false;
            this.nBallon_0.node.active = false;
            if (InfiniteHeights_Global_1.Global.unlockIndexBallon > 0) {
                this.nBallon_2.node.active = true;
                this.nNext.active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9JbmZpbml0ZUhlaWdodHMvc2NyaXB0cy9HYW1lL0luZmluaXRlSGVpZ2h0cy5TaG9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLG9FQUFtRDtBQUU3QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQWlIQztRQTdHRyxtQkFBYSxHQUFxQixFQUFFLENBQUM7UUFHckMsZUFBUyxHQUFjLElBQUksQ0FBQztRQUc1QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRzVCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFHNUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixXQUFLLEdBQVksSUFBSSxDQUFDOztRQTZGdEIsaUJBQWlCO0lBQ3JCLENBQUM7YUFqSG9CLElBQUk7SUFxQnJCLHFCQUFNLEdBQU47UUFDSSxNQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQiwrQkFBTSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUU7UUFDaEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSwrQkFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDOUQsK0JBQU0sQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksK0JBQU0sQ0FBQyxp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QUcsSUFBSSxDQUFDLGFBQWEsQ0FBQywrQkFBTSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQy9FLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsK0JBQU0sQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNsRjtRQUdELElBQUksK0JBQU0sQ0FBQyxrQkFBa0IsR0FBRywrQkFBTSxDQUFDLGlCQUFpQixFQUFFO1lBQ3RELCtCQUFNLENBQUMsa0JBQWtCLEdBQUcsK0JBQU0sQ0FBQyxpQkFBaUIsQ0FBQztZQUNyRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDckI7SUFDTCxDQUFDOztJQTdHYSxhQUFRLEdBQVMsSUFBSSxDQUFDO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7K0NBQ1k7SUFHckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyQ0FDUTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzJDQUNRO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MkNBQ1E7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1Q0FDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VDQUNJO0lBbkJMLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FpSHhCO0lBQUQsV0FBQztDQWpIRCxBQWlIQyxDQWpIaUMsRUFBRSxDQUFDLFNBQVMsR0FpSDdDO2tCQWpIb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vSW5maW5pdGVIZWlnaHRzLkdsb2JhbFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBTaG9wID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgbGlzdFNwZkJhbGxvbjogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBuQmFsbG9uXzA6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIG5CYWxsb25fMTogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgbkJhbGxvbl8yOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbk5leHQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgblByZXY6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBTaG9wLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbiA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50SW5kZXhCYWxsb24nKSkgfHwgMCA7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudEluZGV4QmFsbG9uIFwiLCBHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uKTtcbiAgICAgICAgR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VubG9ja0luZGV4QmFsbG9uJykpIHx8IEdsb2JhbC51bmxvY2tJbmRleEJhbGxvbjtcbiAgICAgICAgdGhpcy5lZmZlY3RCYWxsb24odGhpcy5uQmFsbG9uXzAubm9kZSlcbiAgICAgICAgdGhpcy5lZmZlY3RCYWxsb24odGhpcy5uQmFsbG9uXzEubm9kZSlcbiAgICAgICAgdGhpcy5lZmZlY3RCYWxsb24odGhpcy5uQmFsbG9uXzIubm9kZSlcbiAgICAgICAgY29uc29sZS5sb2coXCJ1bkxvY2tJbmRleCBcIiwgR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbmRleEJhbGxvblwiLCBHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uKTtcbiAgICAgICAgdGhpcy51cGRhdGVTaG9wKClcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgXG4gICAgZWZmZWN0QmFsbG9uKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgY2MudHdlZW4obm9kZSlcbiAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICBjYy50d2VlbigpXG4gICAgICAgICAgICAudG8oMC44LCB7YW5nbGU6LTEwfSlcbiAgICAgICAgICAgIC50bygwLjksIHthbmdsZTogMTB9KVxuICAgICAgICAgICAgLnN0YXJ0KClcbiAgICAgICAgKS5zdGFydCgpXG4gICAgfVxuICAgIG9uTmV4dCgpIHtcbiAgICAgICAgaWYgKEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24gPCBHbG9iYWwudW5sb2NrUG9pbnRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24rKztcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2hvcCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPbk5leHQgXCIsIEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24pO1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50SW5kZXhCYWxsb24nLCBHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5uTmV4dC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2Rhc2RcIilcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBvblByZXYoKSB7XG4gICAgICAgIGlmIChHbG9iYWwuY3VycmVudEluZGV4QmFsbG9uID4gMCkge1xuICAgICAgICAgICAgR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbi0tO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaG9wKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9uUHJldiBcIiwgR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbik7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRJbmRleEJhbGxvbicsIEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlU2hvcCgpIHtcbiAgICAgICAgLy8gbmV1IGN1cnJlbnRJbmRleEJhbGxvbiA9PSAwID0+IGFuIGJ1dHRvbiBQcmV2aW91cywgQmFsbG9uIDBcbiAgICAgICAgLy8gbmV1IGN1cnJlbnRJbmRleEJhbGxvbiA+IDAgJiYgPCB1bmxvY2tJbmRleEJhbGxvbiA9PiB4dSBseSBnaVxuICAgICAgICAvLyBuZXUgY3VycmVudEluZGV4QmFsbG9uID09IHVubG9ja0luZGV4QmFsbG9uID0+YW4gYnV0dG9uIE5leHQsIEJhbGxvbiAyXG5cbiAgICAgICAgdGhpcy5uQmFsbG9uXzEuc3ByaXRlRnJhbWUgPSB0aGlzLmxpc3RTcGZCYWxsb25bR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbl1cbiAgICAgICAgaWYgKEdsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24gPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMublByZXYuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm5OZXh0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5uQmFsbG9uXzAubm9kZS5hY3RpdmUgPSBmYWxzZTsgXG4gICAgXG4gICAgICAgICAgICBpZiAoR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubkJhbGxvbl8yLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm5OZXh0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5uQmFsbG9uXzIuc3ByaXRlRnJhbWUgPSB0aGlzLmxpc3RTcGZCYWxsb25bR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbiArIDFdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5CYWxsb25fMi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG5cbiAgICAgICAgZWxzZSBpZiAoR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbiA9PT0gR2xvYmFsLnVubG9ja0luZGV4QmFsbG9uKSB7XG4gICAgICAgICAgICB0aGlzLm5QcmV2LmFjdGl2ZSA9IHRydWU7ICAgXG4gICAgICAgICAgICB0aGlzLm5OZXh0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5uQmFsbG9uXzAubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5uQmFsbG9uXzAuc3ByaXRlRnJhbWUgPSB0aGlzLmxpc3RTcGZCYWxsb25bR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbiAtIDFdO1xuICAgICAgICAgICAgdGhpcy5uQmFsbG9uXzIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSBpZiAoR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbiA+IDAgJiYgR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbiA8IEdsb2JhbC51bmxvY2tJbmRleEJhbGxvbikge1xuICAgICAgICAgICAgdGhpcy5uUHJldi5hY3RpdmUgPSB0cnVlOyBcbiAgICAgICAgICAgIHRoaXMubk5leHQuYWN0aXZlID0gdHJ1ZTsgICBcbiAgICAgICAgICAgIHRoaXMubkJhbGxvbl8wLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubkJhbGxvbl8yLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubkJhbGxvbl8wLnNwcml0ZUZyYW1lID0gdGhpcy5saXN0U3BmQmFsbG9uW0dsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24gLSAxXTtcbiAgICAgICAgICAgIHRoaXMubkJhbGxvbl8yLnNwcml0ZUZyYW1lID0gdGhpcy5saXN0U3BmQmFsbG9uW0dsb2JhbC5jdXJyZW50SW5kZXhCYWxsb24gKyAxXTtcbiAgICAgICAgfVxuICAgIFxuICAgIFxuICAgICAgICBpZiAoR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbiA+IEdsb2JhbC51bmxvY2tJbmRleEJhbGxvbikge1xuICAgICAgICAgICAgR2xvYmFsLmN1cnJlbnRJbmRleEJhbGxvbiA9IEdsb2JhbC51bmxvY2tJbmRleEJhbGxvbjtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2hvcCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=