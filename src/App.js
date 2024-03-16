import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import EditInventoryPage  from "./pages/EditInventoryPage/EditInventoryPage";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import InventoriesPage from "./pages/InventoriesPage/InventoriesPage";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/warehouses" element={<WarehousesPage />} />
        {/* <Route path="/warehouses/:warehouseId" element={<WarehousePage />} /> */}
        {/* <Route path="/inventories" element={<InventoriesPage />} /> */}
        {/* <Route path="/inventories/:inventoriesId" element={<InventoryPage />} /> */}
        <Route path="/inventories/:inventoriesId/edit" element={<EditInventoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
