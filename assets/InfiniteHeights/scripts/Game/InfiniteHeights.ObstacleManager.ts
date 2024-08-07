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
    speedAngle = 100
    @property(cc.Node)
    listNode: cc.Node[] = [];
    angle = 0;
    private isMovingRight: boolean = true;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        if (this.idPrf == 1) {
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
            case 1:
                if (this.listNode.length >= 2) {
                    let node1 = this.listNode[0];
                    let node2 = this.listNode[1];

                    // Node 1 di chuyển
                    if (this.isMovingRight) {
                        node1.x += this.speed * dt;
                        if (node1.x >= 200) {
                            this.isMovingRight = false;
                        }
                    } else {
                        node1.x -= this.speed * dt;
                        if (node1.x <= -200) {
                            this.isMovingRight = true;
                        }
                    }

                    // Node 2 di chuyển ngược hướng với node 1
                    if (this.isMovingRight) {
                        node2.x -= this.speed * dt;
                        if (node2.x <= -200) {
                            this.isMovingRight = true;
                        }
                    } else {
                        node2.x += this.speed * dt;
                        if (node2.x >= 200) {
                            this.isMovingRight = false;
                        }
                    }
                }
                break;
            case 3:
                if (this.listNode.length >= 2) {
                    let node1 = this.listNode[0];
                    let node2 = this.listNode[1];

                    if (this.isMovingRight) {
                        node1.x += this.speed * dt;
                        node2.x += this.speed * dt; // Node 2 di chuyển cùng hướng với node 1
                        if (node1.x >= 200 || node2.x >= 200) {
                            this.isMovingRight = false;
                        }
                    } else {
                        node1.x -= this.speed * dt;
                        node2.x -= this.speed * dt; // Node 2 di chuyển cùng hướng với node 1
                        if (node1.x <= -200 || node2.x <= -200) {
                            this.isMovingRight = true;
                        }
                    }
                }
                break;
            case 4:
                if (this.listNode.length >= 3) {
                    let node1 = this.listNode[0];
                    let node2 = this.listNode[1];
                    let node3 = this.listNode[2];

                    if (this.isMovingRight) {
                        node1.x += this.speed * dt;
                        node2.x += this.speed * dt;
                        node3.x += this.speed * dt;
                        if (node3.x >= 300) {
                            this.isMovingRight = false;
                        }
                    } else {
                        node1.x -= this.speed * dt;
                        node2.x -= this.speed * dt;
                        node3.x -= this.speed * dt;
                        if (node1.x <= -300) {
                            this.isMovingRight = true;
                        }
                    }
                }
                break;
            case 5:
                if (this.listNode.length) {
                    let node = this.listNode[0];
                    if (node) {

                        if (this.isMovingRight) {
                            node.x += this.speed * dt;
                            if (node.x >= 200) {
                                this.isMovingRight = false;
                            }
                        } else {
                            node.x -= this.speed * dt;
                            if (node.x <= -200) {
                                this.isMovingRight = true;
                            }
                        }
                    }

                }
                break;
            case 6:
                if (this.listNode.length >= 2) {
                    let node1 = this.listNode[0];
                    let node2 = this.listNode[1];
    
                    // Tăng giá trị góc quay dựa trên thời gian và tốc độ
                    node1.angle += this.speedAngle * dt;
    
                    // Giảm giá trị góc quay của node2 để nó quay ngược lại
                    node2.angle -= this.speedAngle * dt;
    
                    // Giới hạn giá trị góc quay trong khoảng 0 đến 360 độ
                    if (node1.angle >= 360) {
                        node1.angle -= 360;
                    }
                    if (node2.angle >= 360) {
                        node2.angle -= 360;
                    }
    
                    if (node1.angle < 0) {
                        node1.angle += 360;
                    }
                    if (node2.angle < 0) {
                        node2.angle += 360;
                    }
                }
                break;
            default:
                break;
        }
    }



}


