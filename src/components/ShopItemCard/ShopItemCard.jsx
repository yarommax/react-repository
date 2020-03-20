import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import withStyles from '@material-ui/core/styles/withStyles';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';

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
							{item.name}
						</Typography>
						<Typography className={classes.price} color="textPrimary" gutterBottom>
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
