import "./App.scss";
// import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehousePage from "./pages/WarehousePage/WarehousePage";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/warehouses" element={<WarehousePage />} />
          {/* <Route path="/inventory" element={<InventoryPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
