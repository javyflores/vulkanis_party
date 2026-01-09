// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardAdmin from './pages/DashboardAdmin';
import ClientDashboard from './pages/ClientDashboard';
import CotizacionPage from './pages/CotizacionPage';
import PaymentPage from './pages/Pagos/PaymentPage';
import ProductorDashboard from './pages/ProductorDashboard';
import StreamingPage from './pages/Streaming/StreamingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/admin" element={<DashboardAdmin />} />
        <Route path="/cliente/:id" element={<ClientDashboard />} />
        <Route path="/cotizacion" element={<CotizacionPage />} />
        <Route path="/pagos" element={<PaymentPage />} />
        <Route path="/productor" element={<ProductorDashboard />} />
        <Route path="/streaming/:id" element={<StreamingPage />} />
      </Routes>
    </Router>
  );
}

export default App;