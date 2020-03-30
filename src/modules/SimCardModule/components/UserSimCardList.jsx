import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	withStyles
} from '@material-ui/core';
import SimCardIcon from '@material-ui/icons/SimCard';
import { getUserSimCards } from '../selectors/simCardSelector';

const styles = () => ({
	simCardBlock: {
		marginBottom: '30px',
		width: '60%'
	}
});

class UserSimCardList extends Component {
	render() {
		const { userSimCards, classes } = this.props;
		return (
			<div className={classes.simCardBlock}>
				<List>
					{
						userSimCards && userSimCards.length > 0 ? userSimCards.map(card => (
								<div key={card.simNumber}>
									<ListItem>
										<ListItemIcon>
											<SimCardIcon />
										</ListItemIcon>
										<ListItemText
												primary={card.phoneNumber}
												secondary={card.simNumber}
										/>
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
	userSimCards: getUserSimCards(store)
});

export default withStyles(styles)(
		connect(mapStateToProps)(UserSimCardList)
)
