import React  from "react";
import { Menu, Dropdown, Avatar } from "antd";
import { connect } from 'react-redux'
import { 
  EditOutlined, 
  SettingOutlined, 
  LogoutOutlined 
} from '@ant-design/icons';
import Icon from 'components/util-components/Icon';
import { signOut,  } from 'redux/actions/Auth';
// import FirebaseService from 'services/FirebaseService'


const menuItem = [
	{
		title: "Edit Profile",
		icon: EditOutlined ,
		path: "/"
    },  
    {
		title: "Account Setting",
		icon: SettingOutlined,
		path: "/"
    },
]

export const NavProfile = (props) => {
   const {signOut, userInfo} = props;

  const profileImg = userInfo.photoURL
  const profileMenu = (
    <div className="nav-profile nav-dropdown">
      <div className="nav-profile-header">
        <div className="d-flex">
          <Avatar size={45} src={profileImg} />
          <div className="pl-3">
            <h4 className="mb-0">{userInfo.displayName}</h4>
            <span className="text-muted">{userInfo.email}</span>
          </div>
        </div>
      </div>
      <div className="nav-profile-body">
        <Menu>
          {menuItem.map((el, i) => {
            return (
              <Menu.Item key={i}>
                <a href={el.path}>
                  <Icon className="mr-3" type={el.icon} />
                  <span className="font-weight-normal">{el.title}</span>
                </a>
              </Menu.Item>
            );
          })}
          <Menu.Item key={menuItem.legth + 1} onClick={e => signOut()}>
            <span>
              <LogoutOutlined className="mr-3"/>
              <span className="font-weight-normal">Sign Out</span>
            </span>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
  return (
    <Dropdown placement="bottomRight" overlay={profileMenu} trigger={["click"]}>
      <Menu className="d-flex align-item-center" mode="horizontal">
        <Menu.Item>
          <Avatar src={profileImg} />
        </Menu.Item>
      </Menu>
    </Dropdown>
  );
}

const mapStateToProps = ({auth}) => {
	const { userInfo } = auth;
  return { userInfo }
}

export default connect(mapStateToProps, {signOut})(NavProfile)
