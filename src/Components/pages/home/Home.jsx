import Chart from '../../chart/Chart';
import Featured from '../../featured/Featured';
import Navbar from '../../sides/navbar/Navbar';
import Sidebar from '../../sides/sidebar/Sidebar';
import Table from '../../table/Table';
import Widget from '../../widgets/Widget';
import './Home.scss'


const Home = () => {

    return (
        <div className='home'>
            <Sidebar/>
            <div className='homeContainer'>
                <Navbar/>
                <div className='widgets'>
                    <Widget type="user"/>
                    <Widget type="order"/>
                    <Widget type="earning"/>
                    <Widget type="balance"/>
                </div>
                <div className='charts'>
                    <Featured/>
                    <Chart aspect={2 / 1} title="Last 6 Months (Revenue)"/>
                </div>
                <div className='listContainer'>
                    <div className='listTitle'>
                        Latest Transactions
                    </div>
                    <Table/>
                </div>
            </div>
        </div>
    )
};

export default Home;