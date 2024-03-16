import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

import InventoryPage from './pages/InventoryPage/InventoryPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div class="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InventoryPage />} />
          <Route path="/inventories" element={<InventoryPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
