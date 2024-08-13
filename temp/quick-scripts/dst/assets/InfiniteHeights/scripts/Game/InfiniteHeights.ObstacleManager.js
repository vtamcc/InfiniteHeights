
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
var InfiniteHeights_GameView_1 = require("./InfiniteHeights.GameView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var obstacleManager = /** @class */ (function (_super) {
    __extends(obstacleManager, _super);
    function obstacleManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idPrf = 0;
        _this.speed = 150;
        _this.speedAngle = 70;
        _this.listNode = [];
        _this.angle = 0;
        _this.isMovingRight = true;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    obstacleManager.prototype.onLoad = function () {
    };
    obstacleManager.prototype.start = function () {
    };
    obstacleManager.prototype.update = function (dt) {
        if (InfiniteHeights_GameView_1.default.instance.isGameOver)
            return;
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
            case 2:
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
            case 3:
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
            case 4:
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
            case 5:
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
            case 6:
                if (this.listNode.length) {
                    var node_2 = this.listNode[0];
                    node_2.angle += this.speedAngle * dt;
                }
                break;
            case 7:
                if (this.listNode.length) {
                    var node_3 = this.listNode[0];
                    node_3.angle += this.speedAngle * dt;
                }
                break;
            case 8:
                if (this.listNode.length) {
                    var node_4 = this.listNode[0];
                    node_4.angle += this.speedAngle * dt;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSW5maW5pdGVIZWlnaHRzXFxzY3JpcHRzXFxHYW1lXFxJbmZpbml0ZUhlaWdodHMuT2JzdGFjbGVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHVFQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQWlNQztRQTlMRyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFdBQUssR0FBVyxHQUFHLENBQUM7UUFDcEIsZ0JBQVUsR0FBRyxFQUFFLENBQUM7UUFFaEIsY0FBUSxHQUFjLEVBQUUsQ0FBQztRQUN6QixXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ0YsbUJBQWEsR0FBWSxJQUFJLENBQUM7O0lBd0wxQyxDQUFDO0lBdExHLHdCQUF3QjtJQUV4QixnQ0FBTSxHQUFOO0lBRUEsQ0FBQztJQUVELCtCQUFLLEdBQUw7SUFFQSxDQUFDO0lBR0QsZ0NBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFHLGtDQUFRLENBQUMsUUFBUSxDQUFDLFVBQVU7WUFBRSxPQUFPO1FBQ3hDLFFBQVEsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNoQixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxJQUFJLEVBQUU7b0JBQ04sSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO3dCQUNwQixJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO3dCQUMxQixpRUFBaUU7d0JBQ2pFLElB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RUksTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQTFMRDtRQURDLFFBQVE7a0RBQ1M7SUFJbEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDTztJQVBSLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0FpTW5DO0lBQUQsc0JBQUM7Q0FqTUQsQUFpTUMsQ0FqTTRDLEVBQUUsQ0FBQyxTQUFTLEdBaU14RDtrQkFqTW9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4vSW5maW5pdGVIZWlnaHRzLkdhbWVWaWV3XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgb2JzdGFjbGVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGlkUHJmOiBudW1iZXIgPSAwO1xyXG4gICAgc3BlZWQ6IG51bWJlciA9IDE1MDtcclxuICAgIHNwZWVkQW5nbGUgPSA3MDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlzdE5vZGU6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgYW5nbGUgPSAwO1xyXG4gICAgcHJpdmF0ZSBpc01vdmluZ1JpZ2h0OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZihHYW1lVmlldy5pbnN0YW5jZS5pc0dhbWVPdmVyKSByZXR1cm47XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmlkUHJmKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5saXN0Tm9kZVswXTtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmdSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnggKz0gdGhpcy5zcGVlZCAqIGR0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBO4bq/dSBub2RlIGNo4bqhbSBiacOqbiBwaOG6o2kgY+G7p2EgbcOgbiBow6xuaCwgdGhheSDEkeG7lWkgaMaw4bubbmcgZGkgY2h1eeG7g25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUueCA+PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS54IC09IHRoaXMuc3BlZWQgKiBkdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTuG6v3Ugbm9kZSBjaOG6oW0gYmnDqm4gdHLDoWkgY+G7p2EgbcOgbiBow6xuaCwgdGhheSDEkeG7lWkgaMaw4bubbmcgZGkgY2h1eeG7g25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUueCA8PSAtMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpc3ROb2RlLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUxID0gdGhpcy5saXN0Tm9kZVswXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZTIgPSB0aGlzLmxpc3ROb2RlWzFdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBOb2RlIDEgZGkgY2h1eeG7g25cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc01vdmluZ1JpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUxLnggKz0gdGhpcy5zcGVlZCAqIGR0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZTEueCA+PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTEueCAtPSB0aGlzLnNwZWVkICogZHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlMS54IDw9IC0yMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdSaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vZGUgMiBkaSBjaHV54buDbiBuZ8aw4bujYyBoxrDhu5tuZyB24bubaSBub2RlIDFcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc01vdmluZ1JpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUyLnggLT0gdGhpcy5zcGVlZCAqIGR0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZTIueCA8PSAtMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTW92aW5nUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTIueCArPSB0aGlzLnNwZWVkICogZHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlMi54ID49IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdE5vZGUubGVuZ3RoID49IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZTEgPSB0aGlzLmxpc3ROb2RlWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlMiA9IHRoaXMubGlzdE5vZGVbMV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTW92aW5nUmlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTEueCArPSB0aGlzLnNwZWVkICogZHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUyLnggKz0gdGhpcy5zcGVlZCAqIGR0OyAvLyBOb2RlIDIgZGkgY2h1eeG7g24gY8O5bmcgaMaw4bubbmcgduG7m2kgbm9kZSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlMS54ID49IDIwMCB8fCBub2RlMi54ID49IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlMS54IC09IHRoaXMuc3BlZWQgKiBkdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTIueCAtPSB0aGlzLnNwZWVkICogZHQ7IC8vIE5vZGUgMiBkaSBjaHV54buDbiBjw7luZyBoxrDhu5tuZyB24bubaSBub2RlIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUxLnggPD0gLTIwMCB8fCBub2RlMi54IDw9IC0yMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdSaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdE5vZGUubGVuZ3RoID49IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZTEgPSB0aGlzLmxpc3ROb2RlWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlMiA9IHRoaXMubGlzdE5vZGVbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUzID0gdGhpcy5saXN0Tm9kZVsyXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZpbmdSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlMS54ICs9IHRoaXMuc3BlZWQgKiBkdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTIueCArPSB0aGlzLnNwZWVkICogZHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUzLnggKz0gdGhpcy5zcGVlZCAqIGR0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZTMueCA+PSAzMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTEueCAtPSB0aGlzLnNwZWVkICogZHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUyLnggLT0gdGhpcy5zcGVlZCAqIGR0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlMy54IC09IHRoaXMuc3BlZWQgKiBkdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUxLnggPD0gLTMwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01vdmluZ1JpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0Tm9kZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMubGlzdE5vZGVbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTW92aW5nUmlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUueCArPSB0aGlzLnNwZWVkICogZHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS54ID49IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS54IC09IHRoaXMuc3BlZWQgKiBkdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnggPD0gLTIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZpbmdSaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpc3ROb2RlLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUxID0gdGhpcy5saXN0Tm9kZVswXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZTIgPSB0aGlzLmxpc3ROb2RlWzFdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBUxINuZyBnacOhIHRy4buLIGfDs2MgcXVheSBk4buxYSB0csOqbiB0aOG7nWkgZ2lhbiB2w6AgdOG7kWMgxJHhu5lcclxuICAgICAgICAgICAgICAgICAgICBub2RlMS5hbmdsZSArPSB0aGlzLnNwZWVkQW5nbGUgKiBkdDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gR2nhuqNtIGdpw6EgdHLhu4sgZ8OzYyBxdWF5IGPhu6dhIG5vZGUyIMSR4buDIG7DsyBxdWF5IG5nxrDhu6NjIGzhuqFpXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZTIuYW5nbGUgLT0gdGhpcy5zcGVlZEFuZ2xlICogZHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEdp4bubaSBo4bqhbiBnacOhIHRy4buLIGfDs2MgcXVheSB0cm9uZyBraG/huqNuZyAwIMSR4bq/biAzNjAgxJHhu5lcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZTEuYW5nbGUgPj0gMzYwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUxLmFuZ2xlIC09IDM2MDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUyLmFuZ2xlID49IDM2MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlMi5hbmdsZSAtPSAzNjA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZTEuYW5nbGUgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUxLmFuZ2xlICs9IDM2MDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUyLmFuZ2xlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlMi5hbmdsZSArPSAzNjA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0Tm9kZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMubGlzdE5vZGVbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hbmdsZSArPSB0aGlzLnNwZWVkQW5nbGUgKiBkdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0Tm9kZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMubGlzdE5vZGVbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hbmdsZSArPSB0aGlzLnNwZWVkQW5nbGUgKiBkdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdE5vZGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmxpc3ROb2RlWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYW5nbGUgKz0gdGhpcy5zcGVlZEFuZ2xlICogZHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG4iXX0=