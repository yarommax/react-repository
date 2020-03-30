import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import StyledLoader from './styled/StyledLoader';

export const Loader = (props) => {
	return (
		<StyledLoader {...props}>
			<CircularProgress color="secondary" />
		</StyledLoader>
	)
};
