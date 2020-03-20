import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ShopList from './containers/ShopList/ShopList';
import ShopItemView from './components/ShopItemView/ShopItemView';
import NewItem from './containers/NewItem/NewItem';
import SimCardModule from './modules/SimCardModule/SimCardModule';

const Routes = () => (
	<Router>
		<Switch>
			<Route exact path={'/'} component={ShopList}/>
			<Route path={'/item/new'} component={NewItem} />
			<Route path={'/item'} component={ShopItemView} />
			<Route path={'/test'} component={SimCardModule} />
		</Switch>
	</Router>
);

export default Routes;
