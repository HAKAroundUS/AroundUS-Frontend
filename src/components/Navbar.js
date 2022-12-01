import Wrapper from "../assets/Wrappers/Navbar"
import { Link } from "react-router-dom"

const Navbar = () => {

  return (
    <Wrapper>
      <Link to="/register" className="btn">
        Become an Owner
      </Link>
    </Wrapper>
  );
}

export default Navbar