import {
	Divider, List, ListItem,
	ListItemIcon, ListItemText, ListItemSecondaryAction, IconButton, withStyles
} from '@material-ui/core';
import SimCardIcon from '@material-ui/icons/SimCard';
import AddIcon from '@material-ui/icons/Add';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AssignSimCardToUser, GetSimCardList } from '../actions/sim-card.action';
import { getAvailableSimCards } from '../selectors/simCardSelector';
import { ShowSuccessSnackBar } from '../../../actions/snackbar.action';

const styles = () => ({
	simCardBlock: {
		marginBottom: '30px',
		width: '60%'
	}
});

class AvailableSimCardList extends Component {
	componentDidMount() {
		this.props.dispatch(GetSimCardList())
	}

	handleAddingSimCard(card) {
		this.props.dispatch(AssignSimCardToUser(card));
		this.props.dispatch(ShowSuccessSnackBar({message: 'Sim card added!'}));
	}

	render() {
		const { availableSimCardList, classes } = this.props;
		return (
			<div className={classes.simCardBlock}>
				<List>
					{
						availableSimCardList && availableSimCardList.length> 0 ? availableSimCardList.map(card => (
								<div key={card.simNumber}>
									<ListItem>
										<ListItemIcon>
											<SimCardIcon />
										</ListItemIcon>
										<ListItemText
												primary={card.phoneNumber}
												secondary={card.simNumber}
										/>
										<ListItemSecondaryAction>
											<IconButton
												edge="end"
												aria-label="add sim-card"
												onClick={
													this.handleAddingSimCard.bind(this, card)}
											>
												<AddIcon />
											</IconButton>
										</ListItemSecondaryAction>
									</ListItem>
									<Divider />
								</div>
							)
						) : <p>No available sim-cards</p>
					}
				</List>
			</div>
		)
	}
}

const mapStateToProps = store => ({
	availableSimCardList: getAvailableSimCards(store)
});

export default withStyles(styles)(
	connect(mapStateToProps)(AvailableSimCardList)
)
