import React, { Component } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, withStyles, Card, CardContent, CardActions } from '@material-ui/core';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { OnChangeActiveStep } from './actions/sim-card.action';
import UserInfoForm from './components/UserInfoForm';
import SimCardListContainer from './components/SimCardListContainer';
import Summary from './components/Summary';

function getSteps() {
	return [
		'Enter user information',
		'Choose sim card',
		'Show Summary information',
	];
}

function getStepContent(stepIndex) {
	switch (stepIndex) {
		case 0:
			return <UserInfoForm />;
		case 1:
			return <SimCardListContainer />;
		case 2:
			return <Summary />;
		default:
			return 'Unknown stepIndex';
	}
}

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

class SimCardModule extends Component {
	render() {
		const {classes, activeStep, dispatch } = this.props;
		const steps = getSteps();

		const handleNext = () => {
			dispatch(OnChangeActiveStep(activeStep > 3 ? 0 : activeStep + 1));
		};

		const handleBack = () => {
			dispatch(OnChangeActiveStep(activeStep - 1));
		};

		const handleReset = () => {
			dispatch(OnChangeActiveStep(0));
		};

		return (
			<Container>
				<Card className={classes.root}>
					<CardContent >
						<div>
							<Stepper activeStep={activeStep} alternativeLabel>
								{steps.map(label => (
										<Step key={label}>
											<StepLabel>{label}</StepLabel>
										</Step>
								))}
							</Stepper>
							<div>
								{activeStep === steps.length ? (
										<div>
											<Typography align={'center'} variant={'h5'}
													className={classes.instructions}>All steps completed</Typography>
											<Button
													className={classes.resetButton}
													onClick={handleReset}
													color="default"
													variant="contained"
											>Reset Data</Button>
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
									onClick={handleBack}
									className={classes.backButton}
									variant="contained"
							>
								Back
							</Button>

							<Button variant="contained" color="primary" onClick={handleNext}>
								{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
							</Button>
						</div>
					</CardActions>


				</Card>

			</Container>
		)
	}
}

const mapStateToProps = store => {
	return {
		...store.simCard,
	}
};

export default compose(
		withStyles(styles, { name: 'SimCard' }),
		connect(mapStateToProps)
)(withRouter(SimCardModule));
