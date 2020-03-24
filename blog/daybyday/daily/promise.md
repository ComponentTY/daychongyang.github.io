---
title: Promise Implementation
date: 2020-03-24
tags:
  - Daily
author: Day
---

```ts
/** https://promisesaplus.com/ */

export type Value = any
export type Reason = any

export interface Resolve {
	(value: Value): void
}
export interface Reject {
	(reason: Reason): void
}

export type OnFulfilled = any
export type OnRejected = any

export interface Executor {
	(resolve: Resolve, reject: Reject): void
}

enum State {
	pending = "pending",
	fulfilled = "fulfilled",
	rejected = "rejected"
}

const {pending, fulfilled, rejected} = State

export class Promise {
	private state: State
	private value: Value
	private reason: Reason
	private onFulfilledCallbacks: OnFulfilled[] = []
	private onRejectedCallbacks: OnRejected[] = []

	constructor(executor: Executor) {
		if (typeof executor !== "function") throw new TypeError(`expecting a function but got ${classString(executor)}`)

		/** ES5 */
		if (this === null || !(this instanceof Promise))
			throw new TypeError("the promise constructor cannot be invoked directly")

		this.state = pending

		try {
			/** Promise 接收一个 executor 函数, executor 函数执行完同步或异步操作后, 调用 resolve 和 reject */
			executor(this.resolve, this.reject)
		} catch (e) {
			this.reject(e)
		}
	}

	resolve: Resolve = value => {
		/** https://promisesaplus.com/#point-14 */
		if (this.state !== pending) return

		this.runAsync(() => {
			this.state = fulfilled
			this.value = value
			this.onFulfilledCallbacks.forEach(onFulfilled => onFulfilled())
		})
	}

	reject: Reject = reason => {
		/** https://promisesaplus.com/#point-17 */
		if (this.state !== pending) return

		this.runAsync(() => {
			this.state = rejected
			this.reason = reason
			this.onRejectedCallbacks.forEach(onRejected => onRejected())
		})
	}

	then(onFulfilled?: OnFulfilled, onRejected?: OnRejected) {
		/** https://promisesaplus.com/#point-23 */
		if (!isFunction(onFulfilled)) onFulfilled = (value: Value) => value
		if (!isFunction(onRejected))
			onRejected = (reason: Reason) => {
				throw reason
			}

		let promise: Promise

		return (promise = new Promise((resolve, reject) => {
			const {state} = this
			const fulfilledCallback = () => {
				try {
					this.resolvePromise(onFulfilled(this.value), promise, resolve, reject)
				} catch (e) {
					reject(e)
				}
			}

			const rejectedCallback = () => {
				try {
					this.resolvePromise(onRejected(this.reason), promise, resolve, reject)
				} catch (e) {
					reject(e)
				}
			}

			/** 执行态 */
			if (state === fulfilled) {
				/** https://promisesaplus.com/#point-34 */
				this.runAsync(fulfilledCallback)
			}

			/** 拒绝态 */
			if (state === rejected) {
				/** https://promisesaplus.com/#point-34 */
				this.runAsync(rejectedCallback)
			}

			/** 等待态 */
			if (state === pending) {
				this.onFulfilledCallbacks.push(fulfilledCallback)
				this.onRejectedCallbacks.push(rejectedCallback)
			}
		}))
	}

	catch(onRejected: OnRejected) {
		return this.then(null, onRejected)
	}

	resolvePromise(value: any, promise: Promise, resolve: Resolve, reject: Reject) {
		if (value === promise) {
			return reject(new TypeError(`promise and target refer to the same object`))
		}

		/** 当前实现实例 */
		if (value instanceof Promise) {
			if (value.state !== pending) return value.then(resolve, reject)

			return value.then((value: Value) => {
				this.resolvePromise(value, promise, resolve, reject)
			}, reject)
		}

		/** 其它 Promise/A+ 实现实例 */
		if (isFunction(value) || isObject(value)) {
			let called = false
			try {
				const {then} = value
				if (!isFunction(then)) return resolve(value)

				then.call(
					value,
					(value: Value) => {
						if (called) return

						called = true
						this.resolvePromise(value, promise, resolve, reject)
					},
					(reason: Reason) => {
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

	runAsync(fn: Function) {
		setTimeout(fn)
	}
}

function classString(target: any) {
	return Object.prototype.toString.call(target).slice(8, -1)
}

function isObject(target: any) {
	return target && typeof target === "object"
}

function isFunction(target: any) {
	return typeof target === "function"
}
```
