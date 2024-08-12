
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSW5maW5pdGVIZWlnaHRzXFxzY3JpcHRzXFxHYW1lXFxJbmZpbml0ZUhlaWdodHMuQmFsbG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLDhFQUF5RDtBQUVuRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQXNDQztRQW5DRyxjQUFRLEdBQWMsSUFBSSxDQUFDO1FBQzNCLFFBQUUsR0FBRyxDQUFDLENBQUM7UUFDUCx3QkFBd0I7UUFDeEIsY0FBUSxHQUFHLEtBQUssQ0FBQzs7UUErQmpCLGlCQUFpQjtJQUNyQixDQUFDO0lBL0JHLHVCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELDZCQUFZLEdBQVo7UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbEIsYUFBYSxDQUNWLEVBQUUsQ0FBQyxLQUFLLEVBQUU7YUFDVCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUM7YUFDcEIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUMsQ0FBQzthQUNwQixLQUFLLEVBQUUsQ0FDWCxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2IsQ0FBQztJQUVELHdCQUFPLEdBQVAsVUFBUSxFQUFFLEVBQUMsUUFBUTtRQUNmLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcscUNBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV4RSxJQUFHLFFBQVEsRUFBRTtZQUNULElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztTQUMzQjthQUFLO1lBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1NBQzNCO0lBQ0wsQ0FBQztJQUVELHNCQUFLLEdBQUw7SUFFQSxDQUFDO0lBaENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ087SUFIVixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBc0MxQjtJQUFELGFBQUM7Q0F0Q0QsQUFzQ0MsQ0F0Q21DLEVBQUUsQ0FBQyxTQUFTLEdBc0MvQztrQkF0Q29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4uL0luZmluaXRlSGVpZ2h0cy5HYW1lTWFuYWdlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWxsb24gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBzcEJhbGxvbjogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIGlkID0gMDtcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgaXNVbmxvY2sgPSBmYWxzZTtcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5FZmZlY3RCYWxsb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBFZmZlY3RCYWxsb24oKSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgICBjYy50d2VlbigpXHJcbiAgICAgICAgICAgIC50bygwLjgsIHthbmdsZTotMTB9KVxyXG4gICAgICAgICAgICAudG8oMC45LCB7YW5nbGU6IDEwfSlcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICApLnN0YXJ0KClcclxuICAgIH1cclxuXHJcbiAgICBzZXREYXRhKGlkLGlzVW5sb2NrKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuaXNVbmxvY2sgPSBpc1VubG9jaztcclxuICAgICAgICB0aGlzLnNwQmFsbG9uLnNwcml0ZUZyYW1lID0gR2FtZU1hbmFnZXIuaW5zdGFuY2UubGlzdFNwZkJhbGxvblt0aGlzLmlkXTtcclxuXHJcbiAgICAgICAgaWYoaXNVbmxvY2spIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDE1MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==