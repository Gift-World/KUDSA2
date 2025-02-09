import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Members from './pages/Members';
import ContactForm from './components/ContactForm';

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
          </Routes>
          {showForm && <ContactForm setShowForm={setShowForm} />}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;