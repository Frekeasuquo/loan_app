import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';


const Navbar = () => {

    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='search'>
                    <input type='text' placeholder='Search..'/>
                    <SearchIcon/>
                </div>
                <div className='items'>
                    <div className='item'>
                    <LanguageIcon/>
                        English
                    </div>
                    <div className='item'>
                    <DarkModeOutlinedIcon/>
                    </div>
                    <div className='item'>
                        <FullscreenExitOutlinedIcon/>
                    </div>
                    <div className='item'>
                        <NotificationsNoneOutlinedIcon/>
                    </div>
                    <div className='item'>
                        <ChatBubbleOutlineOutlinedIcon/>
                    </div>
                    <div className='item'>
                        <FormatListNumberedOutlinedIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;