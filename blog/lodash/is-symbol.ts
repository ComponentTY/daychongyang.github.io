import {getType} from "./get-type"

/**
 * Check if `target` is classified as a `Symbol` primitive or object.
 *
 * @param target {any} The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 * isSymbol(Symbol.iterator) => true
 *
 */

export function isSymbol(target: any) {
	const type = typeof target
	return type === "symbol" || (type === "object" && target !== null && getType(target) === "Symbol")
}
