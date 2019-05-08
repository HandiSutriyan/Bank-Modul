import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import logo from '../../beenst.png';

class FooterSection extends Component{
	constructor(){
        super();
        this.state = {
			pengurus:[
				{nama:' Rois Misbakhudin',jabatan:'Komandan Pleton'},
				{nama: 'Rahmad Fardi W.',jabatan: 'Wakil Komandan Pleton'},
				{nama: 'Haeradin Abd Kadir', jabatan:'Sekretaris'},
				{nama: 'Regina Natalia', jabatan: 'Bendahara'},
			]
        }
    }
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
								{this.state.pengurus.map((item,)=>(
									<li>{item.jabatan}: <b>{item.nama}</b></li>
								))}
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