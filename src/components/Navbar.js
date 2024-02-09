import Wrapper from "../assets/Wrappers/Navbar"
import { Link } from "react-router-dom"
import Logo from "./Logo";
const Navbar = () => {

  return (
    <Wrapper>
      {/* <Logo /> */}
      <Link to="/register" className="btn">
        Become an Owner
      </Link>
    </Wrapper>
  );
}

export default Navbar