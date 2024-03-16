import "./WarehousesPage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList.jsx";
import DeleteWarehouseModal from "../../components/DeleteWarehouseModal/DeleteWarehouseModal";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../consts.js";

function WarehousePage() {
  const [warehouseData, setwarehouseData] = useState([]);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const [showDeletePage, setShowDeletePage] = useState(false);

  //fetch list of warehouse data
  useEffect(() => {
    const getWarehouseList = async () => {
      try {
        const result = await axios.get(`${baseURL}/warehouses`);
        setwarehouseData(result.data);
      } catch (error) {}
    };

    getWarehouseList();
  }, []);

  //delete warehouse

  const handleDeleteClick = (warehouse) => {
    setSelectedWarehouse(warehouse);
    setShowDeletePage(true);
  };

  const handleCancel = () => {
    setShowDeletePage(false);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${baseURL}/warehouses/${selectedWarehouse.id}`);
      setwarehouseData(
        warehouseData.filter(
          (warehouse) => warehouse.id !== selectedWarehouse.id
        )
      );

      setShowDeletePage(false);
    } catch (error) {}
  };

  return (
    <>
      <div className="home">
        <WarehouseList
          warehouseData={warehouseData}
          handleDeleteClick={handleDeleteClick}
        />
        <DeleteWarehouseModal
          warehouseData={warehouseData}
          display={showDeletePage}
          warehouseName={selectedWarehouse?.warehouse_name}
          Delete={handleDelete}
          Cancel={handleCancel}
        />
      </div>
    </>
  );
}

export default WarehousePage;
