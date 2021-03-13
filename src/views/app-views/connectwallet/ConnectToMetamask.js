import React , {useEffect, useState} from "react";
import { connect } from 'react-redux'
import { addMetamaskWallet,  } from 'redux/actions/Blockchain';
import { Form, Input, Alert, Row, Col, Button, Card, Modal  } from "antd";
import {   GitlabOutlined, ThunderboltTwoTone, LoadingOutlined} from '@ant-design/icons';

const ConnectToMetamask = (props) => {
  const { addMetamaskWallet } = props
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
	  setIsModalVisible(true)
	  addMetamaskWallet()
	  };
	
  const handleCancel = () => {setIsModalVisible(false);};
	
	return (
		<>
		  <div className={`d-flex align-items-center justify-content-between mb-4`}>
			<Button icon={<GitlabOutlined />} type="default" block onClick={showModal}>
				<span>MetaMask</span>
			</Button>
		   </div>
	 		<Modal title="Wallet Connect" 
			   visible={isModalVisible} 
			   onCancel={handleCancel}  
		       footer={[<Button key="Cancle" onClick={handleCancel}> Cancel </Button>]}
			>
              <p><LoadingOutlined /> Connect MetaMask to TACTION to proceed</p>
        	</Modal>
  		 </>
	)
}


const mapDispatchToProps = {
	addMetamaskWallet,
}

export default connect(null, mapDispatchToProps)(ConnectToMetamask)
