import { useEffect } from "react";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";
import Leaflet from "../components/Leaflet";
import Navbar from "../components/Navbar";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
const Landing = () => {
    const { user, cityShops } = useAppContext()
    const navigate = useNavigate()


    return (<>
        {/* <Navbar /> */}
        <div className="main">
            <div className="left"><LeftBar /></div>
            {/* <div className="right"><RightBar /></div> */}
            <div className="leaflet-right"><Leaflet showNav={true} /></div>

        </div>
    </>
    )
}

export default Landing