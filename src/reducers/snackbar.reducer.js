import { ActionTypes } from '../actions/snackbar.action';

export const initialState = {
	message: undefined,
	status: undefined,
	type: undefined,
	snackbarOpen: false,
};

const SnackBar = {
	success: 'success',
	error: 'error',
	info: 'info',
};

const SnackBarReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.SNACKBAR_SUCCESS:
			return {
				message: action.payload.message,
				status: action.payload.status,
				type: SnackBar.success,
				snackbarOpen: true,
			};

		case ActionTypes.SNACKBAR_ERROR:
			return {
				message: action.payload.message,
				status: action.payload.status,
				type: SnackBar.error,
				snackbarOpen: true,
			};

		case ActionTypes.SNACKBAR_INFO:
			return {
				message: action.payload.message,
				status: action.payload.status,
				type: SnackBar.info,
				snackbarOpen: true,
			};
		case ActionTypes.CLEAR_SNACKBAR:
			return initialState;
		default:
			return state;
	}
};

export default SnackBarReducer;
