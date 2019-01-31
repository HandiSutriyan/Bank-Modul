import React, { Component } from 'react';
import {Container, Row, Col, Button, CardGroup, Card} from 'react-bootstrap';

class MenuSection extends Component{
	render(){
		return(
				<Container>
					<Row md={12}>
						<Col>
							<CardGroup>
							  <Card style={{ width: '18rem' }}>
								  <Card.Body>
								  	<Card.Img variant="top" src="https://isorepublic.com/wp-content/uploads/2018/11/books-pile-1100x733.jpg" />
								    <Card.Title>Modul Pembelajaran</Card.Title>
								    <Card.Text>
								      Some quick example text to build on the card title and make up the bulk of
								      the card's content.
								    </Card.Text>
								    <a href="https://insb2018juara.000webhostapp.com/index.php?modul">
								    	<Button variant="primary">Akses Modul</Button>
								    </a>
								  </Card.Body>
								</Card>;
							  <Card style={{ width: '18rem' }}>
								  <Card.Body>
								  	<Card.Img variant="top" src="https://isorepublic.com/wp-content/uploads/2018/11/school-library-books-1100x733.jpg"/>
								    <Card.Title>Tugas</Card.Title>
								    <Card.Text>
								      Some quick example text to build on the card title and make up the bulk of
								      the card's content.
								    </Card.Text>
								    <a href="https://insb2018juara.000webhostapp.com/index.php?tugas">
								    	<Button variant="primary">Tugas</Button>
								    </a>
								  </Card.Body>
								</Card>;
							   <Card style={{ width: '18rem' }}>
								  <Card.Body>
								  	<Card.Img variant="top" src="https://image.shutterstock.com/image-photo/microphone-stand-isolated-on-white-450w-547072228.jpg"/>
								    <Card.Title>JARKOM</Card.Title>
								    <Card.Text>
								      Some quick example text to build on the card title and make up the bulk of
								      the card's content.
								    </Card.Text>
								    <a href="https://insb2018juara.000webhostapp.com/index.php?jarkom">
								    	<Button variant="primary">JARKOM</Button>
								    </a>
								  </Card.Body>
								</Card>;
							</CardGroup>
						</Col>
					</Row>
				</Container>
			)
	}
}

export default MenuSection;