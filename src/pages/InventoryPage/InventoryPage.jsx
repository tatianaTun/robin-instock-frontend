import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../consts";
import { useParams } from "react-router-dom";
import "./InventoryPage.scss";
import InventoryDetails from "../../components/InventoryDetails/InventoryDetails";

function InventoryPage({ warehouseData }) {
  console.log(warehouseData);
  const { inventoriesId } = useParams();
  console.log(inventoriesId);
  const [inventoryItem, setInventoryItem] = useState(null);

  // const [inventoriesData, setInventoriesData] = useState([]);

  //fetch list of inventories data by id
  useEffect(() => {
    const getInventoryDetails = async () => {
      try {
        const result = await axios.get(
          `${baseURL}/inventories/${inventoriesId}`
        );
        console.log(result);
        setInventoryItem(result.data);
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    getInventoryDetails();
  }, [inventoriesId]);

  //fetch list of inventories data
  // useEffect(() => {
  //   const getInventoryList = async () => {
  //     try {
  //       const result = await axios.get(`${baseURL}/inventories`);
  //       console.log(result);
  //       setInventoriesData(result.data);
  //     } catch (error) {}
  //   };

  //   getInventoryList();
  // }, []);

  if (!inventoryItem || !warehouseData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="home">
        <InventoryDetails
          inventoryItem={inventoryItem}
          warehouseData={warehouseData}
          inventoriesId={inventoriesId}
        />
      </div>
    </>
  );
}

export default InventoryPage;
