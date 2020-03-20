import { ActionTypes } from '../actions/shop-items.action';

export const initialState = {
	items: [],
	newItem: {
		name: '',
		cost: 0,
		category: 0,
	},
	selectedItem: {
		id: '',
	},
	loading: false,
};

const ShopItemsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.GET_SHOP_ITEMS:
			return Object.assign({},state, {
				loading: true,
			});
		case ActionTypes.GET_SHOP_ITEMS_SUCCESS:
			return Object.assign({}, state,{
					items: action.payload,
					loading: false,
				},
			);
		case ActionTypes.GET_SHOP_ITEMS_ERROR:
			return Object.assign({}, state,{
					errors: action.payload,
					loading: false,
				},
			);
		case ActionTypes.ADD_NEW_ITEM:
			return Object.assign({}, state,{
				newItem: action.payload,
				loading: true,
			});
		case ActionTypes.ADD_NEW_ITEM_SUCCESS:
			return Object.assign({}, state,{
				newItem: action.payload,
				loading: false,
			});
		case ActionTypes.ADD_NEW_ITEM_ERROR:
			return Object.assign({}, state,{
				errors: action.payload,
				loading: false,
			});

		case ActionTypes.GET_ITEM_BY_ID:
			return Object.assign({}, state,{
				loading: true,
			});
		case ActionTypes.GET_ITEM_BY_ID_SUCCESS:
			return Object.assign({}, state,{
				selectedItem: action.payload,
				loading: false,
			});
		case ActionTypes.GET_ITEM_BY_ID_ERROR:
			return Object.assign({}, state,{
				errors: action.payload,
				loading: false,
			});
		default:
			return state;
	}
};

export default ShopItemsReducer;
