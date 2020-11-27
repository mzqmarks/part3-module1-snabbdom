import { init, h, thunk } from 'snabbdom'
// 使用 init() 函数创建 patch()
// init() 的参数是数组，将来可以传入模块，处理属性/样式/事件等
let patch = init([])
// 使用 h() 函数创建 vnode
let vnode = h('div.cls', [
 h('h1', 'Hello Snabbdom'),
 h('p', '这是段落')
])
const app = document.querySelector('#app')
// 把 vnode 渲染到空的 DOM 元素（替换）
// 会返回新的 vnode
let oldVnode = patch(app, vnode)
setTimeout(() => {
     vnode = h('div.cls', [
      h('h1', 'Hello World'),
      h('p', '这是段落')
    ])
     // 把老的视图更新到新的状态
     oldVnode = patch(oldVnode, vnode)
     // 卸载 DOM，文档中 patch(oldVnode, null) 有误
     // h('!') 是创建注释
     patch(oldVnode, h('!'))
}, 2000)