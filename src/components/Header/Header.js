import "./Header.scss";
import logo from "../../assets/Logo/InStock-Logo.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  // Define a regular expression to match paths starting with "/inventories"
  const warehousePathRegex = /^\/warehouses\/\d+(\/(edit|add|delete))?$/;

  // Check if the current path matches the regular expression
  const isActiveWarehouse =
    location.pathname === "/warehouses" ||
    warehousePathRegex.test(location.pathname);

  // Define a regular expression to match paths starting with "/inventories"
  const inventoryPathRegex = /^\/inventories\/\d+(\/(edit|add|delete))?$/;

  // Check if the current path matches the regular expression
  const isActiveInventory =
    location.pathname === "/inventories" ||
    inventoryPathRegex.test(location.pathname);

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} className="header__logo"></img>
      </Link>
      <div className="header__navbar">
        <Link
          to="/warehouses"
          className={
            isActiveWarehouse || !isActiveInventory
              ? "header__link header__warehouses-link--active"
              : "header__link"
          }
        >
          Warehouses
        </Link>
        <Link
          to="/inventories"
          className={
            isActiveInventory
              ? "header__link header__inventories-link--active"
              : "header__link"
          }
        >
          Inventory
        </Link>
      </div>
    </header>
  );
};

export default Header;
