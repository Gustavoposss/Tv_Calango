import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-5">
        <div className="row g-4">
          {/* Logo e descrição */}
          <div className="col-lg-3 col-md-6">
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                <span className="text-dark fw-bold fs-5">TC</span>
              </div>
              <h3 className="h4 fw-bold mb-0">TV CALANGO</h3>
            </div>
            <p className="text-light mb-3">
              Conheça nossos documentários, filmes, cursos e jornalismo de qualidade.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-light text-decoration-none">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-light text-decoration-none">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-light text-decoration-none">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-light text-decoration-none">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div className="col-lg-3 col-md-6">
            <h4 className="h5 fw-semibold mb-3">Links Rápidos</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-light text-decoration-none">
                  Início
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/noticias" className="text-light text-decoration-none">
                  Notícias
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/videos" className="text-light text-decoration-none">
                  Vídeos
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/programas" className="text-light text-decoration-none">
                  Programas
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/sobre" className="text-light text-decoration-none">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          {/* Categorias */}
          <div className="col-lg-3 col-md-6">
            <h4 className="h5 fw-semibold mb-3">Categorias</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/noticias?categoria=politica" className="text-light text-decoration-none">
                  Política
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/noticias?categoria=economia" className="text-light text-decoration-none">
                  Economia
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/noticias?categoria=tecnologia" className="text-light text-decoration-none">
                  Tecnologia
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/noticias?categoria=esporte" className="text-light text-decoration-none">
                  Esporte
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/noticias?categoria=cultura" className="text-light text-decoration-none">
                  Cultura
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="col-lg-3 col-md-6">
            <h4 className="h5 fw-semibold mb-3">Contato</h4>
            <div className="mb-3">
              <div className="d-flex align-items-center gap-2 mb-2">
                <Mail size={16} className="text-warning" />
                <span className="text-light">contato@tvcalango.com</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Phone size={16} className="text-warning" />
                <span className="text-light">(11) 99999-9999</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h5 className="small fw-semibold mb-2">Newsletter</h5>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="form-control bg-secondary border-secondary text-white"
                />
                <button className="btn btn-warning">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-top border-secondary mt-4 pt-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="text-light small mb-0">
                © 2024 TV Calango. Todos os direitos reservados.
              </p>
            </div>
            <div className="col-md-6">
              <div className="d-flex gap-4 justify-content-md-end">
                <Link to="/privacidade" className="text-light text-decoration-none small">
                  Política de Privacidade
                </Link>
                <Link to="/termos" className="text-light text-decoration-none small">
                  Termos de Uso
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
