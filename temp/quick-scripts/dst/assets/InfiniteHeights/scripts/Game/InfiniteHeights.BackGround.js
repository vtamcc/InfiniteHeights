
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/InfiniteHeights/scripts/Game/InfiniteHeights.BackGround.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4f45eyNC7RIgrowSh3ol9s9', 'InfiniteHeights.BackGround');
// InfiniteHeights/scripts/Game/InfiniteHeights.BackGround.ts

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
var InfiniteHeights_GameView_1 = require("./InfiniteHeights.GameView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BackGround = /** @class */ (function (_super) {
    __extends(BackGround, _super);
    function BackGround() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAdd = false;
        _this.idBg = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    BackGround.prototype.onLoad = function () {
    };
    BackGround.prototype.start = function () {
    };
    BackGround.prototype.update = function (dt) {
        if (!InfiniteHeights_GameView_1.default.instance.isFirstTouch || InfiniteHeights_GameView_1.default.instance.isGameOver) {
            return;
        }
        if (this.node.y <= -1280) {
            this.resetPos();
            this.destroyObstacle();
            InfiniteHeights_GameView_1.default.instance.createObstacle(this.node);
            if (this.idBg == 3) {
                this.node.active = false;
            }
        }
        this.node.y -= 2;
    };
    BackGround.prototype.resetPos = function () {
        this.node.y = 2560;
        this.isAdd = false;
    };
    BackGround.prototype.destroyObstacle = function () {
        for (var i = 0; i < this.node.childrenCount; i++) {
            this.node.children[i].destroy();
        }
    };
    __decorate([
        property
    ], BackGround.prototype, "idBg", void 0);
    BackGround = __decorate([
        ccclass
    ], BackGround);
    return BackGround;
}(cc.Component));
exports.default = BackGround;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSW5maW5pdGVIZWlnaHRzXFxzY3JpcHRzXFxHYW1lXFxJbmZpbml0ZUhlaWdodHMuQmFja0dyb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix1RUFBa0Q7QUFFNUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUErQ0M7UUE3Q0UsV0FBSyxHQUFHLEtBQUssQ0FBQztRQUdkLFVBQUksR0FBVyxDQUFDLENBQUM7O0lBMENwQixDQUFDO0lBekNHLHdCQUF3QjtJQUV4QiwyQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELDBCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFHLENBQUMsa0NBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxJQUFJLGtDQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtZQUNoRSxPQUFPO1NBQ1Y7UUFFRCxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUVoQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsa0NBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QyxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUM1QjtTQUNKO1FBS0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCw2QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxvQ0FBZSxHQUFmO1FBQ0ksS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQXpDRjtRQURDLFFBQVE7NENBQ1E7SUFMQyxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBK0M5QjtJQUFELGlCQUFDO0NBL0NELEFBK0NDLENBL0N1QyxFQUFFLENBQUMsU0FBUyxHQStDbkQ7a0JBL0NvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL0luZmluaXRlSGVpZ2h0cy5HYW1lVmlld1wiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrR3JvdW5kIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgIGlzQWRkID0gZmFsc2U7XHJcbiAgIFxyXG4gICBAcHJvcGVydHlcclxuICAgaWRCZzogbnVtYmVyID0gMDtcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZighR2FtZVZpZXcuaW5zdGFuY2UuaXNGaXJzdFRvdWNoIHx8IEdhbWVWaWV3Lmluc3RhbmNlLmlzR2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5ub2RlLnkgPD0gLTEyODApIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFBvcygpO1xyXG4gICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5kZXN0cm95T2JzdGFjbGUoKTtcclxuICAgICAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UuY3JlYXRlT2JzdGFjbGUodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgaWYodGhpcy5pZEJnID09IDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS55IC09IDI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRQb3MoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnkgPSAyNTYwO1xyXG4gICAgICAgIHRoaXMuaXNBZGQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95T2JzdGFjbGUoKSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuW2ldLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19