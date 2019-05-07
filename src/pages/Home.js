import React, { Component } from 'react';

import * as firebase from 'firebase';
import 'firebase/database';

import MenuSection from './section/Menu';
import DisclaimerSection from './section/Disclaimer'
import MyCarousel from './section/Carousel';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      item :'mobil',
      speed : 10,
    }
  }
  componentDidMount(){
    const rooteRef = firebase.database().ref().child('react');
    const valueRef = rooteRef.child('kendaraan').child('1');

    valueRef.child('nama').on('value', snap =>{
      this.setState({
        item : snap.val(),
      })
    })
    valueRef.child('speed').on('value', snap =>{
      this.setState({
        speed : snap.val()
      })
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <DisclaimerSection/>
        </div>
        <article>
          <h1 className='title'> Apakah yang Anda Cari di Sini?</h1>
          <div className="Menu">
          <MenuSection/>
          </div>
          <div className="Disc-menu">
          <h1 className='title'>Selayang Pandang</h1>
          <MyCarousel/>
          </div>
          <div class="Disc-angkatan">
            <h2><u><b>Kami Adalah Bagian dari ATMAJAKARSA 2018</b></u></h2>
            <p><b><i>"Atmareswara Jatmika Among Karsa Darpa Mahasura"</i></b></p>
            <p><i><small>"Jiwa Unggul Penjaga Gagasan yang Berani, Penuh Sopan Santun,
             dan Menjadi Kebanggaan"</small></i></p>
        </div>
        </article>
      </div>
    );
  }
}

export default Home;
