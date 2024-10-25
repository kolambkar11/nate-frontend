import PIIDataComponent from "../PIIData/PIIDataComponent"
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Slack = () =>{
return(<>
<div className=" lg:pl-72">
    <NavLink className="p-4 bg-slate-400 text-gray-800 flex" to="/slack/tables">Tables</NavLink>
    <NavLink className="p-4 bg-slate-400 text-gray-800 flex" to="/slack/files">Files</NavLink>
    </div>

<Outlet/>
</>)
}

export default Slack