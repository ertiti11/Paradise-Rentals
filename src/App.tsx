import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import BoatProduct from './pages/BoatProduct'
import AdminPanel from './pages/AdminPanel'
import Alquileres from "./pages/Alquileres"
import State from "./pages/State"



function App() {
  return (
    <Router>
      <Analytics />
      <div className="min-h-screen  flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/boat/:id" element={<BoatProduct />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/alquileres" element={<Alquileres />} />
            <Route path="/contador" element={<State />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App