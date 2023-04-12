import React from 'react';
import Devlogo from '../../Assets/devlogo.png';
import '../Footer/Footer.scss';

const Footer = () => {
	return (
		<>
			<div className='footer'>
				<p>
					© {new Date().getFullYear()} All Right Reserved - Photographic React App By{' '}
					<a
						href='https://abdulrafayportfolio.vercel.app/'
						target='_blank'
						rel='noopener noreferrer'>
						<img
							src={Devlogo}
							style={{ width: '65px', height: '42px' }}
							alt='logo'
						/>
					</a>
				</p>
			</div>
		</>
	);
};

export default Footer;
