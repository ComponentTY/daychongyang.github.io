---
title: apply 函数
date: 2020-03-01
tags:
  - Daily
author: Day
---

```js
Function.prototype.apply = function(context, args) {
	var context = context || window
	var func = this
	context.func = func
	var result

	if (args) {
		result = eval("context.func(" + args + ")")
	} else {
		result = context.func()
	}

	delete context.func

	return result
}

var foo = {
	value: 1
}

function add(a, b) {
	return this.value + a + b
}

console.log(add.apply(foo, [1, 2]))
```
