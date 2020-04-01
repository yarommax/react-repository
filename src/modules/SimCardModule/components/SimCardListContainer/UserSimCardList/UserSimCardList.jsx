import React, { useMemo } from 'react';
import {
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core';
import SimCardIcon from '@material-ui/icons/SimCard';
import StyledSimCardBlock from '../styled/StyledSimCardBlock';

const UserSimCardList = ({userSimCards}) => {

	const userSimCardList = useMemo(() => {
		return userSimCards && userSimCards.length > 0 && userSimCards.map(card => (
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
		))
	}, [userSimCards]);

	return (
		<StyledSimCardBlock>
			<List>{ userSimCardList || <p>No available sim-cards</p> }</List>
		</StyledSimCardBlock>
	)
};

export default UserSimCardList;
