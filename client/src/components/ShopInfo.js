
import Wrapper from '../assets/Wrappers/ShopInfo'
const ShopInfo = ({ icon, text }) => {
    return (
        <Wrapper>
            <span className="icon">{icon}</span>
            <span className="text">{text}</span>
        </Wrapper>
    )
}

export default ShopInfo