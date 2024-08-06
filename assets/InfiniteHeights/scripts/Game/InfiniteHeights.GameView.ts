// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import obstacleManager from "./InfiniteHeights.ObstacleManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameView extends cc.Component {

    @property(cc.Node)
    nObstacle: cc.Node = null;

    @property(cc.Prefab)
    listPrfObstacle: cc.Prefab [] = [];

    @property(cc.Node)
    nbg1: cc.Node = null;
 
    @property(cc.Node)
    nbg2: cc.Node = null;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.test();
    }

    start () {

    }

    test(){
        let test = cc.instantiate(this.listPrfObstacle[0]).getComponent(obstacleManager);
        this.nObstacle.addChild(test.node);
    }
    update (dt) {
        this.nbg1.y = this.nbg1.y - 1;
        this.nbg2.y = this.nbg2.y - 1;
        if(this.nbg1.y <= -this.nbg1.height) {
            this.nbg1.y = this.nbg2.y + this.nbg1.height;
        }

        if(this.nbg2. y <= -this.nbg1.height) {
            this.nbg2.y = this.nbg1.y + this.nbg1.height;
        }

    }
}
