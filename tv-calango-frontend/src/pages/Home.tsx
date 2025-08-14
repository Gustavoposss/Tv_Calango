import React from 'react';
import LiveStream from '../components/home/LiveStream';
import NewsGrid from '../components/home/NewsGrid';
import VideoHighlights from '../components/home/VideoHighlights';

const Home: React.FC = () => {
  return (
    <div className="fade-in">
      {/* Seção de streaming ao vivo */}
      <LiveStream />
      
      {/* Seção de notícias */}
      <NewsGrid />
      
      {/* Seção de vídeos em destaque */}
      <VideoHighlights />
      
      {/* Seção de call-to-action */}
      <section className="py-5 bg-dark text-white">
        <div className="container text-center">
          <h2 className="display-4 fw-bold mb-4">
            Não perca nenhum conteúdo da TV Calango
          </h2>
          <p className="text-light fs-5 mb-5 mx-auto" style={{maxWidth: '600px'}}>
            Assine agora e tenha acesso exclusivo a todos os nossos programas, 
            documentários e conteúdo premium.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button className="btn btn-primary btn-lg px-5 py-3">
              ASSINAR AGORA
            </button>
            <button className="btn btn-outline-light btn-lg px-5 py-3">
              SABER MAIS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
