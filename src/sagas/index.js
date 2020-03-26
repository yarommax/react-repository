import { all } from 'redux-saga/effects';
import { watchShopItems } from './shopItemsSaga';

export default function* rootSaga() {
	yield all([
		watchShopItems(),
	]);
}
