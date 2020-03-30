import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import {
	Typography,
	CardActions,
	Box,
	IconButton,
	Grid,
	CardMedia,
} from '@material-ui/core';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import StyledItemCardWrapper from './styled/StyledItemCardWrapper';
import StyledCard from './styled/StyledCard';
import { ROUTES } from '../../constant/routeConstant';

const ShopItemCard = ({item, ...otherProps}) => {
	const history = useHistory();
	function handleOpenItemView() {
		history.push(`${ROUTES.SHOP_ITEM}/${item._id}`);
	}

	return (
		<Grid item lg={3} md={4} sm={6} xs={12}>
			<StyledItemCardWrapper>
				<StyledCard onClick={handleOpenItemView}>
					<CardMedia
						style={{height: '100%'}}
						image={item.url}
					/>
					<CardActions>
						<IconButton>
							<FavoriteBorderRoundedIcon />
						</IconButton>
						<IconButton>
							<FavoriteRoundedIcon />
						</IconButton>
					</CardActions>
				</StyledCard>

				<Box>
					<Typography color="textSecondary">
						{item.category} {item.name}
					</Typography>
					<Typography color="textPrimary" gutterBottom>
						{item.cost}
					</Typography>
				</Box>
			</StyledItemCardWrapper>
		</Grid>
	);
};

export default withRouter(ShopItemCard);
