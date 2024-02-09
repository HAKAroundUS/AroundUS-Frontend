import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import Wrapper from "../assets/Wrappers/OwnerPage"
import { Link } from "react-router-dom"
import { useAppContext } from '../context/appContext'
import Input from "../components/Input"
import Leaflet from "../components/Leaflet"
import Shop from '../components/Shop'
import SelectInput from "../components/SelectInput"
import { useNavigate } from "react-router-dom"

const initialState = {
  name: "",
  address: "",
  category: "",
  location: "Use current location",
};

const OwnerPage = () => {
  const navigate = useNavigate()
  const { user, displayAlert, addShop, getShops, shops, logoutUser } = useAppContext()
  const [showForm, setShowForm] = useState(false)
  const [selectedPosition, setSelectedPosition] = useState(undefined)
  const [values, setValues] = useState(initialState)


  useEffect(() => {
    getShops()
  }, [user])
  const onChangeHandler = (e) => {
    console.log(e)
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const toggleHandler = () => {
    setShowForm(!showForm)
  }
  const onSubmitHandler = (event) => {
    event.preventDefault()
    const { name, address, category } = values
    if (!name || !address || !category || (values.location === 'Point on map' && !selectedPosition)) {
      console.log('Alert')
      displayAlert()
      return
    }
    if (address.split(',').length !== 3) {
      displayAlert();
      return
    }
    let currentShop
    if (values.location === "Use current location")
      currentShop = { name, address, category, ...coordinates };
    else
      currentShop = {
        name,
        address,
        category,
        latitude: selectedPosition[0],
        longitude: selectedPosition[1],
      };
    console.log(currentShop)
    addShop(currentShop)
    window.location.reload();


  }
  const [coordinates, setCoordinates] = useState(undefined);

  if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(
      (coords) => {
        setCoordinates({ latitude: coords.coords.latitude, longitude: coords.coords.longitude });
      },
      function () {
        setCoordinates([51, 9]);
      },
      {
        enableHighAccuracy: true,
      }
    )
  return (
    <>
      <Link to="/" className="btn" onClick={logoutUser}>
        LogOut
      </Link>
      <Wrapper>
        <div className="profile">
          {/* {user.name}
                {user.email}
                {user.phone} */}
          <div className="details">
            <h4>Name: {user.name}</h4>
            <h4>Email: {user.email}</h4>
            <h4>Phone: {user.phone}</h4>
          </div>
          <div className="add-shop">
            <button className="btn cl-btn" onClick={toggleHandler}>
              Add Shop
            </button>
            {showForm && coordinates ? (
              <div className="child">
                <form className="form in-form" onSubmit={onSubmitHandler}>
                  <div className="form-center">
                    <Input
                      type="text"
                      name="name"
                      className="label"
                      value={values.name}
                      onChange={onChangeHandler}
                    ></Input>
                    <Input
                      type="text"
                      name="address"
                      className="label"
                      value={values.address}
                      onChange={onChangeHandler}
                    ></Input>
                    <Input
                      type="text"
                      name="category"
                      className="label"
                      value={values.category}
                      onChange={onChangeHandler}
                    ></Input>
                    <SelectInput
                      name="location"
                      className="label"
                      value={values.location}
                      handleChange={onChangeHandler}
                      list={['Use current location', 'Point on map']}
                    />
                  </div>
                  <button type="submit" className="btn member-btn">
                    Submit
                  </button>
                </form>
              </div>
            ) : (
              <div className="reviews">Reviews given by user</div>
            )}
          </div>
        </div>

        {
          values.location === 'Use current location' ?
            <div className="list">
              <h2>{shops.length} Shops owned</h2>
              <div className="shops">
                {shops && shops.map((shop) => {
                  return <Shop key={shop._id} {...shop} shopId={shop._id} />
                })}
              </div>
            </div>
            :
            <div className="leaflet-owner">
              <Leaflet showNav={false} selectedPosition={selectedPosition} setSelectedPosition={setSelectedPosition} />
            </div>
        }

        {/* <div className="list">
                <h2>{shops.length} Shops owned</h2>
                <div className="shops">
                    {shops && shops.map((shop) => {
                        return <Shop key={shop._id} {...shop} shopId={shop._id} />
                    })}
                </div>
            </div> */}

      </Wrapper>
    </>
  );
}

export default OwnerPage