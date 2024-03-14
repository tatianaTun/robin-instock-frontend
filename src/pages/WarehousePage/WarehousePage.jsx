import "./WarehousePage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList.jsx";
// import DeleteWarehouseModal from "../../components/DeleteWarehouseModal/DeleteWarehouseModal";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../consts";

function WarehousePage() {
  const [warehouseData, setwarehouseData] = useState(null);

  //fetch list of warehouse data
  useEffect(() => {
    const getWarehouseList = async () => {
      try {
        const result = await axios.get(`${baseURL}/warehouses`);
        console.log(result);
        setwarehouseData(result.data);
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
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
