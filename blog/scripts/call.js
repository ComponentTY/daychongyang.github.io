/** this 指向, 与方法调用所在位置有关, 与方法声明位置无关(除箭头函数外) */

Function.prototype.icall = function(context) {
	var context = context || window
	if (typeof this !== "function") {
		throw new TypeError("Function.prototype.icall called error")
	}

	context.fn = this

	var args = []
	for (var i = 1; i < arguments.length; i++) {
		args.push(arguments[i])
	}

	var result = eval("context.fn(" + args + ")")
	delete context.fn

	return result
}
