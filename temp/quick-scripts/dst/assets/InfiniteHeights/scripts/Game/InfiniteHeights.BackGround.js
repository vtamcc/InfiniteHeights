
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
    // onLoad () {}
    BackGround.prototype.start = function () {
    };
    BackGround.prototype.update = function (dt) {
        if (!InfiniteHeights_GameView_1.default.instance.isFirstTouch) {
            return;
        }
        if (this.node.y <= -1600) {
            this.resetPos();
            if (this.idBg == 3) {
                this.node.destroy();
            }
        }
        if (!this.isAdd) {
            if (this.node.y === 640) {
                console.log("sadasd");
                this.isAdd = true;
            }
        }
        this.node.y -= 2;
    };
    BackGround.prototype.resetPos = function () {
        this.node.y = 1280;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9JbmZpbml0ZUhlaWdodHMvc2NyaXB0cy9HYW1lL0luZmluaXRlSGVpZ2h0cy5CYWNrR3JvdW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHVFQUFrRDtBQUU1QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQXlDQztRQXZDRSxXQUFLLEdBQUcsS0FBSyxDQUFDO1FBR2QsVUFBSSxHQUFXLENBQUMsQ0FBQzs7SUFvQ3BCLENBQUM7SUFuQ0csd0JBQXdCO0lBRXhCLGVBQWU7SUFFZiwwQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDJCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBRyxDQUFDLGtDQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRTtZQUNoQyxPQUFPO1NBQ1Y7UUFFRCxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUVoQixJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDdkI7U0FDSjtRQUdELElBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7Z0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7Z0JBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ3JCO1NBQ0o7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELDZCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQW5DRjtRQURDLFFBQVE7NENBQ1E7SUFMQyxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBeUM5QjtJQUFELGlCQUFDO0NBekNELEFBeUNDLENBekN1QyxFQUFFLENBQUMsU0FBUyxHQXlDbkQ7a0JBekNvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi9JbmZpbml0ZUhlaWdodHMuR2FtZVZpZXdcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrR3JvdW5kIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgaXNBZGQgPSBmYWxzZTtcbiAgIFxuICAgQHByb3BlcnR5XG4gICBpZEJnOiBudW1iZXIgPSAwO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYoIUdhbWVWaWV3Lmluc3RhbmNlLmlzRmlyc3RUb3VjaCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgaWYodGhpcy5ub2RlLnkgPD0gLTE2MDApIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3MoKTtcblxuICAgICAgICAgICAgaWYodGhpcy5pZEJnID09IDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZighdGhpcy5pc0FkZCkge1xuICAgICAgICAgICAgaWYodGhpcy5ub2RlLnkgPT09IDY0MCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2FkYXNkXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5pc0FkZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vZGUueSAtPSAyO1xuICAgIH1cblxuICAgIHJlc2V0UG9zKCkge1xuICAgICAgICB0aGlzLm5vZGUueSA9IDEyODA7XG4gICAgfVxufVxuIl19