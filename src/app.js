import React from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor} from "redux/index";

//css
import "assets/plugins/nucleo/css/nucleo.css";
import "assets/scss/argon-dashboard-react.scss";
import "./customStyles.css"

//components
import AdminLayout from "layouts/Admin";
import AuthLayout from "layouts/Auth";


function App () {

	return (
		<BrowserRouter>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
						<Switch>
							<Route path="/admin" render={(props) => <AdminLayout {...props} />} />
							<Route path="/auth" render={(props) => <AuthLayout {...props} />} />
							<Redirect from="/" to="/admin" />
						</Switch>
				</PersistGate>
			</Provider>
		</BrowserRouter>
	);
}


export default App;