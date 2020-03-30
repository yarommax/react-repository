import {connect} from 'react-redux';
import ShopList from './ShopList';
import { getShopItems } from '../../actions/shopItemsAction';
import { getItems } from '../../selectors/shopItemsSelector';

const mapStateToProps = (state) => ({
	items: getItems(state),
	loading: state.shopItems.loading,
});

const mapDispatchToProps = (dispatch) => ({
	getShopItems: dispatch(getShopItems()),
});

const ShopListContainer = connect(mapStateToProps, mapDispatchToProps)(ShopList);

export default ShopListContainer;
