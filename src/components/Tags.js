import Wrapper from "../assets/Wrappers/Tags"

import { useAppContext } from "../context/appContext"
const Tags = (props) => {
    // console.log(props)
    const { deleteTag, getShops } = useAppContext()
    let color = { background: 'green', color: 'lightgreen' }
    if (props.tag.quantity === 'red') {
        color.background = '#f8d7da'
        color.color = '#842029'
    }
    else if (props.tag.quantity === 'yellow') {
        color.background = '#FFE15D'
        color.color = '#F49D1A'
    }
    else {
        color.background = '#d1e7dd'
        color.color = '#0f5132'
    }
    const deleteHandler = () => {
        const name = props.tag.name
        // const tagID = props.tag._id
        const shopId = props.shopId
        const currentTag = { name, shopId }
        console.log(currentTag)
        deleteTag(currentTag)
        // getShops()
        window.location.reload();
    }
    return (
        <Wrapper style={color}>
            {props.tag.name} {!props.secret && <button style={color} className="clas-btn" onClick={deleteHandler}>⨯</button>}
        </Wrapper>
    )

}

export default Tags