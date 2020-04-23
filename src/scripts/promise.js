/** https://promisesaplus.com/ */

var pending = "pending"
var fulfilled = "fulfilled"
var rejected = "rejected"

function iPromise(executor) {
	if (typeof executor !== "function") throw new TypeError("expecting a function but got " + classString(executor))

	if (this === null || !(this instanceof iPromise))
		throw new TypeError("the promise constructor cannot be invoked directly")

	this.state = pending
	this.value = undefined
	this.reason = undefined
	this.onFulfilledCallbacks = []
	this.onRejectedCallbacks = []

	function resolve(value) {
		var self = this
		/** https://promisesaplus.com/#point-14 */
		if (self.state !== pending) return

		runAsync(function() {
			self.state = fulfilled
			self.value = value
			self.onFulfilledCallbacks.forEach(function(onFulfilled) {
				onFulfilled.call(self)
			})
		})
	}

	function reject(reason) {
		var self = this
		/** https://promisesaplus.com/#point-17 */
		if (self.state !== pending) return

		runAsync(function() {
			self.state = rejected
			self.reason = reason
			self.onRejectedCallbacks.forEach(function(onRejected) {
				onRejected.call(self)
			})
		})
	}

	try {
		/** Promise 接收一个 executor 函数, executor 函数执行完同步或异步操作后, 调用 resolve 和 reject */
		executor(resolve.bind(this), reject.bind(this))
	} catch (e) {
		reject.call(this, e)
	}
}

iPromise.prototype.then = function(onFulfilled, onRejected) {
	if (!isFunction(onFulfilled))
		onFulfilled = function(value) {
			return value
		}
	if (!isFunction(onRejected))
		onRejected = function(reason) {
			throw reason
		}
	var promise

	return (promise = new iPromise(function(resolve, reject) {
		var state = this.state

		function fulfilledFn() {
			try {
				resolvePromise(onFulfilled(this.value), promise, resolve, reject)
			} catch (e) {
				reject(e)
			}
		}

		function rejectedFn() {
			try {
				resolvePromise(onFulfilled(this.value), promise, resolve, reject)
			} catch (e) {
				reject(e)
			}
		}

		/** 执行态 */
		if (state === fulfilled) {
			/** https://promisesaplus.com/#point-34 */
			runAsync(fulfilledFn.bind(this))
		}

		/** 拒绝态 */
		if (state === rejected) {
			/** https://promisesaplus.com/#point-34 */
			runAsync(rejectedFn.bind(this))
		}

		/** 等待态 */
		if (state === pending) {
			this.onFulfilledCallbacks.push(fulfilledFn)
			this.onRejectedCallbacks.push(rejectedFn)
		}
	}))
}

function resolvePromise(value, promise, resolve, reject) {
	if (value === promise) {
		return reject(new TypeError(`promise and target refer to the same object`))
	}

	/** 当前实现实例 */
	if (value instanceof Promise) {
		if (value.state !== pending) return value.then(resolve, reject)

		return value.then(function(value) {
			resolvePromise(value, promise, resolve, reject)
		}, reject)
	}

	/** 其它 Promise/A+ 实现实例 */
	if (isFunction(value) || isObject(value)) {
		var called = false
		try {
			var then = value.then
			if (!isFunction(then)) return resolve(value)

			then.call(
				value,
				value => {
					if (called) return

					called = true
					resolvePromise(value, promise, resolve, reject)
				},
				reason => {
					if (called) return

					called = true
					reject(reason)
				}
			)
		} catch (e) {
			if (called) return
			called = true
			reject(e)
		}

		return
	}

	resolve(value)
}

function runAsync(fn) {
	return setTimeout(fn)
}

function classString(target) {
	return Object.prototype.toString.call(target).slice(8, -1)
}

function isObject(target) {
	return target && typeof target === "object"
}

function isFunction(target) {
	return typeof target === "function"
}
