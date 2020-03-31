import {
	ASSIGN_SIM_CARD_TO_USER,
	GET_SIM_CARD_LIST,
	ON_CHANGE_USER_INFO,
} from '../constant/simCardActionConstant';

export const OnChangeUserInfo = (UserInfo) => ({
	type: ON_CHANGE_USER_INFO,
	payload: UserInfo
});

export const GetSimCardList = () => ({
	type: GET_SIM_CARD_LIST,
});

export const AssignSimCardToUser = (card) => ({
	type: ASSIGN_SIM_CARD_TO_USER,
	payload: card,
});
