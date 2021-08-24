(() => {
  let rootElement, rootReactElement;
  const REACT_CLASS = 'REACT_CLASS';

  function createElement(parentEle, props, ...childEle) {
    if(typeof parentEle === 'function') {

      // 当父节点为： 类作为组件时
      if(/^\s*class\s+/.test(parentEle.toString())) {
        let component = new parentEle(props);
        component.type = REACT_CLASS;
        return component;
      }
      // 当父节点为： 函数作为组件时
      return parentEle(props);
    } else {
      // 当父节点为： html标签作为组件时
      const parentElement = document.createElement(parentEle);
      /*
       *  添加属性
      */
      Object.keys(props || {}).forEach(key => {
        // 事件
        if(/^on.*$/.test(key)) {
          const eventName = key.slice(2).toLowerCase();
          parentElement.addEventListener(eventName, props[key]);
        // 添加class
        } else if(key === 'className') {
          parentElement.setAttribute('class', props[key]);
        // 添加style
        } else if(key === 'style') {
          Object.keys(props[key] || {}).forEach(attr => {
            parentElement.style[attr] = props[key][attr]
          })
        // 
        } else if(key === 'ref') {
          props[key](parentElement);
          // this.refs[props[key]] = parentElement;
        } else {
        // 其他属性
          parentElement.setAttribute(key, props[key])
        }
      })

      /*
       * 添加子节点
      */
      childEle.forEach(child => {
        // 当子节点是文本的时候
        if(typeof child === 'string') {
          parentElement.innerHTML += child;
        // 当子节点由数组组成的时候
        } else if(Array.isArray(child)) {
          child.forEach(el => {
            parentElement.appendChild(el);
          })
        } else if(child && typeof child === 'object') {
          if(child.type === REACT_CLASS) {
            parentElement.appendChild(child.render());
          } else {
            parentElement.appendChild(child);
          }
        } 
      })
      
      return parentElement;
    }
  }

  function render(insertEle, rootEle) {
    rootElement = rootEle;
    rootReactElement = insertEle;
    const currentEle = rootReactElement.type === REACT_CLASS ? insertEle.render() : rootReactElement;
    rootEle.appendChild(currentEle);
  }

  class Component {
    constructor(props) {
      this.props = props;
      this.refs = {};
    }

    setState(state) {
      this.state = Object.assign({}, this.state, state);
      reRender();
    }
  }

  function reRender() {
    while(rootElement.hasChildNodes()) {
      rootElement.removeChild(rootElement.lastChild);
    }
    ReactDOM.render(rootReactElement, rootElement);
  }

  window.React = {
    createElement,
    Component,
  }

  window.ReactDOM = {
    render
  }
})()