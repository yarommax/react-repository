import { connect } from 'react-redux';
import UserInfoForm from './UserInfoForm';
import { OnChangeUserInfo } from '../../actions/sim-card.action';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
	OnChangeUserInfo: (userInfo) => dispatch(OnChangeUserInfo(userInfo)),
});

const UserInfoFormContainer = connect(mapStateToProps, mapDispatchToProps)(UserInfoForm);

export default UserInfoFormContainer;
