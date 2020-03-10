---
title: new 运算符
date: 2020-03-04
tags:
  - Daily
author: Day
---

`new` 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例

## new 关键字操作流程

1. 创建空对象 `{}`
2. 链接到原型
3. 绑定`this`, 执行构造函数
4. 返回新对象

```js
function create() {
	var current = {}

	var Constructor = Array.prototype.shift.call(arguments)

	current.__proto__ = Constructor.prototype

	var result = Constructor.apply(current, arguments)

	return (typeof result === "object" || typeof result === "function") && result !== null ? result : current
}

function Foo(bar) {
	this.bar = bar
	return Symbol()
}

var foo = create(Foo, "12138")
console.log(foo)

var foo = new Foo("12")
console.log(foo)
```
