// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class obstacleManager extends cc.Component {

    @property
    idPrf: number = 0;
    speed: number = 150;
    @property(cc.Node)
    listNode: cc.Node[] = [];
    private isMovingRight: boolean = true;
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        if(this.idPrf == 1) {
            console.log("Node: ", this.listNode);
        }
    }

    start() {

    }

    update(dt) {
        switch (this.idPrf) {
            case 0:
                let node = this.listNode[0];
                if (node) {
                    if (this.isMovingRight) {
                        node.x += this.speed * dt;
                        // Nếu node chạm biên phải của màn hình, thay đổi hướng di chuyển
                        if (node.x >= 200) {
                            this.isMovingRight = false;
                        }
                    } else {
                        node.x -= this.speed * dt;
                        // Nếu node chạm biên trái của màn hình, thay đổi hướng di chuyển
                        if (node.x <= -200) {
                            this.isMovingRight = true;
                        }
                    }
                }
                break;

            default:
                break;
        }
    }
}
