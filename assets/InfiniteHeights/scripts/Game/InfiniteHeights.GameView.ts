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
import Pause from "./InfiniteHeights.Pause";

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

    @property(cc.Prefab)
    prfPause: cc.Prefab = null;
    @property(cc.Node)
    hands: cc.Node = null;

    @property(cc.Label)
    lbTimeResume: cc.Label = null;
    time = 0;
    timeResume = 4;
    isFirstTouch = false;
    isGameOver = false;
    ballon = null;
    unLockBallon = false
    isCountDown = false;
    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        GameView.instance = this;
        //this.createObstacle();
        //this.genObstacle_2();
        Global.unlockIndexBallon = JSON.parse(cc.sys.localStorage.getItem('unlockIndexBallon')) || Global.unlockIndexBallon;
        console.log("index ", Global.unlockIndexBallon);
        Global.currentIndexBallon = JSON.parse(cc.sys.localStorage.getItem('currentIndexBallon')) || 0;
        this.ballon = cc.instantiate(this.prfBallon).getComponent(Ballon)
        this.ballon.node.y = -420;
        this.ballon.setData(Global.currentIndexBallon)
        this.nBallon.addChild(this.ballon.node);
        this.genObstacle();
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.handsDestroy()
        this.resetGame();

    }

    start() {

    }

    startTimeResume() {
        this.lbTimeResume.node.active = true;
        this.isCountDown = true;
        this.schedule(this.updateTimeResume,1);
    }

    updateTimeResume() {
        if(this.timeResume > 0) {
            this.timeResume--;
            this.lbTimeResume.string = this.timeResume + " ";
        }else {
            this.isCountDown = false;
            this.isGameOver = false;
            this.lbTimeResume.node.active = false;
        }
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
        for (let i = 0; i < 3; i++) {
            this.createObstacle(this.listBg[i]);
        }
    }
    onTouchStart() {
        this.startGame();
    }

    startGame() {
        if (!this.isFirstTouch) {
            this.isFirstTouch = true;
            this.schedule(this.updateTime, 1);
            this.handsDestroy();
        } else {
            this.fall();
           
        }
    }

    handsDestroy() {
        if (!this.isFirstTouch) return;

        this.scheduleOnce(() => {
            if (!this.isGameOver) { // Chỉ thực hiện khi game không bị tạm dừng
                this.hands.active = false;
            }
        }, 3.5);
    }

    fall() {
        if (this.isGameOver) return;
        cc.tween(this.ballon.node)
            .by(0.2, { y: -80 })
            .start();
    }


    updateTime() {
        if (this.isFirstTouch && !this.isGameOver) {
            this.time += 1;
            this.updateLbTime(this.lbTime);
            this.updateLbScore(this.lbScore);
        }
    }
    updateLbDiamond(lbDiamond) {
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
        this.ballon.node.active = true;
        this.ballon.node.y = -420;
        cc.director.getCollisionManager().enabled = true;
        this.isFirstTouch = false;
        this.isGameOver = false;
        this.listBg.forEach(value => {
            value.removeAllChildren();
        })
        this.hands.active = true;
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
        this.hands.active = false
        let gameOver = cc.instantiate(this.prfGameOver).getComponent(GameOver).node
        this.unschedule(this.updateTime);
        cc.tween(this.ballon).stop();
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        cc.director.getCollisionManager().enabled = false;
        let scores = this.time + Global.diaMond;
        this.unLockBallon = false
        let MAX_SCORES = 10;

        Global.dataScore.push(scores);
        Global.dataScore.sort((a, b) => {
            return a > b ? -1 : 1;
        });

        if (Global.dataScore.length > MAX_SCORES) {
            Global.dataScore = Global.dataScore.slice(0, MAX_SCORES);
        }
        console.log('save', Global.dataScore)
        cc.sys.localStorage.setItem('scores', JSON.stringify(Global.dataScore));
        if (scores >= Global.unlockPoints[Global.unlockIndexBallon + 1]) {
            Global.unlockIndexBallon++;
            this.unLockBallon = true;
            cc.sys.localStorage.setItem('unlockIndexBallon', Global.unlockIndexBallon);
            console.log("unLockIndex ", Global.unlockIndexBallon);
        }
        this.ballon.node.active = false;
        this.scheduleOnce(() => {
            this.node.addChild(gameOver);
        }, 0.3)


    }

    pauseGame() {
        this.isGameOver = true;
        let pauseGame = cc.instantiate(this.prfPause).getComponent(Pause)
        this.node.addChild(pauseGame.node);
    }

    gameDestroy() {
        this.node.destroy();
    }
    update(dt) {
        if (this.isGameOver) return;
        if (this.isFirstTouch) {
            this.ballon.node.setPosition(this.ballon.node.position.x, this.ballon.node.position.y + 180 * dt, 0);
        }
    }
}
