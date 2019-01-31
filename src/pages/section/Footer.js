import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class FooterSection extends Component{
	render(){
		return(
			<Container>
				<Row>
					<Col><small>Copyright &copy; 2019 PMJCreatives</small></Col>
				</Row>
			</Container>
			)
	}
}
export default FooterSection;