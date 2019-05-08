import React from 'react';
import {Container, Jumbotron} from 'react-bootstrap';

import FormSection from './section/Form';

class Upload extends React.Component{
    render(){
        return(
            <div className="App " style={{padding:"20px"}}>
                <Container>
                <h1 className="title brand-bg">Unggah Modul</h1>
                <Jumbotron>
                    <FormSection/>
                </Jumbotron>
                </Container>

            </div>
        )
    }
}

export default Upload;