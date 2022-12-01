import { useState } from "react"
import Wrapper from "../assets/Wrappers/EditPage"
import Input from "./Input"
import Tags from "./Tags"
import { useAppContext } from "../context/appContext"
import SelectInput from "./SelectInput"

const EditPage = (props) => {
    const [tag, setTag] = useState('')
    const { addTag, displayAlert } = useAppContext()
    const [quantity, setQuantity] = useState('green')
    const quantityOptions = ['green', 'yellow', 'red']
    const onChangeHandler = (e) => {
        setTag(e.target.value)
    }
    const handleQuantity = (e) => {
        setQuantity(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if (!tag) {
            displayAlert()
            return
        }
        const currTag = { shopId: props.shopId, name: tag, quantity }
        addTag(currTag)
        // getShops()
        window.location.reload(false);

    }
    return (
        <Wrapper>
            <div className="tags">
                {props.tags.map((tag) => {
                    return <Tags key={tag._id} tag={tag} shopId={props.shopId} />
                })}
            </div>

            <Input type='text' value={tag} name='tag' className='label' onChange={onChangeHandler} />
            <SelectInput
                name='quantity'
                value={quantity}
                handleChange={handleQuantity}
                list={quantityOptions} />
            <button type='submit' className='btn member-btn' onClick={submitHandler}>
                Submit
            </button>
        </Wrapper>
    )
}

export default EditPage