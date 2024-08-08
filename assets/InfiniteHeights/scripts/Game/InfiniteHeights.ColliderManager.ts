import GameView from "./InfiniteHeights.GameView";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    onLoad() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
    }

    start () {

    }

    onCollisionEnter(other, self) {
        if (other.node.group === 'bongbay') {
            GameView.instance.gameOver(); // Gọi hàm gameOver từ GameView
        }
    }   
}
