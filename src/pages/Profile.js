import React from 'react';
import * as firebase from 'firebase';
import 'firebase/database';

import FooterSection from './section/Footer';
import HeaderSection from './section/Header';
import DisclaimerSection from './section/Disclaimer';
import MyCarousel from './section/Carousel';

class Profile extends React.Component{
    render(){
        return(
            <div className="App">
                <HeaderSection/>
                <h1 className='title'>Tentang Kami</h1>
                <MyCarousel/>
                <DisclaimerSection/>
                <FooterSection/>
            </div>
        )
    }
}

export default Profile;