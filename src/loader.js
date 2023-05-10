import { Comment } from 'react-loader-spinner';

const loader = () => {
	return (
		<>
			<div className='background'>
				<Comment
					visible={true}
					height='250'
					width='250'
					ariaLabel='comment-loading'
					wrapperStyle={{
						margin: '0 auto',
						display: 'block',
					}}
					wrapperClass='comment-wrapper'
					color='#fff'
					backgroundColor='#F4442E'
				/>
			</div>
		</>
	);
};

export default loader;
