import React, { Component } from 'react';
import compose from 'recompose/compose';
import { Container, Card, Grid,
	Typography, Button, TextField, withStyles, Select, InputLabel, MenuItem, FormControl
} from '@material-ui/core';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { AddNewItem } from '../../actions/shop-items.action';
import Header from '../../components/Header/Header';


const Categories = {
	'Nike': 'Nike',
	'Adidas': 'Adidas',
	'Puma': 'Puma',
};

const styles = theme => ({
	cardTitle: {
		marginBottom: theme.spacing(2),
	},
	textField: {
		marginBottom: theme.spacing(2),
		width: '100%'
	},
	saveButton: {
		marginLeft: theme.spacing(3),
		padding: '14px 20px',
	},
	formWrapper: {
		padding: theme.spacing(3, 3),
	},
	formControl: {
		minWidth: 120,
	}
});

class NewItem extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.onChangeField = this.onChangeField.bind(this);
		this.state = {
			name: '',
			cost: 0,
			category: '',
		};
	}

	onChangeField(e) {
		const {name, value } = e.target;
		this.setState({
			[name]: value,
		})
	}

	onSubmit(e) {
		e.preventDefault();
		const newItem = {
			...this.state,
		};
		this.props.dispatch(AddNewItem(newItem));
	}

	render() {
		const { classes } = this.props;

		return (
			<>
				<Header />
				<Container maxWidth={'lg'}>
					<Grid container>
						<Grid item lg={8} sm={12}>
							<Card variant="outlined" className={classes.formWrapper}>
								<Typography
										variant="h3"
										className={classes.cardTitle}
								>Add new item</Typography>
								<form>
									<TextField
											name='name'
											label='Item name'
											variant={'outlined'}
											className={classes.textField}
											onChange={this.onChangeField}
									/>

									<TextField
											name='cost'
											label='Cost'
											variant={'outlined'}
											className={classes.textField}
											onChange={this.onChangeField}
									/>
									<FormControl variant={'outlined'} className={classes.formControl}>
										<InputLabel
												ref={this.labelRef}
												id="category-label">Category</InputLabel>
										<Select
												name="category"
												value={this.state.category}
												onChange={this.onChangeField}
												labelWidth={65}
										>
											<MenuItem value={Categories.Nike}>Nike</MenuItem>
											<MenuItem value={Categories.Adidas}>Adidas</MenuItem>
											<MenuItem value={Categories.Puma}>Puma</MenuItem>
										</Select>
									</FormControl>

									<Button
											size='large'
											variant='outlined'
											className={classes.saveButton}
											onClick={this.onSubmit}
									>Save</Button>
								</form>
							</Card>
						</Grid>
					</Grid>
				</Container>
			</>
		)
	}
}

NewItem.propTypes = {
	dispatch: PropTypes.func.isRequired,
	handleChange: PropTypes.func,
};

const mapStateToProps = store => {
	return {
		...store,
	}
};

export default compose(
	withStyles(styles, { name: 'NewItem' }),
	connect(mapStateToProps)
)(withRouter(NewItem));
