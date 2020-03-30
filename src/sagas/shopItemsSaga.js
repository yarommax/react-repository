import {
	GET_SHOP_ITEMS,
	GET_ITEM_BY_ID,
	ADD_NEW_ITEM,
	ADD_NEW_ITEM_SUCCESS,
} from '../constant/shopItemsConstant';
import {
	getShopItemsSuccess,
	addNewItemSuccess,
	getItemByIdSuccess,
} from '../actions/shopItemsAction';
import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { fetchShopItems, createNewItem, getItemById } from '../api/shopService';
import { showErrorSnackBar, showSuccessSnackBar } from '../actions/snackbarAction';

export function* watchShopItems() {
	yield takeLatest(GET_SHOP_ITEMS, getShopItemsAsync);
	yield takeLatest(ADD_NEW_ITEM, addNewItemAsync);
	yield takeLatest(GET_ITEM_BY_ID, getItemByIdAsync);
	yield takeLatest(ADD_NEW_ITEM_SUCCESS, addNewItemSuccessSnackbar);
}

function* getShopItemsAsync() {
	try {
		const res = yield call(fetchShopItems);
		// delay is needed for testing
		yield delay(200);
		yield put(getShopItemsSuccess(res.data));
	} catch (e) {
		yield put(showErrorSnackBar(e));
	}
}

function* addNewItemAsync(action) {
	try {
		const res = yield call(createNewItem,  action.payload);
		yield delay(200);
		yield put(addNewItemSuccess(res.data));
	} catch (e) {
		yield put(showErrorSnackBar(e));
	}
}

function* addNewItemSuccessSnackbar() {
	yield put(showSuccessSnackBar({message: 'New item added!'}));
}

function* getItemByIdAsync(action) {
	try {
		if (action.payload) {
			const res = yield call(getItemById, action.payload);
			yield put(getItemByIdSuccess(res.data));
		}
	} catch (e) {
		yield put(showErrorSnackBar(e));
	}
}


