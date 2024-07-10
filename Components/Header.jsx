import { Link, NavLink } from "react-router-dom";


const urlImg = "https://img.freepik.com/premium-vector/calculator-with-money-line-logo-vector-icon-symbol-design-graphic-illustration_15473-791.jpg";

const Header = () => {
  return(
    <div className="main">
          <ul className="list">
            {/* <li>Home</li> */}
            {/* <li><Link to="/">Home</Link></li>
            <li>About</li>
            <li>Contact</li>
            <li>Login</li> */}
             <li><NavLink exact to="/" activeClassName="active-link">Home</NavLink></li> {/* Use NavLink */}
        <li><NavLink to="/about" activeClassName="active-link">About</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active-link">Contact</NavLink></li>
        <li><NavLink to="/login" activeClassName="active-link">Login</NavLink></li>
          </ul>
    </div>
  )
}

export default Header;