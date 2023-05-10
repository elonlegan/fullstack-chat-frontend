import AuthPage from './authPage';
import ChatsPage from './chatsPage';
import Loader from './loader';

import { useAuth0 } from '@auth0/auth0-react';

function App() {
	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) return <Loader />;

	if (isAuthenticated) {
		return <ChatsPage user={user} />;
	}

	return <AuthPage />;
}

export default App;
