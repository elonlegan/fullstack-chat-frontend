import { useAuth0 } from '@auth0/auth0-react';

const AuthPage = (props) => {
	const { loginWithPopup } = useAuth0();

	return (
		<>
			<div className='background'>
				<div className='form-card'>
					<div className='form-title'>Welcome 👋</div>

					<div className='form-subtitle'>
						Get started to chat
					</div>

					<button
						className='auth-button'
						onClick={() => loginWithPopup()}
					>
						Enter
					</button>
				</div>
			</div>
		</>
	);
};

export default AuthPage;
