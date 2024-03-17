import forwardIcon from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import { Link } from "react-router-dom";
import React from "react";
import "./InventoryCard.scss";
import InventoryStatus from "../InventoryStatus/InventoryStatus";

function InventoryCard({
  inventory,
  handleDeleteButtonClick,
  warehouseData,
  inventoriesId,
}) {
  if (!warehouseData) {
    return <div>Loading...</div>;
  }
  console.log(warehouseData);

  // console.log(inventory);

  // const warehouseName = warehouseData.find((warehouse) => {
  //   return warehouse.id === inventory.warehouse_id;
  // }).warehouse_name;

  const warehouse = warehouseData.find(
    (warehouse) => warehouse.id === inventory.warehouse_id
  );
  const warehouseName = warehouse
    ? warehouse.warehouse_name
    : "Can not find Warehouse";

  return (
    <div className="inventory-card">
      <div className="inventory-card__content">
        <div>
          <div className="inventory-card__field">
            <h3 className="inventory-card__label">INVENTORY ITEM</h3>
            <Link to="/" className="inventory-card__value">
              {inventory.item_name} <img src={forwardIcon} alt="" />
            </Link>
          </div>
          <div className="inventory-card__field">
            <h3 className="inventory-card__label">CATEGORY</h3>
            <p className="inventory-card__value">{inventory.category}</p>
          </div>
        </div>
        <div>
          <div className="inventory-card__field">
            <h3 className="inventory-card__label">STATUS</h3>
            <p className="inventory-card__value">
              <InventoryStatus status={inventory.status} />
            </p>
          </div>
          <div className="inventory-card__field">
            <h3 className="inventory-card__label">QTY</h3>
            <p className="inventory-card__value">{inventory.quantity}</p>
          </div>
          <div className="inventory-card__field">
            <h3 className="inventory-card__label">WAREHOUSE</h3>
            <p className="inventory-card__value">{warehouseName}</p>
          </div>
        </div>
      </div>
      <div className="inventory-card__actions">
        <img
          onClick={() => handleDeleteButtonClick(inventory)}
          src={deleteIcon}
          alt="Delete"
        />

        <Link to={`/inventories/${inventoriesId}/edit`}>
          <img src={editIcon} alt="Edit" />
        </Link>
      </div>
    </div>
  );
}

export default InventoryCard;
