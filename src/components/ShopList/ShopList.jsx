import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ShopItemCard from '../ShopItemCard/ShopItemCard';
import { Loader } from '../Loader/Loader';
import Header from '../Header/Header';

const ShopList = ({getShopItems, items, loading}) => {
	useEffect(() => {
		items || getShopItems();
	});

	const itemsList = useMemo(() => {
		return !loading && items && items.map(item => {
			return <ShopItemCard key={item._id} item={item}/>
		})
	}, [loading, items]);

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
					{itemsList || <Loader color="primary"/>}
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
