// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameView from "./InfiniteHeights.GameView";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Pause extends cc.Component {


    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
    }

    start () {

    }

    onResumeGame() {
        GameView.instance.startTimeResume();
        this.node.destroy();
    }

    onHome() {
        GameView.instance.gameDestroy();
        this.node.destroy();
    }

    onReset() {
        GameView.instance.resetGame();
        this.node.destroy();
    }
    // update (dt) {}
}
