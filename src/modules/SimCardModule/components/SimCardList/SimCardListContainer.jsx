import React from 'react';
import Typography from '@material-ui/core/Typography';
import UserSimCardListContainer from './UserSimCardList/UserSimCardListContainer';
import AvailableSimCardListContainer from './AvailableSimCardList/AvailableSimCardListContainer';

const SimCardListContainer = () => {
	return (
		<div>
			<Typography
				align="center"
				variant="h5"
			>Sim-card list</Typography>
			<div>
				<Typography variant="h6">Available sim-cards:</Typography>
				<AvailableSimCardListContainer />
			</div>
			<div>
				<Typography variant="h6">User sim-cards:</Typography>
				<UserSimCardListContainer />
			</div>
		</div>
	)
};

export default SimCardListContainer;
