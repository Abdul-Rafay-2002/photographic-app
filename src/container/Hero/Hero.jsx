import React, { useEffect, useState } from 'react';
import { urlFor, client } from '../../client';
import './Hero.scss';

const Hero = () => {
	const [bannerData, setBannerData] = useState([]);

	useEffect(() => {
		const bannerQuery = '*[_type == "hero"]';
		client.fetch(bannerQuery).then((data) => {
			setBannerData(data);
		});
	}, []);

	return (
		<div className='app__primary'>
			<div className='app__container'>
				{bannerData.map((item) => (
                    <div className='app__hero' key={item.title}>
						<div className='app__hero-content' >
							<h1>{item.title}</h1>
							<p>{item.description}</p>
							<a href={`${item.buttonlink}`} className='button'>{item.buttontext}</a>
						</div>
						<div className='app__hero-image'>
							<img src={urlFor(item.imgUrl)} alt={item.title} />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Hero;
