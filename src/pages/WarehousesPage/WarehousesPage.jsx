import "./WarehousePage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList.jsx";
// import DeleteWarehouseModal from "../../components/DeleteWarehouseModal/DeleteWarehouseModal";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../consts.js";

function WarehousePage() {
  const [warehouseData, setwarehouseData] = useState([]);

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

  return (
    <>
      <div className="home">
        <WarehouseList warehouseData={warehouseData} />
      </div>
    </>
  );
}

export default WarehousePage;
