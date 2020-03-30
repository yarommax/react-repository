import {connect} from 'react-redux';
import ShopItemView from './ShopItemView';
import { getItemById } from '../../actions/shopItemsAction';
import { getSelectedItem } from '../../selectors/shopItemsSelector';

const mapStateToProps = (state) => ({
	selectedItem: getSelectedItem(state),
});

const mapDispatchToProps = (dispatch) => ({
	getItemById: (id) => dispatch(getItemById(id)),
});

const ShopItemViewContainer = connect(mapStateToProps, mapDispatchToProps)(ShopItemView);

export default ShopItemViewContainer;
