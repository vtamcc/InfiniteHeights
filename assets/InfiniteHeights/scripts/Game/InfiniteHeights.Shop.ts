// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Global } from "../InfiniteHeights.Global";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NameGame_Shop extends cc.Component {

    @property(cc.SpriteFrame)
    listSpfBallon: cc.SpriteFrame[] = [];

    @property(cc.Sprite)
    nBallon_0: cc.Sprite = null;

    @property(cc.Sprite)
    nBallon_1: cc.Sprite = null;

    @property(cc.Sprite)
    nBallon_2: cc.Sprite = null;

    @property(cc.Node)
    nNext: cc.Node = null;

    @property(cc.Node)
    nPrev: cc.Node = null;

    onLoad() {
        // index ballon hien thi
        // index ballon dc mo khoa
        // Global.currentIndexBallon = JSON.parse(cc.sys.localStorage.getItem('currentIndex')) || Global.currentIndexBallon;
        Global.unlockIndexBallon = JSON.parse(cc.sys.localStorage.getItem('unlockIndexBallon')) || Global.unlockIndexBallon;

        // console.log("currentIndexBallon ", Global.currentIndexBallon);
        console.log("unLockIndex ", Global.unlockIndexBallon);
        this.updateShop()
    }

    start() {

    }

    onNext() {
        Global.currentIndexBallon++;
        console.log("OnNext ", Global.currentIndexBallon);
        if (Global.currentIndexBallon > Global.unlockIndexBallon)
            Global.currentIndexBallon = Global.unlockIndexBallon;
        this.updateShop()
    }

    onPrev() {
        Global.currentIndexBallon--;
        console.log("OnPrev ", Global.currentIndexBallon);
        if (Global.currentIndexBallon < 0)
            Global.currentIndexBallon = 0;

        this.updateShop()
    }

    updateShop() {
        // neu currentIndexBallon == 0 => an button Previous, Ballon 0
        // neu currentIndexBallon > 0 && < unlockIndexBallon => xu ly gi
        // neu currentIndexBallon == unlockIndexBallon =>an button Next, Ballon 2

        this.nBallon_1.spriteFrame = this.listSpfBallon[Global.currentIndexBallon]

        if (Global.currentIndexBallon === 0) {
            this.nPrev.active = false;
            this.nBallon_0.node.active = false;
            console.log("if 1")
        }

        if (Global.currentIndexBallon > 0 && Global.currentIndexBallon < Global.unlockIndexBallon ) {
            this.nPrev.active = true;
            this.nBallon_0.node.active = true;
            this.nNext.active = true;
            this.nBallon_2.node.active = true;

            this.nBallon_0.spriteFrame = this.listSpfBallon[Global.currentIndexBallon - 1]
            this.nBallon_2.spriteFrame = this.listSpfBallon[Global.currentIndexBallon + 1]
            console.log("if 2")
        }

        if (Global.currentIndexBallon === Global.unlockIndexBallon ) {
            this.nNext.active = false;
            this.nBallon_2.node.active = false;
            console.log("if 3")
        }

    }
    // update (dt) {}
}
