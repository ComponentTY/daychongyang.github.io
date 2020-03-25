function inew() {
	var current = {}

	var Constructor = Array.prototype.shift.call(arguments)

	current.__proto__ = Constructor.prototype

	var result = Constructor.apply(current, arguments)

	return (result !== null && typeof result === "object") || typeof result === "function" ? result : current
}
