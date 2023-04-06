import React, { useEffect, useState } from 'react';
import { urlFor, client } from '../../client';
import blocksToHtml from '@sanity/block-content-to-html';
import './MyServices.scss';

const MyServices = () => {
    const [servicesData, setServicesData] = useState([])

    useEffect(() => {
        const serviceQuery = '*[_type == "services"]';
        client.fetch(serviceQuery).then((data) => {
            setServicesData(data);
        });
    }, []);
    function myfunc(params){
        Object.entries(params).forEach(([k,v])=>{
            if(typeof v=== 'object'){
                myfunc(v);
            }
            else{
                if(k == 'text'){
                    console.log(v);
                }
            }
        })
        
    }

    function myfunc2(){
        // fetch a document from Sanity
        client.getDocument('075444a9-acfa-482f-b411-dea4518d0add').then(doc => {
            // extract the block array from the document
            const blockArray = doc.description;
            // console.log();


            // convert the block array to raw HTML
            const rawHtml = blocksToHtml({
                blocks: blockArray,
                serializers: {}, // you can provide custom serializers here if needed
                projectId: '4f9mo8p1',
                dataset: 'production',
            });
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = rawHtml;
            return rawHtml; // the raw HTML content
        }).catch(err => {
            console.error(err);
        });

    }
    return (
        <div className="app__secondary">
            { myfunc2()}
            <div className="app__container">
                <div className='app__services-header'>
                        <h2>Our Services</h2>
                </div>
                    <div className='app__services'>

                        {servicesData.map((item) => (
                            <div className="app__services-card" key={item.title}>
                                <div className='app__services-content'>
                                    <h3>{item.title}</h3>
                                    <span>Price: {item.price}</span>
                                    <p id="content"></p>
                                </div>
                                <div className="app__services-image">
                                    <img src={urlFor(item.imgUrl)} alt={item.title}/>
                                </div>
                            </div>

                        ))}
                    </div>

            </div>
        </div>
    )
}

export default MyServices