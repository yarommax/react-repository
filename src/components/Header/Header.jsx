import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';

import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';

import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';

const styles = theme => ({
	root: {
		paddingTop: '15px',
		marginBottom: '50px',
		flexGrow: 1,
	},
	logo: {
		display: 'block',
		textAlign: 'center',
		paddingTop: theme.spacing(1),
		textDecoration: 'none',
		color: 'black',
		textTransform: 'uppercase',
	},
	toolbar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},

	toolbarMenu: {
		textAlign: 'left',
		alignItems: 'center',
	},

	toolbarLink: {
		padding: theme.spacing(0, 5),
		textDecoration: 'unset',
		color: 'black',
		textTransform: 'uppercase',
	},
	toolbarActions: {
		textAlign: 'right',
	}

});
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

class Header extends Component {
	render() {
		const {classes} = this.props;
		return (
    <div className={classes.root}>
	    <Link className={classes.logo} to={"/"}>
		    <Typography variant="h5">Shoes Shop</Typography>
	    </Link>
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>

          <Grid item lg={8}>
            <div className={classes.toolbarMenu}>
              { SECTIONS.length > 0 && SECTIONS.map(section => (
                <Link
                    color="inherit"
                    key={section.name}
                    variant="body2"
                    href="#"
                    className={classes.toolbarLink}
                    to={section.url}
                >
                  {section.name}
                </Link>
              ))}
            </div>
          </Grid>

          <Grid item lg={4}>
            <div className={classes.toolbarActions}>

              <IconButton color="inherit">
	              <SearchRoundedIcon/>
              </IconButton>

              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCartRoundedIcon/>
                </Badge>
              </IconButton>

	            <IconButton color="inherit">
		            <FavoriteRoundedIcon/>
	            </IconButton>

              <Button variant="outlined" size="small">
                Sign in
              </Button>
            </div>
          </Grid>
        </Toolbar>
      </Container>
    </div>
		);
	}
}

export default withStyles(styles)(Header);
