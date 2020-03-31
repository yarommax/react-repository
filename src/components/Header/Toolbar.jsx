import React from 'react';
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

export default function HeaderToolbar() {
	return (
		<StyledToolbar>
			<Grid item lg={12}>
				{ SECTIONS && SECTIONS.map(section => (
					<ToolbarMenuItem key={section.name} name={section.name} url={section.url}/>
				))}
			</Grid>

			{/*<Grid item lg={4}>*/}
			{/*  <div className={classes.toolbarActions}>*/}
			{/*    <IconButton color="inherit">*/}
			{/*      <SearchRoundedIcon/>*/}
			{/*    </IconButton>*/}
			{/*    <IconButton color="inherit">*/}
			{/*      <Badge badgeContent={4} color="secondary">*/}
			{/*        <ShoppingCartRoundedIcon/>*/}
			{/*      </Badge>*/}
			{/*    </IconButton>*/}
			{/*    <IconButton color="inherit">*/}
			{/*      <FavoriteRoundedIcon/>*/}
			{/*    </IconButton>*/}
			{/*    <Button variant="outlined" size="small">*/}
			{/*      Sign in*/}
			{/*    </Button>*/}
			{/*  </div>*/}
			{/*</Grid>*/}
		</StyledToolbar>
	)

}
