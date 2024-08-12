// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "../InfiniteHeights.GameManager";
import { Global } from "../InfiniteHeights.Global";
import BackGround from "./InfiniteHeights.BackGround";
import Ballon from "./InfiniteHeights.Ballon";
import GameOver from "./InfiniteHeights.GameOver";
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

    @property(cc.Label)
    lbDiamond: cc.Label = null;

    @property(cc.Label)
    lbTime: cc.Label = null;

    @property(cc.Label)
    lbScore: cc.Label = null;
    @property(cc.Prefab)
    prfGameOver: cc.Prefab = null;
    time = 0;
    isFirstTouch = false;
    isGameOver = false;
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
        Global.currentIndex = JSON.parse(cc.sys.localStorage.getItem("indexBallon")) || 1;
        console.log("index ", Global.currentIndex);
        this.resetGame();
       
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
        for(let i = 0; i < 3; i++) {
            this.createObstacle(this.listBg[i]);
        }
    }
    onTouchStart() {
        this.startGame();
    }

    startGame() {
        if(!this.isFirstTouch) {
            this.isFirstTouch = true;
            this.schedule(this.updateTime, 1);
        }else {
            this.fall();
         
        }
    }

    fall() {
        // this.ballon.setPosition(this.ballon.position.x, this.ballon.position.y - 80,0);
        if(this.isGameOver) return;
        cc.tween(this.ballon)
        .by(0.2, { y: -80})
        .start();
    }
   

    updateTime() {
        if(this.isFirstTouch && !this.isGameOver) {
            this.time += 1;
            this.updateLbTime(this.lbTime);
            this.updateLbScore(this.lbScore);
        }
    }
    updateLbDiamond(lbDiamond) {
        //if (this.isGameOver) return;
        lbDiamond.string = Global.diaMond + ' ';
        this.updateLbScore(this.lbScore);
    }

    updateLbTime(lbTime: cc.Label) {
        lbTime.string = this.time + ' ';
    }

    updateLbScore(lbScore: cc.Label) {
        lbScore.string = this.time + Global.diaMond + ' ';
    }

    resetGame() {
        Global.diaMond = 0;
        Global.score = 0;
        this.time = 0;
        this.updateLbScore(this.lbScore);
        this.updateLbTime(this.lbTime);
        this.updateLbDiamond(this.lbDiamond);
        this.ballon.y = -500;
        cc.director.getCollisionManager().enabled = true;
        this.isFirstTouch = false;
        this.isGameOver = false;
        this.listBg.forEach(value => {
            value.removeAllChildren();
        })
        this.listBg[0].y = 3120;
        this.listBg[1].y = 1840;
        this.listBg[2].y = 560;
        this.listBg[3].y = -720;
        this.listBg[3].active = true;
        this.genObstacle();
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    }

    gameOver() {
        this.isGameOver = true;
        let gameOver = cc.instantiate(this.prfGameOver).getComponent(GameOver).node
        this.node.addChild(gameOver);
        this.unschedule(this.updateTime);
        cc.tween(this.ballon).stop();
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        cc.director.getCollisionManager().enabled = false;
        let scores = this.time + Global.diaMond;
        Global.dataScore.push(scores);
        Global.dataScore.sort((a,b) => {
            return a > b ? - 1 : 0;
        });
        console.log('save',Global.dataScore)
        cc.sys.localStorage.setItem('scores', JSON.stringify(Global.dataScore));    
        //this.checkAndUnlockBalloons(scores);
        if(Global.currentIndex < Global.dataBallon.length) {
            if(scores >= Global.dataBallon[Global.currentIndex].score) {
                Global.dataBallon[Global.currentIndex].isUnlock = true;
                cc.sys.localStorage.setItem('dataBallons', JSON.stringify(Global.dataBallon));
                
                Global.currentIndex++;
                cc.sys.localStorage.setItem('indexBallon', JSON.stringify(Global.currentIndex));
               
                console.log("indexxxx ", Global.currentIndex);
            }
        }
       

        //Global.ballon.forEach()
    }

    // checkAndUnlockBalloons(scores: number) {
    //     for (let i = Global.currentIndex; i < Global.dataBallon.length; i++) {
    //         if (scores >= Global.dataBallon[i].score && !Global.dataBallon[i].isUnlock) {
    //             Global.dataBallon[i].isUnlock = true;
    //             Global.currentIndex = i + 1;
    //             cc.sys.localStorage.setItem('dataBallon', JSON.stringify(Global.dataBallon));
    //             cc.sys.localStorage.setItem('currentIndex', Global.currentIndex.toString());
    //             break;
    //         }
    //     }
    // }
    gameDestroy() {
        this.node.destroy();
    }
    update(dt) {

        if(this.isGameOver) return;


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
