import "./WarehouseInventoryHeader.scss";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import { Link } from "react-router-dom";

function WarehouseInventoryHeader({ warehouseName, warehouseId }) {
  return (
    <div className="wi-header">
      <Link to="/warehouses">
        <div className="wi-header__nav">
          <img src={backIcon} alt="Back" />
          <h1>{warehouseName}</h1>
        </div>
      </Link>
      <Link to={`/warehouses/${warehouseId}/edit`}>
        <button className="wi-header__button">
          <img src={editIcon} alt="Edit" className="wi-header__button--icon" />

          <span className="wi-header__button--label">Edit</span>
        </button>
      </Link>
    </div>
  );
}
export default WarehouseInventoryHeader;
