import "./WarehousesPage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList.jsx";
import DeleteWarehouseModal from "../../components/DeleteWarehouseModal/DeleteWarehouseModal";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../consts.js";
import { useParams } from "react-router-dom";

function WarehousePage() {
  const [warehouseData, setwarehouseData] = useState([]);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const [showDeletePage, setShowDeletePage] = useState(false);
  //list of warehouse data by id const
  const { warehouseId } = useParams();

  const [warehouse, setWarehouse] = useState({
    id: 1,
    warehouse_name: "Manhattan",
    address: "503 Broadway",
    city: "New York",
    country: "USA",
    contact_name: "Parmin Aujla",
    contact_position: "Warehouse Manager",
    contact_phone: "+1 (646) 123-1234",
    contact_email: "paujla@instock.com",
  });

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

  //fetch warehouse data by id
  // useEffect(() => {
  //   const getWarehouse = async () => {
  //     try {
  //       const res = await axios.get(`${baseURL}/warehouses/${warehouseId}`);

  //       setWarehouse(res.data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   getWarehouse();
  // }, [warehouseId]);

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
          warehouseId={warehouseId}
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
