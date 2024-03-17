
import { useEffect, useState } from "react";
import InventoryCard from "../InventoryCard/InventoryCard";
import InventoryTable from "../InventoryTable/InventoryTable";
import "./WarehouseInventoryList.scss";
import axios from "axios";
import { baseURL } from "../../consts";
import WarehouseInventoryHeader from "../WarehouseInventoryHeader/WarehouseInventoryHeader";
import WarehouseDetail from "../WarehouseDetail/WarehouseDetail";
import DeleteInventoryModal from "../DeleteInventoryModal/DeleteInventoryModal";

function WarehouseInventoryList({ warehouse }) {
  const [warehouseData, setwarehouseData] = useState([]);
  const [showDeleteInventory, setShowDeleteInventory] = useState(false);
  const [selectedInventory, setSelectedInventory] = useState(null);

  const [inventories, setInventories] = useState([
    {
      id: 68,
      warehouse_id: 7,
      item_name: "Winter Jacket",
      description:
        "Made with a durable 100% waterproof shell, and breathable layers without a ton of vents and perforations. ",
      category: "Apparel",
      status: "Out of Stock",
      quantity: 0,
    },
    {
      id: 69,
      warehouse_id: 7,
      item_name: "Watch",
      description:
        "Crafted from premium materials including a full-grain leather strap and a stainless steel case, this watch features swiss movement and is waterproof up to 5 ATM.",
      category: "Accessories",
      status: "Out of Stock",
      quantity: 0,
    },
    {
      id: 70,
      warehouse_id: 7,
      item_name: "Soap",
      description:
        "Organic and hypoallergenic, this soap is safe to use for all skin types.",
      category: "Health",
      status: "Out of Stock",
      quantity: 0,
    },
  ]);
  useEffect(() => {
    const getInventories = async () => {
      try {
        const res = await axios.get(
          `${baseURL}/inventories?warehouse_id=${warehouse.id}`
        );
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
  }, [warehouse.id]);

    
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
      <WarehouseInventoryHeader warehouseName={warehouse.warehouse_name} />
      <WarehouseDetail warehouse={warehouse} />
      <div className="inventory-list__cards">
        {inventories.map((inventory) => (
          <InventoryCard
            key={inventory.id}
            inventory={inventory}
            warehouseData={warehouseData}
            inventoriesId={inventory.id}
            handleDeleteButtonClick={handleDeleteButtonClick}
          />
        ))}
      </div>


      <DeleteInventoryModal
        inventories={inventories}
        displayPage={showDeleteInventory}
        inventoryName={selectedInventory?.item_name}
        DeleteButton={handleDeleteButton}
        CancelButton={handleCancelButton}
      />


      <InventoryTable inventories={inventories} handleDeleteButtonClick={handleDeleteButtonClick}/>
    </div>
  );
}

export default WarehouseInventoryList;

