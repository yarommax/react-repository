import {
	GET_SHOP_ITEMS,
	GET_SHOP_ITEMS_SUCCESS,
	GET_ITEM_BY_ID,
	GET_ITEM_BY_ID_SUCCESS,
	ADD_NEW_ITEM,
	ADD_NEW_ITEM_SUCCESS,
} from '../constant/shopItemsConstant';

export const initialState = {
	items: [],
	newItem: {
		name: '',
		cost: 0,
		category: 0,
	},
	selectedItem: {},
	loading: false,
};

const ShopItemsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_SHOP_ITEMS:
			return {
				...state,
				loading: true,
			};
		case GET_SHOP_ITEMS_SUCCESS:
			return {
				...state,
				items: action.payload,
				loading: false,
			};
		case ADD_NEW_ITEM:
			return {
				...state,
				newItem: action.payload,
				loading: true,
			};
		case ADD_NEW_ITEM_SUCCESS:
			return {
				...state,
				newItem: action.payload,
				loading: false,
			};
		case GET_ITEM_BY_ID:
			return {
				...state,
				loading: true,
			};
		case GET_ITEM_BY_ID_SUCCESS:
			return {
				...state,
				selectedItem: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};

export default ShopItemsReducer;
