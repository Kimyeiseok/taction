import React from 'react'
import { connect } from "react-redux";
import { 
	signOut,
	showLoading, 
} from 'redux/actions/Auth';

const Dashboard = (props) => {
	
		const { 
		signOut,
		showLoading,
	} = props
	
	
	const onLogout = () => {
		showLoading()
		signOut();
	}
	
	return (
	<>	
		<div>
			 dashboard component works!
		</div>
		<button onClick={()=>{onLogout()}}> LogOut </button>
	</>
	)
}


const mapStateToProps = ({auth}) => {
	const {loading, message, showMessage, token, redirect} = auth;
  return {loading, message, showMessage, token, redirect}
}

const mapDispatchToProps = {
	signOut,
	showLoading,
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)