import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const List = () => {

    const rows = [
        {
            id: 101010,
            product: "Iphone 13",
            img: "https://media.gettyimages.com/id/1352310179/photo/invincible-uk-premiere-vip-arrivals.jpg?s=612x612&w=gi&k=20&c=BaskY5YLY_ZL9g6pAgW8Rr7zPORxcHY3-Nq78sW5M_Q=",
            customer: "Daniel Park",
            date: "5 June",
            amount: 440,
            method: "Cash on Delivery",
            status: "Approved"
        },
        {
            id: 223344,
            product: "Playstation 5",
            img: "https://media.gettyimages.com/id/1352310179/photo/invincible-uk-premiere-vip-arrivals.jpg?s=612x612&w=gi&k=20&c=BaskY5YLY_ZL9g6pAgW8Rr7zPORxcHY3-Nq78sW5M_Q=",
            customer: "Saka John",
            date: "23 May",
            amount: 500,
            method: "Online Payment",
            status: "Pending"
        },
        {
            id: 305600,
            product: "LG TV",
            img: "https://media.gettyimages.com/id/1352310179/photo/invincible-uk-premiere-vip-arrivals.jpg?s=612x612&w=gi&k=20&c=BaskY5YLY_ZL9g6pAgW8Rr7zPORxcHY3-Nq78sW5M_Q=",
            customer: "Idara Pan",
            date: "1 January",
            amount: 440,
            method: "Cash on Delivery",
            status: "Approved"
        },
        {
            id: 290045,
            product: "Range Rover",
            img: "https://media.gettyimages.com/id/1352310179/photo/invincible-uk-premiere-vip-arrivals.jpg?s=612x612&w=gi&k=20&c=BaskY5YLY_ZL9g6pAgW8Rr7zPORxcHY3-Nq78sW5M_Q=",
            customer: "Ball John",
            date: "23 April",
            amount: 940,
            method: "Cash on Delivery",
            status: "Pending"
        },
        {
            id: 900344,
            product: "Razer Blade 15",
            img: "https://media.gettyimages.com/id/1352310179/photo/invincible-uk-premiere-vip-arrivals.jpg?s=612x612&w=gi&k=20&c=BaskY5YLY_ZL9g6pAgW8Rr7zPORxcHY3-Nq78sW5M_Q=",
            customer: "Donald Blue",
            date: "5 March",
            amount: 560,
            method: "Online",
            status: "Approved"
        },
        {
            id: 134567,
            product: "Mac Book Pro 2023",
            img: "https://media.gettyimages.com/id/1352310179/photo/invincible-uk-premiere-vip-arrivals.jpg?s=612x612&w=gi&k=20&c=BaskY5YLY_ZL9g6pAgW8Rr7zPORxcHY3-Nq78sW5M_Q=",
            customer: "Peter Paul",
            date: "14 May",
            amount: 999,
            method: "Online ",
            status: "Pending"
        },

    ];

    return (
        <TableContainer component={Paper} className='table'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell className='tableCell'>Tracking ID</TableCell>
                    <TableCell className='tableCell'>Product</TableCell>
                    <TableCell className='tableCell'>Customer</TableCell>
                    <TableCell className='tableCell'>Date</TableCell>
                    <TableCell className='tableCell'>Amount</TableCell>
                    <TableCell className='tableCell'>Payment Method</TableCell>
                    <TableCell className='tableCell'>Status</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                <TableRow
                    key={row.id}
                >
                    <TableCell className='ido'>
                        {row.id}
                    </TableCell>
                    <TableCell className='tableCell'>
                        <div className='cellWrapper'>
                            <img src={row.img} alt="Product" className='image' />
                            {row.product}
                        </div>
                    </TableCell>
                    <TableCell className='tableCell'>{row.customer}</TableCell>
                    <TableCell className='tableCell'>{row.date}</TableCell>
                    <TableCell className='tableCell'>{row.amount}</TableCell>
                    <TableCell className='tableCell'>{row.method}</TableCell>
                    <TableCell className='tableCell'>
                        <span className={`status ${row.status}`}>{row.status}</span>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    )
};

export default List;