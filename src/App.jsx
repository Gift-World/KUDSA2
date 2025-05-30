import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Members from './pages/Members';
import ContactForm from './components/ContactForm';
import Services from './components/Services';
import Terms from './components/Terms';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home setShowForm={setShowForm} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/members" element={<Members />} />
            <Route path="/services" element={<Services />} />
            <Route path="/submission-guidelines" element={<Terms />} />
          </Routes>
          {showForm && <ContactForm setShowForm={setShowForm} />}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;