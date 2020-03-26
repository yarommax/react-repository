import {
	GET_SHOP_ITEMS,
	GET_ITEM_BY_ID,
	ADD_NEW_ITEM,
} from '../constant/shopItemsConstant';
import {
	getShopItemsSuccess,
	addNewItemSuccess, getItemByIdSuccess,
} from '../actions/shopItemsAction';
import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import { fetchShopItems, createNewItem, getItemById } from '../api/shopService';
import { showErrorSnackBar, showSuccessSnackBar } from '../actions/snackbarAction';

export function* watchShopItems() {
	yield takeEvery(GET_SHOP_ITEMS, getShopItemsAsync);
	yield takeEvery(ADD_NEW_ITEM, addNewItemAsync);
	yield takeLatest(GET_ITEM_BY_ID, getItemByIdAsync);
}

function* getShopItemsAsync() {
	try {
		const res = yield call(fetchShopItems);
		// delay is needed for testing
		yield delay(200);
		yield put(getShopItemsSuccess(res.data));
		yield put(showSuccessSnackBar({message: 'Items loaded'}));
	} catch (e) {
		yield put(showErrorSnackBar(e));
	}
}

function* addNewItemAsync(action) {
	try {
		const res = yield call(createNewItem,  action.payload);
		yield delay(200);
		yield put(addNewItemSuccess(res.data));
		yield put(showSuccessSnackBar({message: 'New item added!'}));
	} catch (e) {
		yield put(showErrorSnackBar(e));
	}
}

function* getItemByIdAsync(action) {
	try {
		const res = yield call(getItemById, action.payload);
		yield put(getItemByIdSuccess(res.data));
	} catch (e) {
		yield put(showErrorSnackBar(e));
	}
}


