// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {

    @property(cc.Prefab)
    prfGameView: cc.Prefab = null;

    start () {

    }


    clickPlay() {
        let gameView = cc.instantiate(this.prfGameView)
        this.node.addChild(gameView);
    }
    // update (dt) {}
}
