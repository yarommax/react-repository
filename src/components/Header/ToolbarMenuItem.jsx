import React from 'react';
import StyledToolbarMenuItem from './styled/StyledToolbarMenuItem';

const ToolbarMenuItem = ({name, url}) => {
	return (
		<StyledToolbarMenuItem
			key={name}
			color="inherit"
			variant="body2"
			href="#"
			to={url}
		>
			{name}
		</StyledToolbarMenuItem>
	)
};

export default ToolbarMenuItem;
