import {h, init} from 'snabbdom'
// 1. hello World

// 参数： 数组，模块
// 返回值： patch函数，作用：对比两个vnode（就是虚拟DOM）的差异，再更新到真实DOM
let patch = init([])

// 第一个参数： 标签+选择器
// 第二个参数： 如果是字符串的话就是标签中的内容
let vnode = h('div#container.cls', 'Hello World')

// 获取页面中占位的Dom
let app = document.querySelector('#app')

/**
 * @patch 函数
 * 第一个参数： 可以是vnode（虚拟dom），也可以是 DOM 元素，内部会把DOM元素转换成vnode
 * 第二个参数： vnode
 * 返回值： vnode
 */

 let oldVnode = patch(app, vnode)

 vnode = h('div', 'Hello Snabbdom')
 patch(oldVnode, vnode)


