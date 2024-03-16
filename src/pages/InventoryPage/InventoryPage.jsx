import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../consts";
import { useParams } from "react-router-dom";
import "./InventoryPage.scss";
import InventoryDetails from "../../components/InventoryDetails/InventoryDetails";

function InventoryPage() {
  const { id } = useParams();
  console.log(id);
  const [inventoryItem, setInventoryItem] = useState(null);

  useEffect(() => {
    const getInventoryDetails = async () => {
      try {
        const result = await axios.get(`${baseURL}/inventories/${id}`);
        console.log(result);
        setInventoryItem(result.data);
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    getInventoryDetails();
  }, [id]);

  if (!inventoryItem) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="home">
        <InventoryDetails inventoryId={inventoryItem} />
      </div>
    </>
  );
}

export default InventoryPage;
