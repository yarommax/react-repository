import {
	GET_SHOP_ITEMS,
	GET_SHOP_ITEMS_SUCCESS,
	GET_ITEM_BY_ID,
	GET_ITEM_BY_ID_SUCCESS,
	ADD_NEW_ITEM,
	ADD_NEW_ITEM_SUCCESS,
} from '../constant/shopItemsConstant';

export const getShopItems = () => ({
	type: GET_SHOP_ITEMS,
});

export const getShopItemsSuccess = (shopItems) => ({
	type: GET_SHOP_ITEMS_SUCCESS,
	payload: shopItems,
});

export const getItemById = (id) => ({
	type: GET_ITEM_BY_ID,
	payload: id,
});

export const getItemByIdSuccess = (item) => ({
	type: GET_ITEM_BY_ID_SUCCESS,
	payload: item,
});

export const addNewItem = (newItem) => ({
	type: ADD_NEW_ITEM,
	payload: newItem,
});

export const addNewItemSuccess = (createdItem) => ({
	type: ADD_NEW_ITEM_SUCCESS,
	payload: createdItem,
});
