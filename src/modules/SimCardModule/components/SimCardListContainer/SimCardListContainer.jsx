import React from 'react';
import Typography from '@material-ui/core/Typography';
import AvailableSimCardList from './AvailableSimCardList';
import UserSimCardList from './UserSimCardList';

const SimCardListContainer = () => {
	return (
		<div>
			<Typography
				align="center"
				variant="h5"
			>Sim-card list</Typography>
			<div>
				<Typography variant="h6">Available sim-cards:</Typography>
				<AvailableSimCardList />
			</div>
			<div>
				<Typography variant="h6">User sim-cards:</Typography>
				<UserSimCardList />
			</div>
		</div>
	)
};

export default SimCardListContainer;
