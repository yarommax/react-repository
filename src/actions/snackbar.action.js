export const ActionTypes = {
	SNACKBAR_SUCCESS: '[Snackbar] Snackbar Success',
	SNACKBAR_ERROR: '[Snackbar] Snackbar Error',
	SNACKBAR_INFO: '[Snackbar] Snackbar Info',
	CLEAR_SNACKBAR: '[Snackbar] Clear Snackbar',
};

export const ShowSuccessSnackBar = (successMessage) => ({
	type: ActionTypes.SNACKBAR_SUCCESS,
	payload: successMessage,
});

export const ShowErrorSnackBar = (errorMessage) => ({
	type: ActionTypes.SNACKBAR_ERROR,
	payload: errorMessage,
});

export const ShowInfoSnackBar = (infoMessage) => ({
	type: ActionTypes.SNACKBAR_INFO,
	payload: infoMessage,
});

export const ClearSnackBar = () => ({
	type: ActionTypes.CLEAR_SNACKBAR,
});
