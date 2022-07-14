/**
 * 题目
 * 
 * const a = {
 *   a: {
 *     a_1: { a_1_1: 'xxx' }
 *     a_2: { a_2_1: '222' }
 *  }
 * }
 */

const a = {
    a: {
        a_1: {
            a_1_1: '122',
            a_1_2: '222'
        }
    },
    b: {
        b_1: {
            b_1_1: 'aaa'
        }
    },
    c: {
        c_1: 'x2323'
    },
    d: 'x222aaa',
}

function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}

function findPath(obj, value) {
    let firstkey = '';
    let isFind = false;

    function findValue(obj, value) {
        for (let i in obj) {
            if (obj[i] === value) {
                return i;
            }

            if (isObject(obj[i])) {
                if (findValue(obj[i], value)) {
                    return i;
                }
            }
        }
    }

    for (let i in obj) {
        firstkey = i;
        if (obj[i] === value) {
            isFind = true;
        }
        if (isObject(obj[i])) {
          if (findValue(obj[i], value)) {
                isFind = true;
                break;
          }
        }
    }

    if (!isFind) return 'Not found';
    return [firstkey, value]
}

console.log(findPath(a, '222')); // ['b', 'aaa']
