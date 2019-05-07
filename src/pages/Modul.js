import React from 'react';
import {Row, Col, Container, Jumbotron} from 'react-bootstrap';

class Modul extends React.Component{
    render(){
        return(
            <div className="App">
                <Container>
                    <Row>
                        <Col>
                            <h1>Bank Modul</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Jumbotron>
                                <h3>Modul Terbaru</h3>
                            </Jumbotron>
                        </Col>
                        <Col>
                            <Jumbotron>
                                <h3>Pilih Mata Kuliah</h3>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Modul;