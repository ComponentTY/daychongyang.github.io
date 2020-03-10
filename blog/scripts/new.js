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
