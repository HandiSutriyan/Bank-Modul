import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import logo from '../../beenst.png';

class FooterSection extends Component{
	render(){
		return(
			<Container className="Footer" fluid>
				<Row>
					<Col md="6" style={{textAlign:'center'}}>
					<img src={logo} />
					<h3 className="brand-bg">Instrumentasi B 2018</h3>
					</Col>
					<Col md="6" style={{fontSize:'14px'}}>
						<h4><u>Pengurus Utama Kelas</u></h4>
							<ol>
								<li>Komandan Pleton: Rois Misbakhudin</li>
								<li>Wakil Komandan Pleton: Rahmad Fardi W.</li>
								<li>Sekretaris: Khaeradin Abd kadir</li>
								<li>Bendahara: Regina Natalia</li>
								
							</ol>
						<h4><u>Kontak</u></h4>
						<p>
							Instagram: @beenst<br/>
							Email: insbjuara@gmail.com
						</p>
					</Col>
				</Row>
				<Row>
					<Col style={{fontSize:'14px', fontSize:'11px'}}>Copyright &copy; 2019 PMJCreatives</Col>
				</Row>
			</Container>
			)
	}
}
export default FooterSection;