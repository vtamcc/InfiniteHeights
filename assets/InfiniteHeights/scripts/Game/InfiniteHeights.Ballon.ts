// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "../InfiniteHeights.GameManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Ballon extends cc.Component {

    @property(cc.Sprite)
    spBallon: cc.Sprite = null;
    id = 0;
    // LIFE-CYCLE CALLBACKS:
    isUnlock = false;
    onLoad () {
        this.EffectBallon();
    }

    EffectBallon() {
        cc.tween(this.node)
        .repeatForever(
            cc.tween()
            .to(0.8, {angle:-10})
            .to(0.9, {angle: 10})
            .start()
        ).start()
    }

    setData(id) {
        this.id = id;
        this.spBallon.spriteFrame = GameManager.instance.listSpfBallon[this.id];
    }

    start () {

    }

    // update (dt) {}
}
