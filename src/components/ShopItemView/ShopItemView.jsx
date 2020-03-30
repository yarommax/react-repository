import React, { useEffect } from 'react';
import compose from 'recompose/compose';
import { useParams, withRouter } from 'react-router';
import {
	withStyles,
	Container,
	Card,
	CardContent,
	Grid,
	Typography,
} from '@material-ui/core';
import Header from '../Header/Header';

const styles = () => ({
	cardContainer: {
		height: '600px',
	},
	itemPhoto: {
		height: '100%',
	},
	itemName: {
		textAlign: 'center',
		padding: '10px 0'
	},
	itemDescription: {
		padding: '50px 10px'
	},
	descField: {
		padding: '20px 0'
	}
});

const ShopItemView = ({getItemById, selectedItem, classes}) => {
	const { id } = useParams();
	useEffect(() => {
		getItemById(id);
	}, [id]);

	return (
		<>
			<Header />
			<Container maxWidth="lg">
				<Card variant="outlined">
					<Grid container className={classes.cardContainer}>
						<Grid item lg={5}>
							<div
								className={classes.itemPhoto}
								style={{background: `url(${selectedItem.url}) no-repeat center center`}}>
							</div>
						</Grid>

						<Grid item lg={7} className={classes.itemDescription}>
							<CardContent>
								<Typography variant="h3" className={classes.itemName}>
									{selectedItem.name}
								</Typography>
								<Typography variant="h5" color="textSecondary" className={classes.descField}>
									Category: {selectedItem.category}
								</Typography>
								<Typography variant="h5" color="textSecondary" className={classes.descField}>
									Cost: {selectedItem.cost} $
								</Typography>
							</CardContent>
						</Grid>
					</Grid>
				</Card>
			</Container>
		</>
	)
};

export default compose(withStyles(styles))(withRouter(ShopItemView))
