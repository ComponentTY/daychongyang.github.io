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
