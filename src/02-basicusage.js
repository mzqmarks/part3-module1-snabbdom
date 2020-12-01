import {h, init} from 'snabbdom'
// 二. div中子元素h1,p
// 1. 初始化 patch 函数
let patch = init([])
// 2. 利用h 函数 创建  虚拟DOM vnode
let vnode = h('div#container',[
    h('h1','Hello Snabbdom'),
    h('p','这是一个 P')
])
// 3. 获取占位元素#app
let app = document.querySelector('#app')
// 4. 对比虚拟dom 渲染页面
patch(app,vnode)
setTimeout(() => {
    let newVnode = h('div#demo',[
        h('h1','Hello World'),
        h('p','hello p')
    ])
    patch(vnode, newVnode)
},2000)