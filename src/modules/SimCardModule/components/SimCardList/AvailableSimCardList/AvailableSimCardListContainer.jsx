import { connect } from 'react-redux';
import { getAvailableSimCards } from '../../../selectors/simCardSelector';
import { assignSimCardToUser, getSimCardList } from '../../../actions/sim-card.action';
import { showSuccessSnackBar } from '../../../../../actions/snackbarAction';
import AvailableSimCardList from './AvailableSimCardList';

const mapStateToProps = (state) => ({
	availableSimCardList: getAvailableSimCards(state)
});

const mapDispatchToProps = (dispatch) => ({
	getSimCardList: () => dispatch(getSimCardList()),
	assignSimCardToUser: (card) => dispatch(assignSimCardToUser(card)),
	showSuccessSnackBar: (message) => dispatch(showSuccessSnackBar(message)),
});

const AvailableSimCardListContainer = connect(mapStateToProps, mapDispatchToProps)(AvailableSimCardList);

export default AvailableSimCardListContainer;
