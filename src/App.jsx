import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import MaterialsPage from './pages/MaterialsPage';
import ListViewPage from './pages/ListViewPage';
import MachinesPage from './pages/MachinesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MaterialsPage />} />
          <Route path="list" element={<ListViewPage />} />
          <Route path="machines" element={<MachinesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;