module.exports = ApiError;

function ApiError(apiErrorInfo) {
	this.error = apiErrorInfo;
}