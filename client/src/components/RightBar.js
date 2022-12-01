import Wrapper from "../assets/Wrappers/RightBar"
import { FaShoppingCart } from "react-icons/fa";
import Tags from "./Tags";


const RightBar = (props) => {


    return (
        <Wrapper>
            <div className="image">
                {<FaShoppingCart />}
            </div>
            <div className="data">
                <h2>Shop: {props.data.name}</h2>
                <h3>Category: {props.data.category}</h3>
                <h4>Items</h4>
                <div className="tags">
                    {props.data.tags.map((tag) => {
                        return <Tags key={tag._id} tag={tag} shopId={props.shopId} secret={true} />
                    })}
                </div>
            </div>

        </Wrapper>

    )
}
export default RightBar