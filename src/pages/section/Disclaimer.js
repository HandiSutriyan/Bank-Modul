import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class DisclaimerSection extends Component{
	render(){	
		return(
			<Container>
				<Row>
					<Col style={{color:'white'}}>
						<h1 className='title'><b>Untuk Apa Web ini dibuat?</b></h1>
						<p>
							Web ini dibuat untu memenuhi kebutuhan taruna/i kelas
							Instrumentasi I B akan kebutuhan modul pembelajaran, karena sering kali 
							modul pembelajaran hanya dibagikan lewat chatting saja yang kemungkinan akan
							hilang dan terhapus jika mereka menghapus riwayat obrolannya dan belum sempat
							mengunduh modul yang sudah dibagikan, maka dari itu dibuatlah web ini sebagai 
							sarana untuk berbagi dan mengakses modulpembelajaran yang ada.
						</p>
					</Col>
				</Row>
			</Container>
		)
	}
}
export default DisclaimerSection;