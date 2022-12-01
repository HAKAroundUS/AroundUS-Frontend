import { useState, useEffect } from 'react'
import Logo from '../components/Logo'
import Input from '../components/Input'
import Alert from '../components/Alert'
import Wrapper from '../assets/Wrappers/RegisterPage'
import { useAppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'
const initialState = {
    name: '',
    email: '',
    password: '',
    phone: '',
    isMember: true,


}


const ShopRegister = () => {
    const [values, setValues] = useState(initialState)
    const { user, isLoading, showAlert, displayAlert, registerUser, loginUser, token } = useAppContext()
    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })

    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        const { name, email, password, phone, isMember } = values
        if (!email || !password || (!isMember && !name && !phone)) {
            displayAlert()
            return
        }
        const currentUser = { name, email, password, phone };
        if (isMember) {
            loginUser(currentUser);
        }
        else {
            registerUser(currentUser)
        }
        // console.log(values)
    }
    const toggleHandler = () => {
        setValues({ ...values, isMember: !values.isMember })
    }

    useEffect(() => {
        if (user && token) {
            setTimeout(() => {
                navigate('/owner')
            }, 3000)
        }
    }, [user, navigate, token])
    return (
        <Wrapper className='full-page'>
            <form className='form' onSubmit={onSubmitHandler}>
                <Logo />
                <h3>{values.isMember ? 'Login' : 'Register'}</h3>
                {showAlert && <Alert />}
                {/* name field */}
                {!values.isMember && <Input type='text' value={values.name} name='name' className='label' onChange={onChangeHandler} />}
                <Input type='email' value={values.email} name='email' className='label' onChange={onChangeHandler} />
                <Input type='password' value={values.password} name='password' className='label' onChange={onChangeHandler} />
                {!values.isMember && <Input type='number' value={values.phone} name="phone" className='label' onChange={onChangeHandler} />}
                <button type='submit' className='btn btn-block' disabled={isLoading} >
                    submit
                </button>
                <p>
                    {values.isMember ? 'Not a member yet?' : 'Already a member?'}

                    <button type='button' onClick={toggleHandler} className='member-btn'>
                        {values.isMember ? 'Register' : 'Login'}
                    </button>
                </p>
            </form>
        </Wrapper>
    )
}

export default ShopRegister