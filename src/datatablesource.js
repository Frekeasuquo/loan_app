export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: "user", headerName:"User", width: 230, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field: "email",
        headerName: "Email",
        width: 230
    },
    {
        field: "age",
        headerName: "Age",
        width: 100
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
]

export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png",
        status: "active",
        email: "snow@gmail.com",
        age: 40
    },
    {
        id: 2,
        username: "Jamie Lannister",
        img: "https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png",
        status: "passive",
        email: "2snow@gmail.com",
        age: 50
    },
    {
        id: 3,
        username: "Lannister",
        img: "https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png",
        status: "pending",
        email: "3snow@gmail.com",
        age: 34
    },
    {
        id: 4,
        username: "Stark",
        img: "https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png",
        status: "active",
        email: "4snow@gmail.com",
        age: 17
    },
    {
        id: 5,
        username: "Targaryen",
        img: "https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png",
        status: "passive",
        email: "5snow@gmail.com",
        age: 22
    },
    {
        id: 6,
        username: "Melisandre",
        img: "https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png",
        status: "active",
        email: "6snow@gmail.com",
        age: 15
    },
    {
        id: 7,
        username: "Clifford",
        img: "https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png",
        status: "passive",
        email: "7snow@gmail.com",
        age: 44
    },
    {
        id: 8,
        username: "Frances",
        img: "https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png",
        status: "active",
        email: "8snow@gmail.com",
        age: 67
    },
    {
        id: 9,
        username: "Roxie",
        img: "https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png",
        status: "pending",
        email: "9snow@gmail.com",
        age: 88
    },
    {
        id: 10,
        username: "Roxie",
        img: "https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png",
        status: "active",
        email: "01snow@gmail.com",
        age: 65
    },
]