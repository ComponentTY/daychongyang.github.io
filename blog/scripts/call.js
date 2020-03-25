/** this 指向, 与方法调用所在位置有关, 与方法声明位置无关(除箭头函数外) */
Function.prototype.call = function(context) {
	var context = context || window
	var args = []

	context.fn = this

	for (var i = 1; i < arguments.length; i++) {
		args.push(arguments[i])
	}

	var result = eval("context.fn(" + args + ")")
	delete context.fn

	return result
}

var foo = {name: "foo"}

function bar() {
	console.log(this.foo)
	return {
		foo: this.foo
	}
}

bar.call(foo)

bar.call(null)
