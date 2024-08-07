// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BackGround from "./InfiniteHeights.BackGround";
import obstacleManager from "./InfiniteHeights.ObstacleManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameView extends cc.Component {

    public static instance: GameView = null;
    @property(cc.Node)
    nObstacle: cc.Node = null;
    @property(cc.Node)
    nObstacle_2: cc.Node = null;
    @property(cc.Prefab)
    listPrfObstacle: cc.Prefab[] = [];
    @property(cc.Prefab)
    prfBackGround: cc.Prefab = null;
    @property(cc.Node)
    nBgGame: cc.Node = null;

    isFirstTouch = false;
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        
        GameView.instance = this;
        this.test();
        this.genObstacle_2();
        this.node.on(cc.Node.EventType.TOUCH_START,this.onTouchBegan, this);
       
    }

    start() {

    }

    test() {
        for(let i = 0; i < 2; i++) {
            let test = cc.instantiate(this.listPrfObstacle[i]).getComponent(obstacleManager).node;
            test.y = 300 + i * 600;
            this.nObstacle.addChild(test);
        }
        
    }

    onTouchBegan() {
        this.isFirstTouch = true;
        console.log("sdasdasd")
    }

    genObstacle_2() {
        let obstracle = cc.instantiate(this.listPrfObstacle[5]).getComponent(obstacleManager).node;
        this.nObstacle_2.addChild(obstracle);
    }

    // genBackGround() {
    //     console.log("sadasd");
    //     let bg = cc.instantiate(this.prfBackGround).getComponent(BackGround).node
    //     bg.y = 1900;

    //     this.nBgGame.addChild(bg);

    // }
}
