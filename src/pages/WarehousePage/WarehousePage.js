import { useEffect, useState } from "react";
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList";
// import DeleteInventoryModal from "../../components/DeleteInventoryModal/DeleteInventoryModal";
import "./WarehousePage.scss";
import axios from "axios";
import { baseURL } from "../../consts";
import { useParams } from "react-router-dom";

function WarehousePage() {
  const { warehouseId } = useParams();
  console.log(warehouseId);
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

  //   const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  //   const [showDeletePage, setShowDeletePage] = useState(false);
  //   const [warehouseData, setwarehouseData] = useState([]);

  useEffect(() => {
    const getWarehouse = async () => {
      try {
        const res = await axios.get(`${baseURL}/warehouses/${warehouseId}`);
        setWarehouse(res.data);
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    getWarehouse();
  }, [warehouseId]);

  //   useEffect(() => {
  //     const getWarehouseList = async () => {
  //       try {
  //         const result = await axios.get(`${baseURL}/warehouses`);
  //         setwarehouseData(result.data);
  //       } catch (error) {}
  //     };

  //     getWarehouseList();
  //   }, []);

  //delete warehouse

  //   const handleDeleteClick = (warehouse) => {
  //     setSelectedWarehouse(warehouse);
  //     setShowDeletePage(true);
  //   };

  //   const handleCancel = () => {
  //     setShowDeletePage(false);
  //   };

  //   const handleDelete = async () => {
  //     try {
  //       await axios.delete(`${baseURL}/warehouses/${selectedWarehouse.id}`);
  //       setwarehouseData(
  //         warehouseData.filter(
  //           (warehouse) => warehouse.id !== selectedWarehouse.id
  //         )
  //       );

  //       setShowDeletePage(false);
  //     } catch (error) {}
  //   };

  return (
    <main className="warehouse-inventory-page">
      <WarehouseInventoryList
        warehouse={warehouse}
        // warehouseData={warehouseData}
        // handleDeleteClick={handleDeleteClick}
      />
      {/* <DeleteInventoryModal
        inventories={inventories}
        displayPage={showDeleteInventory}
        inventoryName={selectedInventory?.item_name}
        DeleteButton={handleDeleteButton}
        CancelButton={handleCancelButton}
      /> */}
    </main>
  );
}

export default WarehousePage;
