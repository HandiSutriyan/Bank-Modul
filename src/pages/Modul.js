import React from 'react';
import {Row, Col, Container, Jumbotron, Button} from 'react-bootstrap';

class Modul extends React.Component{
    constructor(){
        super();
        this.state = {
         matkul:[
             {nama:'Fisika II', value:'fis2'},
             {nama:'Matematika II', value:'mtk2'},
             {nama:'Peralatan Pengamatan Meteorologi & Klimaologi', value:'ppmk'},
             {nama:'Praktik Peralatan Pengamatan Meteorologi & Klimaologi', value:'prppmk'},
             {nama:'Sensor I', value:'sens1'},
             {nama: 'Praktik Sensor I', vaue:'prsesns1'},
             {nama: 'Pengukuran dan Alat Ukur', value:'pau'},
             {nama: 'Parktik Pengukuran dan Alat Ukur', value:'prpau'},
             {nama: 'Pendahuluan Geofisika', value:'geof'},
             {nama: 'Teknik Digital I', value:'tekdig1'},
             {nama: 'Parktik Teknik Digital I', value:'prtekdig1'},

         ]
        }
    }
    render(){
        return(
            <div className="App">
                <Container>
                    <Row>
                        <Col>
                            <p>
                            <h1 className="brand-bg">Bank Modul</h1>
                            <a href='/upload'>
                                <Button primary>Unggah Modul Baru</Button>
                            </a>
                            </p>
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
                                {this.state.matkul.map((item,i)=>(
                                    <Button primary id={i} style={{margin:'5px'}}>{item.nama}</Button>
                                ))}
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Modul;