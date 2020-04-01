import { connect } from 'react-redux';
import UserInfoForm from './UserInfoForm';
import { onChangeUserInfo } from '../../actions/sim-card.action';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
	OnChangeUserInfo: (userInfo) => dispatch(onChangeUserInfo(userInfo)),
});

const UserInfoFormContainer = connect(mapStateToProps, mapDispatchToProps)(UserInfoForm);

export default UserInfoFormContainer;
