
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
    Global.unlockPoints = [0, 10, 20, 30, 40, 50, 60, 70, 80];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSW5maW5pdGVIZWlnaHRzXFxzY3JpcHRzXFxJbmZpbml0ZUhlaWdodHMuR2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7O0FBRWxGO0lBQUE7SUFPQSxDQUFDO0lBTlUsY0FBTyxHQUFHLENBQUMsQ0FBQztJQUNaLFlBQUssR0FBRyxDQUFDLENBQUM7SUFDVixnQkFBUyxHQUFHLEVBQUUsQ0FBQztJQUNmLG1CQUFZLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELHlCQUFrQixHQUFHLENBQUMsQ0FBQztJQUN2Qix3QkFBaUIsR0FBRyxDQUFDLENBQUM7SUFDakMsYUFBQztDQVBELEFBT0MsSUFBQTtBQVBZLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuZXhwb3J0IGNsYXNzIEdsb2JhbHtcclxuICAgIHN0YXRpYyBkaWFNb25kID0gMDtcclxuICAgIHN0YXRpYyBzY29yZSA9IDA7XHJcbiAgICBzdGF0aWMgZGF0YVNjb3JlID0gW107XHJcbiAgICBzdGF0aWMgdW5sb2NrUG9pbnRzID0gWzAsIDEwLCAyMCwgMzAsIDQwLCA1MCwgNjAsIDcwLCA4MF07XHJcbiAgICBzdGF0aWMgY3VycmVudEluZGV4QmFsbG9uID0gMDtcclxuICAgIHN0YXRpYyB1bmxvY2tJbmRleEJhbGxvbiA9IDA7XHJcbn1cclxuIl19