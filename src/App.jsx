import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SideNavbar from './component/SideNavbar'
import Dashboard from './pages/Dashboard'
import Addresses from './pages/Addresses'
import Booking from './pages/Booking'
import AccountDetails from './pages/AccountDetails'
import Download from './pages/Download'
import Order from './pages/Order'
import Logout from './pages/Logout'


function App() {


  return (
    <>
      <BrowserRouter>
      <SideNavbar>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/addresses" element={<Addresses/>} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/accountDetails" element={<AccountDetails/>} />
          <Route path="/download" element={<Download/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/logout" element={<Logout/>} />
        </Routes>
        </SideNavbar>
      </BrowserRouter>
    </>
  )
}

export default App
