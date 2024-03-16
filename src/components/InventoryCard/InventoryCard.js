import forwardIcon from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import { Link } from "react-router-dom";
import "./InventoryCard.scss";
import InventoryStatus from "../InventoryStatus/InventoryStatus";

function InventoryCard({ inventory, handleDeleteButtonClick }) {
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
            <p className="inventory-card__value">{inventory.warehouse_name}</p>
          </div>
        </div>
      </div>
      <div className="inventory-card__actions">
        <img
          onClick={() => handleDeleteButtonClick(inventory)}
          src={deleteIcon}
          alt="Delete"
        />
        <img src={editIcon} alt="Edit" />
      </div>
    </div>
  );
}

export default InventoryCard;
