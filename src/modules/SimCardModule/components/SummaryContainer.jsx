import {connect} from 'react-redux';
import Summary from './Summary';
import { getUserInfo } from '../selectors/simCardSelector';

const mapStateToProps = store => ({
	userInfo: getUserInfo(store),
});

const SummaryContainer = connect(mapStateToProps)(Summary);

export default SummaryContainer;
