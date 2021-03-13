import { 
  DashboardOutlined, HomeOutlined, WalletOutlined, TeamOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'home',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'home',
  icon: HomeOutlined,
  breadcrumb: false,
  submenu: []
},
  {
  key: 'userlist',
  path: `${APP_PREFIX_PATH}/userlist`,
  title: 'userlist',
  icon: TeamOutlined,
  breadcrumb: false,
  submenu: []
},
 {
  key: 'dashboard',
  path: `${APP_PREFIX_PATH}/dashboard`,
  title: 'dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: []
},
						   {
  key: 'connectwallet',
  path: `${APP_PREFIX_PATH}/connectwallet`,
  title: 'connect wallet',
  icon: WalletOutlined,
  breadcrumb: false,
  submenu: []
},

						 ]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
