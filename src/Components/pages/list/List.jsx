import Datatable from "../../datatable/Datatable";
import Navbar from "../../sides/navbar/Navbar";
import Sidebar from "../../sides/sidebar/Sidebar";
import "./List.scss"

const List = () => {

    return (
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <Datatable/>
            </div>
        </div>
    )
};

export default List;