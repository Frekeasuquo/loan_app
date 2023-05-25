import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import GradingIcon from '@mui/icons-material/Grading';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import AnchorIcon from '@mui/icons-material/Anchor';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';


const Sidebar = () => {

    return (
        <div className='sidebar'>
            <div className='top'>
                <span className='logo'>Jumperio</span>
            </div>
            <hr/>
            <div className='center'>
                <ul>
                    <p className='title'>MAIN</p>
                    <li>
                        <DashboardIcon className='icon'/>
                        <span>Dashboard</span>
                    </li>
                    <p className='title'>LISTS</p>
                    <li>
                        <PersonOutlineRoundedIcon className='icon'/>
                        <span>Users</span>
                    </li>
                    <li>
                        <ProductionQuantityLimitsIcon className='icon'/>
                        <span>Products</span>
                    </li>
                    <li>
                        <GradingIcon className='icon'/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className='icon'/>
                        <span>Delivery</span>
                    </li>
                    <p className='title'>USEFUL</p>
                    <li>
                        <QueryStatsIcon className='icon'/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className='icon'/>
                        <span>Notification</span>
                    </li>
                    <p className='title'>SERVICES</p>
                    <li>
                        <MonitorHeartIcon className='icon'/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <AnchorIcon className='icon'/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className='icon'/>
                        <span>Setting</span>
                    </li>
                    <p className='title'>USER</p>
                    <li>
                        <AccountBoxIcon className='icon'/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className='icon'/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className='bottom'>
                <div className='colorOption'></div>
                <div className='colorOption'></div>
            </div>
        </div>
    )
};

export default Sidebar;