import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Row, Col} from 'react-bootstrap';

import logo from '../../insb.jpg';
import logo2 from './news.jpg';

class MyCarousel extends React.Component
{
  constructor(){
    super();
    this.state = {
        data: logo,
        data2: logo2,
    }
  }  
  render(){
        return(
            <Carousel>
<Carousel.Item>
    <Row>
      <Col md="5">
        <Carousel.Caption>
          <h1><b>Instrumentasi B 
            Angkatan 2018</b>
          </h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.Like most websites, we use cookies to give you a personalized service and to improve our website. For the best experience, please click “Accept Cookies”.</p>
        </Carousel.Caption>
      </Col>
      <Col md="7">
        <img
        className="d-block w-100"
        src={logo}
        alt="First slide"
        />
      </Col>
    </Row>
  </Carousel.Item>
  <Carousel.Item>
    <Row>
      <Col md="5">
        <Carousel.Caption>
          <h1><b>Instrumentasi B 
            Angkatan 2018</b>
          </h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.Like most websites, we use cookies to give you a personalized service and to improve our website. For the best experience, please click “Accept Cookies”.</p>
        </Carousel.Caption>
      </Col>
      <Col md="7">
        <img
        className="d-block w-100"
        src={logo}
        alt="First slide"
        />
      </Col>
    </Row>
  </Carousel.Item>
</Carousel>
        )
    }
}

export default MyCarousel;