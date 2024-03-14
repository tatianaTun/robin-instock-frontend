import "./WarehousePage.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../consts";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import searchicon from "../../assets/icons/search-24px.svg";

function WarehouseList() {
  return (
    <div className="warehouseList">
      <h1 className="warehouseList__title">Warehouses</h1>
      <div className="warehouseList__search">
        <input
          className="warehouseList__input"
          type="search"
          name="input"
          id="searchinput"
          placeholder="Search..."
          required
        />

        <img
          src={searchicon}
          alt="search icon"
          className="warehouseList__icon"
        />
      </div>

      {/* <link to=""> */}
      <div className="warehouseList__section">
        <button type="submit" className="warehouseList__button">
          + Add New Warehouse
        </button>
      </div>

      {/* </link> */}

      {/* {warehouses.map((warehouse) => (
        <Link
          to={`/warehouse/${warehouse.id}`}
          key={warehouse.id}
          className="warehouse-item"
        >
          <h2>{warehouse.warehouse_name}</h2>
          <p>{warehouse.address}</p>
          <p>{warehouse.contact_name}</p>
          <p>{warehouse.contact_information}</p>
        </Link>
      ))} */}
    </div>
  );
}

export default WarehouseList;
