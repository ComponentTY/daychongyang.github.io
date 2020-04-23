/** 敏感信息格式化 */

function formatSensitiveInformation(target) {
	const isMail = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(target)
	if (isMail) return target.replace(/(\w+)[-\w.]{4}(@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14})/, "$1****$2")

	const isMobile = /(13\d|14[579]|15[^4\D]|17[^49\D]|18\d)\d{8}/.test(target)
	if (isMobile) return target.replace(/^(\d{4})\d{4}(\d+)/, "$1****$2")

	const isTel = /(0[0-9]{2,3}[\-]?[2-9][0-9]{6,7}[\-]?[0-9]?)/.test(target)
	if (isTel) return target.replace(/^(\d+[-]?\d{3})\d+(\d{3})/, "$1****$2")

	return null
}

console.log(formatSensitiveInformation("0515-87421909"))
