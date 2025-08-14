import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Clock, Eye } from 'lucide-react';
import { mockVideos } from '../../data/mockVideos';

const VideoHighlights: React.FC = () => {
  const featuredVideos = mockVideos.filter(video => video.featured);
  const recentVideos = mockVideos.filter(video => !video.featured).slice(0, 3);

  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views.toString();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <section className="py-5 bg-white">
      <div className="container">
        {/* Título da seção */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Vídeos em Destaque</h2>
          <p className="text-muted fs-5 mx-auto" style={{maxWidth: '600px'}}>
            Assista aos nossos melhores programas, documentários e entrevistas exclusivas.
          </p>
        </div>

        {/* Vídeo principal em destaque */}
        {featuredVideos.length > 0 && (
          <div className="mb-5">
            <div className="position-relative rounded overflow-hidden" style={{height: '500px'}}>
              <img
                src={featuredVideos[0].thumbnailUrl}
                alt={featuredVideos[0].title}
                className="w-100 h-100 object-fit-cover"
              />
              
              {/* Overlay com informações */}
              <div className="position-absolute bottom-0 start-0 end-0 p-4" style={{background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)'}}>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span className="badge bg-danger px-3 py-2">
                    EM DESTAQUE
                  </span>
                  <div className="d-flex align-items-center gap-2 text-white">
                    <Clock size={16} />
                    <span className="small">{featuredVideos[0].duration}</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-white">
                    <Eye size={16} />
                    <span className="small">{formatViews(featuredVideos[0].views)} visualizações</span>
                  </div>
                </div>

                <h3 className="display-6 fw-bold text-white mb-3">
                  {featuredVideos[0].title}
                </h3>
                
                <p className="text-light mb-4" style={{maxWidth: '600px'}}>
                  {featuredVideos[0].description}
                </p>

                <div className="d-flex flex-column flex-sm-row gap-3">
                  <Link
                    to={`/videos/${featuredVideos[0].id}`}
                    className="btn btn-danger btn-lg px-4 py-3 d-inline-flex align-items-center"
                  >
                    <Play size={20} className="me-2" />
                    ASSISTIR AGORA
                  </Link>
                  <button className="btn btn-outline-light btn-lg px-4 py-3">
                    COMPARTILHAR
                  </button>
                </div>
              </div>

              {/* Botão play central */}
              <div className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center" style={{opacity: 0, transition: 'opacity 0.3s'}}>
                <div className="bg-white bg-opacity-20 rounded-circle d-flex align-items-center justify-content-center" style={{width: '80px', height: '80px'}}>
                  <Play size={32} className="text-white ms-1" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid de vídeos recentes */}
        <div className="row g-4">
          {recentVideos.map((video) => (
            <div key={video.id} className="col-md-4">
              <article className="card border-0 shadow-sm h-100">
                <div className="position-relative" style={{height: '200px'}}>
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-100 h-100 object-fit-cover"
                  />
                  
                  {/* Overlay com botão play */}
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-40 d-flex align-items-center justify-content-center" style={{opacity: 0, transition: 'opacity 0.3s'}}>
                    <div className="bg-white bg-opacity-20 rounded-circle d-flex align-items-center justify-content-center" style={{width: '48px', height: '48px'}}>
                      <Play size={20} className="text-white ms-1" />
                    </div>
                  </div>

                  {/* Duração */}
                  <div className="position-absolute bottom-0 end-0 m-2">
                    <span className="badge bg-dark bg-opacity-80 px-2 py-1">
                      {video.duration}
                    </span>
                  </div>

                  {/* Categoria */}
                  <div className="position-absolute top-0 start-0 m-2">
                    <span className="badge bg-warning text-dark px-2 py-1">
                      {video.category}
                    </span>
                  </div>
                </div>
                
                <div className="card-body">
                  <h4 className="h5 fw-bold mb-2">
                    <Link to={`/videos/${video.id}`} className="text-decoration-none text-dark">
                      {video.title}
                    </Link>
                  </h4>
                  
                  <p className="text-muted small mb-3" style={{display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>
                    {video.description}
                  </p>
                  
                  <div className="d-flex align-items-center justify-content-between small text-muted">
                    <div className="d-flex align-items-center gap-3">
                      <div className="d-flex align-items-center gap-1">
                        <Eye size={14} />
                        <span>{formatViews(video.views)}</span>
                      </div>
                      <span>{formatDate(video.publishedAt)}</span>
                    </div>
                    <Link
                      to={`/videos/${video.id}`}
                      className="fw-semibold text-decoration-none"
                    >
                      Assistir →
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Botão ver mais */}
        <div className="text-center mt-5">
          <Link to="/videos" className="btn btn-outline-primary btn-lg px-5 py-3">
            Ver todos os vídeos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VideoHighlights;
