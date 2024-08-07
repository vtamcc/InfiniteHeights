
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/InfiniteHeights/scripts/Game/InfiniteHeights.BackGround');
require('./assets/InfiniteHeights/scripts/Game/InfiniteHeights.GameView');
require('./assets/InfiniteHeights/scripts/Game/InfiniteHeights.ObstacleManager');
require('./assets/InfiniteHeights/scripts/InfiniteHeights.GameManager');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/InfiniteHeights/scripts/InfiniteHeights.GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6be9dHncelMS7oOeeLh1jsq', 'InfiniteHeights.GameManager');
// InfiniteHeights/scripts/InfiniteHeights.GameManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prfGameView = null;
        return _this;
        // update (dt) {}
    }
    GameManager.prototype.start = function () {
    };
    GameManager.prototype.clickPlay = function () {
        var gameView = cc.instantiate(this.prfGameView);
        this.node.addChild(gameView);
    };
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "prfGameView", void 0);
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9JbmZpbml0ZUhlaWdodHMvc2NyaXB0cy9JbmZpbml0ZUhlaWdodHMuR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFlQztRQVpHLGlCQUFXLEdBQWMsSUFBSSxDQUFDOztRQVc5QixpQkFBaUI7SUFDckIsQ0FBQztJQVZHLDJCQUFLLEdBQUw7SUFFQSxDQUFDO0lBR0QsK0JBQVMsR0FBVDtRQUNJLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFWRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNVO0lBSGIsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQWUvQjtJQUFELGtCQUFDO0NBZkQsQUFlQyxDQWZ3QyxFQUFFLENBQUMsU0FBUyxHQWVwRDtrQkFmb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJmR2FtZVZpZXc6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cblxuICAgIGNsaWNrUGxheSgpIHtcbiAgICAgICAgbGV0IGdhbWVWaWV3ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZHYW1lVmlldylcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGdhbWVWaWV3KTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/InfiniteHeights/scripts/Game/InfiniteHeights.ObstacleManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '85eb2mvb8lFEJXHCj+bPAXM', 'InfiniteHeights.ObstacleManager');
// InfiniteHeights/scripts/Game/InfiniteHeights.ObstacleManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var obstacleManager = /** @class */ (function (_super) {
    __extends(obstacleManager, _super);
    function obstacleManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idPrf = 0;
        _this.speed = 150;
        _this.speedAngle = 100;
        _this.listNode = [];
        _this.angle = 0;
        _this.isMovingRight = true;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    obstacleManager.prototype.onLoad = function () {
        if (this.idPrf == 1) {
            console.log("Node: ", this.listNode);
        }
    };
    obstacleManager.prototype.start = function () {
    };
    obstacleManager.prototype.update = function (dt) {
        switch (this.idPrf) {
            case 0:
                var node = this.listNode[0];
                if (node) {
                    if (this.isMovingRight) {
                        node.x += this.speed * dt;
                        // Nếu node chạm biên phải của màn hình, thay đổi hướng di chuyển
                        if (node.x >= 200) {
                            this.isMovingRight = false;
                        }
                    }
                    else {
                        node.x -= this.speed * dt;
                        // Nếu node chạm biên trái của màn hình, thay đổi hướng di chuyển
                        if (node.x <= -200) {
                            this.isMovingRight = true;
                        }
                    }
                }
                break;
            case 1:
                if (this.listNode.length >= 2) {
                    var node1 = this.listNode[0];
                    var node2 = this.listNode[1];
                    // Node 1 di chuyển
                    if (this.isMovingRight) {
                        node1.x += this.speed * dt;
                        if (node1.x >= 200) {
                            this.isMovingRight = false;
                        }
                    }
                    else {
                        node1.x -= this.speed * dt;
                        if (node1.x <= -200) {
                            this.isMovingRight = true;
                        }
                    }
                    // Node 2 di chuyển ngược hướng với node 1
                    if (this.isMovingRight) {
                        node2.x -= this.speed * dt;
                        if (node2.x <= -200) {
                            this.isMovingRight = true;
                        }
                    }
                    else {
                        node2.x += this.speed * dt;
                        if (node2.x >= 200) {
                            this.isMovingRight = false;
                        }
                    }
                }
                break;
            case 3:
                if (this.listNode.length >= 2) {
                    var node1 = this.listNode[0];
                    var node2 = this.listNode[1];
                    if (this.isMovingRight) {
                        node1.x += this.speed * dt;
                        node2.x += this.speed * dt; // Node 2 di chuyển cùng hướng với node 1
                        if (node1.x >= 200 || node2.x >= 200) {
                            this.isMovingRight = false;
                        }
                    }
                    else {
                        node1.x -= this.speed * dt;
                        node2.x -= this.speed * dt; // Node 2 di chuyển cùng hướng với node 1
                        if (node1.x <= -200 || node2.x <= -200) {
                            this.isMovingRight = true;
                        }
                    }
                }
                break;
            case 4:
                if (this.listNode.length >= 3) {
                    var node1 = this.listNode[0];
                    var node2 = this.listNode[1];
                    var node3 = this.listNode[2];
                    if (this.isMovingRight) {
                        node1.x += this.speed * dt;
                        node2.x += this.speed * dt;
                        node3.x += this.speed * dt;
                        if (node3.x >= 300) {
                            this.isMovingRight = false;
                        }
                    }
                    else {
                        node1.x -= this.speed * dt;
                        node2.x -= this.speed * dt;
                        node3.x -= this.speed * dt;
                        if (node1.x <= -300) {
                            this.isMovingRight = true;
                        }
                    }
                }
                break;
            case 5:
                if (this.listNode.length) {
                    var node_1 = this.listNode[0];
                    if (node_1) {
                        if (this.isMovingRight) {
                            node_1.x += this.speed * dt;
                            if (node_1.x >= 200) {
                                this.isMovingRight = false;
                            }
                        }
                        else {
                            node_1.x -= this.speed * dt;
                            if (node_1.x <= -200) {
                                this.isMovingRight = true;
                            }
                        }
                    }
                }
                break;
            case 6:
                if (this.listNode.length >= 2) {
                    var node1 = this.listNode[0];
                    var node2 = this.listNode[1];
                    // Tăng giá trị góc quay dựa trên thời gian và tốc độ
                    node1.angle += this.speedAngle * dt;
                    // Giảm giá trị góc quay của node2 để nó quay ngược lại
                    node2.angle -= this.speedAngle * dt;
                    // Giới hạn giá trị góc quay trong khoảng 0 đến 360 độ
                    if (node1.angle >= 360) {
                        node1.angle -= 360;
                    }
                    if (node2.angle >= 360) {
                        node2.angle -= 360;
                    }
                    if (node1.angle < 0) {
                        node1.angle += 360;
                    }
                    if (node2.angle < 0) {
                        node2.angle += 360;
                    }
                }
                break;
            default:
                break;
        }
    };
    __decorate([
        property
    ], obstacleManager.prototype, "idPrf", void 0);
    __decorate([
        property(cc.Node)
    ], obstacleManager.prototype, "listNode", void 0);
    obstacleManager = __decorate([
        ccclass
    ], obstacleManager);
    return obstacleManager;
}(cc.Component));
exports.default = obstacleManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9JbmZpbml0ZUhlaWdodHMvc2NyaXB0cy9HYW1lL0luZmluaXRlSGVpZ2h0cy5PYnN0YWNsZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUE2S0M7UUExS0csV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixXQUFLLEdBQVcsR0FBRyxDQUFDO1FBQ3BCLGdCQUFVLEdBQUcsR0FBRyxDQUFBO1FBRWhCLGNBQVEsR0FBYyxFQUFFLENBQUM7UUFDekIsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNGLG1CQUFhLEdBQVksSUFBSSxDQUFDOztJQW9LMUMsQ0FBQztJQWxLRyx3QkFBd0I7SUFFeEIsZ0NBQU0sR0FBTjtRQUNJLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0wsQ0FBQztJQUVELCtCQUFLLEdBQUw7SUFFQSxDQUFDO0lBR0QsZ0NBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxRQUFRLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDaEIsS0FBSyxDQUFDO2dCQUNGLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksSUFBSSxFQUFFO29CQUNOLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTt3QkFDcEIsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMs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QkFFcEMsc0RBQXNEO29CQUN0RCxJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksR0FBRyxFQUFFO3dCQUNwQixLQUFLLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQztxQkFDdEI7b0JBQ0QsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLEdBQUcsRUFBRTt3QkFDcEIsS0FBSyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUM7cUJBQ3RCO29CQUVELElBQUksS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7d0JBQ2pCLEtBQUssQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDO3FCQUN0QjtvQkFDRCxJQUFJLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO3dCQUNqQixLQUFLLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQztxQkFDdEI7aUJBQ0o7Z0JBQ0QsTUFBTTtZQUNWO2dCQUNJLE1BQU07U0FDYjtJQUNMLENBQUM7SUF0S0Q7UUFEQyxRQUFRO2tEQUNTO0lBSWxCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ087SUFQUixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBNktuQztJQUFELHNCQUFDO0NBN0tELEFBNktDLENBN0s0QyxFQUFFLENBQUMsU0FBUyxHQTZLeEQ7a0JBN0tvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBvYnN0YWNsZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5XG4gICAgaWRQcmY6IG51bWJlciA9IDA7XG4gICAgc3BlZWQ6IG51bWJlciA9IDE1MDtcbiAgICBzcGVlZEFuZ2xlID0gMTAwXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdE5vZGU6IGNjLk5vZGVbXSA9IFtdO1xuICAgIGFuZ2xlID0gMDtcbiAgICBwcml2YXRlIGlzTW92aW5nUmlnaHQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlkUHJmID09IDEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm9kZTogXCIsIHRoaXMubGlzdE5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuaWRQcmYpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMubGlzdE5vZGVbMF07XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmdSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS54ICs9IHRoaXMuc3BlZWQgKiBkdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE7hur91IG5vZGUgY2jhuqFtIGJpw6puIHBo4bqjaSBj4bunYSBtw6BuIGjDrG5oLCB0aGF5IMSR4buVaSBoxrDhu5tuZyBkaSBjaHV54buDblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUueCA+PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUueCAtPSB0aGlzLnNwZWVkICogZHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBO4bq/dSBub2RlIGNo4bqhbSBiacOqbiB0csOhaSBj4bunYSBtw6BuIGjDrG5oLCB0aGF5IMSR4buVaSBoxrDhu5tuZyBkaSBjaHV54buDblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUueCA8PSAtMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ1JpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0Tm9kZS5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZTEgPSB0aGlzLmxpc3ROb2RlWzBdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZTIgPSB0aGlzLmxpc3ROb2RlWzFdO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vZGUgMSBkaSBjaHV54buDblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc01vdmluZ1JpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlMS54ICs9IHRoaXMuc3BlZWQgKiBkdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlMS54ID49IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdSaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTEueCAtPSB0aGlzLnNwZWVkICogZHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZTEueCA8PSAtMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ1JpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vZGUgMiBkaSBjaHV54buDbiBuZ8aw4bujYyBoxrDhu5tuZyB24bubaSBub2RlIDFcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmdSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTIueCAtPSB0aGlzLnNwZWVkICogZHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZTIueCA8PSAtMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ1JpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUyLnggKz0gdGhpcy5zcGVlZCAqIGR0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUyLnggPj0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ1JpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdE5vZGUubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUxID0gdGhpcy5saXN0Tm9kZVswXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUyID0gdGhpcy5saXN0Tm9kZVsxXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc01vdmluZ1JpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlMS54ICs9IHRoaXMuc3BlZWQgKiBkdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUyLnggKz0gdGhpcy5zcGVlZCAqIGR0OyAvLyBOb2RlIDIgZGkgY2h1eeG7g24gY8O5bmcgaMaw4bubbmcgduG7m2kgbm9kZSAxXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZTEueCA+PSAyMDAgfHwgbm9kZTIueCA+PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUxLnggLT0gdGhpcy5zcGVlZCAqIGR0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTIueCAtPSB0aGlzLnNwZWVkICogZHQ7IC8vIE5vZGUgMiBkaSBjaHV54buDbiBjw7luZyBoxrDhu5tuZyB24bubaSBub2RlIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlMS54IDw9IC0yMDAgfHwgbm9kZTIueCA8PSAtMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ1JpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0Tm9kZS5sZW5ndGggPj0gMykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZTEgPSB0aGlzLmxpc3ROb2RlWzBdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZTIgPSB0aGlzLmxpc3ROb2RlWzFdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZTMgPSB0aGlzLmxpc3ROb2RlWzJdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTW92aW5nUmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUxLnggKz0gdGhpcy5zcGVlZCAqIGR0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTIueCArPSB0aGlzLnNwZWVkICogZHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlMy54ICs9IHRoaXMuc3BlZWQgKiBkdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlMy54ID49IDMwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdSaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTEueCAtPSB0aGlzLnNwZWVkICogZHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlMi54IC09IHRoaXMuc3BlZWQgKiBkdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUzLnggLT0gdGhpcy5zcGVlZCAqIGR0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUxLnggPD0gLTMwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdSaWdodCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdE5vZGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5saXN0Tm9kZVswXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmdSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUueCArPSB0aGlzLnNwZWVkICogZHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUueCA+PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ1JpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnggLT0gdGhpcy5zcGVlZCAqIGR0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnggPD0gLTIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nUmlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpc3ROb2RlLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlMSA9IHRoaXMubGlzdE5vZGVbMF07XG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlMiA9IHRoaXMubGlzdE5vZGVbMV07XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIFTEg25nIGdpw6EgdHLhu4sgZ8OzYyBxdWF5IGThu7FhIHRyw6puIHRo4budaSBnaWFuIHbDoCB04buRYyDEkeG7mVxuICAgICAgICAgICAgICAgICAgICBub2RlMS5hbmdsZSArPSB0aGlzLnNwZWVkQW5nbGUgKiBkdDtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gR2nhuqNtIGdpw6EgdHLhu4sgZ8OzYyBxdWF5IGPhu6dhIG5vZGUyIMSR4buDIG7DsyBxdWF5IG5nxrDhu6NjIGzhuqFpXG4gICAgICAgICAgICAgICAgICAgIG5vZGUyLmFuZ2xlIC09IHRoaXMuc3BlZWRBbmdsZSAqIGR0O1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBHaeG7m2kgaOG6oW4gZ2nDoSB0cuG7iyBnw7NjIHF1YXkgdHJvbmcga2hv4bqjbmcgMCDEkeG6v24gMzYwIMSR4buZXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlMS5hbmdsZSA+PSAzNjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUxLmFuZ2xlIC09IDM2MDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZTIuYW5nbGUgPj0gMzYwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlMi5hbmdsZSAtPSAzNjA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUxLmFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTEuYW5nbGUgKz0gMzYwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlMi5hbmdsZSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUyLmFuZ2xlICs9IDM2MDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG5cblxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/InfiniteHeights/scripts/Game/InfiniteHeights.GameView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b6dd7aYqLJCY7gZHiWV6nKt', 'InfiniteHeights.GameView');
// InfiniteHeights/scripts/Game/InfiniteHeights.GameView.ts

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
var InfiniteHeights_ObstacleManager_1 = require("./InfiniteHeights.ObstacleManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameView = /** @class */ (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nObstacle = null;
        _this.nObstacle_2 = null;
        _this.listPrfObstacle = [];
        _this.prfBackGround = null;
        _this.nBgGame = null;
        _this.isFirstTouch = false;
        return _this;
        // genBackGround() {
        //     console.log("sadasd");
        //     let bg = cc.instantiate(this.prfBackGround).getComponent(BackGround).node
        //     bg.y = 1900;
        //     this.nBgGame.addChild(bg);
        // }
    }
    GameView_1 = GameView;
    // LIFE-CYCLE CALLBACKS:
    GameView.prototype.onLoad = function () {
        GameView_1.instance = this;
        this.test();
        this.genObstacle_2();
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
    };
    GameView.prototype.start = function () {
    };
    GameView.prototype.test = function () {
        for (var i = 0; i < 2; i++) {
            var test = cc.instantiate(this.listPrfObstacle[i]).getComponent(InfiniteHeights_ObstacleManager_1.default).node;
            test.y = 300 + i * 600;
            this.nObstacle.addChild(test);
        }
    };
    GameView.prototype.onTouchBegan = function () {
        this.isFirstTouch = true;
        console.log("sdasdasd");
    };
    GameView.prototype.genObstacle_2 = function () {
        var obstracle = cc.instantiate(this.listPrfObstacle[5]).getComponent(InfiniteHeights_ObstacleManager_1.default).node;
        this.nObstacle_2.addChild(obstracle);
    };
    var GameView_1;
    GameView.instance = null;
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "nObstacle", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "nObstacle_2", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameView.prototype, "listPrfObstacle", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameView.prototype, "prfBackGround", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "nBgGame", void 0);
    GameView = GameView_1 = __decorate([
        ccclass
    ], GameView);
    return GameView;
}(cc.Component));
exports.default = GameView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9JbmZpbml0ZUhlaWdodHMvc2NyaXB0cy9HYW1lL0luZmluaXRlSGVpZ2h0cy5HYW1lVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRixxRkFBZ0U7QUFFMUQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF5REM7UUFyREcsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixxQkFBZSxHQUFnQixFQUFFLENBQUM7UUFFbEMsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFFaEMsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixrQkFBWSxHQUFHLEtBQUssQ0FBQzs7UUFtQ3JCLG9CQUFvQjtRQUNwQiw2QkFBNkI7UUFDN0IsZ0ZBQWdGO1FBQ2hGLG1CQUFtQjtRQUVuQixpQ0FBaUM7UUFFakMsSUFBSTtJQUNSLENBQUM7aUJBekRvQixRQUFRO0lBZXpCLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBRUksVUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRXhFLENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHVCQUFJLEdBQUo7UUFDSSxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyx5Q0FBZSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3RGLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakM7SUFFTCxDQUFDO0lBRUQsK0JBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUVELGdDQUFhLEdBQWI7UUFDSSxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMseUNBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMzRixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QyxDQUFDOztJQTdDYSxpQkFBUSxHQUFhLElBQUksQ0FBQztJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDYztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO21EQUNZO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFaUCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBeUQ1QjtJQUFELGVBQUM7Q0F6REQsQUF5REMsQ0F6RHFDLEVBQUUsQ0FBQyxTQUFTLEdBeURqRDtrQkF6RG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEJhY2tHcm91bmQgZnJvbSBcIi4vSW5maW5pdGVIZWlnaHRzLkJhY2tHcm91bmRcIjtcbmltcG9ydCBvYnN0YWNsZU1hbmFnZXIgZnJvbSBcIi4vSW5maW5pdGVIZWlnaHRzLk9ic3RhY2xlTWFuYWdlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogR2FtZVZpZXcgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5PYnN0YWNsZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbk9ic3RhY2xlXzI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgbGlzdFByZk9ic3RhY2xlOiBjYy5QcmVmYWJbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJmQmFja0dyb3VuZDogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuQmdHYW1lOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGlzRmlyc3RUb3VjaCA9IGZhbHNlO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICB0aGlzLnRlc3QoKTtcbiAgICAgICAgdGhpcy5nZW5PYnN0YWNsZV8yKCk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCx0aGlzLm9uVG91Y2hCZWdhbiwgdGhpcyk7XG4gICAgICAgXG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICB0ZXN0KCkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdGVzdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdFByZk9ic3RhY2xlW2ldKS5nZXRDb21wb25lbnQob2JzdGFjbGVNYW5hZ2VyKS5ub2RlO1xuICAgICAgICAgICAgdGVzdC55ID0gMzAwICsgaSAqIDYwMDtcbiAgICAgICAgICAgIHRoaXMubk9ic3RhY2xlLmFkZENoaWxkKHRlc3QpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIG9uVG91Y2hCZWdhbigpIHtcbiAgICAgICAgdGhpcy5pc0ZpcnN0VG91Y2ggPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNkYXNkYXNkXCIpXG4gICAgfVxuXG4gICAgZ2VuT2JzdGFjbGVfMigpIHtcbiAgICAgICAgbGV0IG9ic3RyYWNsZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdFByZk9ic3RhY2xlWzVdKS5nZXRDb21wb25lbnQob2JzdGFjbGVNYW5hZ2VyKS5ub2RlO1xuICAgICAgICB0aGlzLm5PYnN0YWNsZV8yLmFkZENoaWxkKG9ic3RyYWNsZSk7XG4gICAgfVxuXG4gICAgLy8gZ2VuQmFja0dyb3VuZCgpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJzYWRhc2RcIik7XG4gICAgLy8gICAgIGxldCBiZyA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmQmFja0dyb3VuZCkuZ2V0Q29tcG9uZW50KEJhY2tHcm91bmQpLm5vZGVcbiAgICAvLyAgICAgYmcueSA9IDE5MDA7XG5cbiAgICAvLyAgICAgdGhpcy5uQmdHYW1lLmFkZENoaWxkKGJnKTtcblxuICAgIC8vIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------
