import React, { Component } from 'react';
import logo from '../beenst.png';
import * as firebase from 'firebase';
import 'firebase/database';

import HeaderSection from './section/Header';
import MenuSection from './section/Menu';
import DisclaimerSection from './section/Disclaimer'
import FooterSection from './section/Footer';

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
        <HeaderSection/>
        <header className="App-header">
          <div className='Home-welcome'>
            <div className='content-welcome'>
              <img src={logo} className="App-logo" alt="logo" />
              <p>
              <h2>Web resmi Instrumentasi 1 B 2018 <br/>
              SEKOLAH TINGGI METEOROLOGI KLIMATOLOGI DAN GEOFISIKA</h2>
              </p>
            </div>
          </div>
           <div className='content-welcome'>
              <img src={logo} className="App-logo" alt="logo" />
              <p>
              <h2>Web resmi Instrumentasi 1 B 2018 <br/>
              SEKOLAH TINGGI METEOROLOGI KLIMATOLOGI DAN GEOFISIKA</h2>
              </p>
            </div>
        </header>
        <article>
          <h1>{/*this.state.item}: {this.state.speed*/}</h1>
          <h1> Apakah yang Anda Cari di Sini?</h1>
          <MenuSection/>
          <DisclaimerSection/>
          <div class="Disc-angkatan">
            <h2><u>Kami Adalah Bagian dari ATMAJAKARSA 2018</u></h2>
            <p><b><i>"Atmareswara Jatmika Among Karsa Darpa Mahasura"</i></b></p>
            <p><i><small>"Jiwa Unggul Penjaga Gagasan yang Berani, Penuh Sopan Santun,
             dan Menjadi Kebanggaan"</small></i></p>
        </div>
        </article>
        <footer>
          <FooterSection/>
        </footer>
      </div>
    );
  }
}

export default Home;
