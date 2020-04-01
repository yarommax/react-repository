import React, { useState } from 'react';
import { withRouter } from 'react-router';
import {
	Container,
	Card,
	CardContent,
	Stepper,
	Step,
	StepLabel,
	Button,
	Typography,
} from '@material-ui/core';
import UserInfoFormContainer from '../UserInfoForm/UserInfoFormContainer';
import SimCardListContainer from '../SimCardListContainer/SimCardListContainer';
import SummaryContainer from '../Summary/SummaryContainer';
import { SIM_CARD_STEP, SUMMARY_INFO, USER_INFO_STEP } from '../../constant/stepConstant';
import StyledCardActions from './styled/StyledCardActions';
import StyledResetButton from './styled/StyledResetButton';

const getSteps = () => {
	return [
		USER_INFO_STEP,
		SIM_CARD_STEP,
		SUMMARY_INFO,
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

const SimCardModule = () => {
	const [activeStep, setActiveStep] = useState(0);
	const steps = getSteps();

	return (
		<Container>
			<Card>
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
										gutterBottom
									>
										All steps completed
									</Typography>
									<StyledResetButton
										onClick={() => setActiveStep(0)}
										color="default"
										variant="contained"
									>
										Reset Data
									</StyledResetButton>
								</div>
							) : (
								getStepContent(activeStep)
							)}
						</div>
					</div>
				</CardContent>

				<StyledCardActions>
					<div>
						<Button
							disabled={activeStep === 0}
							onClick={() => setActiveStep(activeStep-1)}
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
				</StyledCardActions>
			</Card>
		</Container>
	)
};

export default withRouter(SimCardModule);
