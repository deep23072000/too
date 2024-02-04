import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
const Navbar = ()=>{
  const cartItems = useSelector((state) => state.auth.items);

 
    return(
        <>
          <Link to="/"> index </Link>
          <Link to="/home"> home </Link>

          <div>{cartItems.length}</div>
          
        </>
    )
}

export default Navbar;