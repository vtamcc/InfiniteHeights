import { Global } from "../InfiniteHeights.Global";
import GameView from "./InfiniteHeights.GameView";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Collider extends cc.Component {

    onLoad() {
        cc.director.getCollisionManager().enabled = true;
    }

    start () {

    }

    onCollisionEnter(other, self) {
        if (other.tag == 2) {
            GameView.instance.gameOver();
        }
    
        if (other.tag == 1 ) {
            Global.diaMond++;
            GameView.instance.updateLbDiamond(GameView.instance.lbDiamond);
            other.node.destroy();
        }
    }   
}
