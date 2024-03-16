import React from "react";
import "./InventoryDetails.scss";
import { Link } from "react-router-dom";
import arrowback from "../../assets/Icons/arrow_back-24px.svg";
import editModifiedIcon from "../../assets/Icons/edit-modified-24px.svg";

function InventoryDetails({ inventoryItem, warehouseData, inventoriesId }) {
  console.log(inventoriesId);

  const warehouse = warehouseData.find(
    (warehouse) => warehouse.id === inventoryItem.warehouse_id
  );
  const warehouseName = warehouse
    ? warehouse.warehouse_name
    : "Can not find Warehouse";

  return (
    <section className="inventorydetails">
      <div className="inventorydetails__nav">
        <div className="inventorydetails__group">
          <Link to="/inventories">
            <img
              className="inventorydetails__arrow"
              src={arrowback}
              alt="arrowback to inventories page"
            />
          </Link>
          <h1 className="inventorydetails__title">{inventoryItem.item_name}</h1>
        </div>

        {/* <Link to={`/inventories/${inventoriesId}/edit`}> */}
        <div className="inventorydetails__icon-background">
          <img
            className="inventorydetails__edit"
            src={editModifiedIcon}
            alt="edit icon"
          />
        </div>
        {/* </Link> */}

        {/* <Link to={`/inventories/${inventoriesId}/edit`}> */}
        <div className="inventorydetails__icon-background--modify">
          <img
            className="inventorydetails__edit--modify"
            src={editModifiedIcon}
            alt="edit icon"
          />
          Edit
        </div>
        {/* </Link> */}
      </div>

      <div className="inventorydetails__content">
        <div className="inventorydetails__section">
          <div className="inventorydetails__header">
            <h3 className="inventorydetails__subtitle">ITEM DESCRIPTION:</h3>
            <p className="inventorydetails__body">
              {inventoryItem.description}
            </p>
          </div>
          <div className="inventorydetails__header">
            <h3 className="inventorydetails__subtitle">CATEGORY:</h3>
            <p className="inventorydetails__body">{inventoryItem.category}</p>
          </div>
        </div>
        <div className="inventorydetails__divider"></div>
        <div className="inventorydetails__section">
          <div className="inventorydetails__container">
            <div className="inventorydetails__header">
              <h3 className="inventorydetails__subtitle">STATUS:</h3>
              <p
                className={`inventorydetails__body ${
                  inventoryItem.status === "In Stock"
                    ? "inventorydetails__body--in-stock"
                    : "inventorydetails__body--out-of-stock"
                }`}
              >
                {inventoryItem.status}
              </p>
            </div>

            <div className="inventorydetails__header">
              <h3 className="inventorydetails__subtitle">QUANTITY:</h3>
              <p className="inventorydetails__body">{inventoryItem.quantity}</p>
            </div>
          </div>
          <div className="inventorydetails__header">
            <h3 className="inventorydetails__subtitle">WAREHOUSE:</h3>
            <p className="inventorydetails__body">{warehouseName}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InventoryDetails;
