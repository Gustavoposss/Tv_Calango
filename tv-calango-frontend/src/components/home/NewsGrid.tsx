import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';
import { mockNews } from '../../data/mockNews';

const NewsGrid: React.FC = () => {
  const featuredNews = mockNews.filter(news => news.featured);
  const recentNews = mockNews.filter(news => !news.featured).slice(0, 6);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Título da seção */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Últimas Notícias</h2>
          <p className="text-muted fs-5 mx-auto" style={{maxWidth: '600px'}}>
            Fique por dentro das principais notícias e análises sobre política, economia, tecnologia e muito mais.
          </p>
        </div>

        {/* Notícia em destaque */}
        {featuredNews.length > 0 && (
          <div className="mb-5">
            <div className="card border-0 shadow">
              <div className="row g-0">
                <div className="col-md-6 position-relative" style={{height: '320px'}}>
                <img
                    src={featuredNews[0].imageUrl}
                    alt='imagem da noticia em destaque'
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div className="position-absolute top-0 start-0 m-3">
                    <span className="badge bg-danger px-3 py-2">
                      DESTAQUE
                    </span>
                  </div>
                </div>
                <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
                  <div className="d-flex align-items-center gap-3 text-muted small mb-3">
                    <span className="badge bg-warning text-dark px-2 py-1">
                      {featuredNews[0].category}
                    </span>
                    <div className="d-flex align-items-center gap-1">
                      <Clock size={14} />
                      <span>{formatDate(featuredNews[0].publishedAt)}</span>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <User size={14} />
                      <span>{featuredNews[0].author}</span>
                    </div>
                  </div>
                  
                  <h3 className="h3 fw-bold mb-3">
                    {featuredNews[0].title}
                  </h3>
                  
                  <p className="text-muted mb-4">
                    {featuredNews[0].excerpt}
                  </p>
                  
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="small text-muted">
                      {featuredNews[0].readTime} min de leitura
                    </span>
                    <Link
                      to={`/noticias/${featuredNews[0].id}`}
                      className="btn btn-primary"
                    >
                      Ler mais
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid de notícias recentes */}
        <div className="row g-4">
          {recentNews.map((news) => (
            <div key={news.id} className="col-md-6 col-lg-4">
              <article className="card h-100 border-0 shadow-sm">
                <div className="position-relative" style={{height: '200px'}}>
                  <img
                    src={news.imageUrl}
                    alt='imagem da noticia'
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div className="position-absolute top-0 start-0 m-2">
                    <span className="badge bg-dark bg-opacity-75 px-2 py-1">
                      {news.category}
                    </span>
                  </div>
                </div>
                
                <div className="card-body">
                  <div className="d-flex align-items-center gap-3 text-muted small mb-2">
                    <div className="d-flex align-items-center gap-1">
                      <Clock size={14} />
                      <span>{formatDate(news.publishedAt)}</span>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <User size={14} />
                      <span>{news.author}</span>
                    </div>
                  </div>
                  
                  <h4 className="h5 fw-bold mb-2">
                    <Link to={`/noticias/${news.id}`} className="text-decoration-none text-dark">
                      {news.title}
                    </Link>
                  </h4>
                  
                  <p className="text-muted small mb-3">
                    {news.excerpt}
                  </p>
                  
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="small text-muted">
                      {news.readTime} min de leitura
                    </span>
                    <Link
                      to={`/noticias/${news.id}`}
                      className="small fw-semibold text-decoration-none"
                    >
                      Ler mais →
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Botão ver mais */}
        <div className="text-center mt-5">
          <Link to="/noticias" className="btn btn-outline-primary btn-lg px-5 py-3">
            Ver todas as notícias
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;
