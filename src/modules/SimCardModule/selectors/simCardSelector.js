import { SimCardStatusConstant } from '../constant/simCardStatusConstant';

export const getUserInfo = (store) => store.simCard.userInfo;
export const getUserSimCards = (store) => store.simCard.userInfo.userSimCards;
export const getAvailableSimCards = (store) =>
		store.simCard.availableSimCardList.filter(card => card.status === SimCardStatusConstant.ACTIVE);
