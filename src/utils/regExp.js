let reg = /\d+/;

reg.test('daads');  // => false

reg.exec('2019-08-12'); // => ["2019", index: 0, input: "2019-08-12", groups: undefined]

/**
 * 创建正则表达式
 */

//=>字面量创建（两个斜杠之间包起来的就为正则规则）
let reg1 = /\d+/;

//=>构造函数创建 两个参数: 元字符字符串，修饰符字符串  第一个\为转义字符
let reg2 = new RegExp("\\d+");


/**
 * 正则表达式由元字符，修饰符构成
 */

//  常用元字符
// 1. 量词元字符：设置出现的次数
// * 零到多次
// + 1到多次
// ? 零或一次
// {n} 出现n次
// {n,} 出现n到多次
// {n,m} 出现n到m次

// 2. 特殊元字符：单个或者组合在一起代表特殊含义
// \ 转义字符（普通<=>特殊）
// . 出\n（换行符）以外的任意字符    .+(一到多个任意字符);
// ^ 以哪一个元字符作为开始
// $ 以哪一个元字符作为结束
// \n 换行符
// \d 0-9之间的数字
// \D 非0-9之间的数字   (大写和小写的意思是相反的)
// \w 数字、字母、下划线中的任意一个字符
// \s 空白字符（包含空格、制表符、换页符）
// \t 一个制表符（一个tab：四个空格）
// \b 匹配一个单词的边界
// x|y x或者y中的一个字符
// [xyz] x或者y或者z中的一个字符
// [^xy] 除了x和y的一个字符
// [a-z] 指定a-z这个范围中的任意字符   [0-9a-zA-Z_] === \w
// [^a-z] 指定a-z这以外的任意字符   
// () 正则中的分组符号   
// (?:) 只匹配不捕获   
// (?=) 正向预查   
// (?！) 负向预查   


// 3. 普通元字符：代表本身含义的
// /lalala/ 此正则匹配的就是 "lalala"
// /^-?\d+\.?\d{0,2}$/ 匹配所有小数

// 常用修饰符 ===== img
// i =>ignorecase 忽略单词大小写匹配
// m =>multiline 可以进行多行匹配
// g =>global 全局匹配

// /A/.test('lalala') => false (大小写匹配不成功)
// /A/i.test('lalala') => true (忽略大小写匹配)

/**
 * 元字符详细解析
 */

//  ^ $

let reg3 = /^\d/;
reg3.test('lalala');   // => false
reg3.test('2019lalala');   // => true
reg3.test('lalala2019');   // => false

let reg4 = /\d$/;
reg4.test('lalala');   // => false
reg4.test('2019lalala');   // => false
reg4.test('lalala2019');   // => true

let reg5 = /\d+/;
reg5.test('lalala');   // => false
reg5.test('2019lalala');   // => true
reg5.test('lalala2019');   // => true

let reg6 = /^\d+$/;
reg6.test('lalala');   // => false
reg6.test('2019lalala');   // => false
reg6.test('lalala2019');   // => false


// \
let reg7 = /^2.3$/
reg7.test("2.3") // => true
reg7.test("2@3") // => true
reg7.test("23") // => false

let reg8 = /^2\.3$/
reg8.test("2.3") // => true
reg8.test("2@3") // => false

let reg9 = /^\d$/;
let reg10 = /^\\d$/;
reg9.test('\\d') // => false
reg9.test('\\d') // => true

// x|y
let reg11 = /^18|29$/
reg11.test("18"); // => true
reg11.test("29"); // => true
reg11.test("129"); // => true
reg11.test("189"); // => true
reg11.test("1829"); // => true
reg11.test("829"); // => true
reg11.test("182"); // => true
reg11.test("82"); // => false
// 直接 x|y 优先级会很混乱，一般写的时候都伴随着小括号分组，小括号可以改变处理的优先级；
let reg12 = /^(18|29)$/
reg12.test("18"); // => true
reg12.test("29"); // => true
reg12.test("129"); // => false
reg12.test("189"); // => false
reg12.test("1829"); // => false
reg12.test("829"); // => false
reg12.test("182"); // => false
reg12.test("82"); // => false

// []
// 1. 中括号中出现的字符一般都代表本身的含义
let reg13 = /^[@+]+$/
reg13.test('@@') // =>true
reg13.test('@+') // =>true
reg13.test('+@') // =>true
reg13.test('++') // =>true

let reg14 = /^[\d]+$/
reg14.test('d') // =>false
reg14.test('\\') // =>false
reg14.test('9') // =>true

let reg15 = /^[\\d]+$/
reg15.test('d') // =>true
reg15.test('\\') // =>true
reg15.test('9') // =>false

// 2. 中括号不存在多位数
let reg16 = /^[18]$/
reg16.test('1') // =>true
reg16.test('8') // =>true
reg16.test('18') // =>false

let reg17 = /^[10-29]$/ //=> 1或者0-2或者9

let reg18 = /^[(10-29)]$/ 
reg18.test('(') // =>true
reg18.test(')') // =>true
reg18.test('1') // =>true
reg18.test('0') // =>true
reg18.test('2') // =>true
reg18.test('9') // =>true
reg18.test('12') // =>false