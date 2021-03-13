import React, {useState, useEffect} from 'react'
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import {db} from "auth/FirebaseAuth"

const Userlist = () => {

	
	const [users, setUsers] = useState([])
	const [userProfileVisible, setUseProfileVisible] = useState(false)
	const [selectedUser, setSelectedUser] = useState(null)
	
		
		const getUsersFromFB = async () =>{
		console.log('this is useEffect');
		await db.collection("users").get().then((querySnapshot) => {
			querySnapshot.forEach((doc) => {console.log(doc.id, " => ", doc.data());
											setUsers(prev => [...prev,doc.data()])
										   })
		})
	}
	
	
	useEffect(()=>{
		getUsersFromFB();
	},[])

	
	return (
		<>

		<Card bodyStyle={{'padding': '0px'}}>
				<Table columns={columns} dataSource={users} rowKey='uid' />
			</Card>
		</>
	)
}

export default Userlist



										const dataSource = [
									  {
										uid: '250aiJxNE8NQTAJXKMDPJHjatlB3',
										name: 'Mike',
										email: 'zxcv@naver.com',
										profileImage: 'http://gravatar.com/avatar/0df0e04f7e6fe4ae45f58a7b8dc5363c?d=identicon',
										address: '0xf934bfd04f1a4DCa2C7dDAcC5D59ECb71059FdBA',
											  role: 'user',
										  team: 'TKD-COOP'
									  },
									  {
										uid: 'dfgdf@naver.com',
										name: 'saff',
										email: 'dfgdf@naver.com',
										profileImage: 'http://gravatar.com/avatar/6c5af67c036204b15013338df8d07dba?d=identicon',
										  address: '0xd246f7484F696ccf9BAc2ea60330Dd9A3C332eff',
										  role: 'referee',
										  team: 'TKD-COOP'
									  },
									];

									const columns = [
									  {
										title: 'Name',
										dataIndex: 'name',
										key: 'name',
										render: (_, record) => (
											<div className="d-flex">
												<AvatarStatus src={record.profileImage} name={record.name} subTitle={record.email}/>
											</div>
										),
									  },
									  {
										title: 'Address',
										dataIndex: 'address',
										key: 'address',
									  },
										  {
										title: 'Role',
										dataIndex: 'role',
										key: 'role',
									  },
									  {
										title: 'Team',
										dataIndex: 'team',
										key: 'team',
									  },
		
									];
