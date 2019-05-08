import React from 'react';

import DisclaimerSection from './section/Disclaimer';
import MyCarousel from './section/Carousel';
import { Container } from 'react-bootstrap';

class Profile extends React.Component{
    render(){
        return(
            <div className="App" style={{padding:"20px"}}>
               <Container>
                <h1 className='brand-bg title'>Tentang Kami</h1>
                    <MyCarousel/>
                    <DisclaimerSection/>
               </Container>
            </div>
        )
    }
}

export default Profile;