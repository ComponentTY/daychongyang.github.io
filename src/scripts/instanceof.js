function instanceOf(left, right) {
	/** 获取类型原型 */
	var prototype = right.prototype
	/** 获取对象原型 */
	var proto = left.__proto__

	/** 判断对象类型是不是等于类型的原型 */
	while (true) {
		if (proto === null) return false

		if (prototype === proto) return true

		proto = proto.__proto__
	}
}
