import { combineReducers } from 'redux';
import ShopItemsReducer from './shop-items.reducer';
import SnackBarReducer from './snackbar.reducer';
import SimCardReducer from '../modules/SimCardModule/reducers/sim-card.reducer';

const rootReducer = combineReducers({
	shopItems: ShopItemsReducer,
	snackBar: SnackBarReducer,
	simCard: SimCardReducer,
});

export default rootReducer;
