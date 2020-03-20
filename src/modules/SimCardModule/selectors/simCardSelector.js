import SimCardStatus from '../../../utils/sim-card-status';

export const getUserInfo = (store) => store.simCard.userInfo;
export const getUserSimCards = (store) => store.simCard.userInfo.userSimCards;
export const getAvailableSimCards = (store) =>
		store.simCard.availableSimCardList.filter(card => card.status === SimCardStatus.ACTIVE);
