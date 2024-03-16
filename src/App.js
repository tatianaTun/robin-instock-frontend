import { BrowserRouter, Route, Routes } from "react-router-dom";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import InventoriesPage from "./pages/InventoriesPage/InventoriesPage";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "./consts.js";

import "./App.scss";

function App() {
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
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        {/* <Route path="/" element={<InventoryPage />} /> */}
        <Route path="/inventories" element={<InventoriesPage />} />
        <Route path="/warehouses" element={<WarehousesPage />} />
        {/* <Route path="/warehouses/:warehouseId" element={<WarehousePage />} />
        <Route path="/inventories" element={<InventoriesPage />} /> */}
        <Route
          path="/inventories/:inventoriesId"
          element={<InventoryPage warehouseData={warehouseData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
