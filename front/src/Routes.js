import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Loading } from './pages/Loading';
import { Kanban } from "./pages/Kanban";
import { List } from "./pages/List";

export function AppRoutes(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </Router>
  );
}