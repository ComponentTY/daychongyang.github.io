---
title: Promise
date: 2020-03-21
tags:
  - JavaScript
  - Promise
author: Day
---

## Promise 是什么?

- 一个具拥有 `then` 方法且其行为符合 `Promise/A+` 规范的对象或方法.
- 一个异步操作的最终结果.

## Promise 语法

```js
new Promise(function(resolve, reject) {} /** exxcutor */);
```

`executor` 是一个带有 `resolve` 和 `reject` 两个函数作为参数的函数.

`Promise` 构造函数执行时, 立即调用 `executor` 函数, `resolve` 和 `reject` 两个函数作为参数传递给 `executor`. `executor`函数内部可执行一些异步操作, 待异步操作执行完成(成功/失败),`resolve` 和 `reject` 函数被调用时, 分别将 `Promise` 状态 改为 `fulfilled` (完成) 或 `rejected`(失败). 且 `executor` 函数的返回值将被忽略.

`Promise` 对象是一个代理对象, 被代理的值可能是未知的. 允许为异步操作的成功或失败绑定相应处理方法.

## Promise/A+ 标准

[Promise/A+ 标准](https://promisesaplus.com/)

### 术语

- `promise` 一个具拥有 `then` 方法且其行为符合规范的对象或方法.
- `thenable` 一个定义了 `then` 方法的对象或函数.
- `value` 指任何 JavaScript 的合法值(`undefined`,`thenable`,`promise`)
- `exception` 使用 `throw` 抛出的一个值
- `reason`一个表示 promise 的拒绝原因

### 要求

#### Promise 状态

一个 `Promise` 的状态必须为以下状态的一种: `pending`(等待态)、`fulfilled`(执行态) 、 `rejected`(拒绝态).

- `panding`
  - `promise` 可以迁移至 `fulfilled` / `rejected` 状态
- `fulfilled`
  - `promise` 不能迁移至其他任何状态
  - `promise` 必须拥有一个**不可变**的终值
- `rejected`
  - `promise` 不能转为其他任何状态
  - `promise` 必须拥有一个**不可变**的拒因

> 不可变 => 基本值/引用地址不变的对象

#### then 方法

一个 `promise` 必须提供一个`then`方法, 以访问当前值、终值、拒因

`then` 方法接受两个参数

```js
var promise1 = new Promise(
  (resolve, reject) => {
    // ...
  } /** executor */
);
var promise2 = promise1.then(onFulfilled, onRejected);
```

- `onFulfilled` 与 `onRejected` 皆为可选参数.
  - 若 `onFulfilled` 不是函数, 其必须被忽略.
  - 若 `onRejected` 不是函数, 其必须被忽略.
- 若 `onFulfilled` 是一个函数.
  - 在 `promise` 执行结束前其不可被调用.
  - 当 `promise` 执行结束后其必须被调用, 第一个参数为 `promise`的终值.
  - 其调用次数不可超过一次.
- 若 `onRejected` 是一个函数.
  - 在 `promise` 被拒绝执行前其不可被调用.
  - 当 `promise` 被拒绝执行后其必须被调用, 第一个参数为 `promise`的拒因.
  - 其调用次数不可超过一次.
- `onFulfilled` 与 `onRejected` 调用时机.
  - 当且仅当执行堆栈中仅包含平台代码时才可被调用.
- `onFulfilled` 与 `onRejected` 调用要求.
  - 必须被作为函数调用(即无`this`值).
- 多次调用
  - `then` 方法可以被同一个 `promise1` 调用多次.
    - 当 `promise1` 成功执行时, 所有 `onFulfilled` 需按照其注册顺序依次回调.
    - 当 `promise1` 被拒绝执行时, 所有 `onRejected` 需按照其注册顺序依次回调.
- 返回

  - `then` 方法必须返回一个 `promise` 对象.

    - 若 `onFulfilled` 或 `onRejected` 返回一个值 `x`, 则执行 `Promise 解决过程`(Promise 解决过程是一个抽象的操作, 其需输入一个 `promise` 和一个值, 表示为 `[[Resolve]](promise, x)`):

      - `x` 与 `promise` 相等, 以`TypeError`为拒因拒绝执行 `promise`.
      - `x` 为 `Promise`, 使用 `promise` 接收 `x` 的状态.
      - `x` 为对象或函数:
        - 取 `x.then` 值时抛出错误 `e`,则以 `e`为拒因拒绝 `promise`.
        - 若 `x.then` 为函数, 则将 `x` 作为函数作用域调用. 传递两个回调函数作为参数 (`resolvePromise`, `rejectPromise`).
          - 若 `resolvePromise` 以值 `y` 为参数被调用, 则执行 `[[Resolve]](promise, y)`.
          - 若 `rejectPromise` 以拒因 `r` 为参数被调用, 则以 拒因 `r` 拒绝 `promise`.
          - 若 `resolvePromise` 和 `rejectPromise` 均被调用, 或者被同一参数调用多次, 则优先采用首次调用并忽略剩下的调用.
          - 若调用 `then` 方法时抛出了异常 `e`
            - 若 `resolvePromise`与`rejectPromise` 都已被调用, 则忽略.
            - 否则以拒因`e`拒绝`promise`.
        - 若 `x.then` 不是函数, 则以 `x` 为参数执行 `promise`.
      - `x` 不为对象或者函数，以 `x` 为参数执行 `promise`

    - 若 `onFulfilled` 或 `onRejected` 抛出异常 `e`, `promise2` 必须拒绝执行, 并返回拒因 `e`.
    - 若 `onFulfilled` 不是函数且 `promise1` 成功执行, `promise2` 必须执行成功并且返回相同的值.
    - 若 `onRejected` 不是函数且 `promise1` 决绝执行, `promise2` 必须决绝执行并且返回相同的拒因.

## Promise Conformant Implementations

### Adehun

[Promise Conformant Implementations](https://promisesaplus.com/implementations)

[图灵社区: Promises/A+规范](https://www.ituring.com.cn/article/66566)
