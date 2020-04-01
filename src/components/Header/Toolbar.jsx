import React, { useMemo } from 'react';
import Grid from '@material-ui/core/Grid';
import ToolbarMenuItem from './ToolbarMenuItem';
import StyledToolbar from './styled/StyledToolbar';

const SECTIONS = [
	{
		name: 'Catalog',
		url: '/'
	},
	{
		name: 'Add item',
		url: '/item/new'
	},
	{
		name: 'Get simcard',
		url: '/test'
	},
	{
		name: 'About',
		url: '/about'
	},
];

const HeaderToolbar = () => {
	const menuItems = useMemo(() => {
		return SECTIONS && SECTIONS.map(section => (
			<ToolbarMenuItem key={section.name} name={section.name} url={section.url}/>
		));
	}, []);

	return (
		<StyledToolbar>
			<Grid item lg={12}>
				{ menuItems }
			</Grid>
		</ StyledToolbar>
	);
};

export default HeaderToolbar;

