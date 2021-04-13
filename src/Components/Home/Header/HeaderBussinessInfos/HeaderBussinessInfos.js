import React from 'react';
import HeaderBussinessCard from './HeaderBussinessCard';
import { faClock, faPhone, faMapMarkerAlt   } from '@fortawesome/free-solid-svg-icons'
const HeaderBussinessInfos = () => {
    const bussinessData = [
        {
        heading: 'Opening Hours',
        description: 'lorem Ipsum is Lorem Ipsum  offset of Lorem Ipsum',
        background: 'primary',
        icon: faClock
    },
        {
        heading: 'Visit Our Location',
        description: 'lorem  Ipsum  offset of Lorem Ipsum',
        background: 'dark',
        icon: faMapMarkerAlt
    },
        {
        heading: 'Contact Us Now',
        description: 'lorem Ipsum  offset ',
        background: 'primary',
        icon:  faPhone
    },

];

    return (
        <section className="d-flex justify-content-center">
           <div className="row w-75">
           {
                bussinessData.map((data) => <HeaderBussinessCard infos={data}/>)
            }
           </div>
        </section>
    );
};

export default HeaderBussinessInfos;