import React from 'react';
import {
	Container,
	Typography,
} from '@material-ui/core';
import StyledHeader from './styled/StyledHeader';
import StyledLogo from './styled/StyledLogo';
import HeaderToolbar from './Toolbar';
import { ROUTES } from '../../constant/routeConstant';

export function Header() {
	return (
		<StyledHeader>
			<Container maxWidth="lg">
				<StyledLogo to={ROUTES.SHOP_LIST}>
					<Typography variant="h5">Shoes Box</Typography>
				</StyledLogo>
				<HeaderToolbar />
			</Container>
		</StyledHeader>
	)
}

export default Header;
