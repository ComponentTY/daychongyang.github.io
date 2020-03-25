Function.prototype.bindX = function(context) {
	var slice = Array.prototype.slice
	var toString = Object.prototype.toString
	var func = this
	if (typeof func !== "function" || toString.call(func) !== "[object Function]") {
		throw new TypeError("Function.prototype.bindX called error")
	}

	var preArgs = slice.call(arguments, 1)

	function noop() {}

	function bound() {
		var args = slice.call(arguments)
		var combinedArgs = [].concat(preArgs, args)
		return func.apply(this instanceof noop ? this : context, combinedArgs)
	}

	if (func.prototype) {
		noop.prototype = func.prototype
	}

	bound.prototype = new noop()

	return bound
}
