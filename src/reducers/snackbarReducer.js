import {
	SNACKBAR_SUCCESS,
	SNACKBAR_ERROR,
	SNACKBAR_INFO,
	CLEAR_SNACKBAR,
} from '../constant/snackbarConstant';
import { SUCCESS,	ERROR, INFO } from '../constant/snackbarStatusConstant';

export const initialState = {
	message: '',
	status: '',
	type: '',
	snackbarOpen: false,
};

const SnackbarReducer = (state = initialState, action) => {
	switch (action.type) {
		case SNACKBAR_SUCCESS:
			return {
				...state,
				message: action.payload.message,
				status: action.payload.status,
				type: SUCCESS,
				snackbarOpen: true,
			};

		case SNACKBAR_ERROR:
			return {
				...state,
				message: action.payload.message,
				status: action.payload.status,
				type: ERROR,
				snackbarOpen: true,
			};

		case SNACKBAR_INFO:
			return {
				...state,
				message: action.payload.message,
				status: action.payload.status,
				type: INFO,
				snackbarOpen: true,
			};
		case CLEAR_SNACKBAR:
			return initialState;
		default:
			return state;
	}
};

export default SnackbarReducer;
