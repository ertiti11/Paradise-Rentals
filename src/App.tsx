import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import BoatProduct from './pages/BoatProduct'
import AdminPanel from './pages/AdminPanel'
import State from "./pages/State"
import Contact from "./pages/Contact" 
import Reservar from './pages/Reservar'
import { useParams } from "react-router-dom"
import BoatDetails from "./components/BoatDetails"
import ReservationConfirmation from "./pages/ReservationConfirmation"



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
            <Route path="/contactos" element={<Contact />} />
            <Route path="/contador" element={<State />} />
            <Route path="/reservar" element={<Reservar />} />
            <Route path="/reserva/:reservaId" element={<ReservationConfirmation />} />
            <Route path="/reservar/:boatId" element={<BoatDetailsWrapper />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

const BoatDetailsWrapper = () => {
  const { boatId } = useParams<{ boatId: string }>();

  return <BoatDetails boatId={parseInt(boatId, 10)} />;
};

export default App