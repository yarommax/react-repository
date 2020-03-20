export const ActionTypes = {
	CART_GET_ALL: '[Cart] Get all items',
	CART_GET_ALL_SUCCESS: '[Cart] get all items',

	CART_ADD_ITEM: '[Cart] Add item to cart',
};

export const CartGetAllItems = () => ({
	type: ActionTypes.CART_GET_ALL,
});

export const CartGetAllItemsSuccess = (cartItems) => ({
	type: ActionTypes.CART_GET_ALL_SUCCESS,
	payload: cartItems,
});

export const CartAddItem = (newItem) => ({
	type: ActionTypes.CART_ADD_ITEM,
	payload: newItem,
});

