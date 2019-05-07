import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import logo from '../../beenst.png';

class FooterSection extends Component{
	render(){
		return(
			<Container className="Footer" fluid>
				<Row>
					<Col>
					<img src={logo} />
					<h3>Instrumentasi B 2018</h3>
					</Col>
					<Col>
						<h4>Pengurus Utama Kelas</h4>
						<p>
							<ol>
								<li>Komandan Pleton: Rois Misbakhudin</li>
								<li>Wakil Komandan Pleton: Rahmad Fardi W.</li>
								<li>Sekretaris: Khaeradin Abd kadir</li>
								<li>Bendahara: Regina Natalia</li>
								
							</ol>
						</p>
						<h4>Kontak</h4>
						<p>
							Instagram: @beenst<br/>
							Email: insbjuara@gmail.com
						</p>
					</Col>
				</Row>
				<Row>
					<Col>Copyright &copy; 2019 PMJCreatives</Col>
				</Row>
			</Container>
			)
	}
}
export default FooterSection;