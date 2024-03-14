import "./deleteWarehouseModal.css";

function DeleteWarehouseModal() {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Are you sure you want to delete this warehouse?</h2>
        <div className="modal-buttons">
          <button className="modal-button">Yes</button>
          <button className="modal-button">No</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteWarehouseModal;
