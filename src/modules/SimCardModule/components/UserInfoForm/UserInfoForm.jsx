import React, { useEffect, useState } from 'react';
import {
	TextField,
	FormControl,
	Grid,
	Typography,
} from '@material-ui/core';
import StyledResetButton from './styled/StyledResetButton';
import StyledFormWrapper from './styled/StyledFormWrapper';

const initialFormState = {
	firstName: '',
	lastName: '',
	birthDate: '',
	fullAge: '',
	city: '',
	address: ''
};

const UserInfoForm = ({OnChangeUserInfo}) =>  {
	const [userInfoValues, setUserInfoValues] = useState(initialFormState);

	useEffect(() => {
		OnChangeUserInfo(userInfoValues);
	}, [OnChangeUserInfo, userInfoValues]);

	const onChangeField = (e) => {
		const { name, value } = e.target;
		setUserInfoValues({
			...userInfoValues,
			[name]: value,
		});
	};

	const resetForm = () => {
		setUserInfoValues(initialFormState);
	};

	return (
		<StyledFormWrapper>
			<form>
				<Typography
					align="center"
					variant="h5"
				>
					User information
				</Typography>
				<Grid container spacing={1}>
					<Grid item xs={12} lg={6}>
						<FormControl margin="dense" fullWidth>
							<TextField
								name="firstName"
								label="FirstName"
								value={userInfoValues.firstName}
								variant="outlined"
								fullWidth
								onChange={onChangeField}
							/>
						</FormControl>
						<FormControl margin="dense" fullWidth>
							<TextField
								name="lastName"
								label="LastName"
								variant="outlined"
								value={userInfoValues.lastName}
								onChange={onChangeField}
							/>
						</FormControl>
						<FormControl margin="dense" fullWidth>
							<TextField
								name="birthDate"
								label="BirthDate"
								variant="outlined"
								placeholder="dd/mm/yyyy"
								value={userInfoValues.birthDate}
								fullWidth
								onChange={onChangeField}
							/>
						</FormControl>
						<FormControl margin="dense" fullWidth>
							<TextField
								name="fullAge"
								label="Full Age"
								variant="outlined"
								type="Number"
								value={userInfoValues.fullAge}
								fullWidth
								onChange={onChangeField}
							/>
						</FormControl>
						<FormControl margin="dense" fullWidth>
							<TextField
								name="city"
								label="City"
								variant="outlined"
								value={userInfoValues.city}
								fullWidth
								onChange={onChangeField}
							/>
						</FormControl>
						<FormControl margin="dense" fullWidth>
							<TextField
								name="address"
								label="Address"
								variant="outlined"
								value={userInfoValues.address}
								fullWidth
								onChange={onChangeField}
							/>
						</FormControl>
						<StyledResetButton
							color="secondary"
							variant="outlined"
							onClick={resetForm}
						>
							Clear
						</StyledResetButton>
					</Grid>
				</Grid>
			</form>
		</StyledFormWrapper>
	)
};

export default UserInfoForm;
