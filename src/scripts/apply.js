Function.prototype.iapply = function(context, args) {
	var context = context || window

	if (typeof this !== "function") {
		throw new TypeError("Functio")
	}

	context.func = this

	var result

	if (args) {
		result = eval("context.func(" + args + ")")
	} else {
		result = context.func()
	}

	delete context.func

	return result
}
