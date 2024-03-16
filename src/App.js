import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

import InventoryPage from './pages/InventoryPage/InventoryPage';
import Footer from './components/Footer/Footer';
import WarehouseInventoryPage from './pages/WarehouseInventoryPage/WarehouseInventoryPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WarehouseInventoryPage />} />
          <Route path="/inventories" element={<InventoryPage />} />
          <Route path="/warehouses/:warehouseId" element={<WarehouseInventoryPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
