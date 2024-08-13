
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/InfiniteHeights/scripts/Game/InfiniteHeights.Ballon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ae60F2FytPoYV4kQFV4eRt', 'InfiniteHeights.Ballon');
// InfiniteHeights/scripts/Game/InfiniteHeights.Ballon.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Ballon = /** @class */ (function (_super) {
    __extends(Ballon, _super);
    function Ballon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spBallon = null;
        _this.id = 0;
        // LIFE-CYCLE CALLBACKS:
        _this.isUnlock = false;
        return _this;
        // update (dt) {}
    }
    Ballon.prototype.onLoad = function () {
        this.EffectBallon();
    };
    Ballon.prototype.EffectBallon = function () {
        cc.tween(this.node)
            .repeatForever(cc.tween()
            .to(0.8, { angle: -10 })
            .to(0.9, { angle: 10 })
            .start()).start();
    };
    Ballon.prototype.setData = function (id, isUnlock) {
        this.id = id;
        this.isUnlock = isUnlock;
        this.spBallon.spriteFrame = InfiniteHeights_GameManager_1.default.instance.listSpfBallon[this.id];
        if (isUnlock) {
            this.node.opacity = 255;
        }
        else {
            this.node.opacity = 150;
        }
    };
    Ballon.prototype.start = function () {
    };
    __decorate([
        property(cc.Sprite)
    ], Ballon.prototype, "spBallon", void 0);
    Ballon = __decorate([
        ccclass
    ], Ballon);
    return Ballon;
}(cc.Component));
exports.default = Ballon;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9JbmZpbml0ZUhlaWdodHMvc2NyaXB0cy9HYW1lL0luZmluaXRlSGVpZ2h0cy5CYWxsb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsOEVBQXlEO0FBRW5ELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBc0NDO1FBbkNHLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFDM0IsUUFBRSxHQUFHLENBQUMsQ0FBQztRQUNQLHdCQUF3QjtRQUN4QixjQUFRLEdBQUcsS0FBSyxDQUFDOztRQStCakIsaUJBQWlCO0lBQ3JCLENBQUM7SUEvQkcsdUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsNkJBQVksR0FBWjtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNsQixhQUFhLENBQ1YsRUFBRSxDQUFDLEtBQUssRUFBRTthQUNULEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQzthQUNwQixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBQyxDQUFDO2FBQ3BCLEtBQUssRUFBRSxDQUNYLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDYixDQUFDO0lBRUQsd0JBQU8sR0FBUCxVQUFRLEVBQUUsRUFBQyxRQUFRO1FBQ2YsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxxQ0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXhFLElBQUcsUUFBUSxFQUFFO1lBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1NBQzNCO2FBQUs7WUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBRUQsc0JBQUssR0FBTDtJQUVBLENBQUM7SUFoQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDTztJQUhWLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FzQzFCO0lBQUQsYUFBQztDQXRDRCxBQXNDQyxDQXRDbUMsRUFBRSxDQUFDLFNBQVMsR0FzQy9DO2tCQXRDb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4uL0luZmluaXRlSGVpZ2h0cy5HYW1lTWFuYWdlclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbGxvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHNwQmFsbG9uOiBjYy5TcHJpdGUgPSBudWxsO1xuICAgIGlkID0gMDtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBpc1VubG9jayA9IGZhbHNlO1xuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMuRWZmZWN0QmFsbG9uKCk7XG4gICAgfVxuXG4gICAgRWZmZWN0QmFsbG9uKCkge1xuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgIC5yZXBlYXRGb3JldmVyKFxuICAgICAgICAgICAgY2MudHdlZW4oKVxuICAgICAgICAgICAgLnRvKDAuOCwge2FuZ2xlOi0xMH0pXG4gICAgICAgICAgICAudG8oMC45LCB7YW5nbGU6IDEwfSlcbiAgICAgICAgICAgIC5zdGFydCgpXG4gICAgICAgICkuc3RhcnQoKVxuICAgIH1cblxuICAgIHNldERhdGEoaWQsaXNVbmxvY2spIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmlzVW5sb2NrID0gaXNVbmxvY2s7XG4gICAgICAgIHRoaXMuc3BCYWxsb24uc3ByaXRlRnJhbWUgPSBHYW1lTWFuYWdlci5pbnN0YW5jZS5saXN0U3BmQmFsbG9uW3RoaXMuaWRdO1xuXG4gICAgICAgIGlmKGlzVW5sb2NrKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAxNTA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19