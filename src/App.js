import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

import InventoryPage from './pages/InventoryPage/InventoryPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InventoryPage />} />
        <Route path="/inventories" element={<InventoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
