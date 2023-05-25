import Navbar from '../../sides/navbar/Navbar';
import Sidebar from '../../sides/sidebar/Sidebar';
import './Home.scss'


const Home = () => {

    return (
        <div className='home'>
            <Sidebar/>
            <div className='homeContainer'>
                <Navbar/>
                Home Container
            </div>
        </div>
    )
};

export default Home;