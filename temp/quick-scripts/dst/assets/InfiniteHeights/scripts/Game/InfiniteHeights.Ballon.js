
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
    Ballon.prototype.setData = function (id) {
        this.id = id;
        this.spBallon.spriteFrame = InfiniteHeights_GameManager_1.default.instance.listSpfBallon[this.id];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSW5maW5pdGVIZWlnaHRzXFxzY3JpcHRzXFxHYW1lXFxJbmZpbml0ZUhlaWdodHMuQmFsbG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLDhFQUF5RDtBQUVuRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQStCQztRQTVCRyxjQUFRLEdBQWMsSUFBSSxDQUFDO1FBQzNCLFFBQUUsR0FBRyxDQUFDLENBQUM7UUFDUCx3QkFBd0I7UUFDeEIsY0FBUSxHQUFHLEtBQUssQ0FBQzs7UUF3QmpCLGlCQUFpQjtJQUNyQixDQUFDO0lBeEJHLHVCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELDZCQUFZLEdBQVo7UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbEIsYUFBYSxDQUNWLEVBQUUsQ0FBQyxLQUFLLEVBQUU7YUFDVCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUM7YUFDcEIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUMsQ0FBQzthQUNwQixLQUFLLEVBQUUsQ0FDWCxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2IsQ0FBQztJQUVELHdCQUFPLEdBQVAsVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxxQ0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxzQkFBSyxHQUFMO0lBRUEsQ0FBQztJQXpCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNPO0lBSFYsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQStCMUI7SUFBRCxhQUFDO0NBL0JELEFBK0JDLENBL0JtQyxFQUFFLENBQUMsU0FBUyxHQStCL0M7a0JBL0JvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuLi9JbmZpbml0ZUhlaWdodHMuR2FtZU1hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbG9uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgc3BCYWxsb246IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBpZCA9IDA7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIGlzVW5sb2NrID0gZmFsc2U7XHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuRWZmZWN0QmFsbG9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgRWZmZWN0QmFsbG9uKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgICAgY2MudHdlZW4oKVxyXG4gICAgICAgICAgICAudG8oMC44LCB7YW5nbGU6LTEwfSlcclxuICAgICAgICAgICAgLnRvKDAuOSwge2FuZ2xlOiAxMH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgKS5zdGFydCgpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGF0YShpZCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLnNwQmFsbG9uLnNwcml0ZUZyYW1lID0gR2FtZU1hbmFnZXIuaW5zdGFuY2UubGlzdFNwZkJhbGxvblt0aGlzLmlkXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19