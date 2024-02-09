import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"
import L from 'leaflet'
import { useAppContext } from "../context/appContext"
import { useState } from "react"
import Navbar from "./Navbar"
import "leaflet/dist/leaflet.css"
import icon from 'leaflet/dist/images/marker-icon.png'
import Wrapper from "../assets/Wrappers/Leaflet"
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import RightBar from "./RightBar"
const Leaflet = ({ showNav, selectedPosition, setSelectedPosition }) => {
  const { cityShops, tag, coords } = useAppContext()
  console.log(cityShops)
  const [coordinates, setCoordinates] = useState(undefined)

  let markerIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  })

  L.Marker.prototype.options.icon = markerIcon

  const ClickHandler = () => {
    const map = useMapEvents({
      click(e) {
        setSelectedPosition([e.latlng.lat, e.latlng.lng]);
      },
    });

    return selectedPosition ? (
      <Marker
        key={selectedPosition[0]}
        position={selectedPosition}
        interactive={false}
      />
    ) : null;
  }
  const LocationMarker = () => {
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        map.flyTo(coords, 13, {
          duration: 2
        })
      },
    })
    // return position === null ? null : (
    //   <Marker position={position}>
    //     <Popup>You are here</Popup>
    //   </Marker>
    // )

  }

  if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(
      (coords) => {
        setCoordinates([coords.coords.latitude, coords.coords.longitude]);
      },
      function () {
        setCoordinates([51, 9]);
      },
      {
        enableHighAccuracy: true
      }
    )
  if (coordinates) {
    return (
      <Wrapper>
        <div className="nav">
          {showNav && <Navbar />}
        </div>
        <div className="map">
          <MapContainer
            center={coordinates}
            zoom={13}
            style={{ height: "100vh", width: "100%" }}
            scrollWheelZoom={false}
          >
            {!showNav && <ClickHandler />}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {cityShops
              .filter((val) => {
                const regex = new RegExp(tag, 'i')
                if (tag === "") {
                  return true
                } else if (val.search.some(el => regex.test(el))) {
                  return true
                }
                return false
              })
              .map((shop) => {
                return (
                  <Marker key={shop._id} position={[shop.latitude, shop.longitude]}>
                    <Popup>{<RightBar data={shop} />}</Popup>
                  </Marker>
                );
              })}
            <Marker position={coordinates}>
              <Popup>
                Home position
              </Popup>
            </Marker>
            {showNav && coords.length !== 0 && <LocationMarker />}
          </MapContainer>
        </div>
      </Wrapper>
    );
  }
}

export default Leaflet