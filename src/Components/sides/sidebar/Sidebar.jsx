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
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

// import { PersonOutlineRoundedIcon} from '@mui/icons-material'


const Sidebar = () => {

    const { dispatch } = useContext(DarkModeContext)
    return (
        <div className='sidebar'>
            <div className='top'>
                <Link to='/' style={{ textDecoration: "none"}}>
                    <span className='logo'>Jumperio</span>
                </Link>
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
                    <Link to='/users' style={{ textDecoration: "none"}}>
                        <li>
                            <PersonOutlineRoundedIcon className='icon'/>
                            <span>Users</span>
                        </li>
                    </Link>
                    
                    <Link to='/products' style={{ textDecoration: "none"}}>
                        <li>
                            <ProductionQuantityLimitsIcon className='icon'/>
                            <span>Products</span>
                        </li>
                    </Link>
                    
                    <Link to='/orders' style={{ textDecoration: "none"}}>
                        <li>
                            <GradingIcon className='icon'/>
                            <span>Orders</span>
                        </li>
                    </Link>
                    
                    <Link to='/delivery' style={{ textDecoration: "none"}}>
                        <li>
                            <LocalShippingIcon className='icon'/>
                            <span>Delivery</span>
                        </li>
                    </Link>
                    
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
                <div className='colorOption' onClick={() => dispatch({ type:"LIGHT"})}></div>
                <div className='colorOption'  onClick={() => dispatch({ type:"DARK"})}></div>
            </div>
        </div>
    )
};

export default Sidebar;