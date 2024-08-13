
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/InfiniteHeights/scripts/InfiniteHeights.Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ee72/5AWBJWZj8nXFDg5Ed', 'InfiniteHeights.Global');
// InfiniteHeights/scripts/InfiniteHeights.Global.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
exports.Global = void 0;
var Global = /** @class */ (function () {
    function Global() {
    }
    Global.diaMond = 0;
    Global.score = 0;
    Global.dataScore = [];
    Global.unlockPoints = [0, 10, 20, 30, 40];
    Global.currentIndexBallon = 0;
    Global.unlockIndexBallon = 0;
    return Global;
}());
exports.Global = Global;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9JbmZpbml0ZUhlaWdodHMvc2NyaXB0cy9JbmZpbml0ZUhlaWdodHMuR2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7O0FBRWxGO0lBQUE7SUFPQSxDQUFDO0lBTlUsY0FBTyxHQUFHLENBQUMsQ0FBQztJQUNaLFlBQUssR0FBRyxDQUFDLENBQUM7SUFDVixnQkFBUyxHQUFHLEVBQUUsQ0FBQztJQUNmLG1CQUFZLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbkMseUJBQWtCLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLHdCQUFpQixHQUFHLENBQUMsQ0FBQztJQUNqQyxhQUFDO0NBUEQsQUFPQyxJQUFBO0FBUFksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuZXhwb3J0IGNsYXNzIEdsb2JhbHtcbiAgICBzdGF0aWMgZGlhTW9uZCA9IDA7XG4gICAgc3RhdGljIHNjb3JlID0gMDtcbiAgICBzdGF0aWMgZGF0YVNjb3JlID0gW107XG4gICAgc3RhdGljIHVubG9ja1BvaW50cyA9IFswLCAxMCwgMjAsIDMwLCA0MF07XG4gICAgc3RhdGljIGN1cnJlbnRJbmRleEJhbGxvbiA9IDA7XG4gICAgc3RhdGljIHVubG9ja0luZGV4QmFsbG9uID0gMDtcbn1cbiJdfQ==