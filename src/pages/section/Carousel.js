import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Row, Col, Container} from 'react-bootstrap';

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
          <Container>
             <Carousel>
              <Carousel.Item>
                  <Row>
                    <Col md="4">
                      <Carousel.Caption style={{height:"100%"}}>
                        <h1><b>Instrumentasi B 2018</b>
                        </h1>
                        <p>Terdiri dari 29 orang dari seluruh Indonesia dengan karkater yang berbeda</p>
                      </Carousel.Caption>
                    </Col>
                    <Col md="8">
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
                    <Col md="4">
                      <Carousel.Caption style={{height:"100%"}}>
                        <h1><b>Saling Melengkapi</b>
                        </h1>
                        <p>Melengkapi kekurangan diantara kami. Dan saling berbagi bahagia dan kesedihan untuk mempererat kesatuan</p>
                      </Carousel.Caption>
                    </Col>
                    <Col md="8">
                      <img
                      className="d-block w-100"
                      style={{ width: '100%', maxHeight:'450px' }}
                      src={logo2}
                      alt="First slide"
                      />
                    </Col>
                  </Row>
                </Carousel.Item>
              </Carousel> 
          </Container>
             
             )
    }
}

export default MyCarousel;