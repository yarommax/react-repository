import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ShopList from './containers/ShopList/ShopList';
import ShopItemView from './components/ShopItemView/ShopItemView';
import NewItem from './containers/NewItem/NewItem';
import SimCardModule from './modules/SimCardModule/SimCardModule';
import SnackbarService from './components/SnackBar/Snackbar';
import { ROUTES } from './constant/routeConstant'

const Routes = () => (
		<>
			<SnackbarService />
			<Router>
				<Switch>
					<Route exact path={ROUTES.SHOP_LIST} component={ShopList}/>
					<Route path={ROUTES.NEW_ITEM} component={NewItem} />
					<Route path={ROUTES.SHOP_ITEM} component={ShopItemView} />
					<Route path={ROUTES.TEST} component={SimCardModule} />
				</Switch>
			</Router>
		</>

);

export default Routes;
