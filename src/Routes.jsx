import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NewItem from './containers/NewItem/NewItem';
import SimCardModule from './modules/SimCardModule/SimCardModule';
import SnackbarService from './components/SnackBar/Snackbar';
import { ROUTES } from './constant/routeConstant'
import ShopListContainer from './containers/ShopList/ShopListContainer';
import ShopItemViewContainer from './components/ShopItemView/ShopItemViewContainer';

const Routes = () => (
		<>
			<SnackbarService />
			<Router>
				<Switch>
					<Route exact path={ROUTES.SHOP_LIST} component={ShopListContainer}/>
					<Route path={ROUTES.NEW_ITEM} component={NewItem} />
					<Route path={`${ROUTES.SHOP_ITEM}/:id`} component={ShopItemViewContainer} />
					<Route path={ROUTES.TEST} component={SimCardModule} />
				</Switch>
			</Router>
		</>

);

export default Routes;
