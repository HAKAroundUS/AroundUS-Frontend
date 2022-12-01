import { FaShoppingCart, FaPhone, FaBriefcase } from "react-icons/fa";
// import { Link } from 'react-router-dom'
// import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/Wrappers/Shops'
import ShopInfo from './ShopInfo'
const Shop = (props) => {
    // const {setEditShop} = useAppContext();
    return (
        <Wrapper>
            <header>
                <div className="main_icon">{<FaShoppingCart />}</div>
                <div className="info">
                    <h3>{props.name}</h3>
                    <p>{props.category}</p>
                </div>
            </header>

            <div className="content">
                <div className="content_center">
                    <ShopInfo icon={<FaPhone />} text={props.phone} />
                    <ShopInfo icon={<FaBriefcase />} text={props.address} />


                </div>
                <footer>
                    <div className='actions'>
                        <button className='btn'>Navigate</button>
                    </div>
                    <div className='actions'>
                        <button className='btn'>View All</button>
                    </div>
                </footer>
            </div>
        </Wrapper>
    )
}
export default Shop