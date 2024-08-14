
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/InfiniteHeights/scripts/Game/InfiniteHeights.ColliderManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ae8414UvFJOtK1XM2yY+K4f', 'InfiniteHeights.ColliderManager');
// InfiniteHeights/scripts/Game/InfiniteHeights.ColliderManager.ts

"use strict";
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
var InfiniteHeights_GameView_1 = require("./InfiniteHeights.GameView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Collider = /** @class */ (function (_super) {
    __extends(Collider, _super);
    function Collider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Collider.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
    };
    Collider.prototype.start = function () {
    };
    Collider.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 2) {
            InfiniteHeights_GameView_1.default.instance.gameOver();
        }
        if (other.tag == 1) {
            InfiniteHeights_Global_1.Global.diaMond++;
            InfiniteHeights_GameView_1.default.instance.updateLbDiamond(InfiniteHeights_GameView_1.default.instance.lbDiamond);
            other.node.destroy();
        }
    };
    Collider = __decorate([
        ccclass
    ], Collider);
    return Collider;
}(cc.Component));
exports.default = Collider;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9JbmZpbml0ZUhlaWdodHMvc2NyaXB0cy9HYW1lL0luZmluaXRlSGVpZ2h0cy5Db2xsaWRlck1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0VBQW1EO0FBQ25ELHVFQUFrRDtBQUU1QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDs7SUFzQkEsQ0FBQztJQXBCRyx5QkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDckQsQ0FBQztJQUVELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsbUNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQ3hCLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUU7WUFDaEIsa0NBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7U0FFaEM7UUFFRCxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFHO1lBQ2pCLCtCQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsa0NBQVEsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLGtDQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQy9ELEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDeEI7SUFDTCxDQUFDO0lBckJnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBc0I1QjtJQUFELGVBQUM7Q0F0QkQsQUFzQkMsQ0F0QnFDLEVBQUUsQ0FBQyxTQUFTLEdBc0JqRDtrQkF0Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vSW5maW5pdGVIZWlnaHRzLkdsb2JhbFwiO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL0luZmluaXRlSGVpZ2h0cy5HYW1lVmlld1wiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpZGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PSAyKSB7XG4gICAgICAgICAgICBHYW1lVmlldy5pbnN0YW5jZS5nYW1lT3ZlcigpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PSAxICkge1xuICAgICAgICAgICAgR2xvYmFsLmRpYU1vbmQrKztcbiAgICAgICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLnVwZGF0ZUxiRGlhbW9uZChHYW1lVmlldy5pbnN0YW5jZS5sYkRpYW1vbmQpO1xuICAgICAgICAgICAgb3RoZXIubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9ICAgXG59XG4iXX0=