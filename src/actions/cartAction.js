import {
	CART_GET_ALL_ITEMS,
	CART_ADD_ITEM,
} from '../constant/cartConstant';

export const cartGetAllItems = () => ({
	type: CART_GET_ALL_ITEMS,
});

export const cartAddItem = (newItem) => ({
	type: CART_ADD_ITEM,
	payload: newItem,
});

