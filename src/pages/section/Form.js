import React from 'react';

import {Form, Button, Container } from 'react-bootstrap';

class FormSection extends React.Component{
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
            <Container>
                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Judul Modul</Form.Label>
                        <Form.Control type="email" placeholder="Judul Modul" />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Mata Kuliah</Form.Label>
                        <Form.Control as="select">
                            <option>Pilih..</option>
                           {this.state.matkul.map((item,i)=>{
                               return(
                                <option id={i} value={item.value}>{item.nama}</option>
                               )
                           })}
                        </Form.Control>
                    </Form.Group>
                    <Button success>Unggah</Button>
                    <a href="/modul"> <Button warning>Batal</Button></a>
                </Form>
            </Container>
        )
    }
}

export default FormSection;