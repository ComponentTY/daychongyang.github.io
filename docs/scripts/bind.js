Function.prototype.bind = function(context) {
	var slice = Array.prototype.slice
	var toString = Object.prototype.toString
	var func = this
	if (typeof func !== "function" || toString.call(func) !== "[object Function]") {
		throw new TypeError("Function.prototype.bind called error")
	}

	var preArgs = slice.call(arguments, 1)

	return function() {
		var args = slice.call(arguments)
		var combinedArgs = [].concat(preArgs, args)
		return func.apply(context, combinedArgs)
	}
}

var a = {
	value: 2
}

function add(a, b) {
	return this.value + a + b
}

var newAdd = add.bind(a)

console.log(newAdd(1, 2))
