import React from 'react';
import * as firebase from 'firebase';
import 'firebase/database';


import DisclaimerSection from './section/Disclaimer';
import MyCarousel from './section/Carousel';

class Profile extends React.Component{
    render(){
        return(
            <div className="App">
                <h1 className='title'>Tentang Kami</h1>
                <MyCarousel/>
                <DisclaimerSection/>
                <div class="Disc-angkatan">
                    <h2><u><b>Kami Adalah Bagian dari ATMAJAKARSA 2018</b></u></h2>
                    <p><b><i>"Atmareswara Jatmika Among Karsa Darpa Mahasura"</i></b></p>
                    <p><i><small>"Jiwa Unggul Penjaga Gagasan yang Berani, Penuh Sopan Santun,
                    dan Menjadi Kebanggaan"</small></i></p>
                </div>
            </div>
        )
    }
}

export default Profile;