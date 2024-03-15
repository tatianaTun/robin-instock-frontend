import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

import InventoryList from './components/InventoryList/InventoryList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InventoryList />} />
        <Route path="/inventories" element={<InventoryList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
