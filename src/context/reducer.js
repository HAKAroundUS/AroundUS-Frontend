import {
    DISPLAY_ALERT,
    CLEAR_ALERT,
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    LOGIN_USER_BEGIN,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    ADD_SHOP_BEGIN,
    ADD_SHOP_ERROR,
    ADD_SHOP_SUCCESS,
    GET_SHOP_BEGIN,
    GET_SHOP_SUCCESS,
    GET_SHOP_ERROR,
    DELETE_TAG_BEGIN,
    DELETE_TAG_ERROR,
    DELETE_TAG_SUCCESS,
    GET_SHOP_CITY_BEGIN,
    GET_SHOP_CITY_SUCCESS,
    GET_SHOP_CITY_ERROR,
    HANDLE_CHANGE

} from "./action"
import { initialState } from "./appContext";

const reducer = (state, action) => {
    if (action.type === DISPLAY_ALERT) {
        return {
            ...state,
            showAlert: true,
            alertType: 'danger',
            alertText: 'Please provide all values'
        }
    }
    if (action.type === CLEAR_ALERT) {
        return {
            ...state,
            showAlert: false,
            alertType: '',
            alertText: '',
        }
    }
    if (action.type === REGISTER_USER_BEGIN) {
        return { ...state, isLoading: true }
    }
    if (action.type === REGISTER_USER_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            token: action.payload.token,
            user: action.payload.user,
            showAlert: true,
            alertType: 'success',
            alertText: 'User Created! Redirection...'
        }

    }
    if (action.type === REGISTER_USER_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
        }
    }

    if (action.type === LOGIN_USER_BEGIN) {
        return { ...state, isLoading: true }
    }
    if (action.type === LOGIN_USER_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            token: action.payload.token,
            user: action.payload.user,
            showAlert: true,
            alertType: 'success',
            alertText: 'Login Successfull! Redirection...'
        }

    }
    if (action.type === LOGIN_USER_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
        }
    }
    if (action.type === ADD_SHOP_BEGIN) {
        return { ...state, isLoading: true }
    }
    if (action.type === ADD_SHOP_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'success',
            alertText: 'Shop Added Successfuly'
        }
    }
    if (action.type === ADD_SHOP_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
        }
    }
    if (action.type === GET_SHOP_BEGIN) {
        return {
            ...state,
            isLoading: true
        }
    }
    if (action.type === GET_SHOP_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'success',
            alertText: `${action.payload.num} shops found.`,
            shops: action.payload.content
        }
    }
    if (action.type === GET_SHOP_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: "danger",
            alertText: action.payload.msg,
        };
    }
    if (action.type === DELETE_TAG_BEGIN) {
        return {
            ...state,
            isLoading: true
        }
    }
    if (action.type === DELETE_TAG_SUCCESS) {
        return {
            ...state,
            isLoading: false
        }
    }
    if (action.type === DELETE_TAG_ERROR) {
        return {
            ...state,
            isLoading: false,

        }
    }

    if (action.type === GET_SHOP_CITY_BEGIN) {
        return {
            ...state,
            isLoading: true
        }
    }

    if (action.type === GET_SHOP_CITY_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            cityShops: action.payload.content,
            cityShopsNum: action.payload.num,
            coords: action.payload.cityCoords
        }
    }
    if (action.type === GET_SHOP_CITY_ERROR) {
        return {
            ...state,
            isLoading: false,

        }
    }
    if (action.type === HANDLE_CHANGE) {
        return {
            ...state,

            [action.payload.name]: action.payload.value
        }
    }
};
export default reducer;