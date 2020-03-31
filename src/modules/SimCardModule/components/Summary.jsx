import React from 'react';
import {
	Divider,
	List,
	ListItem,
	ListItemText,
	Typography,
} from '@material-ui/core';

const Summary = ({userInfo}) => {
	const userObjectKeys = Object.keys(userInfo);

	return (
		<div>
			<Typography
				align="center"
				variant="h5"
			>
				User info summary
			</Typography>
			{
				userInfo ?
					<List>
						{
							userObjectKeys.map((key, i) => {
								if (key === 'userSimCards') {
									return (
										<div key={i}>
											{
												userInfo[key].map((card, cardIndex) => (
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
									<div key={i}>
										<ListItem>
											<ListItemText
												primary={userInfo[key]}
												secondary={key}
											/>
										</ListItem>
										<Divider/>
									</div>
								)
							})
						}
					</List> :
					<Typography align="center" variant="subtitle2">There is no user info</Typography>
			}
		</div>
	)
};

export default Summary;
