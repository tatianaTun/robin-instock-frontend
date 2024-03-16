import "./InventoryList.scss";
import InventoryListHeader from "../InventoryListHeader/InventoryListHeader";
import InventoryCard from "../InventoryCard/InventoryCard";
import InventoryTable from "../InventoryTable/InventoryTable";
import DeleteInventoryModal from "../DeleteInventoryModal/DeleteInventoryModal";
import { useEffect, useState } from "react";
import { baseURL } from "../../consts";
import axios from "axios";

function InventoryList() {
  const [inventories, setInventories] = useState([]);
  const [selectedInventory, setSelectedInventory] = useState(null);
  const [showDeleteInventory, setShowDeleteInventory] = useState(false);

  useEffect(() => {
    const getInventories = async () => {
      try {
        const res = await axios.get(`${baseURL}/inventories`);
        setInventories(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };

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
          <InventoryCard
            key={inventory.id}
            inventory={inventory}
            handleDeleteButtonClick={handleDeleteButtonClick}
          />
        ))}
      </div>
      <InventoryTable
        inventories={inventories}
        handleDeleteButtonClick={handleDeleteButtonClick}
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
