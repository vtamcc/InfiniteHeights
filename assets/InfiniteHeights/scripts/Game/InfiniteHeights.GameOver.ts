// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "../InfiniteHeights.GameManager";
import { Global } from "../InfiniteHeights.Global";
import GameView from "./InfiniteHeights.GameView";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameOver extends cc.Component {

   @property(cc.Label)
   lbScore: cc.Label = null;

   @property(cc.Label)
   lbDiamond: cc.Label = null;

   @property(cc.Label)
   lbTime: cc.Label = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        GameView.instance.updateLbTime(this.lbTime);
        GameView.instance.updateLbDiamond(this.lbDiamond);
        GameView.instance.updateLbScore(this.lbScore);
    }

    onReplay() {
        GameView.instance.resetGame();
        this.node.destroy();
    }

    onHome() {
        cc.sys.localStorage.setItem("score", JSON.stringify(Global.dataScore));
        GameView.instance.gameDestroy();
        GameManager.instance.updateRank(GameManager.instance.nListNodeRank);
        this.node.destroy();
    }
    start () {

    }

    // update (dt) {}
}
