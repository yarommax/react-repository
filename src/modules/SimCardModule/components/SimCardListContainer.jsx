import React from 'react';
import Typography from '@material-ui/core/Typography';
import AvailableSimCardList from './AvailableSimCardList';
import UserSimCardList from './UserSimCardList';

export default function SimCardListContainer() {
	return (
		<>
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

		</>
	)
}
