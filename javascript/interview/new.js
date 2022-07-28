/**
 * 实现一个 new
 * 
 * 分析 new 干了什么
 * 1。创建一个空的 JavaScript 对象，即 {}，obj
 * 2. 为步骤 1 中的对象添加属性 __proto__，将该属性链接到构造函数的原型 => obj.__proto__ === object.prototype.construction
 * 3. 将步骤 1 中创建的对象作为 this 的上下文
 * 4. 如果没有返回值，就返回对象，否则就返回 this
 * 
 */

/**
 * 执行 new Foo() 时，干了什么
 * 1. 创建一个继承自 Foo.prototype 的对象
 * 2. 使用指定的参数调用构建函数 Foo，并将 this 绑定到新的对象中
 * 3. new 的返回结果就是构造函数返回的结果。如果构造函数没有显示的返回一个对象，则返回步骤 1 中的对象。
 */

function _new(foo, ...arg) {
    // 创建一个对象，
    const obj = Object.create(foo.prototype);
    const ret = fn.apply(arg);
    return ret instanceof Object ? ret : obj;
}