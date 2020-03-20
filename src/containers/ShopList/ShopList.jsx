import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router';
import { GetShopItems } from '../../actions/shop-items.action';
import ShopItemCard from '../../components/ShopItemCard/ShopItemCard';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from '../../components/Header/Header';

class ShopList extends Component {

	componentDidMount() {
		this.props.dispatch(GetShopItems());
	}

	render() {
		const {items, loading} = this.props;
		return (
			<>
				<Header />
				<Container maxWidth="lg">
					<Grid
							container
							direction={'row'}
							alignItems={'center'}
							justify={'center'}
					>
						{
							!loading && items && items.length > 0 ? items.map(item => <ShopItemCard key={item._id} item={item}/>) :
									<Grid item style={{paddingTop: '40px'}}>
										<CircularProgress color="primary"/>
									</Grid>
						}
					</Grid>
				</Container>
			</>
		)
	}
}

ShopList.propTypes = {
	items: PropTypes.array,
	dispatch: PropTypes.func.isRequired
};

const mapStateToProps = store => {
	return {
		...store.shopItems,
	}
};

export default compose(
		connect(mapStateToProps)
)(withRouter(ShopList))
