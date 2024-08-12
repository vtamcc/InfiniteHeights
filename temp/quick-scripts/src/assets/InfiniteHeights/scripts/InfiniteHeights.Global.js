"use strict";
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