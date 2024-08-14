// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Global } from "../InfiniteHeights.Global";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Shop extends cc.Component {

    public static instance: Shop = null;
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
        Shop.instance = this;
        Global.currentIndexBallon = JSON.parse(cc.sys.localStorage.getItem('currentIndexBallon')) || 0 ;
        console.log("currentIndexBallon ", Global.currentIndexBallon);
        Global.unlockIndexBallon = JSON.parse(cc.sys.localStorage.getItem('unlockIndexBallon')) || Global.unlockIndexBallon;
        this.effectBallon(this.nBallon_0.node)
        this.effectBallon(this.nBallon_1.node)
        this.effectBallon(this.nBallon_2.node)
        console.log("unLockIndex ", Global.unlockIndexBallon);
        console.log("indexBallon", Global.currentIndexBallon);
        this.updateShop()
    }

    start() {

    }

   
    effectBallon(node: cc.Node) {
        cc.tween(node)
        .repeatForever(
            cc.tween()
            .to(0.8, {angle:-10})
            .to(0.9, {angle: 10})
            .start()
        ).start()
    }
    onNext() {
        if (Global.currentIndexBallon < Global.unlockPoints.length - 1) {
            Global.currentIndexBallon++;
            this.updateShop();
            console.log("OnNext ", Global.currentIndexBallon);
            cc.sys.localStorage.setItem('currentIndexBallon', Global.currentIndexBallon);
        }else {
            this.nNext.active = false;
            console.log("sdasd")
        }
    }
    
    onPrev() {
        if (Global.currentIndexBallon > 0) {
            Global.currentIndexBallon--;
            this.updateShop();
            console.log("OnPrev ", Global.currentIndexBallon);
            cc.sys.localStorage.setItem('currentIndexBallon', Global.currentIndexBallon);
        }
    }

    updateShop() {
        // neu currentIndexBallon == 0 => an button Previous, Ballon 0
        // neu currentIndexBallon > 0 && < unlockIndexBallon => xu ly gi
        // neu currentIndexBallon == unlockIndexBallon =>an button Next, Ballon 2

        this.nBallon_1.spriteFrame = this.listSpfBallon[Global.currentIndexBallon]
        if (Global.currentIndexBallon === 0) {
            this.nPrev.active = false;
            this.nNext.active = false;
            this.nBallon_0.node.active = false; 
    
            if (Global.unlockIndexBallon > 0) {
                this.nBallon_2.node.active = true;
                this.nNext.active = true;
                this.nBallon_2.spriteFrame = this.listSpfBallon[Global.currentIndexBallon + 1];
            } else {
                this.nBallon_2.node.active = false;
            }
        } 


        else if (Global.currentIndexBallon === Global.unlockIndexBallon) {
            this.nPrev.active = true;   
            this.nNext.active = false;
            this.nBallon_0.node.active = true;
            this.nBallon_0.spriteFrame = this.listSpfBallon[Global.currentIndexBallon - 1];
            this.nBallon_2.node.active = false;
        } 
        else if (Global.currentIndexBallon > 0 && Global.currentIndexBallon < Global.unlockIndexBallon) {
            this.nPrev.active = true; 
            this.nNext.active = true;   
            this.nBallon_0.node.active = true;
            this.nBallon_2.node.active = true;
            this.nBallon_0.spriteFrame = this.listSpfBallon[Global.currentIndexBallon - 1];
            this.nBallon_2.spriteFrame = this.listSpfBallon[Global.currentIndexBallon + 1];
        }
    
    
        if (Global.currentIndexBallon > Global.unlockIndexBallon) {
            Global.currentIndexBallon = Global.unlockIndexBallon;
            this.updateShop();
        }
    }
    // update (dt) {}
}
