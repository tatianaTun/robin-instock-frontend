import React from "react";
import "./InventoryDetails.scss";
import editModifiedIcon from "../../assets/Icons/edit-modified-24px.svg";

function InventoryDetails({ inventoryId }) {
  return (
    <div className="inventory-details">
      <section className="inventory-details-content">
        <div className="inventory-details-item">
          <h3>Item Description:</h3>
          <p>{inventoryId.description}</p>
        </div>
        <div className="inventory-details-category">
          <h3>Category:</h3>
          <p>{inventoryId.category}</p>
        </div>
        <div className="inventory-details-status">
          <h3>Status:</h3>
          <p>{inventoryId.status}</p>
        </div>
        <div className="inventory-details-quantity">
          <h3>Quantity:</h3>
          <p>{inventoryId.quantity}</p>
        </div>
        <div className="inventory-details-warehouse">
          <h3>Warehouse:</h3>
          <p>{inventoryId.warehouse_id}</p>
        </div>
      </section>
    </div>
  );
}

export default InventoryDetails;
