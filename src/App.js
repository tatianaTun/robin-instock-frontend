import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import InventoriesPage from './pages/InventoriesPage/InventoriesPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/inventories" element={<InventoriesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;