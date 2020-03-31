import {connect} from 'react-redux';
import { addNewItem } from '../../actions/shopItemsAction';
import NewItem from './NewItem';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
	addNewItem: (newItem) => dispatch(addNewItem(newItem)),
});

const NewItemContainer = connect(mapStateToProps, mapDispatchToProps)(NewItem);

export default NewItemContainer;
