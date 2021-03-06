import { SimCardStatusConstant } from '../constant/simCardStatusConstant';
import { ASSIGN_SIM_CARD_TO_USER, ON_CHANGE_USER_INFO } from '../constant/simCardActionConstant';

export const initialState = {
	activeStep: 0,
	userInfo: {
		firstName: '',
		lastName: '',
		birthDate: '',
		fullAge: '',
		city: '',
		address: '',
		userSimCards: [],
	},
	availableSimCardList: [
		{
			simNumber: '8668456186515618',
			phoneNumber: '+375297894561',
			status: SimCardStatusConstant.ACTIVE
		},
		{
			simNumber: '8868456186515618',
			phoneNumber: '+375296651231',
			status: SimCardStatusConstant.ACTIVE
		},
		{
			simNumber: '8968456186515618',
			phoneNumber: '+375297774445',
			status: SimCardStatusConstant.ACTIVE
		},
	],
	loading: false,
};

const SimCardReducer = (state = initialState, action) => {
	switch (action.type) {
		case ON_CHANGE_USER_INFO:
			return {
				...state,
				userInfo: {...state.userInfo, ...action.payload},
			};
		case ASSIGN_SIM_CARD_TO_USER:
			return {
				...state,
				userInfo: { ...state.userInfo, userSimCards: [...state.userInfo.userSimCards, action.payload] },
				availableSimCardList: state.availableSimCardList.map(card => {
					if (card.simNumber === action.payload.simNumber) {
						return {...card, status: SimCardStatusConstant.ASSIGNED }
					} return card
				})
			};
		default:
			return state;
	}
};

export default SimCardReducer;
