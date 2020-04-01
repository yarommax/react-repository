import {
	ASSIGN_SIM_CARD_TO_USER,
	GET_SIM_CARD_LIST,
	ON_CHANGE_USER_INFO,
} from '../constant/simCardActionConstant';

export const onChangeUserInfo = (UserInfo) => ({
	type: ON_CHANGE_USER_INFO,
	payload: UserInfo
});

export const getSimCardList = () => ({
	type: GET_SIM_CARD_LIST,
});

export const assignSimCardToUser = (card) => ({
	type: ASSIGN_SIM_CARD_TO_USER,
	payload: card,
});
