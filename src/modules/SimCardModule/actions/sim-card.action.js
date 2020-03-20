export const ActionTypes = {

	ON_CHANGE_ACTIVE_STEP: '[SimCard] Update active step',
	ON_CHANGE_USER_INFO: '[User] Change User Info',

	GET_SIM_CARD_LIST: '[SimCard] Get list of available sim cards',
	GET_SIM_CARD_LIST_SUCCESS: '[SimCard] Get list of sim cards available success',
	CHANGE_SIM_CARD_STATUS: '[SimCard] Change sim card status',

	ASSIGN_SIM_CARD_TO_USER: '[SimCard] Assign sim-card to user',
};

export const OnChangeActiveStep = (step) => ({
	type: ActionTypes.ON_CHANGE_ACTIVE_STEP,
	payload: step,
});

export const OnChangeUserInfo = (UserInfo) => ({
	type: ActionTypes.ON_CHANGE_USER_INFO,
	payload: UserInfo
});

export const GetSimCardList = () => ({
	type: ActionTypes.GET_SIM_CARD_LIST,
});

export const GetSimCardListSuccess = (simCards) => ({
	type: ActionTypes.GET_SIM_CARD_LIST_SUCCESS,
	payload: simCards,
});

export const ChangeSimCardStatus = (status) => ({
	type: ActionTypes.CHANGE_SIM_CARD_STATUS,
	payload: status,
});

export const AssignSimCardToUser = (card) => ({
	type: ActionTypes.ASSIGN_SIM_CARD_TO_USER,
	payload: card,
});
