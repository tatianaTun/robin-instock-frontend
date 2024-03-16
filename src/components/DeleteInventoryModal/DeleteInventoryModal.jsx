import "./DeleteInventoryModal.scss";
import closeIcon from "../../assets/Icons/close-24px.svg";

function DeleteInventoryModal({
  displayPage,
  DeleteButton,
  CancelButton,
  inventoryName,
}) {
  if (!displayPage) return null;
  return (
    <div className="inventoryitem">
      <img
        onClick={CancelButton}
        src={closeIcon}
        alt="closeIcon"
        className="inventoryitem__icon"
      />

      <div className="inventoryitem__section">
        <h1 className="inventoryitem__title">
          Delete {inventoryName} inventory item?
        </h1>
        <h2 className="inventoryitem__subtitle">
          Please confirm that you'd like to delete the {inventoryName} from the
          inventory list list. You won't be able to undo this action.
        </h2>
        <div className="inventoryitem__buttons">
          <button className="inventoryitem__cancel" onClick={CancelButton}>
            Cancel
          </button>
          <button className="inventoryitem__delete" onClick={DeleteButton}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteInventoryModal;
