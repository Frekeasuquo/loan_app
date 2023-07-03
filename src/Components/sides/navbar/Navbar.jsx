import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';


const Navbar = () => {

    const { dispatch} = useContext(DarkModeContext)

    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='search'>
                    <input type='text' placeholder='Search..'/>
                    <SearchIcon/>
                </div>
                <div className='items'>
                    <div className='item'>
                    <LanguageIcon className='icon'/>
                        English
                    </div>
                    <div className='item'>
                    <DarkModeOutlinedIcon className='icon' onClick={() => dispatch({ type: "TOGGLE"})}/>
                    </div>
                    <div className='item'>
                        <FullscreenExitOutlinedIcon className='icon'/>
                    </div>
                    <div className='item'>
                        <NotificationsNoneOutlinedIcon className='icon'/>
                        <div className='counter'>1</div>
                    </div>
                    <div className='item'>
                        <ChatBubbleOutlineOutlinedIcon className='icon'/>
                        <div className='counter'>2</div>
                    </div>
                    <div className='item'>
                        <FormatListNumberedOutlinedIcon className='icon'/>
                    </div>
                    <div className='item'>
                        <img
                            src={require('./Freke1.jpg')}
                            alt='Me'
                            className='avatar'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;