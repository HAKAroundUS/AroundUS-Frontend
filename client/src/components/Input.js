// import classes from '../../assets/CSS/Input.module.css'
import Wrapper from "../assets/Wrappers/Input"
const Input = (props) => {
    return (
        <Wrapper className="row">
            <label htmlFor={props.name} className={props.className}>
                {props.labelText || props.name}
            </label>

            <input
                type={props.type}
                value={props.value}
                name={props.name}
                onChange={props.onChange}
                ref={props.ref}
                className="input"
            />
        </Wrapper>
    )
}

export default Input