// Regex pattern for valid class names.
const namePattern = /^[A-Z][A-Za-z0-9]*$/;

/**
 * Validates a class name.
 * @param {string} name - Class name to validate.
 * @returns {boolean|string} - `true` if the name is valid, an error message
 *   otherwise.
 */
exports.validateName = function(name) {
	return namePattern.test(name) ||
		"Class name must be a valid identifier in upper camel case";
};
