// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "../InfiniteHeights.GameManager";
import { Global } from "../InfiniteHeights.Global";
import Ballon from "./InfiniteHeights.Ballon";
import GameView from "./InfiniteHeights.GameView";
import Shop from "./InfiniteHeights.Shop";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameOver extends cc.Component {

   @property(cc.Label)
   lbScore: cc.Label = null;

   @property(cc.Label)
   lbDiamond: cc.Label = null;

   @property(cc.Label)
   lbTime: cc.Label = null;

   @property(Ballon)
   nBallon: Ballon = null;

   @property(cc.Node)
   nUnLockBallon: cc.Node = null;
   index = 0;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        Global.unlockIndexBallon = JSON.parse(cc.sys.localStorage.getItem('unlockIndexBallon')) || Global.unlockIndexBallon;
        cc.sys.localStorage.setItem("scores", JSON.stringify(Global.dataScore));
        console.log("Global ", Global.unlockIndexBallon);
        GameView.instance.updateLbTime(this.lbTime);
        GameView.instance.updateLbDiamond(this.lbDiamond);
        GameView.instance.updateLbScore(this.lbScore);
        this.checkUnlockBallon();
    }

    onReplay() {
        GameView.instance.resetGame();
        this.node.destroy();
    }

    onHome() {
        GameView.instance.gameDestroy();
        cc.sys.localStorage.removeItem('selectedBallonIndex');
        Shop.instance.updateShop();
        GameManager.instance.updateRank(GameManager.instance.nListNodeRank);
        this.node.destroy();
    }

    checkUnlockBallon() {
    
        if (GameView.instance.unLockBallon) {
            this.nUnLockBallon.active = true;
            this.nBallon.setData(Global.unlockIndexBallon);
            cc.sys.localStorage.setItem('unlockIndexBallon', Global.unlockIndexBallon);
        } else {
            this.nUnLockBallon.active = false;
        }
    }
    start () {

    }

    // update (dt) {}
}
