// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BackGround from "./InfiniteHeights.BackGround";
import Ballon from "./InfiniteHeights.Ballon";
import obstacleManager from "./InfiniteHeights.ObstacleManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameView extends cc.Component {

    public static instance: GameView = null;
    @property(cc.Node)
    nObstacle: cc.Node = null;
    // @property(cc.Node)
    // nObstacle_2: cc.Node = null;
    @property(cc.Prefab)
    listPrfObstacle: cc.Prefab[] = [];
    @property(cc.Prefab)
    prfBackGround: cc.Prefab = null;
    @property(cc.Node)
    nBgGame: cc.Node = null;
    @property(cc.Prefab)
    prfBallon: cc.Prefab = null;
    @property(cc.Node)
    nBallon: cc.Node = null;
    @property(cc.Node)
    listBg: cc.Node[] = [];
    isFirstTouch = false;
    ballon = null;
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        
        GameView.instance = this;
        //this.createObstacle();
        //this.genObstacle_2();
        this.ballon = cc.instantiate(this.prfBallon).getComponent(Ballon).node
        this.ballon.y = -500;
        this.nBallon.addChild(this.ballon);
        this.genObstacle();
        this.node.on(cc.Node.EventType.TOUCH_START,this.onTouchStart, this);

       
    }

    start() {

    }

    createObstacle(node: cc.Node) {

        for (let i = 0; i < 2; i++) {
            let index = Math.floor(Math.random() * this.listPrfObstacle.length);
            let obstacle = cc.instantiate(this.listPrfObstacle[index]);
            let obstacleComponent = obstacle.getComponent(obstacleManager);
            if (obstacleComponent) {
                obstacle = obstacleComponent.node;
            }
            obstacle.y = -340 + i * 680;
            node.addChild(obstacle);
        }
    }

    genObstacle() {
        for(let i = 0; i < this.listBg.length; i++) {
            this.createObstacle(this.listBg[i]);
        }
    }
    onTouchStart() {
        this.startGame();
    }

    startGame() {
        if(!this.isFirstTouch) {
            this.isFirstTouch = true;
        }else {
            this.fall();
        }
    }

    fall() {
        // this.ballon.setPosition(this.ballon.position.x, this.ballon.position.y - 80,0);
        cc.tween(this.ballon)
        .by(0.2, { y: -80})
        .start();
    }
   

    gameOver() {
        console.log("Thua con me may roi ");
    }

    update(dt) {
        if(this.isFirstTouch) {
            this.ballon.setPosition(this.ballon.position.x,this.ballon.position.y + 180 * dt,0);
        }
    }
    // genBackGround() {
    //     console.log("sadasd");
    //     let bg = cc.instantiate(this.prfBackGround).getComponent(BackGround).node
    //     bg.y = 1900;

    //     this.nBgGame.addChild(bg);

    // }
}
