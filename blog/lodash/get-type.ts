/**
 * @private
 * @param target {any}
 *
 */
export function getType(target) {
	return Object.prototype.toString.call(target).slice(8, -1)
}
