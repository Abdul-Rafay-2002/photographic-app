import React, { useState, useEffect } from 'react';
import { urlFor, client } from '../../client';
import { Swiper, SwiperSlide } from 'swiper/react';
import aboutimg from '../../Assets/about.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Pagination } from 'swiper';
import { motion } from 'framer-motion';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './About.scss';

const About = () => {
	const [aboutData, setAboutData] = useState([]);
	useEffect(() => {
		const aboutQuery = '*[_type == "about"]';
		client.fetch(aboutQuery).then((data) => {
			setAboutData(data);
		});
	}, []);

	return (
		<div>
			<div id='about' className='app__secondary'>
				<div className='app__container'>
					<div className='app__about-header'>
						<h2>About Us</h2>
						<p>
							Our If you have a business, we can provide high-quality product
							<br />
							photography that showcases your products in the best possible
							light.
						</p>
					</div>
					<div className='app__about-content-wrapper'>
						<motion.div
							whileInView={{ x: [-150, 0], opacity: [0, 1] }}
							transition={{ duration: 1 }}
							className='app__about-content'>
							<Swiper
								direction={'vertical'}
								slidesPerView={3}
								pagination={{
									clickable: true,
								}}
								modules={[Pagination]}
								className='app__about-wrapper mySwiper'>
								{aboutData.map((item) => (
									<SwiperSlide
										className='app__about-content-col'
										key={item.title}>
										<div className='app__about-content-icon'>
											<LazyLoadImage src={urlFor(item.iconUrl)} alt={item.title} />
										</div>
										<div className='app__about-content-desc'>
											<h5>{item.title}</h5>
											<p>{item.description}</p>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</motion.div>
						<motion.div
							whileInView={{ x: [150, 0], opacity: [0, 1] }}
							transition={{ duration: 1 }}
							className='app__about-img'>
							<img src={aboutimg} alt='about' />
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
