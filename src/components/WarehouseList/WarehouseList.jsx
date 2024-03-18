import "./WarehouseList.scss";
import searchicon from "../../assets/Icons/search-24px.svg";
import sort from "../../assets/Icons/sort-24px.svg";
import chevronright from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import { Link } from "react-router-dom";

function WarehouseList({ warehouseData, handleDeleteClick, warehouseId }) {
  return (
    <main className="warehouselist">
      <section className="warehouselist__nav">
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
            className="warehouselist__icon"
            src={searchicon}
            alt="search icon"
          />
        </div>
        <Link to="/warehouses/add">
        <div className="warehouselist__section">
          <button type="submit" className="warehouselist__button">
            + Add New Warehouse
          </button>
        </div>
        </Link>
      </section>

      <div className="warehouselist__content">
        <div className="warehouselist__header--none">
          <div className="warehouselist__subtitle--none">WAREHOUSE</div>
          <img src={sort} alt="sort icon" className="warehouselist__sort" />
        </div>

        <div className="warehouselist__header--none">
          <p className="warehouselist__subtitle--none">ADDRESS</p>
          <img src={sort} alt="sort icon" className="warehouselist__sort" />
        </div>

        <div className="warehouselist__header--none">
          <p className="warehouselist__subtitle--none">CONTACT NAME</p>
          <img src={sort} alt="sort icon" className="warehouselist__sort" />
        </div>
        <div className="warehouselist__header--none">
          <p className="warehouselist__subtitle--none">CONTACT INFORMATION</p>
          <img src={sort} alt="sort icon" className="warehouselist__sort" />
        </div>
        <p className="warehouselist__subtitle--none">ACTIONS</p>
      </div>

      {warehouseData.map((warehouse) => (
        <div key={warehouse.id} className="warehouselist__container">
          <div className="warehouselist__main-group">
            <section className="warehouselist__division">
              <div className="warehouselist__group">
                <div className="warehouselist__header">
                  <div className="warehouselist__subtitle">WAREHOUSE</div>
                  <img
                    src={sort}
                    alt="sort icon"
                    className="warehouselist__sort"
                  />
                </div>
                <Link to={`/warehouses/${warehouse.id}`}>
                  <div className="warehouselist__name">
                    <p className="warehouselist__body--hover">
                      {warehouse.warehouse_name}
                    </p>
                    <img
                      src={chevronright}
                      alt="chevron right icon"
                      className="warehouselist__arrow"
                    />{" "}
                  </div>
                </Link>
              </div>

              <div className="warehouselist__group">
                <div className="warehouselist__header">
                  <p className="warehouselist__subtitle">ADDRESS</p>
                  <img
                    src={sort}
                    alt="sort icon"
                    className="warehouselist__sort"
                  />
                </div>

                <p className="warehouselist__body">
                  {warehouse.address} {warehouse.city}, {warehouse.country}
                </p>
              </div>
            </section>

            <section className="warehouselist__division">
              <div className="warehouselist__group">
                <div className="warehouselist__header">
                  <p className="warehouselist__subtitle">CONTACT NAME</p>
                  <img
                    src={sort}
                    alt="sort icon"
                    className="warehouselist__sort"
                  />
                </div>

                <p className="warehouselist__body">{warehouse.contact_name}</p>
              </div>

              <div className="warehouselist__group">
                <div className="warehouselist__header">
                  <p className="warehouselist__subtitle">CONTACT INFORMATION</p>
                  <img
                    src={sort}
                    alt="sort icon"
                    className="warehouselist__sort"
                  />
                </div>

                <p className="warehouselist__body">{warehouse.contact_phone}</p>
                <p className="warehouselist__body">{warehouse.contact_email}</p>
              </div>
            </section>
          </div>

          <div className="warehouselist__action">
            <p className="warehouselist__subtitle--display">ACTIONS</p>
            <div className="warehouselist__images">
              <img
                onClick={() => handleDeleteClick(warehouse)}
                src={deleteIcon}
                alt="delete icon"
                className="warehouselist__img"
              />
              <Link to={`/warehouses/${warehouse.id}/edit`}>
              <img
                src={editIcon}
                alt="edit icon"
                className="warehouselist__img"
              />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

export default WarehouseList;
