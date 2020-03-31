import React, { useEffect } from 'react';
import { useParams, withRouter } from 'react-router';
import {
	Container,
	Grid,
	Typography,
	Card,
	CardContent,
} from '@material-ui/core';
import StyledCardMedia from './styled/StyledCardMedia';
import StyledGrid from './styled/StyledCardView';
import Header from '../Header/Header';

const ShopItemView = ({getItemById, selectedItem}) => {
	const { id } = useParams();
	useEffect(() => {
		getItemById(id);
	}, [id, getItemById]);

	return (
		<>
			<Header />
			<Container maxWidth="lg">
				<Card variant="outlined">
					<StyledGrid container>
						<Grid item lg={5}>
							{selectedItem && selectedItem.url && <StyledCardMedia image={selectedItem.url} />}
						</Grid>

						<Grid item lg={7}>
							<CardContent>
								<Typography variant="h3" gutterBottom align="center">
									{selectedItem.name}
								</Typography>
								<Typography variant="h5" gutterBottom color="textSecondary">
									Category: {selectedItem.category}
								</Typography>
								<Typography variant="h5" gutterBottom color="textSecondary">
									Cost: {selectedItem.cost} $
								</Typography>
							</CardContent>
						</Grid>
					</StyledGrid>
				</Card>
			</Container>
		</>
	)
};

export default withRouter(ShopItemView)
