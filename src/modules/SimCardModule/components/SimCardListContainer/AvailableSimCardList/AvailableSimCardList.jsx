import React, { useCallback, useEffect, useMemo } from 'react';
import {
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	ListItemSecondaryAction,
	IconButton,
} from '@material-ui/core';
import SimCardIcon from '@material-ui/icons/SimCard';
import AddIcon from '@material-ui/icons/Add';
import StyledSimCardBlock from '../styled/StyledSimCardBlock';

const AvailableSimCardList = ({availableSimCardList, getSimCardList, assignSimCardToUser, showSuccessSnackBar}) => {
	useEffect(() => {
		getSimCardList();
	}, [getSimCardList]);

	const handleAddingSimCard = useCallback((card) => (event) => {
		assignSimCardToUser(card);
		showSuccessSnackBar({message: 'Sim card added!'});
	}, [assignSimCardToUser, showSuccessSnackBar]);

	const simCardList = useMemo(() => {
		return availableSimCardList
			&& availableSimCardList.length > 0
			&& availableSimCardList.map(card => {
					return <div key={card.simNumber}>
						<ListItem>
							<ListItemIcon>
								<SimCardIcon/>
							</ListItemIcon>
							<ListItemText
								primary={card.phoneNumber}
								secondary={card.simNumber}
							/>
							<ListItemSecondaryAction>
								<IconButton
									edge="end"
									aria-label="add sim-card"
									onClick={handleAddingSimCard(card)}
								>
									<AddIcon/>
								</IconButton>
							</ListItemSecondaryAction>
						</ListItem>
						<Divider/>
					</div>
				}
			)
	}, [handleAddingSimCard, availableSimCardList]);

	return (
		<StyledSimCardBlock>
			<List>
				{ simCardList || <p>No available sim-cards</p>}
			</List>
		</StyledSimCardBlock>
	)
};

export default AvailableSimCardList;
