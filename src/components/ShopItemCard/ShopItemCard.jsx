import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
	Card,
	Typography,
		CardActions,
		Box,
		IconButton,
		Grid,
		withStyles
} from '@material-ui/core';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';

const styles = theme => ({
	cardWrapper: {
		marginBottom: '10px',
		paddingTop: '0px',
		padding: '10px',
	},
	card: {
		height: 300,
		width: 'auto',
		borderRadius: '10px',
		boxShadow: 'none',
		border: '1px solid #eaeaea',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		marginBottom: '10px',
	},
	cardActions: {
		flexDirection: 'row-reverse'
	},
	favoriteItem: {
		display: 'none',
	},
});

class ShopItemCard extends Component {
	render() {
		const { item, classes } = this.props;
		return (
			<Grid item lg={3} md={4} sm={6} xs={12}>
				<div className={classes.cardWrapper}>
					<Card
						className={classes.card}
						style={{backgroundImage: `url(${item.url})`}}
						onClick={() =>this.props.history.push({
							pathname: `/item/${item._id}`,
							state: { id: item._id}
						})}
					>
						<CardActions className={classes.cardActions}>
							<IconButton>
								<FavoriteBorderRoundedIcon />
							</IconButton>
							<IconButton className={classes.favoriteItem}>
								<FavoriteRoundedIcon />
							</IconButton>
						</CardActions>

					</Card>

					<Box>
						<Typography className={classes.description} color="textSecondary">
							{item.category} {item.name}
						</Typography>
						<Typography color="textPrimary" gutterBottom>
							{item.cost}
						</Typography>
					</Box>
				</div>
			</Grid>
		);
	}
}


export default withStyles(styles, {name: 'ShopItemCard'})
(withRouter(ShopItemCard));
