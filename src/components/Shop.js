import { useState } from "react"
import { FaShoppingCart, FaPhone, FaBriefcase } from "react-icons/fa";
// import { Link } from 'react-router-dom'
// import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/Wrappers/Shops'
import EditPage from "./EditPage";
import ShopInfo from './ShopInfo'
const Shop = (props) => {
    // const {setEditShop} = useAppContext();
    const [showEdit, setShowEdit] = useState(false)
    const editHandler = () => {
        setShowEdit(!showEdit)
    }
    const deleteHandler = () => {

    }
    return (
        <Wrapper>
            <header>
                <div className="main_icon">{<FaShoppingCart />}</div>
                <div className="info">
                    <h3>{props.name}</h3>
                    <ShopInfo icon={<FaBriefcase />} text={props.category} />
                    <h3>{props.address}</h3>
                </div>
            </header>

            <div className="content">
                <footer>
                    <div className='actions'>
                        <button className='btn' onClick={editHandler}>Edit Shop</button>
                    </div>
                    <div className='actions'>
                        <button className='btn btn-danger' onClick={deleteHandler}>Delete Shop</button>
                    </div>
                </footer>
                {showEdit && <EditPage shopId={props.shopId} tags={props.tags} />}
            </div>
        </Wrapper>
    )
}
export default Shop