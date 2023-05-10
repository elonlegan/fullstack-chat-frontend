import { useState, useEffect } from 'react';
import axios from 'axios';

import { useAuth0 } from '@auth0/auth0-react';

import { PrettyChatWindow } from 'react-chat-engine-pretty';
import Loader from './loader';

const ChatsPage = ({ user }) => {
	const { logout } = useAuth0();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios
			.post(`${process.env.REACT_APP_API}/me`, {
				...user,
			})
			.then(() => {
				setIsLoading(false);
			})
			.catch((e) => {
				console.log(JSON.stringify(e.response.data));
			});
	}, [user]);

	if (isLoading) return <Loader />;

	return (
		<div
			style={{
				height: '100vh',
				width: '100vw',
				fontFamily: 'monospace',
			}}
		>
			<button
				onClick={() =>
					logout({
						logoutParams: {
							returnTo: window.location.origin,
						},
					})
				}
				className='btn btn-danger'
				style={{
					position: 'absolute',
					right: '10px',
					bottom: '10px',
					zIndex: 1,
					width: '50px',
					height: '50px',
					borderRadius: '20px',
				}}
			>
				<i
					className='bi bi-box-arrow-right '
					style={{
						fontSize: '24px',
					}}
				></i>
			</button>
			<PrettyChatWindow
				projectId={
					process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID
				}
				username={user.nickname} // adam
				secret={user.email} // pass1234
				style={{ height: '100%' }}
			/>
		</div>
	);
};

export default ChatsPage;
