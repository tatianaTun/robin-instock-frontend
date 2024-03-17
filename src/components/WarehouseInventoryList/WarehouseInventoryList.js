import { useEffect, useState } from "react";
import InventoryCard from "../InventoryCard/InventoryCard";
import InventoryTable from "../InventoryTable/InventoryTable";
import "./WarehouseInventoryList.scss";
import axios from "axios";
import { baseURL } from "../../consts";
import WarehouseInventoryHeader from "../WarehouseInventoryHeader/WarehouseInventoryHeader";
import WarehouseDetail from "../WarehouseDetail/WarehouseDetail";
function WarehouseInventoryList({ warehouse }) {
  const [warehouseData, setwarehouseData] = useState([]);
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
        console.log(res.data);
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
            inventoriesId={"0"}
          />
        ))}
      </div>
      <InventoryTable inventories={inventories} />
    </div>
  );
}

export default WarehouseInventoryList;
