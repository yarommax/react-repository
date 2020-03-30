import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ShopItemCard from '../../components/ShopItemCard/ShopItemCard';
import Header from '../../components/Header/Header';
import { Loader } from '../../components/Loader/Loader';

const ShopList = ({getShopItems, items, loading}) => {
	useEffect(() => {
		if(!items) {
			getShopItems();
		}
	});

	return (
		<>
			<Header />
			<Container maxWidth="lg">
				<Grid
					container
					direction="row"
					alignItems="center"
					justify="center"
				>
					{
						!loading && items ?
								items.map(item =>
									<ShopItemCard key={item._id} item={item}/>)
							: <Loader color="primary"/>
					}
				</Grid>
			</Container>
		</>
	)
};

ShopList.propTypes = {
	items: PropTypes.array,
	loading: PropTypes.bool,
	getShopItems: PropTypes.object,
};

export default withRouter(ShopList)
