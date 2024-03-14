import "./Header.scss";
import logo from "../../assets/Logo/InStock-Logo.svg";
import { Link, useLocation  } from "react-router-dom";

const Header = () => {
  const location = useLocation();

    return (
      <header className="header">
        <Link to="/">
          <img src={logo} className="header__logo"></img>
        </Link>
        <div className="header__navbar">
            <Link to="/warehouses" className={location.pathname === "/warehouses" ? "header__link header__warehouses-link--active" : "header__link"}>
              Warehouses
            </Link>
            <Link to="/inventories" className={location.pathname === "/inventories" ? "header__link header__inventories-link--active" : "header__link"}>
              Inventory
            </Link>
        </div>
      </header>
    );
  };
  
  export default Header;