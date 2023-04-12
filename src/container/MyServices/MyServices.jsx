import React, { useEffect, useState } from 'react';
import { Pagination } from 'swiper';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from 'swiper/react';
import { urlFor, client } from '../../client';
import './MyServices.scss';
import "swiper/css";
import "swiper/scss/pagination";
import { motion } from 'framer-motion';

const MyServices = () => {
	const [servicesData, setServicesData] = useState([]);

	useEffect(() => {
		const serviceQuery = '*[_type == "services"]';
		client.fetch(serviceQuery).then((data) => {
			setServicesData(data);
		});
	}, []);

	return (
		<div id='services' className='app__secondary'>
			<div className='app__container'>
				<div className='app__services-header'>
					<h2>Our Services</h2>
					<p>
						Our If you have a business, we can provide high-quality product <br />
						photography that showcases your products in the best possible light.
					</p>
				</div>
				{/* <div className='app__services'>
					{servicesData.map((item) => (
						<div className='app__services-card' key={item.title}>
							<div className='app__services-content'>
								<h3>{item.title}</h3>
								<p>{item.description}</p>
								<span>Price: {item.price}</span>
							</div>
							<div className='app__services-image'>
								<img src={urlFor(item.imgUrl)} alt={item.title} />
							</div>
						</div>
					))}
				</div> */}
				<Swiper
					breakpoints={{
						340: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						640: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					}}
					modules={[Pagination]}
					slidesPerView={3}
					spaceBetween={30}
					draggable={true}
					pagination={{ clickable: true }}
					className='app__services'>
						<motion.div
						  whileInView={{ x: [150, 0], opacity: [0, 1] }}
						  transition={{ duration: 1 }}
						  >
						  {servicesData.map((item, index) => (
							<SwiperSlide className='app__services-card' key={index}>
								<div className='app__services-content'>
									<h3>{item.title}</h3>
									<p>{item.description}</p>
									<span>Price: {item.price}</span>
								</div>
								<div className='app__services-image'>
									<LazyLoadImage src={urlFor(item.imgUrl)} alt={item.title} loading='lazy' className='overlay' />
									<LazyLoadImage src={urlFor(item.imgUrl)} alt={item.title} loading='lazy' className='simple' />
								</div>
							</SwiperSlide>
					))}
					</motion.div>
				</Swiper>
			</div>
		</div>
	);
};

export default MyServices;
