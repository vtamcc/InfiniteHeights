
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
    Global.dataBallon = [
        { score: 20, isUnlock: true },
        { score: 10, isUnlock: false },
        { score: 12, isUnlock: false },
        { score: 14, isUnlock: false },
        { score: 16, isUnlock: false },
        { score: 18, isUnlock: false },
        { score: 20, isUnlock: false },
        { score: 22, isUnlock: false },
        { score: 24, isUnlock: false },
    ];
    Global.currentIndex = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcSW5maW5pdGVIZWlnaHRzXFxzY3JpcHRzXFxJbmZpbml0ZUhlaWdodHMuR2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7O0FBRWxGO0lBQUE7SUFnQkEsQ0FBQztJQWZVLGNBQU8sR0FBRyxDQUFDLENBQUM7SUFDWixZQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsZ0JBQVMsR0FBRyxFQUFFLENBQUM7SUFDZixpQkFBVSxHQUFHO1FBQ2hCLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO1FBQzNCLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO1FBQzVCLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO1FBQzVCLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO1FBQzVCLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO1FBQzVCLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO1FBQzVCLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO1FBQzVCLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO1FBQzVCLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO0tBQy9CLENBQUE7SUFDTSxtQkFBWSxHQUFHLENBQUMsQ0FBQztJQUM1QixhQUFDO0NBaEJELEFBZ0JDLElBQUE7QUFoQlksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5leHBvcnQgY2xhc3MgR2xvYmFse1xyXG4gICAgc3RhdGljIGRpYU1vbmQgPSAwO1xyXG4gICAgc3RhdGljIHNjb3JlID0gMDtcclxuICAgIHN0YXRpYyBkYXRhU2NvcmUgPSBbXTtcclxuICAgIHN0YXRpYyBkYXRhQmFsbG9uID0gW1xyXG4gICAgICAgIHtzY29yZTogMjAsIGlzVW5sb2NrOiB0cnVlfSxcclxuICAgICAgICB7c2NvcmU6IDEwLCBpc1VubG9jazogZmFsc2V9LFxyXG4gICAgICAgIHtzY29yZTogMTIsIGlzVW5sb2NrOiBmYWxzZX0sXHJcbiAgICAgICAge3Njb3JlOiAxNCwgaXNVbmxvY2s6IGZhbHNlfSxcclxuICAgICAgICB7c2NvcmU6IDE2LCBpc1VubG9jazogZmFsc2V9LFxyXG4gICAgICAgIHtzY29yZTogMTgsIGlzVW5sb2NrOiBmYWxzZX0sXHJcbiAgICAgICAge3Njb3JlOiAyMCwgaXNVbmxvY2s6IGZhbHNlfSxcclxuICAgICAgICB7c2NvcmU6IDIyLCBpc1VubG9jazogZmFsc2V9LFxyXG4gICAgICAgIHtzY29yZTogMjQsIGlzVW5sb2NrOiBmYWxzZX0sXHJcbiAgICBdXHJcbiAgICBzdGF0aWMgY3VycmVudEluZGV4ID0gMDtcclxufVxyXG4iXX0=