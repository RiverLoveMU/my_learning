/**
 * 正则的捕获
 */

/**
 * 实现正则捕获的办法
 * 1. 正则RegExp.prototype上的方法
 * a. exec
 * b. test
 * 2. 字符串String.prototype上支持正则表达式处理的方法
 * a. replace
 * b. match
 * c. split
 * d. ......
 *
 */

let str = 'qianbian2019yangfan2020qihang2021';
let reg = /\d+/;
//实现正则捕获的前提是：当前正则要要和字符串匹配，如果不匹配捕获的结果是null
/**
 * 基于exec实现正则的捕获
 * 1. 捕获到的结果是null或者一个数组
 *    数组第一项：本次捕获到的内容
 *    其余项：对应小分组本次单独捕获的内容
 *    index：当前捕获内容在字符串中的起始索引
 *    input：原始字符串
 * 2. 每执行一次exec只能捕获到一个符合正则规则的，但是默认情况下，我们执行一百遍获取的结果永远都是第一个匹配到的，其余的捕获不到
 *    =》正则捕获的懒惰性，默认只捕获第一个
 *    懒惰型捕获原因：默认情况下lastIndex不会被修改，每一次都是从字符串开始位置找到
 *    =》解决办法，全局修饰符g
 */
reg.exec(str); //=>["2019", index: 8, input: "qianbian2019yangfan2020qihang2021", groups: undefined]

//lastIndex: 当前正则下一次匹配的起始索引位置
const lastIndex = reg.lastIndex; //=>0 捕获完成后，lastIndex也不会改变

let regGlobal = /\d+/g;
regGlobal.exec(str); //=>["2019", index: 8, input: "qianbian2019yangfan2020qihang2021", groups: undefined]
console.log(regGlobal.lastIndex); //=>12 设置全局匹配修饰符g后，第一次匹配完，lastIndex会自己修改
regGlobal.exec(str); //=>["2020", index: 19, input: "qianbian2019yangfan2020qihang2021", groups: undefined]
console.log(regGlobal.lastIndex); //=>23
regGlobal.exec(str); //=>["2021", index: 29, input: "qianbian2019yangfan2020qihang2021", groups: undefined]
console.log(regGlobal.lastIndex); //=>33
regGlobal.exec(str); //=> null 当全部捕获后，再次捕获的时候，捕获的结果是null，但是lastIndex又回归到初始值0，再次捕获又从第一个开始了
console.log(regGlobal.lastIndex); //=>0
regGlobal.exec(str); //=>["2019", index: 8, input: "qianbian2019yangfan2020qihang2021", groups: undefined]

let reg1 = /\d+/g;
if (reg1.test(str)) {
  //test也可以改变lastIndex值，所以下一次捕获不会再从头开始b
  reg1.exec(str); // ["2020", index: 19, input: "qianbian2019yangfan2020qihang2021", groups: undefined]
}

/**
 * 编写一个方法execAll，执行一次可以把所有匹配的结果捕获到（前提正则一定要设置全局g）;
 */

(function() {
  function execALL(str = '') {
    //str: 要匹配的字符串
    //=> this: RegExp的实例
    if (!this.global) {
      const res = this.exec(str);
      if (res) {
        return [res[0]];
      } else {
        return [];
      }
    }

    let array = [];
    let res = this.exec(str);
    while (res) {
      array.push(res[0]);
      res = this.exec(str);
    }
    return array;
  }

  RegExp.prototype.execALL = execALL;
})();
let reg2 = /\d+/g;
console.log(reg2.execALL(str)); //=> ["2019", "2020", "2021"]

//字符串中的match方法可以在执行一次的情况下，可以捕获到所有匹配数据，前提正则设置g
str.match(reg2); //=> ["2019", "2020", "2021"]
