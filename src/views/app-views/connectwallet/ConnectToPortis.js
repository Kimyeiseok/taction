import React , {useEffect, useState} from "react";
import { connect } from 'react-redux'
import { addPortisWallet,  } from 'redux/actions/Blockchain';
import { Form, Input, Alert, Row, Col, Button, Card, Modal  } from "antd";
import {   GitlabOutlined, ThunderboltTwoTone, LoadingOutlined} from '@ant-design/icons';

const ConnectToPortis = (props) => {
  const { addPortisWallet } = props
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
	  setIsModalVisible(true)
	  addPortisWallet()
	  };
	
  const handleCancel = () => {setIsModalVisible(false);};
	
	return (
		<>
		  <div className={`d-flex align-items-center justify-content-between mb-4`}>
			<Button icon={<ThunderboltTwoTone />} type="default" block onClick={showModal}>
				<span>Portis</span>
			</Button>
		   </div>
	 		<Modal title="Wallet Connect" 
			   visible={isModalVisible} 
			   onCancel={handleCancel}  
		       footer={[<Button key="Cancle" onClick={handleCancel}> Cancel </Button>]}
			>
              <p><LoadingOutlined /> Connect Portis to TACTION to proceed</p>
        	</Modal>
  		 </>
	)
}


const mapDispatchToProps = {
	addPortisWallet,
}

export default connect(null, mapDispatchToProps)(ConnectToPortis)
