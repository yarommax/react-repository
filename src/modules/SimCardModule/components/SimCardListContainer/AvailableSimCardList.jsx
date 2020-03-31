import React, { useEffect } from 'react';
import { connect } from 'react-redux';
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
import { AssignSimCardToUser, GetSimCardList } from '../../actions/sim-card.action';
import { getAvailableSimCards } from '../../selectors/simCardSelector';
import { showSuccessSnackBar } from '../../../../actions/snackbarAction';
import StyledSimCardBlock from './styled/StyledSimCardBlock';

const AvailableSimCardList = ({availableSimCardList, GetSimCardList, AssignSimCardToUser, showSuccessSnackBar, classes}) => {
	useEffect(() => {
		GetSimCardList();
	}, [GetSimCardList]);


	const handleAddingSimCard = (card) => {
		AssignSimCardToUser(card);
		showSuccessSnackBar({message: 'Sim card added!'});
	};

	return (
		<StyledSimCardBlock>
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
											onClick={() => handleAddingSimCard(card)}
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
		</StyledSimCardBlock>
	)
};

const mapStateToProps = store => ({
	availableSimCardList: getAvailableSimCards(store)
});

const mapDispatchToProps = dispatch => ({
	GetSimCardList: () => dispatch(GetSimCardList()),
	AssignSimCardToUser: (card) => dispatch(AssignSimCardToUser(card)),
	showSuccessSnackBar: (message) => dispatch(showSuccessSnackBar(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AvailableSimCardList);
