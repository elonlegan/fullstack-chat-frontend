import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(
	document.getElementById('root')
);
root.render(
	<Auth0Provider
		domain={process.env.REACT_APP_AUTH_DOMAIN}
		clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
		authorizationParams={{
			redirect_uri: window.location.origin,
		}}
	>
		<App />
	</Auth0Provider>
);
