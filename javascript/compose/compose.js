/**
 * 将函数执行扁平化，将一个函数的返回值当作另一个函数的参数，最后返回一个值
 * 
 * compose(..funcs)(params)
 *  * @param  {...any} funcs 函数集合， 从右往左执行
 */
function compose(...funcs) {
  if (funcs.length === 0) return (arg) => arg;

  if (funcs.length === 1) return funcs[0];

  return funcs.reduce((a, b) => {
    return (...arg) => a(
      b(...arg)
    )
  }) 
}

/**
 * 
 * @param  {...any} funcs 函数集合， 从左往右执行
 * @returns 返回一个值
 */
function pipe(...funcs) {
  return funcs.reduce((a, b) => (...arg) => b(a(...arg)))
}