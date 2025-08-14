import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Outras rotas serão adicionadas aqui */}
            <Route path="/noticias" element={<div className="container py-12"><h1>Página de Notícias</h1></div>} />
            <Route path="/videos" element={<div className="container py-12"><h1>Página de Vídeos</h1></div>} />
            <Route path="/programas" element={<div className="container py-12"><h1>Página de Programas</h1></div>} />
            <Route path="/sobre" element={<div className="container py-12"><h1>Sobre Nós</h1></div>} />
            <Route path="/contato" element={<div className="container py-12"><h1>Contato</h1></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
