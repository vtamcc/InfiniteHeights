// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Ballon from "./Game/InfiniteHeights.Ballon";
import { Global } from "./InfiniteHeights.Global";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {

    public static instance: GameManager = null;
    @property(cc.Prefab)
    prfGameView: cc.Prefab = null;

    @property(cc.Node)
    nListNodeRank: cc.Node[] = [];

    @property(cc.Label)
    lbtest: cc.Label = null;

    @property(cc.SpriteFrame)
    listSpfBallon: cc.SpriteFrame[] = [];

    @property(cc.PageView)
    pageView: cc.PageView = null;

    @property(cc.Prefab)
    ballonPrefabs: cc.Prefab = null;

    @property(cc.Node)
    nListBallon: cc.Node[] = [];
    indexBallon = 1;
    onLoad() {
        GameManager.instance = this;
        this.updateRank(this.nListNodeRank);
        Global.dataBallon = JSON.parse(cc.sys.localStorage.getItem('dataBallons')) || Global.dataBallon;
        Global.currentIndex = JSON.parse(cc.sys.localStorage.getItem('indexBallon')) || 1;
        this.updateBallon();
        console.log("currentIndex", Global.currentIndex);
        console.log("data ", Global.dataBallon);
    }
    start() {

    }


    updateBallon() {
        this.nListBallon[1].active = true;
        this.nListBallon[1].getComponent(cc.Sprite).spriteFrame = this.listSpfBallon[0];
        let leftIndex = (Global.currentIndex + 2) % Global.dataBallon.length;
        if (leftIndex !== Global.currentIndex && Global.dataBallon[leftIndex].isUnlock) {
            this.nListBallon[0].active = true;
            this.nListBallon[0].getComponent(cc.Sprite).spriteFrame = this.listSpfBallon[leftIndex];
        } else {
            this.nListBallon[0].active = false;
        }
        let rightIndex = (Global.currentIndex) % Global.dataBallon.length;
        console.log("rightIndex ", rightIndex);
        console.log("rightData", Global.dataBallon[rightIndex]);
        if (Global.dataBallon[rightIndex].isUnlock) {
            this.nListBallon[2].active = true;
            this.nListBallon[2].getComponent(cc.Sprite).spriteFrame = this.listSpfBallon[rightIndex];
        } else {
            this.nListBallon[2].active = false;
        }
    }


    updateRank(listNodeLabel: cc.Node[]) {
        Global.dataScore = JSON.parse(cc.sys.localStorage.getItem("scores")) || [];
        console.log("Diem luu ne ", Global.dataScore);
        if (Global.dataScore.length === 0) {
            //console.log("Mảng scores rỗng, ẩn tất cả các node.");
            listNodeLabel.forEach(node => {
                node.active = false;
            });
        } else {
            listNodeLabel.forEach((node, index) => {
                //console.log("index ", index);
                //console.log("diem ", Global.dataScore)
                if (index < Global.dataScore.length) {
                    node.active = true;
                    node.getComponent(cc.Label).string = Global.dataScore[index] + ' ';
                } else {
                    node.active = false;
                }
            });
        }


    }

    removeCache() {
        cc.sys.localStorage.clear();
    }


    clickPlay() {
        let gameView = cc.instantiate(this.prfGameView)
        this.node.addChild(gameView);
    }
    // update (dt) {}
}
