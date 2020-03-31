import React, { useState } from 'react';
import { withRouter } from 'react-router';
import {
	Container,
	withStyles,
	Card,
	CardContent,
	CardActions,
	Stepper,
	Step,
	StepLabel,
	Button,
	Typography,
} from '@material-ui/core';
import UserInfoFormContainer from './components/UserInfoForm/UserInfoFormContainer';
import SimCardListContainer from './components/SimCardListContainer/SimCardListContainer';
import SummaryContainer from './components/SummaryContainer';

const getSteps = () => {
	return [
		'Enter user information',
		'Choose sim card',
		'View Summary information',
	];
};

const getStepContent = (stepIndex) => {
	switch (stepIndex) {
		case 0:
			return <UserInfoFormContainer />;
		case 1:
			return <SimCardListContainer />;
		case 2:
			return <SummaryContainer />;
		default:
			return 'Unknown stepIndex';
	}
};

const styles = theme => ({
	root: {
		width: '100%',
	},
	actionButtons: {
		margin: '20px auto',
	},
	backButton: {
		marginRight: theme.spacing(1),
	},
	resetButton: {
		display: 'block',
		margin: '0px auto',
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
});

const SimCardModule = ({classes}) => {
	const [activeStep, setActiveStep] = useState(0);
	const steps = getSteps();

	return (
		<Container>
			<Card className={classes.root}>
				<CardContent>
					<div>
						<Stepper
							activeStep={activeStep}
							alternativeLabel
						>
							{steps.map(label => (
								<Step key={label}>
									<StepLabel>{label}</StepLabel>
								</Step>
							))}
						</Stepper>
						<div>
							{activeStep === steps.length ? (
								<div>
									<Typography
										align="center"
										variant="h5"
										className={classes.instructions}
									>
										All steps completed
									</Typography>
									<Button
										className={classes.resetButton}
										onClick={() => setActiveStep(0)}
										color="default"
										variant="contained"
									>
										Reset Data
									</Button>
								</div>
							) : (
								getStepContent(activeStep)
							)}
						</div>
					</div>
				</CardContent>

				<CardActions>
					<div className={classes.actionButtons}>
						<Button
							disabled={activeStep === 0}
							onClick={() => setActiveStep(activeStep-1)}
							className={classes.backButton}
							variant="contained"
						>
							Back
						</Button>

						<Button
							variant="contained"
							color="primary"
							onClick={() => setActiveStep(activeStep > 3 ? 0 : activeStep + 1)}
						>
							{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
						</Button>
					</div>
				</CardActions>
			</Card>
		</Container>
	)
};

export default withStyles(styles)(withRouter(SimCardModule));
