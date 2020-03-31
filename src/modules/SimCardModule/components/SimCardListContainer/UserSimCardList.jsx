import React from 'react';
import { connect } from 'react-redux';
import {
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core';
import SimCardIcon from '@material-ui/icons/SimCard';
import { getUserSimCards } from '../../selectors/simCardSelector';
import StyledSimCardBlock from './styled/StyledSimCardBlock';

const UserSimCardList = ({userSimCards}) => {
	return (
		<StyledSimCardBlock>
			<List>
				{
					userSimCards && userSimCards.length > 0 ? userSimCards.map(card => (
							<div key={card.phoneNumber}>
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
		</StyledSimCardBlock>
	)
};

const mapStateToProps = store => ({
	userSimCards: getUserSimCards(store)
});

export default connect(mapStateToProps)(UserSimCardList);
