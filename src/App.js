
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Details from './Pages/Details';
import Landing from './Pages/LandingPage';
import OwnerPage from './Pages/OwnerPage';
import ShopRegister from './Pages/ShopRegister';
import { useAppContext } from '../src/context/appContext'
import Navbar from './components/Navbar';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'
function App() {
  // const navigate = useNavigate()
  const { user } = useAppContext()
  // useEffect(() => {
  //   if (user) {
  //     navigate('/owner')
  //   }
  //   else{

  //   }
  // }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='register' element={<ShopRegister />} />
        <Route path='details/:id' element={<Details />} />
        {user && <Route path='owner' element={<OwnerPage />} />}

      </Routes>

    </BrowserRouter>
  );
}

export default App;
