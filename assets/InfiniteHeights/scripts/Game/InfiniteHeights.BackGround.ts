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

    onLoad () {
        
    }

    start () {

    }

    update(dt) {
        if(!GameView.instance.isFirstTouch) {
            return;
        }
            
        if(this.node.y <= -1280) {
            this.resetPos();
         
            this.destroyObstacle();
            GameView.instance.createObstacle(this.node);
            if(this.idBg == 3) {
                this.node.destroy();
            }
        }


       

        this.node.y -= 2;
    }

    resetPos() {
        this.node.y = 2560;
        this.isAdd = false;
    }

    destroyObstacle() {
        for(let i = 0; i < this.node.childrenCount; i++) {
            this.node.children[i].destroy();
        }
    }
}
