import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { Icon, Snackbar, IconButton } from '@material-ui/core';
import { clearSnackBar } from '../../actions/snackbarAction';
import { Alert } from './Alert';

export default function SnackbarService() {
	const dispatch = useDispatch();
	const { message, type, snackbarOpen } = useSelector(
			state => state.snackBar,
	);

	function handleClose() {
		dispatch(clearSnackBar());
	}

	return (
			<Snackbar
				anchorOrigin={{
					vertical: "top",
					horizontal: "right"
				}}
				open={snackbarOpen}
				autoHideDuration={4000}
				onClose={handleClose}
				aria-describedby="client-snackbar"
				action={[
					<IconButton
						key="close"
						aria-label="close"
						color="inherit"
						onClick={handleClose}
					>
						<Icon>close</Icon>
					</IconButton>
				]}
			>
				<Alert onClose={handleClose} severity={type}>
					{message}
				</Alert>
			</Snackbar>
	)
}
