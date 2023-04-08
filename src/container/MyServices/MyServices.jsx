import React, { useEffect, useState } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { urlFor, client } from '../../client';
import './MyServices.scss';
import "swiper/css";
import "swiper/scss/pagination";

const MyServices = () => {
	const [servicesData, setServicesData] = useState([]);

	useEffect(() => {
		const serviceQuery = '*[_type == "services"]';
		client.fetch(serviceQuery).then((data) => {
			setServicesData(data);
		});
	}, []);

	return (
		<div className='app__secondary'>
			<div className='app__container'>
				<div className='app__services-header'>
					<h2>Our Services</h2>
					<p>
						Our If you have a business, we can provide high-quality product
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
					// install Swiper modules
					// breakpoints={{
					// 	// when window width is >= 640px
					// 	640: {
					// 		width: 640,
					// 		slidesPerView: 1,
					// 	},
					// 	// when window width is >= 768px
					// 	768: {
					// 		width: 768,
					// 		slidesPerView: 2,
					// 	},
					// }}
					modules={[Pagination]}
					slidesPerView={3}
					spaceBetween={30}
					pagination={{ clickable: true }}
					className='app__services'>
					{servicesData.map((item) => (
						<SwiperSlide className='app__services-card' key={item.title}>
							<div className='app__services-content'>
								<h3>{item.title}</h3>
								<p>{item.description}</p>
								<span>Price: {item.price}</span>
							</div>
							<div className='app__services-image'>
								<img src={urlFor(item.imgUrl)} alt={item.title} loading='lazy' />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default MyServices;
