import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, User, Play } from 'lucide-react';


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="bg-white shadow-sm">

      {/* Barra de anúncio superior */}
      <div className="bg-dark text-white py-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="d-flex align-items-center gap-3">
                <span className="badge bg-danger">🎥 AO VIVO AGORA</span>
                <span className="small">Debate Político - 12h às 13h30</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center justify-content-end gap-3">
                <span className="small">Próximo: Análise Econômica às 14h</span>
                <button className="btn btn-danger btn-sm">ASSISTIR AGORA</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header principal */}
      <div className="container py-4">
        <div className="row align-items-center">

          {/* Logo e tagline */}
          <div className="col-md-6">
            <Link to="/" className="text-decoration-none">
              <div className="d-flex align-items-center gap-3">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center border border-2 shadow-sm"
                  style={{
                    width: '60px',
                    height: '60px',
                    overflow: 'hidden',
                    backgroundColor: '#fff',
                  }}
                >
                  <img
                    src={"logocalango.jpg"}
                    alt="logo da tv calango"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '50%',
                    }}
                  />
                </div>
                <div>
                  <h1 className="h2 fw-bold text-dark mb-0">TV CALANGO</h1>
                  <p className="text-muted small mb-0">
                    Conheça nossos documentários, filmes, cursos e jornalismo
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Botões de ação */}
          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-end gap-3">
              <div className="d-none d-md-flex gap-3">
                <button className="btn btn-outline-secondary">
                  <User size={16} className="me-2" />
                  Login
                </button>
                <button className="btn btn-primary">
                  <Play size={16} className="me-2" />
                  Assine
                </button>
              </div>

              {/* Botões mobile */}
              <div className="d-md-none d-flex gap-2">
                <button
                  onClick={toggleSearch}
                  className="btn btn-outline-secondary btn-sm"
                >
                  <Search size={20} />
                </button>
                <button
                  onClick={toggleMenu}
                  className="btn btn-outline-secondary btn-sm"
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Navegação principal */}
      <nav className="border-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <ul className="nav d-none d-md-flex">
                <li className="nav-item">
                  <Link to="/" className="nav-link text-dark fw-medium">Início</Link>
                </li>
                <li className="nav-item">
                  <Link to="/noticias" className="nav-link text-dark fw-medium">Notícias</Link>
                </li>
                <li className="nav-item">
                  <Link to="/videos" className="nav-link text-dark fw-medium">Vídeos</Link>
                </li>
                <li className="nav-item">
                  <Link to="/programas" className="nav-link text-dark fw-medium">Programas</Link>
                </li>
                <li className="nav-item">
                  <Link to="/sobre" className="nav-link text-dark fw-medium">Sobre Nós</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contato" className="nav-link text-dark fw-medium">Contato</Link>
                </li>
              </ul>
            </div>

            {/* Ícones de ação */}
            <div className="col-md-4">
              <div className="d-none d-md-flex align-items-center justify-content-end gap-3">
                <button className="btn btn-outline-secondary btn-sm">
                  <Search size={18} />
                </button>
                <button className="btn btn-outline-secondary btn-sm">
                  <User size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="d-md-none bg-white border-top">
          <div className="container py-3">
            <ul className="nav flex-column">
              <li className="nav-item"><Link to="/" className="nav-link text-dark fw-medium">Início</Link></li>
              <li className="nav-item"><Link to="/noticias" className="nav-link text-dark fw-medium">Notícias</Link></li>
              <li className="nav-item"><Link to="/videos" className="nav-link text-dark fw-medium">Vídeos</Link></li>
              <li className="nav-item"><Link to="/programas" className="nav-link text-dark fw-medium">Programas</Link></li>
              <li className="nav-item"><Link to="/sobre" className="nav-link text-dark fw-medium">Sobre Nós</Link></li>
              <li className="nav-item"><Link to="/contato" className="nav-link text-dark fw-medium">Contato</Link></li>
            </ul>
            <div className="mt-4 pt-3 border-top">
              <button className="btn btn-outline-secondary w-100 mb-3">
                <User size={16} className="me-2" /> Login
              </button>
              <button className="btn btn-primary w-100">
                <Play size={16} className="me-2" /> Assine
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Campo de busca */}
      {isSearchOpen && (
        <div className="d-md-none bg-white border-top p-3">
          <div className="input-group">
            <span className="input-group-text bg-transparent border-end-0">
              <Search size={18} className="text-muted" />
            </span>
            <input
              type="text"
              placeholder="Pesquisar..."
              className="form-control border-start-0"
            />
            <button onClick={toggleSearch} className="btn btn-outline-secondary">
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
