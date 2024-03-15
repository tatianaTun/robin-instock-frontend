import { BrowserRouter, Route, Routes } from "react-router-dom";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/warehouses" element={<WarehousesPage />} />
        {/* <Route path="/warehouses/:warehouseId" element={<WarehousePage />} />
        <Route path="/inventories" element={<InventoriesPage />} />
        <Route path="/inventories/:inventoriesId" element={<InventoryPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
