import {
	SNACKBAR_SUCCESS,
	SNACKBAR_ERROR,
	SNACKBAR_INFO,
	CLEAR_SNACKBAR,
} from '../constant/snackbarConstant'

export const showSuccessSnackBar = (successMessage) => ({
	type: SNACKBAR_SUCCESS,
	payload: successMessage,
});

export const showErrorSnackBar = (errorMessage) => ({
	type: SNACKBAR_ERROR,
	payload: errorMessage,
});

export const showInfoSnackBar = (infoMessage) => ({
	type: SNACKBAR_INFO,
	payload: infoMessage,
});

export const clearSnackBar = () => ({
	type: CLEAR_SNACKBAR,
});
