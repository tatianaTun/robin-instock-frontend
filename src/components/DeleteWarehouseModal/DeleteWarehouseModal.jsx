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

// <Button onClick={handleOpen}>Open modal</Button>
// <Modal
//   open={open}
//   onClose={handleClose}
//   aria-labelledby="modal-modal-title"
//   aria-describedby="modal-modal-description"
// >
//   <Box sx={style}>
//     <Typography id="modal-modal-title" variant="h6" component="h2">
//       Text in a modal
//     </Typography>
//     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//       Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//     </Typography>
//   </Box>
// </Modal>

export default DeleteWarehouseModal;
