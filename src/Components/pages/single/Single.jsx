import './Single.scss'
import Sidebar from '../../sides/sidebar/Sidebar'
import Navbar from '../../sides/navbar/Navbar'
import Chart from '../../chart/Chart'
import List from '../../table/Table'

const Single = () => {

    return (
        <div className='single'>
            <Sidebar/>
            <div className='singleContainer'>
                <Navbar />
                <div className='top'>
                    <div className='left'>
                        <div className='editButton'>Edit</div>
                        <h1 className='title'>Information</h1>
                        <div className='item'>
                            <img
                                src='https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png'
                                alt=''
                                className='itemImg'
                            />
                            <div className='details'>
                                <h1 className='itemTitle'>John Doe</h1>
                                <div className='detailItem'>
                                    <span className='itemKey'>Email:</span>
                                    <span className='itemValue'>JohnDoe@gmail.com</span>
                                </div>
                                <div className='detailItem'>
                                    <span className='itemKey'>Phone:</span>
                                    <span className='itemValue'>+23412345678</span>
                                </div>
                                <div className='detailItem'>
                                    <span className='itemKey'>Address:</span>
                                    <span className='itemValue'>N0 1234 Ikoyi Lagos</span>
                                </div>
                                <div className='detailItem'>
                                    <span className='itemKey'>Country:</span>
                                    <span className='itemValue'>Lagos</span>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className='right'>
                        <Chart aspect={3 / 1} title="User Spending (Last 6 Months)"/>
                    </div>
                </div>
                <div className='bottom'>
                <h1 className='title'>Last Transaction</h1>
                    <List />
                </div>
            </div>
        </div>
    )
};

export default Single;