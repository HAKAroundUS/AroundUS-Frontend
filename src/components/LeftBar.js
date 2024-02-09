import Input from "./Input"
import Logo from "../components/Logo"
import Wrapper from "../assets/Wrappers/LeftBar.js"
import { useEffect, useState } from "react"
import { useAppContext } from "../context/appContext"
import Navbar from "./Navbar.js"
const LeftBar = () => {
    const [city, setCity] = useState(false);
    const [value, setValue] = useState('')
    const { getShopsByCity, handleChange } = useAppContext()
    const handleSearch = (e) => {
        setValue(e.target.value)
    }
    const handleTagSearch = (e) => {
        const name = e.target.name
        const value = e.target.value
        handleChange({ name, value })
    }

    const cityHandler = () => {
        setCity(!city)
        getShopsByCity(value)
    }
    return (
        <Wrapper>

            <div className="logo">
                <img src="./bg.png" alt="bg" />
            </div>

            <div className="search">
                <form className="form">
                    <h1>Search</h1>
                    <div className="form-center">
                        <Input type='text' name='CityName' className='label' value={value} onChange={handleSearch}></Input>
                        <button type='button' className='btn member-btn' onClick={cityHandler} disabled={city}>
                            {city ? "Refresh to search for new city" : "Search your current city"}
                        </button>
                        {city && <Input
                            type='text'
                            name='tag'
                            className='label'
                            // value={search}
                            onChange={handleTagSearch}
                        ></Input>}
                    </div>
                    {city && <button type='button' className='btn member-btn'>
                        Submit
                    </button>}
                </form>

            </div>


        </Wrapper>
    )
}
export default LeftBar