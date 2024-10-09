import React from 'react'
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import BoatProduct from './pages/BoatProduct'
import AdminPanel from './pages/AdminPanel'

function App() {
  return (
    <Router>
      <Analytics />
      <div className="min-h-screen bg-blue-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/boat/:id" element={<BoatProduct />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App