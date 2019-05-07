import React, { Component } from 'react';
import {Button, Nav, Navbar, NavDropdown, Form, FormControl} from 'react-bootstrap';

class HeaderSection extends Component{
	render(){
		return(
					<Navbar bg="transparent" expand="lg">
					  <Navbar.Brand href="/">BEENST Instrumentasi B 2018</Navbar.Brand>
					  <Navbar.Toggle aria-controls="basic-navbar-nav" />
					  <Navbar.Collapse id="basic-navbar-nav">
					    <Nav className="mr-auto">
								<Nav.Link href="/about">Profil</Nav.Link>
								<NavDropdown title="Layanan" id="basic-nav-dropdown">
					        <NavDropdown.Item href="/modul">Akses Modul</NavDropdown.Item>
					        <NavDropdown.Item href="https://insb2018juara.000webhostapp.com/index.php?tugas">Tugas</NavDropdown.Item>
					        <NavDropdown.Item href="https://insb2018juara.000webhostapp.com/index.php?jarkom">JARKOM</NavDropdown.Item>
					      </NavDropdown>
					      <Nav.Link href="https://www.bmkg.go.id/" target="_blank">BMKG</Nav.Link>
					      <Nav.Link href="https://stmkg.ac.id/" target="_blank">STMKG</Nav.Link>
					      <Nav.Link href="https://instrumentasi.stmkg.ac.id/" target="_blank">Instrumentasi</Nav.Link>
					      <Nav.Link href="https://itarsi.stmkg.ac.id/" target="_blank">ITARSI</Nav.Link>
					     
					    
					    </Nav>
					    <Form inline>
					      <FormControl type="text" placeholder="Search" className="mr-sm-2" disabled />
					      <Button variant="outline-success">Search</Button>
					    </Form>
					  </Navbar.Collapse>
					</Navbar>
				
			)
	}
}
export default HeaderSection;