import "./DeleteWarehouseModal.scss";
import closeIcon from "../../assets/Icons/close-24px.svg";

function DeleteWarehouseModal({ display, Delete, Cancel, warehouseName }) {
  if (!display) return null;
  return (
    <div className="deletewarehouse">
      <img
        onClick={Cancel}
        src={closeIcon}
        alt="closeIcon"
        className="deletewarehouse__icon"
      />

      <div className="deletewarehouse__section">
        <h1 className="deletewarehouse__title">
          Delete {warehouseName} warehouse?
        </h1>
        <h2 className="deletewarehouse__subtitle">
          Please confirm that you'd like to delete the {warehouseName} from the
          list of warehouses. You won't be able to undo this action.
        </h2>
        <div className="deletewarehouse__buttons">
          <button className="deletewarehouse__cancel" onClick={Cancel}>
            Cancel
          </button>
          <button className="deletewarehouse__delete" onClick={Delete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteWarehouseModal;
