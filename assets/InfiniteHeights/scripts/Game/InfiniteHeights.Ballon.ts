// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Ballon extends cc.Component {

    @property(cc.Sprite)
    spBallon: cc.Sprite = null;

    // LIFE-CYCLE CALLBACKS:

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
    setData() {
        
    }
    start () {

    }

    // update (dt) {}
}
