import { ActionTypes } from '../actions/snackbar.action';

export const initialState = {
	errorMessage: '',
	errorStatus: '',
	type: ''
};

const SnackBar = {
	SUCCESS: 'SUCCESS',
	ERROR: 'ERROR',
	INFO: 'INFO',
};

const SnackBarReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.SNACKBAR_SUCCESS:
			return {
				errorMessage: action.payload.message,
				errorStatus: action.payload.status,
				type: SnackBar.SUCCESS,
			};

		case ActionTypes.SNACKBAR_ERROR:
			return {
				errorMessage: action.payload.message,
				errorStatus: action.payload.status,
				type: SnackBar.ERROR,
			};

		case ActionTypes.SNACKBAR_INFO:
			return {
				errorMessage: action.payload.message,
				errorStatus: action.payload.status,
				type: SnackBar.INFO,
			};
		default:
			return state;
	}
};

export default SnackBarReducer;
