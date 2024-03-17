import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import EditInventoryPage from "./pages/EditInventoryPage/EditInventoryPage";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage.jsx";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import InventoriesPage from "./pages/InventoriesPage/InventoriesPage";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "./consts.js";
import Footer from "./components/Footer/Footer.js";
import WarehousePage from "./pages/WarehousePage/WarehousePage";

import "./App.scss";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage.js";
import AddWarehousePage from "./pages/AddWarehousePage/AddWarehousePage.js";
import AddInventoryPage from "./pages/AddInventoryPage/AddInventoryPage.js";

function App() {
  const [warehouseData, setwarehouseData] = useState([]);

  //fetch list of warehouse data
  useEffect(() => {
    const getWarehouseList = async () => {
      try {
        const result = await axios.get(`${baseURL}/warehouses`);
        setwarehouseData(result.data);
      } catch (error) { }
    };

    getWarehouseList();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WarehousesPage />} />
        <Route path="/warehouses" element={<WarehousesPage />} />
        <Route path="/warehouses/add" element={<AddWarehousePage />} />

        <Route path="/warehouses/:warehouseId" element={<WarehousePage />} />
        <Route path="/warehouses/:warehouseId/edit" element={<EditWarehousePage />} />


        <Route path="/inventories" element={<InventoriesPage />} />
        <Route path="/inventories/add" element={<AddInventoryPage />} />

        <Route
          path="/inventories/:inventoriesId"
          element={<InventoryPage warehouseData={warehouseData} />}
        />

        <Route
          path="/inventories/:inventoriesId/edit"
          element={<EditInventoryPage />}
        />
        {/* Manage other routes */}
        <Route path="*" element={<Navigate to="/warehouses" />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
