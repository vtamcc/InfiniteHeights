
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9JbmZpbml0ZUhlaWdodHMvc2NyaXB0cy9JbmZpbml0ZUhlaWdodHMuR2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7O0FBRWxGO0lBQUE7SUFlQSxDQUFDO0lBZFUsY0FBTyxHQUFHLENBQUMsQ0FBQztJQUNaLFlBQUssR0FBRyxDQUFDLENBQUM7SUFDVixnQkFBUyxHQUFHLEVBQUUsQ0FBQztJQUNmLGlCQUFVLEdBQUc7UUFDaEIsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUM7UUFDM0IsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUM7UUFDNUIsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUM7UUFDNUIsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUM7UUFDNUIsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUM7UUFDNUIsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUM7UUFDNUIsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUM7UUFDNUIsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUM7UUFDNUIsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUM7S0FDL0IsQ0FBQTtJQUNMLGFBQUM7Q0FmRCxBQWVDLElBQUE7QUFmWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5leHBvcnQgY2xhc3MgR2xvYmFse1xuICAgIHN0YXRpYyBkaWFNb25kID0gMDtcbiAgICBzdGF0aWMgc2NvcmUgPSAwO1xuICAgIHN0YXRpYyBkYXRhU2NvcmUgPSBbXTtcbiAgICBzdGF0aWMgZGF0YUJhbGxvbiA9IFtcbiAgICAgICAge3Njb3JlOiAyMCwgaXNVbmxvY2s6IHRydWV9LFxuICAgICAgICB7c2NvcmU6IDEwLCBpc1VubG9jazogZmFsc2V9LFxuICAgICAgICB7c2NvcmU6IDEyLCBpc1VubG9jazogZmFsc2V9LFxuICAgICAgICB7c2NvcmU6IDE0LCBpc1VubG9jazogZmFsc2V9LFxuICAgICAgICB7c2NvcmU6IDE2LCBpc1VubG9jazogZmFsc2V9LFxuICAgICAgICB7c2NvcmU6IDE4LCBpc1VubG9jazogZmFsc2V9LFxuICAgICAgICB7c2NvcmU6IDIwLCBpc1VubG9jazogZmFsc2V9LFxuICAgICAgICB7c2NvcmU6IDIyLCBpc1VubG9jazogZmFsc2V9LFxuICAgICAgICB7c2NvcmU6IDI0LCBpc1VubG9jazogZmFsc2V9LFxuICAgIF1cbn1cbiJdfQ==