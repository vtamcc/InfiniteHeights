window.__require = function t(e, o, n) {
function i(a, r) {
if (!o[a]) {
if (!e[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!e[c]) {
var s = "function" == typeof __require && __require;
if (!r && s) return s(c, !0);
if (l) return l(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var p = o[a] = {
exports: {}
};
e[a][0].call(p.exports, function(t) {
return i(e[a][1][t] || t);
}, p, p.exports, t, e, o, n);
}
return o[a].exports;
}
for (var l = "function" == typeof __require && __require, a = 0; a < n.length; a++) i(n[a]);
return i;
}({
"InfiniteHeights.BackGround": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4f45eyNC7RIgrowSh3ol9s9", "InfiniteHeights.BackGround");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), l = this && this.__decorate || function(t, e, o, n) {
var i, l = arguments.length, a = l < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (a = (l < 3 ? i(a) : l > 3 ? i(e, o, a) : i(e, o)) || a);
return l > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./InfiniteHeights.GameView"), r = cc._decorator, c = r.ccclass, s = r.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.isAdd = !1;
e.idBg = 0;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.start = function() {};
e.prototype.update = function() {
if (a.default.instance.isFirstTouch && !a.default.instance.isGameOver) {
if (this.node.y <= -1280) {
this.resetPos();
this.destroyObstacle();
a.default.instance.createObstacle(this.node);
3 == this.idBg && (this.node.active = !1);
}
this.node.y -= 2;
}
};
e.prototype.resetPos = function() {
this.node.y = 2560;
this.isAdd = !1;
};
e.prototype.destroyObstacle = function() {
for (var t = 0; t < this.node.childrenCount; t++) this.node.children[t].destroy();
};
l([ s ], e.prototype, "idBg", void 0);
return l([ c ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./InfiniteHeights.GameView": "InfiniteHeights.GameView"
} ],
"InfiniteHeights.Ballon": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8ae60F2FytPoYV4kQFV4eRt", "InfiniteHeights.Ballon");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), l = this && this.__decorate || function(t, e, o, n) {
var i, l = arguments.length, a = l < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (a = (l < 3 ? i(a) : l > 3 ? i(e, o, a) : i(e, o)) || a);
return l > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../InfiniteHeights.GameManager"), r = cc._decorator, c = r.ccclass, s = r.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.spBallon = null;
e.id = 0;
e.isUnlock = !1;
return e;
}
e.prototype.onLoad = function() {
this.EffectBallon();
};
e.prototype.EffectBallon = function() {
cc.tween(this.node).repeatForever(cc.tween().to(.8, {
angle: -10
}).to(.9, {
angle: 10
}).start()).start();
};
e.prototype.setData = function(t) {
this.id = t;
this.spBallon.spriteFrame = a.default.instance.listSpfBallon[this.id];
};
e.prototype.start = function() {};
l([ s(cc.Sprite) ], e.prototype, "spBallon", void 0);
return l([ c ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../InfiniteHeights.GameManager": "InfiniteHeights.GameManager"
} ],
"InfiniteHeights.ColliderManager": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ae8414UvFJOtK1XM2yY+K4f", "InfiniteHeights.ColliderManager");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), l = this && this.__decorate || function(t, e, o, n) {
var i, l = arguments.length, a = l < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (a = (l < 3 ? i(a) : l > 3 ? i(e, o, a) : i(e, o)) || a);
return l > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../InfiniteHeights.Global"), r = t("./InfiniteHeights.GameView"), c = cc._decorator, s = c.ccclass, p = (c.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
cc.director.getCollisionManager().enabled = !0;
};
e.prototype.start = function() {};
e.prototype.onCollisionEnter = function(t) {
2 == t.tag && r.default.instance.gameOver();
if (1 == t.tag) {
a.Global.diaMond++;
r.default.instance.updateLbDiamond(r.default.instance.lbDiamond);
t.node.destroy();
}
};
return l([ s ], e);
}(cc.Component));
o.default = p;
cc._RF.pop();
}, {
"../InfiniteHeights.Global": "InfiniteHeights.Global",
"./InfiniteHeights.GameView": "InfiniteHeights.GameView"
} ],
"InfiniteHeights.GameManager": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6be9dHncelMS7oOeeLh1jsq", "InfiniteHeights.GameManager");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), l = this && this.__decorate || function(t, e, o, n) {
var i, l = arguments.length, a = l < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (a = (l < 3 ? i(a) : l > 3 ? i(e, o, a) : i(e, o)) || a);
return l > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./InfiniteHeights.Global"), r = cc._decorator, c = r.ccclass, s = r.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prfGameView = null;
e.nListNodeRank = [];
e.lbtest = null;
e.listSpfBallon = [];
e.pageView = null;
e.ballonPrefabs = null;
e.nListBallon = [];
e.indexBallon = 1;
e.isClickNext = 0;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
this.updateRank(this.nListNodeRank);
};
e.prototype.start = function() {};
e.prototype.updateRank = function(t) {
a.Global.dataScore = JSON.parse(cc.sys.localStorage.getItem("scores")) || [];
console.log("Diem luu ne ", a.Global.dataScore);
0 === a.Global.dataScore.length ? t.forEach(function(t) {
t.active = !1;
}) : t.forEach(function(t, e) {
if (e < a.Global.dataScore.length) {
t.active = !0;
t.getComponent(cc.Label).string = a.Global.dataScore[e] + " ";
} else t.active = !1;
});
};
e.prototype.removeCache = function() {
cc.sys.localStorage.clear();
};
e.prototype.clickPlay = function() {
var t = cc.instantiate(this.prfGameView);
this.node.addChild(t);
};
var o;
e.instance = null;
l([ s(cc.Prefab) ], e.prototype, "prfGameView", void 0);
l([ s(cc.Node) ], e.prototype, "nListNodeRank", void 0);
l([ s(cc.Label) ], e.prototype, "lbtest", void 0);
l([ s(cc.SpriteFrame) ], e.prototype, "listSpfBallon", void 0);
l([ s(cc.PageView) ], e.prototype, "pageView", void 0);
l([ s(cc.Prefab) ], e.prototype, "ballonPrefabs", void 0);
l([ s(cc.Node) ], e.prototype, "nListBallon", void 0);
return o = l([ c ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./InfiniteHeights.Global": "InfiniteHeights.Global"
} ],
"InfiniteHeights.GameOver": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7dd9b22A4xH4ZESrYzGpN6o", "InfiniteHeights.GameOver");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), l = this && this.__decorate || function(t, e, o, n) {
var i, l = arguments.length, a = l < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (a = (l < 3 ? i(a) : l > 3 ? i(e, o, a) : i(e, o)) || a);
return l > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../InfiniteHeights.GameManager"), r = t("../InfiniteHeights.Global"), c = t("./InfiniteHeights.Ballon"), s = t("./InfiniteHeights.GameView"), p = t("./InfiniteHeights.Shop"), h = cc._decorator, d = h.ccclass, f = h.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbScore = null;
e.lbDiamond = null;
e.lbTime = null;
e.nBallon = null;
e.nUnLockBallon = null;
e.index = 0;
return e;
}
e.prototype.onLoad = function() {
r.Global.unlockIndexBallon = JSON.parse(cc.sys.localStorage.getItem("unlockIndexBallon")) || r.Global.unlockIndexBallon;
cc.sys.localStorage.setItem("scores", JSON.stringify(r.Global.dataScore));
console.log("Global ", r.Global.unlockIndexBallon);
s.default.instance.updateLbTime(this.lbTime);
s.default.instance.updateLbDiamond(this.lbDiamond);
s.default.instance.updateLbScore(this.lbScore);
this.checkUnlockBallon();
};
e.prototype.onReplay = function() {
s.default.instance.resetGame();
this.node.destroy();
};
e.prototype.onHome = function() {
s.default.instance.gameDestroy();
cc.sys.localStorage.removeItem("selectedBallonIndex");
p.default.instance.updateShop();
a.default.instance.updateRank(a.default.instance.nListNodeRank);
this.node.destroy();
};
e.prototype.checkUnlockBallon = function() {
if (s.default.instance.unLockBallon) {
this.nUnLockBallon.active = !0;
this.nBallon.setData(r.Global.unlockIndexBallon);
cc.sys.localStorage.setItem("unlockIndexBallon", r.Global.unlockIndexBallon);
} else this.nUnLockBallon.active = !1;
};
e.prototype.start = function() {};
l([ f(cc.Label) ], e.prototype, "lbScore", void 0);
l([ f(cc.Label) ], e.prototype, "lbDiamond", void 0);
l([ f(cc.Label) ], e.prototype, "lbTime", void 0);
l([ f(c.default) ], e.prototype, "nBallon", void 0);
l([ f(cc.Node) ], e.prototype, "nUnLockBallon", void 0);
return l([ d ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../InfiniteHeights.GameManager": "InfiniteHeights.GameManager",
"../InfiniteHeights.Global": "InfiniteHeights.Global",
"./InfiniteHeights.Ballon": "InfiniteHeights.Ballon",
"./InfiniteHeights.GameView": "InfiniteHeights.GameView",
"./InfiniteHeights.Shop": "InfiniteHeights.Shop"
} ],
"InfiniteHeights.GameView": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b6dd7aYqLJCY7gZHiWV6nKt", "InfiniteHeights.GameView");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), l = this && this.__decorate || function(t, e, o, n) {
var i, l = arguments.length, a = l < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (a = (l < 3 ? i(a) : l > 3 ? i(e, o, a) : i(e, o)) || a);
return l > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../InfiniteHeights.Global"), r = t("./InfiniteHeights.Ballon"), c = t("./InfiniteHeights.GameOver"), s = t("./InfiniteHeights.ObstacleManager"), p = cc._decorator, h = p.ccclass, d = p.property, f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nObstacle = null;
e.listPrfObstacle = [];
e.prfBackGround = null;
e.nBgGame = null;
e.prfBallon = null;
e.nBallon = null;
e.listBg = [];
e.lbDiamond = null;
e.lbTime = null;
e.lbScore = null;
e.prfGameOver = null;
e.time = 0;
e.isFirstTouch = !1;
e.isGameOver = !1;
e.ballon = null;
e.unLockBallon = !1;
e.isScoreAdded = !1;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
a.Global.unlockIndexBallon = JSON.parse(cc.sys.localStorage.getItem("unlockIndexBallon")) || a.Global.unlockIndexBallon;
console.log("index ", a.Global.unlockIndexBallon);
a.Global.currentIndexBallon = JSON.parse(cc.sys.localStorage.getItem("currentIndexBallon")) || 0;
this.ballon = cc.instantiate(this.prfBallon).getComponent(r.default);
this.ballon.node.y = -500;
this.ballon.setData(a.Global.currentIndexBallon);
this.nBallon.addChild(this.ballon.node);
this.genObstacle();
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.resetGame();
};
e.prototype.start = function() {};
e.prototype.createObstacle = function(t) {
for (var e = 0; e < 2; e++) {
var o = Math.floor(Math.random() * this.listPrfObstacle.length), n = cc.instantiate(this.listPrfObstacle[o]), i = n.getComponent(s.default);
i && (n = i.node);
n.y = 680 * e - 340;
t.addChild(n);
}
};
e.prototype.genObstacle = function() {
for (var t = 0; t < 3; t++) this.createObstacle(this.listBg[t]);
};
e.prototype.onTouchStart = function() {
this.startGame();
};
e.prototype.startGame = function() {
if (this.isFirstTouch) this.fall(); else {
this.isFirstTouch = !0;
this.schedule(this.updateTime, 1);
}
};
e.prototype.fall = function() {
this.isGameOver || cc.tween(this.ballon.node).by(.2, {
y: -80
}).start();
};
e.prototype.updateTime = function() {
if (this.isFirstTouch && !this.isGameOver) {
this.time += 1;
this.updateLbTime(this.lbTime);
this.updateLbScore(this.lbScore);
}
};
e.prototype.updateLbDiamond = function(t) {
t.string = a.Global.diaMond + " ";
this.updateLbScore(this.lbScore);
};
e.prototype.updateLbTime = function(t) {
t.string = this.time + " ";
};
e.prototype.updateLbScore = function(t) {
t.string = this.time + a.Global.diaMond + " ";
};
e.prototype.resetGame = function() {
this.isScoreAdded = !1;
a.Global.diaMond = 0;
a.Global.score = 0;
this.time = 0;
this.updateLbScore(this.lbScore);
this.updateLbTime(this.lbTime);
this.updateLbDiamond(this.lbDiamond);
this.ballon.node.active = !0;
this.ballon.node.y = -500;
cc.director.getCollisionManager().enabled = !0;
this.isFirstTouch = !1;
this.isGameOver = !1;
this.listBg.forEach(function(t) {
t.removeAllChildren();
});
this.listBg[0].y = 3120;
this.listBg[1].y = 1840;
this.listBg[2].y = 560;
this.listBg[3].y = -720;
this.listBg[3].active = !0;
this.genObstacle();
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
};
e.prototype.gameOver = function() {
var t = this;
if (!this.isScoreAdded) {
this.isGameOver = !0;
var e = cc.instantiate(this.prfGameOver).getComponent(c.default).node;
this.unschedule(this.updateTime);
cc.tween(this.ballon).stop();
this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
cc.director.getCollisionManager().enabled = !1;
var o = this.time + a.Global.diaMond;
this.unLockBallon = !1;
a.Global.dataScore.push(o);
a.Global.dataScore.push(o);
a.Global.dataScore.sort(function(t, e) {
return t > e ? -1 : 1;
});
a.Global.dataScore.length > 10 && (a.Global.dataScore = a.Global.dataScore.slice(0, 10));
console.log("save", a.Global.dataScore);
cc.sys.localStorage.setItem("scores", JSON.stringify(a.Global.dataScore));
if (o >= a.Global.unlockPoints[a.Global.unlockIndexBallon + 1]) {
a.Global.unlockIndexBallon++;
this.unLockBallon = !0;
cc.sys.localStorage.setItem("unlockIndexBallon", a.Global.unlockIndexBallon);
console.log("unLockIndex ", a.Global.unlockIndexBallon);
}
this.isScoreAdded = !0;
this.ballon.node.active = !1;
this.scheduleOnce(function() {
t.node.addChild(e);
}, .3);
}
};
e.prototype.gameDestroy = function() {
this.node.destroy();
};
e.prototype.update = function(t) {
this.isGameOver || this.isFirstTouch && this.ballon.node.setPosition(this.ballon.node.position.x, this.ballon.node.position.y + 180 * t, 0);
};
var o;
e.instance = null;
l([ d(cc.Node) ], e.prototype, "nObstacle", void 0);
l([ d(cc.Prefab) ], e.prototype, "listPrfObstacle", void 0);
l([ d(cc.Prefab) ], e.prototype, "prfBackGround", void 0);
l([ d(cc.Node) ], e.prototype, "nBgGame", void 0);
l([ d(cc.Prefab) ], e.prototype, "prfBallon", void 0);
l([ d(cc.Node) ], e.prototype, "nBallon", void 0);
l([ d(cc.Node) ], e.prototype, "listBg", void 0);
l([ d(cc.Label) ], e.prototype, "lbDiamond", void 0);
l([ d(cc.Label) ], e.prototype, "lbTime", void 0);
l([ d(cc.Label) ], e.prototype, "lbScore", void 0);
l([ d(cc.Prefab) ], e.prototype, "prfGameOver", void 0);
return o = l([ h ], e);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"../InfiniteHeights.Global": "InfiniteHeights.Global",
"./InfiniteHeights.Ballon": "InfiniteHeights.Ballon",
"./InfiniteHeights.GameOver": "InfiniteHeights.GameOver",
"./InfiniteHeights.ObstacleManager": "InfiniteHeights.ObstacleManager"
} ],
"InfiniteHeights.Global": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8ee72/5AWBJWZj8nXFDg5Ed", "InfiniteHeights.Global");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Global = void 0;
var n = function() {
function t() {}
t.diaMond = 0;
t.score = 0;
t.dataScore = [];
t.unlockPoints = [ 0, 10, 20, 30, 40, 50, 60, 70, 80 ];
t.currentIndexBallon = 0;
t.unlockIndexBallon = 0;
return t;
}();
o.Global = n;
cc._RF.pop();
}, {} ],
"InfiniteHeights.ObstacleManager": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "85eb2mvb8lFEJXHCj+bPAXM", "InfiniteHeights.ObstacleManager");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), l = this && this.__decorate || function(t, e, o, n) {
var i, l = arguments.length, a = l < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (a = (l < 3 ? i(a) : l > 3 ? i(e, o, a) : i(e, o)) || a);
return l > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./InfiniteHeights.GameView"), r = cc._decorator, c = r.ccclass, s = r.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.idPrf = 0;
e.speed = 150;
e.speedAngle = 70;
e.listNode = [];
e.angle = 0;
e.isMovingRight = !0;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.start = function() {};
e.prototype.update = function(t) {
if (!a.default.instance.isGameOver) switch (this.idPrf) {
case 0:
var e = this.listNode[0];
if (e) if (this.isMovingRight) {
e.x += this.speed * t;
e.x >= 200 && (this.isMovingRight = !1);
} else {
e.x -= this.speed * t;
e.x <= -200 && (this.isMovingRight = !0);
}
break;

case 1:
if (this.listNode.length >= 2) {
var o = this.listNode[0], n = this.listNode[1];
if (this.isMovingRight) {
o.x += this.speed * t;
o.x >= 200 && (this.isMovingRight = !1);
} else {
o.x -= this.speed * t;
o.x <= -200 && (this.isMovingRight = !0);
}
if (this.isMovingRight) {
n.x -= this.speed * t;
n.x <= -200 && (this.isMovingRight = !0);
} else {
n.x += this.speed * t;
n.x >= 200 && (this.isMovingRight = !1);
}
}
break;

case 2:
if (this.listNode.length >= 2) {
o = this.listNode[0], n = this.listNode[1];
if (this.isMovingRight) {
o.x += this.speed * t;
n.x += this.speed * t;
(o.x >= 200 || n.x >= 200) && (this.isMovingRight = !1);
} else {
o.x -= this.speed * t;
n.x -= this.speed * t;
(o.x <= -200 || n.x <= -200) && (this.isMovingRight = !0);
}
}
break;

case 3:
if (this.listNode.length >= 3) {
o = this.listNode[0], n = this.listNode[1];
var i = this.listNode[2];
if (this.isMovingRight) {
o.x += this.speed * t;
n.x += this.speed * t;
i.x += this.speed * t;
i.x >= 300 && (this.isMovingRight = !1);
} else {
o.x -= this.speed * t;
n.x -= this.speed * t;
i.x -= this.speed * t;
o.x <= -300 && (this.isMovingRight = !0);
}
}
break;

case 4:
if (this.listNode.length) {
var l = this.listNode[0];
if (l) if (this.isMovingRight) {
l.x += this.speed * t;
l.x >= 200 && (this.isMovingRight = !1);
} else {
l.x -= this.speed * t;
l.x <= -200 && (this.isMovingRight = !0);
}
}
break;

case 5:
if (this.listNode.length >= 2) {
o = this.listNode[0], n = this.listNode[1];
o.angle += this.speedAngle * t;
n.angle -= this.speedAngle * t;
o.angle >= 360 && (o.angle -= 360);
n.angle >= 360 && (n.angle -= 360);
o.angle < 0 && (o.angle += 360);
n.angle < 0 && (n.angle += 360);
}
break;

case 6:
case 7:
this.listNode.length && (this.listNode[0].angle += this.speedAngle * t);
break;

case 8:
this.listNode.length && (this.listNode[0].angle += this.speedAngle * t);
}
};
l([ s ], e.prototype, "idPrf", void 0);
l([ s(cc.Node) ], e.prototype, "listNode", void 0);
return l([ c ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./InfiniteHeights.GameView": "InfiniteHeights.GameView"
} ],
"InfiniteHeights.Shop": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ca106/9TXROP4idbyKoCVQC", "InfiniteHeights.Shop");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), l = this && this.__decorate || function(t, e, o, n) {
var i, l = arguments.length, a = l < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var r = t.length - 1; r >= 0; r--) (i = t[r]) && (a = (l < 3 ? i(a) : l > 3 ? i(e, o, a) : i(e, o)) || a);
return l > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../InfiniteHeights.Global"), r = cc._decorator, c = r.ccclass, s = r.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listSpfBallon = [];
e.nBallon_0 = null;
e.nBallon_1 = null;
e.nBallon_2 = null;
e.nNext = null;
e.nPrev = null;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
a.Global.currentIndexBallon = JSON.parse(cc.sys.localStorage.getItem("currentIndexBallon")) || 0;
console.log("currentIndexBallon ", a.Global.currentIndexBallon);
a.Global.unlockIndexBallon = JSON.parse(cc.sys.localStorage.getItem("unlockIndexBallon")) || a.Global.unlockIndexBallon;
this.effectBallon(this.nBallon_0.node);
this.effectBallon(this.nBallon_1.node);
this.effectBallon(this.nBallon_2.node);
console.log("unLockIndex ", a.Global.unlockIndexBallon);
console.log("indexBallon", a.Global.currentIndexBallon);
this.updateShop();
};
e.prototype.start = function() {};
e.prototype.effectBallon = function(t) {
cc.tween(t).repeatForever(cc.tween().to(.8, {
angle: -10
}).to(.9, {
angle: 10
}).start()).start();
};
e.prototype.onNext = function() {
if (a.Global.currentIndexBallon < a.Global.unlockPoints.length - 1) {
a.Global.currentIndexBallon++;
this.updateShop();
console.log("OnNext ", a.Global.currentIndexBallon);
cc.sys.localStorage.setItem("currentIndexBallon", a.Global.currentIndexBallon);
} else {
this.nNext.active = !1;
console.log("sdasd");
}
};
e.prototype.onPrev = function() {
if (a.Global.currentIndexBallon > 0) {
a.Global.currentIndexBallon--;
this.updateShop();
console.log("OnPrev ", a.Global.currentIndexBallon);
cc.sys.localStorage.setItem("currentIndexBallon", a.Global.currentIndexBallon);
}
};
e.prototype.updateShop = function() {
this.nBallon_1.spriteFrame = this.listSpfBallon[a.Global.currentIndexBallon];
if (0 === a.Global.currentIndexBallon) {
this.nPrev.active = !1;
this.nNext.active = !0;
this.nBallon_0.node.active = !1;
if (a.Global.unlockIndexBallon > 0) {
this.nBallon_2.node.active = !0;
this.nBallon_2.spriteFrame = this.listSpfBallon[a.Global.currentIndexBallon + 1];
} else this.nBallon_2.node.active = !1;
} else if (a.Global.currentIndexBallon === a.Global.unlockIndexBallon) {
this.nPrev.active = !0;
this.nNext.active = !1;
this.nBallon_0.node.active = !0;
this.nBallon_0.spriteFrame = this.listSpfBallon[a.Global.currentIndexBallon - 1];
this.nBallon_2.node.active = !1;
} else if (a.Global.currentIndexBallon > 0 && a.Global.currentIndexBallon < a.Global.unlockIndexBallon) {
this.nPrev.active = !0;
this.nNext.active = !0;
this.nBallon_0.node.active = !0;
this.nBallon_2.node.active = !0;
this.nBallon_0.spriteFrame = this.listSpfBallon[a.Global.currentIndexBallon - 1];
this.nBallon_2.spriteFrame = this.listSpfBallon[a.Global.currentIndexBallon + 1];
}
if (a.Global.currentIndexBallon > a.Global.unlockIndexBallon) {
a.Global.currentIndexBallon = a.Global.unlockIndexBallon;
this.updateShop();
}
};
var o;
e.instance = null;
l([ s(cc.SpriteFrame) ], e.prototype, "listSpfBallon", void 0);
l([ s(cc.Sprite) ], e.prototype, "nBallon_0", void 0);
l([ s(cc.Sprite) ], e.prototype, "nBallon_1", void 0);
l([ s(cc.Sprite) ], e.prototype, "nBallon_2", void 0);
l([ s(cc.Node) ], e.prototype, "nNext", void 0);
l([ s(cc.Node) ], e.prototype, "nPrev", void 0);
return o = l([ c ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../InfiniteHeights.Global": "InfiniteHeights.Global"
} ]
}, {}, [ "InfiniteHeights.BackGround", "InfiniteHeights.Ballon", "InfiniteHeights.ColliderManager", "InfiniteHeights.GameOver", "InfiniteHeights.GameView", "InfiniteHeights.ObstacleManager", "InfiniteHeights.Shop", "InfiniteHeights.GameManager", "InfiniteHeights.Global" ]);