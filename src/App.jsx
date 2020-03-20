import React, { Component } from 'react';
import Store from './Store';
import Routes from './Routes';

class App extends Component {
	render() {
		return (
			<Store>
				<Routes />
			</Store>
		)
	}
}

export default App;
