import React, { useEffect, useState } from 'react';
import { urlFor, client } from '../../client';
import './Hero.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion';

const Hero = () => {
	const [bannerData, setBannerData] = useState([]);
	useEffect(() => {
		const bannerQuery = '*[_type == "hero"]';
		client.fetch(bannerQuery).then((data) => {
			setBannerData(data);
		});
	}, []);

	return (
		<div id='home' className='app__primary'>
			<div className='app__container'>
				{bannerData.map((item) => (
					<div className='app__hero' key={item.title}>
						<motion.div
							whileInView={{ x: [-150, 0], opacity: [0, 1] }}
							transition={{ duration: 1 }}
							className='app__hero-content'>
							<h1>{item.title}</h1>
							<p>{item.description}</p>
							<a href={`${item.buttonlink}`} className='button'>
								{item.buttontext}
							</a>
						</motion.div>
						<motion.div whileInView={{ x: [150, 0], opacity: [0, 1] }}
							transition={{ duration: 1 }} className='app__hero-image'>
							<LazyLoadImage src={urlFor(item.imgUrl)} alt={item.title} />
						</motion.div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Hero;
