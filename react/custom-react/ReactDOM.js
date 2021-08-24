
const REACT_CLASS = 'REACT_CLASS';
/**
 * 创建结点
 * 
 * @param {string|object|function} parentEle  父组件：标签|类组件|函数式组件
 * @param {object} props 父组件传到子组件的参数
 * @param {string|object|array} childEle 子组件
 */
function createElement(parentEle, props, ...childEle) {
  if(typeof parentEle === 'function' && /^\s*class\s+/.test(parentEle.toString())) {
    const Component = new parentEle();
    Component.type = REACT_CLASS;
    return Component.render();
  } else if(typeof parentEle === 'function') {
    return parentEle();
  } else {
    if(typeof parentEle === 'string') {
      const parentElement = document.createElement(parentEle);
      createChildEle(parentElement, childEle);
      return parentElement;
    } 
  }
}

/**
 * 解析子组件，这里的子组件已经是生成的好了的结点
 * 
 * @param {object} parentElement 
 * @param {object|string|array} childEle 
 */

function createChildEle(parentElement, childEle) {
  childEle.forEach(child => {
    // 子组件为文本形式
    if(typeof child === 'string') {
      const textNode = document.createTextNode(child);
      parentElement.appendChild(textNode);
    } else if(Array.isArray(child)) {
    // 子组件又由数组组成
      child.forEach(el => {
        parentElement.appendChild(el);
      })
    // 子组件是对象
    } else if(typeof child === 'object' ) {
      parentElement.appendChild(child);
    }
  })
}

function render(insertEle, rootEle) {
  rootEle.appendChild(insertEle);
};

window.React = {
  createElement
}

window.ReactDOM = {
  render
}