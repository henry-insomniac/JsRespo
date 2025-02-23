/**
 * @description JS 数组方法汇总
 */

// Array 静态方法

// 从可迭代或者类数组对象创建一个新的浅拷贝的数组实例
// arrayLike => 可迭代或者类数组对象
// mapFun => 调用数组中的每一个元素，如果提供每个将要添加到数组中的值会首先传递给该函数，然后将mapFun的返回值添加到数组中
// thisArg => 执行 mapFun 时使用的 this 值
Array.from(arrayLike, mapFun, thisArg);
/* -------------------------------------------------------------------------- */

// 从可迭代或者类数组对象创建一个新的浅拷贝的数组实例，并使用 asyncMapFn 异步调用数组中的每一个元素
// arrayLike => 要转换为数组的异步可迭代、可迭代或类数组对象。
// asyncMapFn => 调用数组中的每一个元素，如果提供每个将要添加到数组中的值会首先传递给该函数，然后将asyncMapFn的返回值添加到数组中
// thisArg => 执行 asyncMapFn 时使用的 this 值
Array.fromAsync(arrayLike, asyncMapFn, thisArg);
const asyncIterable = (async function* () {
  for (let i = 0; i < 5; i++) {
    await new Promise((resolve) => setTimeout(resolve, 10 * i));
    yield i;
  }
})();
Array.fromAsync(asyncIterable).then((array) => console.log(array));
// [0, 1, 2, 3, 4]
/* -------------------------------------------------------------------------- */

// 用来确定传递值是否为数组
Array.isArray(value);
/* -------------------------------------------------------------------------- */

// Array.of()
// 创建一个新数组实例，如果传递一个值，则创建一个长度为1的数组，否则创建一个包含传入值的数组
// Array.of 和 Array 构造函数之间的区别在于处理参数的方式：Array.of(7) 创建一个具有单个元素 7 的数组，
// 而 Array(7) 创建一个长度为 7 的空数组（注意：这是指没有元素，length 属性为 7）。
Array.of(element0, element1, ...elementN);
/* -------------------------------------------------------------------------- */

// 接收一个整数数值返回该索引对应的元素，可以为负数，负数从数组末尾开始计算
Array.prototype.at(index);
/* -------------------------------------------------------------------------- */

// 合并两个或多个数组，返回一个新数组
// 此方法不会更改现有数组，而是返回一个新数组
Array.prototype.concat(value1, value2, ...values);
/* -------------------------------------------------------------------------- */

// 将数组的一部分复制到同一数组中的另一个位置，并返回该数组，会更新原数组，不会改变数组的长度
// target => 复制序列到该位置。如果是负数，target 将从末尾开始计算
// start => 开始复制元素的起始位置。如果是负数，start 将从末尾开始计算
// end => 开始复制元素的结束位置。如果是负数，end 将从末尾开始计算。默认为 array.length
Array.prototype.copyWithin(target, start, end);

// 示例：
const array = ["a", "b", "c", "d", "e"];
array.copyWithin(0, 3, 4); // ['d', 'b', 'c', 'd', 'e']
array.copyWithin(1, 3); // ['d', 'd', 'e', 'd', 'e']
/* -------------------------------------------------------------------------- */

// 返回一个新的数组迭代器对象，该对象包含数组中每个索引的键值对
Array.prototype.entries();
/* -------------------------------------------------------------------------- */

// 测试数组中的所有元素是否都通过了提供的函数测试
// 是一个通用方法，只要有length属性，都可以使用
Array.prototype.every(callbackFn, thisArg);
/* -------------------------------------------------------------------------- */

// 用一个固定值填充数组中所有元素，会更新原数组
Array.prototype.fill(value, start, end);
/* -------------------------------------------------------------------------- */

// 创建一个新数组，其中包含通过所提供函数实现的测试的所有元素
Array.prototype.filter(callbackFn, thisArg);
/* -------------------------------------------------------------------------- */

// 返回数组中满足提供的测试函数的第一个元素的值
Array.prototype.find(callbackFn, thisArg);
/* -------------------------------------------------------------------------- */

// 返回数组中满足提供的测试函数的第一个元素的索引
Array.prototype.findIndex(callbackFn, thisArg);
/* -------------------------------------------------------------------------- */
