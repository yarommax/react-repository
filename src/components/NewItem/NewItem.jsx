import React, { useState } from 'react';
import { withRouter } from 'react-router';
import {
	Container,
	Card,
	Grid,
	Typography,
	Select,
	InputLabel,
	MenuItem,
	CardContent,
} from '@material-ui/core';
import { NIKE, ADIDAS, PUMA} from '../../constant/shoesCategoryConstant';
import Header from '../Header/Header';
import StyledTextField from './styled/StyledTextField';
import StyledFormControl from './styled/StyledFormControl';
import StyledButton from './styled/StyledButton';

const NewItem = ({addNewItem}) => {
	const initialState = {
		name: '',
		cost: '',
		category: '',
	};
	const [newItemValues, setNewItemValues] = useState(initialState);

	const onChangeField = (e) => {
		const { name, value } = e.target;
		setNewItemValues({
			...newItemValues,
			[name]: value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		addNewItem(newItemValues);
		resetFrom();
	};

	const resetFrom = () => {
		setNewItemValues(initialState);
	};

	return (
		<>
			<Header />
			<Container maxWidth="lg">
				<Grid container>
					<Grid item lg={8} sm={12}>
						<Card variant="outlined">
							<CardContent>
								<Typography variant="h3" paragraph>Add new item</Typography>
								<form onSubmit={onSubmit}>
									<StyledTextField
										name="name"
										label="Item name"
										variant="outlined"
										value={newItemValues.name}
										onChange={onChangeField}
									/>
									<StyledTextField
										name="cost"
										label="Cost"
										variant="outlined"
										value={newItemValues.cost}
										onChange={onChangeField}
									/>
									<StyledFormControl variant="outlined">
										<InputLabel
											id="category-label"
										>
											Category
										</InputLabel>
										<Select
											name="category"
											value={newItemValues.category}
											onChange={onChangeField}
											labelWidth={65}
										>
											<MenuItem value={NIKE}>{NIKE}</MenuItem>
											<MenuItem value={ADIDAS}>{ADIDAS}</MenuItem>
											<MenuItem value={PUMA}>{PUMA}</MenuItem>
										</Select>
									</StyledFormControl>
									<StyledButton
										size="large"
										variant="outlined"
										type="submit"
									>
										Save
									</StyledButton>
								</form>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</>
	)
};

export default withRouter(NewItem);
