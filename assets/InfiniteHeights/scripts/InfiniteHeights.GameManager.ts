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
        //this.updateActive(Global.score);
        
    }
    start() {

    }
    populatePages() {

        //this.updatePageView();

    }

    onNextPage() {

    }
    updateRank(listNodeLabel: cc.Node[]) {
        Global.dataScore = JSON.parse(cc.sys.localStorage.getItem("scores")) || [];
        console.log("Diem luu ne ", Global.dataScore);
        if (Global.dataScore.length === 0) {
            console.log("Mảng scores rỗng, ẩn tất cả các node.");
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
