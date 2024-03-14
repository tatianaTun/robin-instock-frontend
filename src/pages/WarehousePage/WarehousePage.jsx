import "./WarehousePage.scss";
import WarehouseList from "../../components/warehouseList/warehouseList";
import DeleteWarehouseModal from "../../components/deleteWarehouseModal/deleteWarehouseModal";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../consts";

function WarehousePage() {
  const [warehouseData, setwarehouseData] = useState(null);

  //fetch list of warehouse data
  useEffect(() => {
    const getWarehouseList = async () => {
      try {
        const result = await axios.get(`${baseURL}/warehouses`);
        setwarehouseData(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    getWarehouseList();
  }, []);

  return (
    <>
      <div>
        <WarehouseList warehouseData={warehouseData} />
      </div>
    </>
  );
}

export default WarehousePage;
