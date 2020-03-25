Function.prototype.ibind = function(context) {
	var slice = Array.prototype.slice

	if (typeof this !== "function") {
		throw new TypeError("Function.prototype.ibind called error")
	}

	var func = this

	var preArgs = slice.call(arguments, 1)

	var noop = function() {}

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
