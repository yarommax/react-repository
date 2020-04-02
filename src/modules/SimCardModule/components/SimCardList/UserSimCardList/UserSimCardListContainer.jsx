import { connect } from 'react-redux';
import { getUserSimCards } from '../../../selectors/simCardSelector';
import UserSimCardList from './UserSimCardList';

const mapStateToProps = (state) => ({
	userSimCards: getUserSimCards(state)
});

const UserSimCardListContainer = connect(mapStateToProps)(UserSimCardList);

export default UserSimCardListContainer;
