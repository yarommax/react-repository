import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	TextField,
	FormControl,
	Button,
	Grid,
	Typography,
	withStyles
} from '@material-ui/core';
import { OnChangeUserInfo } from '../actions/sim-card.action';
import { showSuccessSnackBar } from '../../../actions/snackbarAction';

const styles = theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
	formControl: {
		display: 'block',
		marginBottom: theme.spacing(2)
	},
	textField: {
		width: '100%',
	},
	actionButton: {
		marginRight: '15px',
		padding: '5px 22px'
	},
});

const initialFormState = {
	firstName: '',
	lastName: '',
	birthDate: '',
	fullAge: '',
	city: '',
	address: ''
};


class UserInfoForm extends Component {

	constructor(props) {
		super(props);
		this.onChangeField = this.onChangeField.bind(this);
		this.resetForm = this.resetForm.bind(this);
		this.state = {...initialFormState};
	}

	onChangeField(e) {
		const {name, value } = e.target;
		this.setState({
			[name]: value,
		})
	}
	resetForm() {
		this.setState({...initialFormState});
	}

	componentWillUnmount() {
		this.saveUserInfo();
	}

	saveUserInfo() {
		const userInfo = {
			...this.state,
		};
		this.props.dispatch(OnChangeUserInfo(userInfo));
		this.props.dispatch(showSuccessSnackBar({message: 'Information saved!'}));
	}

	render() {
		const { classes } = this.props;

		return (
				<>
					<Typography
						align="center"
						variant="h5"
					>User information</Typography>
					<form
							className={classes.root}
							noValidate
							autoComplete="off"
					>
						<Grid container spacing={1}>


							<Grid item xs={12} lg={6}>
								<FormControl className={classes.formControl}>
									<TextField
											name="firstName"
											label="FirstName"
											value={this.state.firstName}
											variant="outlined"
											className={classes.textField}
											onChange={this.onChangeField}
									/>
								</FormControl>

								<FormControl className={classes.formControl}>
									<TextField
											name="lastName"
											label="LastName"
											variant="outlined"
											value={this.state.lastName}
											className={classes.textField}
											onChange={this.onChangeField}
									/>
								</FormControl>

								<FormControl className={classes.formControl}>
									<TextField
											name="birthDate"
											label="BirthDate"
											variant="outlined"
											placeholder="dd/mm/yyyy"
											value={this.state.birthDate}
											className={classes.textField}
											onChange={this.onChangeField}
									/>
								</FormControl>

								<FormControl className={classes.formControl}>
									<TextField
											name="fullAge"
											label="Full Age"
											variant="outlined"
											type="Number"
											value={this.state.fullAge}
											className={classes.textField}
											onChange={this.onChangeField}
									/>
								</FormControl>

								<FormControl className={classes.formControl}>
									<TextField
											name="city"
											label="City"
											variant="outlined"
											value={this.state.city}
											className={classes.textField}
											onChange={this.onChangeField}
									/>
								</FormControl>

								<FormControl className={classes.formControl}>
									<TextField
											name="address"
											label="Address"
											variant="outlined"
											value={this.state.address}
											className={classes.textField}
											onChange={this.onChangeField}
									/>
								</FormControl>

								<Button
										color="secondary"
										variant="outlined"
										onClick={this.resetForm}
								>Clear</Button>

							</Grid>
						</Grid>
					</form>
				</>

		)
	}

}

const mapStateToProps = store => ({
	...store.simCard,
});

export default withStyles(styles)(
		connect(mapStateToProps)(UserInfoForm)
)
