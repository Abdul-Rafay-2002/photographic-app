import React, { useState, useEffect } from 'react';
import { client, urlFor } from '../../client';
import './Gallery.scss';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Gallery = () => {
    const [activeFilterItem, setActiveFilterItem] = useState('All');
    const [filterItem, setFilterItem] = useState([]);
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
    const [galleryData, setGalleryData] = useState([]);
    useEffect(() => {
        const query = '*[_type == "gallery"]';
        client.fetch(query).then((data) => {
            setGalleryData(data);
            setFilterItem(data);
        });
    }, []);

    const filterHandler = (item) => {
        setActiveFilterItem(item);
        setAnimateCard([{ y: 150, opacity: 0 }]);

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);

            if (item === 'All') {
                setFilterItem(galleryData);
            } else {
                setFilterItem(
                    galleryData.filter((galleryDataItem) =>
                        galleryDataItem.tags.includes(item)
                    )
                );
            }
        }, 400);
    };
    return (
        <div id='gallery' className='app__primary'>
            <div className='app__container'>
                <div className='app__gallery-header'>
                    <h2>Our Gallery</h2>
                    <p>
                        Our If you have a business, we can provide high-quality product{' '}
                        <br />
                        photography that showcases your products in the best possible light.
                    </p>
                </div>
                <div className='app__gallery-filter'>
                    {['Wedding', 'Wildlife', 'Indoor', 'Outdoor', 'All']
                        .reverse()
                        .map((item, index) => (
                            <button
                                key={index}
                                onClick={() => filterHandler(item)}
                                className={`app__gallery-filter-item ${activeFilterItem === item ? 'itemActive' : ''
                                    }`}>
                                {item}
                            </button>
                        ))}
                </div>
                <div className='app__gallery-content'>
                    {filterItem.map((item, index) => (
                        <motion.div
                            animate={animateCard}
                            transition={{ duration: 0.5, delayChildren: 0.5 }  }
                            className='app__gallery-item'
                            key={item.title}>
                            <LazyLoadImage src={urlFor(item.imgUrl)} alt={item.title} loading='lazy' />
                            <h5>{item.title}</h5>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
