import React , {useEffect, useState} from "react";
import { connect } from 'react-redux'
import { Form, Input, Alert, Row, Col, Button, Card, Modal  } from "antd";
import ConnectToPortis from './ConnectToPortis'
import ConnectToMetamask from './ConnectToMetamask'

const ConnectWallet = (props) => {
  const { addWallet } = props
  const [isModalVisible, setIsModalVisible] = useState(false);

	
  const handleOk = () => {setIsModalVisible(false);};
  const handleCancel = () => {setIsModalVisible(false);};
	
	return (
		<>
		   <Row gutter={16}>
       		 <Col xs={24} sm={24} md={24} lg={12}>
				 <Card title="Connect Wallet">
					 <div className="mt-3">
						 <ConnectToPortis />
						 <ConnectToMetamask />
					 </div>
				 </Card>
			  </Col>
		  	</Row>
   </>
	)
}


export default ConnectWallet
