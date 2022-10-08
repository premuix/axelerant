import Dashboard from './pages/Dashboard';
import Eventlisting from './pages/Eventlisting';
import Help from './pages/Help';
import Logout from './pages/Logout';
import './assets/styles/base.js'; 
import EventBooking from './pages/EventBooking';
import Testpro from './pages/Testpro';
import { BrowserRouter as Router, Route, Routes, Navigate, } from 'react-router-dom';
 
function App() {
  return ( 
      <Router>
        <Routes>
          <Route exact path='/' element={<Eventlisting  />} />
          <Route exact path='Eventlisting' element={<Eventlisting />} />
          <Route exact path='Dashboard' element={<Dashboard />} />
          <Route exact path='Help' element={<Help />} />
          <Route exact path='Logout' element={<Logout />} />
          <Route exact path='EventBooking' element={<EventBooking />} />
          <Route exact path='Testpro' element={<Testpro />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
  );
}

export default App;
