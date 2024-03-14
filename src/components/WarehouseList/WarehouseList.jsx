import "./WarehouseList.scss";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { baseURL } from "../../consts";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import searchicon from "../../assets/Icons/search-24px.svg";
import sort from "../../assets/Icons/sort-24px.svg";
import arrowback from "../../assets/Icons/arrow_back-24px.svg";
import chevronright from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";

function WarehouseList(warehouseData) {
  console.log(warehouseData);
  return (
    <main className="warehouselist">
      <h1 className="warehouselist__title">Warehouses</h1>
      <div className="warehouselist__search">
        <input
          className="warehouselist__input"
          type="search"
          name="input"
          id="searchinput"
          placeholder="Search..."
          required
        />

        <img
          src={searchicon}
          alt="search icon"
          className="warehouselist__icon"
        />
      </div>

      {/* <link to=""> */}
      <div className="warehouselist__section">
        <button type="submit" className="warehouselist__button">
          + Add New Warehouse
        </button>
      </div>

      <div className="warehouselist__container">
        <div className="warehouselist__group">
          <div className="warehouselist__header">
            <div className="warehouselist__subtitle">WAREHOUSE</div>
            <img src={sort} alt="sort icon" className="warehouselist__sort" />
          </div>

          <div className="warehouselist__name">
            <p className="warehouselist__body--color">
              {/* {warehouseData.warehouse_name} */}
            </p>
            <img
              src={chevronright}
              alt="chevron right icon"
              className="warehouselist__arrow"
            ></img>
          </div>
        </div>

        <div className="warehouselist__address">
          <p className="warehouselist__subtitle">ADDRESS</p>
          <img src={sort} alt="sort icon" className="warehouselist__sort" />
          <p className="warehouselist__body">{/* {warehouseData.address} */}</p>
          {/* {warehouseData.city} */}
          {/* {warehouseData.country} */}
        </div>
      </div>

      <div className="warehouselist__group">
        <div className="warehouselist__contact-name">
          <p className="warehouselist__subtitle">CONTACT NAME</p>
          <img src={sort} alt="sort icon" className="warehouselist__sort" />
          <p className="warehouselist__body">
            {/* {warehouseData.contact_name} */}
          </p>
        </div>

        <div className="warehouselist__contact-info">
          <p className="warehouselist__subtitle">CONTACT INFORMATION</p>
          <img src={sort} alt="sort icon" className="warehouselist__sort" />
          <p className="warehouselist__body">
            {/* {warehouseData.contact_phone} */}
            {/* {warehouseData.contact_email0} */}
          </p>
        </div>
      </div>

      <div className="warehouselist__div">
        <p className="warehouselist__subtitle">ACTIONS</p>
        <img
          src={deleteIcon}
          alt="chevron right icon"
          className="warehouselist__img"
        ></img>
        <img
          src={editIcon}
          alt="chevron right icon"
          className="warehouselist__img"
        ></img>
      </div>

      {/* </link> */}

      {/* <Link
            to={`/warehouse/${warehouse.id}`}  
          > */}
      {/* </Link> */}

      {/* {warehouseData.map((warehouse) => (
        <WarehouseList
          key={warehouse.id}
          warehousename={warehouse.warehouse_name}
          address={warehouse.address}
          city={warehouse.city}
          country={warehouse.country}
          contactname={warehouse.contact_name}
          position={warehouse.contact_position}
          phone={warehouse.contact_phone}
          email={warehouse.contact_email}
        />
      ))} */}
    </main>
  );
}

export default WarehouseList;
