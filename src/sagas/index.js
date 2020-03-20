import { all } from 'redux-saga/effects';
import { watchAddNewItem, watchGetItemById, watchGetShopItems } from './shop-items.saga';

export default function* rootSaga() {
	yield all([
		watchGetShopItems(),
		watchAddNewItem(),
		watchGetItemById(),
	]);
}
