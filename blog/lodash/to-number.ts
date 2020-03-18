import {isSymbol} from "./is-symbol"

/**
 * The base implementation of `toNumber`
 *
 * @param target {any} The value to process.
 * @returns {boolean}  Returns the number.
 * toNumber('a') => NaN
 *
 */
export function toNumber(target) {
	if (typeof target === "number") {
		return target
	}

	if (isSymbol(target)) {
		return NaN
	}

	return +target
}
