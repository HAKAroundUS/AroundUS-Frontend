import React, { useReducer, useContext } from 'react';
import reducer from './reducer';
import axios from 'axios'
import {
    DISPLAY_ALERT,
    CLEAR_ALERT,
    REGISTER_USER_BEGIN,
    REGISTER_USER_ERROR,
    REGISTER_USER_SUCCESS,
    LOGIN_USER_BEGIN,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    ADD_SHOP_BEGIN,
    ADD_SHOP_ERROR,
    ADD_SHOP_SUCCESS,
    GET_SHOP_BEGIN,
    GET_SHOP_SUCCESS,
    GET_SHOP_ERROR,
    ADD_TAG_BEGIN,
    ADD_TAG_ERROR,
    ADD_TAG_SUCCESS,
    DELETE_TAG_BEGIN,
    DELETE_TAG_SUCCESS,
    DELETE_TAG_ERROR,
    GET_SHOP_CITY_BEGIN,
    GET_SHOP_CITY_SUCCESS,
    HANDLE_CHANGE
} from "./action"

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')

export const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    user: user ? JSON.parse(user) : null,
    token: token,
    shops: [],// getting image of user from backend,
    cityShops: [],
    cityShopsNum: 0,
    tag: '',
    coordinates: undefined,
    coords: []

}
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    //functions
    const displayAlert = () => {
        dispatch({ type: DISPLAY_ALERT })
        clearAlert()
    }
    const clearAlert = () => {
        setTimeout(() => {
            dispatch({ type: CLEAR_ALERT })

        }, 3000)
    }
    const handleChange = ({ name, value }) => {
        dispatch({ type: HANDLE_CHANGE, payload: { name, value } })
    }
    const addUsertoLocalStorage = ({ user, token }) => {
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token);
    }
    const removeUserfromLocalStorage = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }
    const registerUser = async (currentUser) => {
        dispatch({ type: REGISTER_USER_BEGIN });
        try {
            const { data } = await axios.post('/v1/user/register', currentUser)
            console.log(data)
            const { user, token } = await data.data
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: { user, token }
            })
            addUsertoLocalStorage({ user, token })
        } catch (error) {
            // console.log(response.error)
            dispatch({ type: REGISTER_USER_ERROR, payload: { msg: 'Something went wrong' } })
        }
        clearAlert()
    }

    const loginUser = async (currentUser) => {
        dispatch({ type: LOGIN_USER_BEGIN });
        try {
            const { data } = await axios.post('/v1/user/login', currentUser);
            console.log(data)
            const { user, token } = data.data
            dispatch({ type: LOGIN_USER_SUCCESS, payload: { user, token } })
            addUsertoLocalStorage({ user, token })
        } catch (error) {
            dispatch({ type: LOGIN_USER_ERROR, payload: { msg: 'Something went wrong' } })

        }
        clearAlert()
    }
    const logoutUser = () => {
        handleChange({ name: 'user', value: null })
        handleChange({ name: 'shops', value: [] })
        handleChange({ name: 'showAlert', value: false })
        removeUserfromLocalStorage()
    }
    const addShop = async (currentShop) => {
        console.log(currentShop)
        console.log('Adding Shop..', currentShop)
        dispatch({ type: ADD_SHOP_BEGIN });
        try {
            console.log(currentShop)
            const { data } = await axios.post("/v1/shops", currentShop, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            dispatch({ type: ADD_SHOP_SUCCESS })

        } catch (error) {
            dispatch({ type: ADD_SHOP_ERROR, payload: { msg: 'Something went wrong' } })
        }
    }
    const getShops = async () => {
        dispatch({ type: GET_SHOP_BEGIN })
        try {
            const { data } = await axios.get('/v1/getshops', {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })


            dispatch({ type: GET_SHOP_SUCCESS, payload: { content: data.data.shops, num: data.data.shops.length } })
        } catch (error) {
            dispatch({ type: GET_SHOP_ERROR, payload: { msg: 'Something went wrong' } })
        }
    }

    const addTag = async (currTag) => {
        dispatch({ type: ADD_TAG_BEGIN })
        try {
            const { data } = await axios.post('/v1/tags', currTag, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            dispatch({ type: ADD_TAG_SUCCESS })

        } catch (error) {
            dispatch({ type: ADD_TAG_ERROR, payload: { msg: 'Something went wrong' } })
        }
    }

    const deleteTag = async (currentTag) => {
        dispatch({ type: DELETE_TAG_BEGIN })
        try {
            console.log(currentTag)
            console.log(token)
            const { data } = await axios.post('/v1/tags/delete', currentTag, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            dispatch({ type: DELETE_TAG_SUCCESS })

        } catch (error) {
            dispatch({ type: DELETE_TAG_ERROR })
        }
    }
    const getShopsByCity = async (city) => {
        dispatch({ type: GET_SHOP_CITY_BEGIN })

        try {
            const url = `/v1/shops?city=${city}`
            const { data } = await axios.get(url)
            console.log(data.data.coords)
            dispatch({ type: GET_SHOP_CITY_SUCCESS, payload: { content: data.data.shops, num: data.data.shops.length, cityCoords: data.data.coords } })
        } catch (error) {
            dispatch({ type: GET_SHOP_CITY_SUCCESS, payload: { msg: 'Something went wrong' } })

        }
    }

    return (
        <AppContext.Provider
            value={{
                ...state, displayAlert, loginUser, registerUser, logoutUser, addShop, getShops, addTag, removeUserfromLocalStorage
                , deleteTag, getShopsByCity, handleChange
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
// make sure use
export const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider };