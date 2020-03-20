export const ActionTypes = {
	GET_SHOP_ITEMS: '[ITEMS]: Get all items',
	GET_SHOP_ITEMS_SUCCESS: '[ITEMS]: Get all items success',
	GET_SHOP_ITEMS_ERROR: '[ITEMS]: Get all items error',

	GET_ITEM_BY_ID: '[ITEMS]: Get shop item by id',
	GET_ITEM_BY_ID_SUCCESS: '[ITEMS]: Get shop item by id success',
	GET_ITEM_BY_ID_ERROR: '[ITEMS]: Get shop item by id error',

	ADD_NEW_ITEM: '[ITEMS]: Add new item',
	ADD_NEW_ITEM_SUCCESS: '[ITEMS]: Add new item success',
	ADD_NEW_ITEM_ERROR: '[ITEMS]: Add new item error',
};

export const GetShopItems = () => ({
	type: ActionTypes.GET_SHOP_ITEMS,
});

export const GetShopItemsSuccess = (shopItems) => ({
	type: ActionTypes.GET_SHOP_ITEMS_SUCCESS,
	payload: shopItems,
});

export const GetShopItemsError = (error) => ({
	type: ActionTypes.GET_SHOP_ITEMS_ERROR,
	payload: error,
});

export const GetItemById = (id) => ({
	type: ActionTypes.GET_ITEM_BY_ID,
	payload: id,
});

export const GetItemByIdSuccess = (item) => ({
	type: ActionTypes.GET_ITEM_BY_ID_SUCCESS,
	payload: item,
});

export const GetItemByIdError = (error) => ({
	type: ActionTypes.GET_ITEM_BY_ID_ERROR,
	payload: error,
});

export const AddNewItem = (newItem) => ({
	type: ActionTypes.ADD_NEW_ITEM,
	payload: newItem,
});

export const AddNewItemSuccess = (createdItem) => ({
	type: ActionTypes.ADD_NEW_ITEM_SUCCESS,
	payload: createdItem,
});

export const AddNewItemError = (error) => ({
	type: ActionTypes.ADD_NEW_ITEM_ERROR,
	payload: error,
});
