import React, { Component } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { GetItemById } from '../../actions/shop-items.action';
import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Header from '../Header/Header';

const styles = () => ({
	card: {
		height: '50vh'
	},
	itemPhoto: {
		width: '100%',
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

class ShopItemView extends Component {
	componentDidMount() {
		const id = this.props.location.state.id;
		this.props.dispatch(GetItemById(id));
	}

	render() {
		const { classes, selectedItem } = this.props;
		return (
			<>
				<Header />
				<Container maxWidth={'lg'}>
					<Card className={classes.card} variant={'outlined'}>
						<Grid container>
							<Grid item lg={7}>
								<img className={classes.itemPhoto} src={selectedItem.url} alt={selectedItem.name}/>
							</Grid>

							<Grid item lg={5} className={classes.itemDescription}>
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
	}
}

const mapStateToProps = store => ({
	...store.shopItems,
});

export default compose(
	withStyles(styles),
	connect(mapStateToProps),
)(withRouter(ShopItemView))
