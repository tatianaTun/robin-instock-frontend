import "./InventoryList.scss";
import InventoryListHeader from "../InventoryListHeader/InventoryListHeader";
import InventoryCard from "../InventoryCard/InventoryCard";
import InventoryTable from "../InventoryTable/InventoryTable";
import DeleteInventoryModal from "../DeleteInventoryModal/DeleteInventoryModal";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseURL } from "../../consts";
import axios from "axios";

function InventoryList({ inventoriesId }) {

  const [inventories, setInventories] = useState([]);
  const [selectedInventory, setSelectedInventory] = useState(null);
  const [showDeleteInventory, setShowDeleteInventory] = useState(false);
  const [warehouseData, setwarehouseData] = useState([]);

  useEffect(() => {
    const getInventories = async () => {
      try {
        const res = await axios.get(`${baseURL}/inventories`);
        setInventories(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    const getWarehouseList = async () => {
      try {
        const result = await axios.get(`${baseURL}/warehouses`);
        setwarehouseData(result.data);
      } catch (error) {}
    };



    getWarehouseList();

    getInventories();
  }, []);


  //delete Inventory item ticket J24XW-12
  const handleDeleteButtonClick = (inventory) => {
    setSelectedInventory(inventory);
    setShowDeleteInventory(true);
  };

  const handleCancelButton = () => {
    setShowDeleteInventory(false);
  };

  const handleDeleteButton = async () => {
    try {
      await axios.delete(`${baseURL}/inventories/${selectedInventory.id}`);
      setInventories(
        inventories.filter((inventory) => inventory.id !== selectedInventory.id)
      );

      setShowDeleteInventory(false);
    } catch (error) {}
  };

  return (
    <div className="inventory-list">
      <InventoryListHeader />
      <div className="inventory-list__cards">
        {inventories.map((inventory) => (
        //  const warehouse = warehouseData.find((warehouse)=> {
        //     return    warehouse.id === inventory.warehouse_id
        //   })
          <InventoryCard
            key={inventory.id}
            inventory={inventory}
            handleDeleteButtonClick={handleDeleteButtonClick}
            warehouseData={warehouseData}
            inventoriesId={inventoriesId}
            warehouse={warehouseData.find((warehouse)=> {
              return    warehouse.id === inventory.warehouse_id
            })}
          />
        ))}
      </div>
      <InventoryTable
        inventories={inventories}
        handleDeleteButtonClick={handleDeleteButtonClick}
        inventoriesId={inventoriesId}
        // warehouse={warehouseData.find((warehouse)=> {
        //   return    warehouse.id === inventory.warehouse_id
        // })}
      />
      <DeleteInventoryModal
        inventories={inventories}
        displayPage={showDeleteInventory}
        inventoryName={selectedInventory?.item_name}
        DeleteButton={handleDeleteButton}
        CancelButton={handleCancelButton}
      />
    </div>
  );
}

export default InventoryList;
