import React from 'react';
import { Play, Users, Clock } from 'lucide-react';
import { getCurrentProgram, getNextProgram } from '../../data/mockSchedule';

const LiveStream: React.FC = () => {
  const currentProgram = getCurrentProgram();
  const nextProgram = getNextProgram();

  return (
    <div className="bg-dark text-white">
      {/* Hero Section com vídeo ao vivo */}
      <div
        className="position-relative"
        style={{
          height: '500px',
          backgroundImage: "url('https://i.ytimg.com/vi/nzFOitpXNcA/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGEgZShUMA8=&rs=AOn4CLC1mVo5Y37tvdHSEcahq8IGDBFH9Q')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay central */}
        <div
          className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ background: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div className="text-center">
            <div
              className="bg-danger rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
              style={{ width: '96px', height: '96px' }}
            >
              <Play size={32} className="text-white ms-1" />
            </div>
            <h2 className="display-4 fw-bold mb-2">AO VIVO</h2>
            <p className="fs-4 text-light">
              {currentProgram ? currentProgram.program : 'Programação ao vivo'}
            </p>
          </div>
        </div>

        {/* Overlay inferior com informações */}
        <div
          className="position-absolute bottom-0 start-0 end-0 p-4"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)' }}
        >
          <div className="container">
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="d-flex align-items-center gap-2 bg-danger px-3 py-1 rounded-pill">
                <div className="bg-white rounded-circle" style={{ width: '8px', height: '8px' }}></div>
                <span className="small fw-semibold">AO VIVO</span>
              </div>
              <div className="d-flex align-items-center gap-2 text-light">
                <Users size={16} />
                <span className="small">1,234 assistindo</span>
              </div>
            </div>

            <h1 className="display-3 fw-bold mb-3">
              {currentProgram ? currentProgram.program : 'TV Calango'}
            </h1>

            {currentProgram && (
              <p className="fs-5 text-light mb-4" style={{ maxWidth: '600px' }}>
                {currentProgram.description}
              </p>
            )}

            <div className="d-flex flex-column flex-sm-row gap-3">
              <button className="btn btn-danger btn-lg px-4 py-3">
                <Play size={20} className="me-2" />
                ASSISTIR AGORA
              </button>
              <button className="btn btn-outline-light btn-lg px-4 py-3">
                <Users size={20} className="me-2" />
                COMPARTILHAR
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Informações da programação */}
      <div className="bg-secondary py-4">
        <div className="container">
          <div className="row g-4">
            {/* Programa atual */}
            <div className="col-md-6">
              <div className="bg-dark p-4 rounded">
                <h3 className="h5 fw-semibold mb-3 d-flex align-items-center">
                  <Clock size={20} className="me-2 text-warning" />
                  AGORA
                </h3>
                {currentProgram ? (
                  <div>
                    <h4 className="h4 fw-bold mb-2">{currentProgram.program}</h4>
                    <p className="text-light mb-3">{currentProgram.description}</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="small text-light">
                        {currentProgram.startTime} - {currentProgram.endTime}
                      </span>
                      <span className="small text-warning fw-semibold">{currentProgram.host}</span>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h4 className="h4 fw-bold mb-2">Programação Offline</h4>
                    <p className="text-light">
                      Não há programação ao vivo no momento. Confira nossa programação gravada.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Próximo programa */}
            <div className="col-md-6">
              <div className="bg-dark p-4 rounded">
                <h3 className="h5 fw-semibold mb-3 d-flex align-items-center">
                  <Clock size={20} className="me-2 text-warning" />
                  PRÓXIMO
                </h3>
                {nextProgram ? (
                  <div>
                    <h4 className="h4 fw-bold mb-2">{nextProgram.program}</h4>
                    <p className="text-light mb-3">{nextProgram.description}</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="small text-light">
                        {nextProgram.startTime} - {nextProgram.endTime}
                      </span>
                      <span className="small text-warning fw-semibold">{nextProgram.host}</span>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h4 className="h4 fw-bold mb-2">Fim da Programação</h4>
                    <p className="text-light">
                      Programação ao vivo encerrada. Volte amanhã para mais conteúdo.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStream;
