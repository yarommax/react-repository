import {
	ActionTypes,
	GetShopItemsSuccess,
	AddNewItemSuccess, GetItemByIdSuccess,
} from '../actions/shop-items.action';

import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import { fetchShopItems, createNewItem, getItemById } from '../api/shop-api';
import { ShowErrorSnackBar, ShowSuccessSnackBar } from '../actions/snackbar.action';

// fetch items
export function* watchGetShopItems() {
	yield takeEvery(ActionTypes.GET_SHOP_ITEMS, getShopItemsAsync);
}

function* getShopItemsAsync() {
	try {
		const res = yield call(fetchShopItems);
		// delay is needed for testing
		yield delay(200);
		yield put(GetShopItemsSuccess(res.data));
		yield put(ShowSuccessSnackBar({message: 'Items loaded'}))
	} catch (e) {
		yield put(ShowErrorSnackBar(e));
	}
}

// add new item
export function* watchAddNewItem() {
	yield takeEvery(ActionTypes.ADD_NEW_ITEM, addNewItemAsync);
}

function* addNewItemAsync(action) {
	try {
		const res = yield call(createNewItem,  action.payload);
		yield delay(200);
		yield put(AddNewItemSuccess(res.data));
		yield put(ShowSuccessSnackBar({message: 'New item added!'}))
	} catch (e) {
		yield put(ShowErrorSnackBar(e))
	}
}

export function* watchGetItemById() {
	yield takeLatest(ActionTypes.GET_ITEM_BY_ID, getItemByIdAsync)
}

function* getItemByIdAsync(action) {
	try {
		const res = yield call(getItemById, action.payload);
		yield put(GetItemByIdSuccess(res.data));
	} catch (e) {
		yield put(ShowErrorSnackBar(e))
	}
}


