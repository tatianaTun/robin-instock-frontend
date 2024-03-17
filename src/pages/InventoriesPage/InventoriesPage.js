import InventoryList from "../../components/InventoryList/InventoryList";
import "./InventoriesPage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseURL } from "../../consts";
import axios from "axios";

function InventoriesPage() {
  //fetch list of inventories data by id
  const { inventoriesId } = useParams();

  const [inventoryItem, setInventoryItem] = useState(null);
  useEffect(() => {
    const getInventoryDetails = async () => {
      try {
        const result = await axios.get(
          `${baseURL}/inventories/${inventoriesId}`
        );
       
        setInventoryItem(result.data);
      
      } catch (error) {
        console.log(error);
      }
    };

    getInventoryDetails();
  }, [inventoriesId]);

  return (
    <main className="inventory-page">
      <InventoryList 
      inventoriesId={inventoriesId} 
      />
    </main>
  );
}

export default InventoriesPage;
