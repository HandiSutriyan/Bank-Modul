import React, { Component } from 'react';

import * as firebase from 'firebase';
import 'firebase/database';

import MenuSection from './section/Menu';
import DisclaimerSection from './section/Disclaimer'
import MyCarousel from './section/Carousel';
import { Container, Row, Col, Button } from 'react-bootstrap';

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
          <Container style={{zIndex:1}}>
          <Row>
            <Col style={{color:'white', textAlign:'center'}}>
              <h1 className='title brand-bg'><b>Web Resmi Instrumentasi B 2018</b></h1>
              <p>
                Web ini dibuat untu memenuhi kebutuhan taruna/i kelas
                Instrumentasi I B akan kebutuhan modul pembelajaran
              </p>
              <a href="/about">
              <Button primary>Kunjungi profil kami</Button>
              </a>
            </Col>
          </Row>
          </Container>
        </div>
        <article>
          <h1 className='brand-bg title'> Apakah yang Anda Cari di Sini?</h1>
          <div className="Menu">
          <MenuSection/>
          </div>
          <div className="Disc-menu">
          <h1 className='brand-bg title'>Selayang Pandang</h1>
          <MyCarousel/>
          </div>
          <div className="Disc-angkatan">
            <Container style={{textAlign:'center'}}>
              <h2><u><b>Kami Adalah Bagian dari ATMAJAKARSA 2018</b></u></h2>
              <p><b><i>"Atmareswara Jatmika Among Karsa Darpa Mahasura"</i></b></p>
              <p><i><small>"Jiwa Unggul Penjaga Gagasan yang Berani, Penuh Sopan Santun,
              dan Menjadi Kebanggaan"</small></i></p>
            </Container>
        </div>
        </article>
      </div>
    );
  }
}

export default Home;
