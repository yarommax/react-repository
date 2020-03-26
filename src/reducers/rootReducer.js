import { combineReducers } from 'redux';
import ShopItemsReducer from './shopItemsReducer';
import SnackbarReducer from './snackbarReducer';
import SimCardReducer from '../modules/SimCardModule/reducers/sim-card.reducer';

const rootReducer = combineReducers({
	shopItems: ShopItemsReducer,
	snackBar: SnackbarReducer,
	simCard: SimCardReducer,
});

export default rootReducer;
