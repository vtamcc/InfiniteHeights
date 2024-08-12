// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

export class Global{
    static diaMond = 0;
    static score = 0;
    static dataScore = [];
    static dataBallon = [
        {score: 20, isUnlock: true},
        {score: 10, isUnlock: false},
        {score: 12, isUnlock: false},
        {score: 14, isUnlock: false},
        {score: 16, isUnlock: false},
        {score: 18, isUnlock: false},
        {score: 20, isUnlock: false},
        {score: 22, isUnlock: false},
        {score: 24, isUnlock: false},
    ]
    static currentIndex = 0;
}
