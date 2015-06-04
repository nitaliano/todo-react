module.exports = {
	INVALID_LIST_NAME: new ApiErrorInfo(50000, 'Invalid list name'),
	INVALID_LIST_ID: new ApiErrorInfo(50001, 'Invalid list id'),
	UNABLE_TO_CREATE_LIST: new ApiErrorInfo(50002, 'Unable to create list'),
	UNABLE_TO_FIND_LIST: new ApiErrorInfo(50003, 'Unable to find list'),
	UNABLE_TO_UPDATE_LIST: new ApiErrorInfo(50004, 'Unable to update list')
};

function ApiErrorInfo(code, message) {
	this.code = code;
	this.message = message;
}