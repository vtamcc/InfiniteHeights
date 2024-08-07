// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameView from "./InfiniteHeights.GameView";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BackGround extends cc.Component {

   isAdd = false;
   
   @property
   idBg: number = 0;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    update(dt) {
        if(!GameView.instance.isFirstTouch) {
            return;
        }
            
        if(this.node.y <= -1600) {
            this.resetPos();

            if(this.idBg == 3) {
                this.node.destroy();
            }
        }


        if(!this.isAdd) {
            if(this.node.y === 640) {
                console.log("sadasd")
                this.isAdd = true;
            }
        }

        this.node.y -= 2;
    }

    resetPos() {
        this.node.y = 1280;
    }
}
