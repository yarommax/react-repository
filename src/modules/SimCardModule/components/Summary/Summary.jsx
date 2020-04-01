import React, { useMemo } from 'react';
import {
	Divider,
	List,
	ListItem,
	ListItemText,
	Typography,
} from '@material-ui/core';

const Summary = ({userInfo}) => {
	const userInfoLabels = Object.keys(userInfo);

	const userInfoList = useMemo(() => {
		return userInfoLabels && userInfoLabels.map((label) => {
			if (label === 'userSimCards') {
				return (
					<div key={label}>
						{
							userInfo[label].map((card, cardIndex) => (
								<div key={card.simNumber}>
									<ListItem>
										<ListItemText
											primary={`Sim-card - ${cardIndex}`}
										/>
										<ListItemText
											primary={card.simNumber}
											secondary="simNumber"
										/>
										<ListItemText
											primary={card.phoneNumber}
											secondary="phoneNumber"
										/>
									</ListItem>
									<Divider/>
								</div>
							))
						}
					</div>
				)
			}
			return (
				<div key={label}>
					<ListItem>
						<ListItemText
							primary={userInfo[label]}
							secondary={label}
						/>
					</ListItem>
					<Divider/>
				</div>
			)
		})
	}, [userInfo, userInfoLabels]);

	return (
		<>
			<Typography
				align="center"
				variant="h5"
			>
				User info summary
			</Typography>
			<List>{ userInfoList }</List>
		</>
	)
};

export default Summary;
