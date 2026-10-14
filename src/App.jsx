import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Subscriptions from './pages/Subscriptions'
import Portfolio from './pages/Portfolio'
import ProjectDetails from './pages/ProjectDetails'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Header />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/subscriptions" element={<Subscriptions />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/portfolio/:id" element={<ProjectDetails />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
