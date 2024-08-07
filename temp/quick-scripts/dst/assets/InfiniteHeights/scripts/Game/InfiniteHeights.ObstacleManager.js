
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9JbmZpbml0ZUhlaWdodHMvc2NyaXB0cy9HYW1lL0luZmluaXRlSGVpZ2h0cy5PYnN0YWNsZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUE2S0M7UUExS0csV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixXQUFLLEdBQVcsR0FBRyxDQUFDO1FBQ3BCLGdCQUFVLEdBQUcsR0FBRyxDQUFBO1FBRWhCLGNBQVEsR0FBYyxFQUFFLENBQUM7UUFDekIsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNGLG1CQUFhLEdBQVksSUFBSSxDQUFDOztJQW9LMUMsQ0FBQztJQWxLRyx3QkFBd0I7SUFFeEIsZ0NBQU0sR0FBTjtRQUNJLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0wsQ0FBQztJQUVELCtCQUFLLEdBQUw7SUFFQSxDQUFDO0lBR0QsZ0NBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxRQUFRLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDaEIsS0FBSyxDQUFDO2dCQUNGLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksSUFBSSxFQUFFO29CQUNOLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTt3QkFDcEIsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzt3QkFDMUIsaUVBQWlFO3dCQUNqRSxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFOzRCQUNmLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO3lCQUM5QjtxQkFDSjt5QkFBTTt3QkFDSCxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO3dCQUMxQixpRUFBaUU7d0JBQ2pFLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTs0QkFDaEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7eUJBQzdCO3FCQUNKO2lCQUNKO2dCQUNELE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7b0JBQzNCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzdCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRTdCLG1CQUFtQjtvQkFDbkIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO3dCQUNwQixLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO3dCQUMzQixJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFOzRCQUNoQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzt5QkFDOUI7cUJBQ0o7eUJBQU07d0JBQ0gsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzt3QkFDM0IsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFOzRCQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQzt5QkFDN0I7cUJBQ0o7b0JBRUQsMENBQTBDO29CQUMxQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7d0JBQ3BCLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7d0JBQzNCLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTs0QkFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7eUJBQzdCO3FCQUNKO3lCQUFNO3dCQUNILEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7d0JBQzNCLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7NEJBQ2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO3lCQUM5QjtxQkFDSjtpQkFDSjtnQkFDRCxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO29CQUMzQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUU3QixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7d0JBQ3BCLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7d0JBQzNCLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyx5Q0FBeUM7d0JBQ3JFLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7NEJBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO3lCQUM5QjtxQkFDSjt5QkFBTTt3QkFDSCxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO3dCQUMzQixLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMseUNBQXlDO3dCQUNyRSxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTs0QkFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7eUJBQzdCO3FCQUNKO2lCQUNKO2dCQUNELE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7b0JBQzNCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzdCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzdCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRTdCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTt3QkFDcEIsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzt3QkFDM0IsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzt3QkFDM0IsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzt3QkFDM0IsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRTs0QkFDaEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7eUJBQzlCO3FCQUNKO3lCQUFNO3dCQUNILEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7d0JBQzNCLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7d0JBQzNCLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7d0JBQzNCLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTs0QkFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7eUJBQzdCO3FCQUNKO2lCQUNKO2dCQUNELE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtvQkFDdEIsSUFBSSxNQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxNQUFJLEVBQUU7d0JBRU4sSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFOzRCQUNwQixNQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDOzRCQUMxQixJQUFJLE1BQUksQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFO2dDQUNmLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDOzZCQUM5Qjt5QkFDSjs2QkFBTTs0QkFDSCxNQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDOzRCQUMxQixJQUFJLE1BQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0NBQ2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDOzZCQUM3Qjt5QkFDSjtxQkFDSjtpQkFFSjtnQkFDRCxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO29CQUMzQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUU3QixxREFBcUQ7b0JBQ3JELEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBRXBDLHVEQUF1RDtvQkFDdkQsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztvQkFFcEMsc0RBQXNEO29CQUN0RCxJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksR0FBRyxFQUFFO3dCQUNwQixLQUFLLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQztxQkFDdEI7b0JBQ0QsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLEdBQUcsRUFBRTt3QkFDcEIsS0FBSyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUM7cUJBQ3RCO29CQUVELElBQUksS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7d0JBQ2pCLEtBQUssQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDO3FCQUN0QjtvQkFDRCxJQUFJLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO3dCQUNqQixLQUFLLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQztxQkFDdEI7aUJBQ0o7Z0JBQ0QsTUFBTTtZQUNWO2dCQUNJLE1BQU07U0FDYjtJQUNMLENBQUM7SUF0S0Q7UUFEQyxRQUFRO2tEQUNTO0lBSWxCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ087SUFQUixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBNktuQztJQUFELHNCQUFDO0NBN0tELEFBNktDLENBN0s0QyxFQUFFLENBQUMsU0FBUyxHQTZLeEQ7a0JBN0tvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBvYnN0YWNsZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5XG4gICAgaWRQcmY6IG51bWJlciA9IDA7XG4gICAgc3BlZWQ6IG51bWJlciA9IDE1MDtcbiAgICBzcGVlZEFuZ2xlID0gMTAwXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdE5vZGU6IGNjLk5vZGVbXSA9IFtdO1xuICAgIGFuZ2xlID0gMDtcbiAgICBwcml2YXRlIGlzTW92aW5nUmlnaHQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlkUHJmID09IDEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm9kZTogXCIsIHRoaXMubGlzdE5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuaWRQcmYpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMubGlzdE5vZGVbMF07XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmdSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS54ICs9IHRoaXMuc3BlZWQgKiBkdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE7hur91IG5vZGUgY2jhuqFtIGJpw6puIHBo4bqjaSBj4bunYSBtw6BuIGjDrG5oLCB0aGF5IMSR4buVaSBoxrDhu5tuZyBkaSBjaHV54buDblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUueCA+PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUueCAtPSB0aGlzLnNwZWVkICogZHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBO4bq/dSBub2RlIGNo4bqhbSBiacOqbiB0csOhaSBj4bunYSBtw6BuIGjDrG5oLCB0aGF5IMSR4buVaSBoxrDhu5tuZyBkaSBjaHV54buDblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUueCA8PSAtMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ1JpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0Tm9kZS5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZTEgPSB0aGlzLmxpc3ROb2RlWzBdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZTIgPSB0aGlzLmxpc3ROb2RlWzFdO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vZGUgMSBkaSBjaHV54buDblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc01vdmluZ1JpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlMS54ICs9IHRoaXMuc3BlZWQgKiBkdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlMS54ID49IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdSaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTEueCAtPSB0aGlzLnNwZWVkICogZHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZTEueCA8PSAtMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ1JpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vZGUgMiBkaSBjaHV54buDbiBuZ8aw4bujYyBoxrDhu5tuZyB24bubaSBub2RlIDFcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmdSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTIueCAtPSB0aGlzLnNwZWVkICogZHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZTIueCA8PSAtMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ1JpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUyLnggKz0gdGhpcy5zcGVlZCAqIGR0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUyLnggPj0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ1JpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdE5vZGUubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUxID0gdGhpcy5saXN0Tm9kZVswXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUyID0gdGhpcy5saXN0Tm9kZVsxXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc01vdmluZ1JpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlMS54ICs9IHRoaXMuc3BlZWQgKiBkdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUyLnggKz0gdGhpcy5zcGVlZCAqIGR0OyAvLyBOb2RlIDIgZGkgY2h1eeG7g24gY8O5bmcgaMaw4bubbmcgduG7m2kgbm9kZSAxXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZTEueCA+PSAyMDAgfHwgbm9kZTIueCA+PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUxLnggLT0gdGhpcy5zcGVlZCAqIGR0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTIueCAtPSB0aGlzLnNwZWVkICogZHQ7IC8vIE5vZGUgMiBkaSBjaHV54buDbiBjw7luZyBoxrDhu5tuZyB24bubaSBub2RlIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlMS54IDw9IC0yMDAgfHwgbm9kZTIueCA8PSAtMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ1JpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0Tm9kZS5sZW5ndGggPj0gMykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZTEgPSB0aGlzLmxpc3ROb2RlWzBdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZTIgPSB0aGlzLmxpc3ROb2RlWzFdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZTMgPSB0aGlzLmxpc3ROb2RlWzJdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTW92aW5nUmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUxLnggKz0gdGhpcy5zcGVlZCAqIGR0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTIueCArPSB0aGlzLnNwZWVkICogZHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlMy54ICs9IHRoaXMuc3BlZWQgKiBkdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlMy54ID49IDMwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdSaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTEueCAtPSB0aGlzLnNwZWVkICogZHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlMi54IC09IHRoaXMuc3BlZWQgKiBkdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUzLnggLT0gdGhpcy5zcGVlZCAqIGR0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUxLnggPD0gLTMwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdSaWdodCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdE5vZGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5saXN0Tm9kZVswXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmdSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUueCArPSB0aGlzLnNwZWVkICogZHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUueCA+PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ1JpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnggLT0gdGhpcy5zcGVlZCAqIGR0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnggPD0gLTIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nUmlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpc3ROb2RlLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlMSA9IHRoaXMubGlzdE5vZGVbMF07XG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlMiA9IHRoaXMubGlzdE5vZGVbMV07XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIFTEg25nIGdpw6EgdHLhu4sgZ8OzYyBxdWF5IGThu7FhIHRyw6puIHRo4budaSBnaWFuIHbDoCB04buRYyDEkeG7mVxuICAgICAgICAgICAgICAgICAgICBub2RlMS5hbmdsZSArPSB0aGlzLnNwZWVkQW5nbGUgKiBkdDtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gR2nhuqNtIGdpw6EgdHLhu4sgZ8OzYyBxdWF5IGPhu6dhIG5vZGUyIMSR4buDIG7DsyBxdWF5IG5nxrDhu6NjIGzhuqFpXG4gICAgICAgICAgICAgICAgICAgIG5vZGUyLmFuZ2xlIC09IHRoaXMuc3BlZWRBbmdsZSAqIGR0O1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBHaeG7m2kgaOG6oW4gZ2nDoSB0cuG7iyBnw7NjIHF1YXkgdHJvbmcga2hv4bqjbmcgMCDEkeG6v24gMzYwIMSR4buZXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlMS5hbmdsZSA+PSAzNjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUxLmFuZ2xlIC09IDM2MDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZTIuYW5nbGUgPj0gMzYwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlMi5hbmdsZSAtPSAzNjA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUxLmFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTEuYW5nbGUgKz0gMzYwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlMi5hbmdsZSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUyLmFuZ2xlICs9IDM2MDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG5cblxuIl19