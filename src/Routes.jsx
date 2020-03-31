import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SimCardModule from './modules/SimCardModule/components/SimCardModule';
import SnackbarService from './components/SnackBar/Snackbar';
import { ROUTES } from './constant/routeConstant'
import ShopListContainer from './components/ShopList/ShopListContainer';
import ShopItemViewContainer from './components/ShopItemView/ShopItemViewContainer';
import NewItemContainer from './components/NewItem/NewItemContainer';

const Routes = () => (
	<>
		<SnackbarService />
		<Router>
			<Switch>
				<Route exact path={ROUTES.SHOP_LIST} component={ShopListContainer} />
				<Route path={ROUTES.NEW_ITEM} component={NewItemContainer} />
				<Route path={ROUTES.SHOP_ITEM_ID} component={ShopItemViewContainer} />
				<Route path={ROUTES.TEST} component={SimCardModule} />
			</Switch>
		</Router>
	</>
);

export default Routes;
