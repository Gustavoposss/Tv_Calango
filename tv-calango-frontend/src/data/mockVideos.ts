export interface Video {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  category: string;
  duration: string;
  views: number;
  publishedAt: string;
  featured?: boolean;
}

export const mockVideos: Video[] = [
  {
    id: 1,
    title: "Entrevista Exclusiva: Presidente discute política econômica",
    description: "Entrevista completa com o presidente sobre as novas medidas econômicas e seus impactos no país.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=450&fit=crop",
    category: "Política",
    duration: "45:30",
    views: 125000,
    publishedAt: "2024-01-15T14:00:00Z",
    featured: true
  },
  {
    id: 2,
    title: "Análise de Mercado: Tendências para 2024",
    description: "Especialistas analisam as principais tendências do mercado financeiro para o ano de 2024.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=450&fit=crop",
    category: "Economia",
    duration: "32:15",
    views: 89000,
    publishedAt: "2024-01-14T10:30:00Z"
  },
  {
    id: 3,
    title: "Tecnologia do Futuro: IA e Machine Learning",
    description: "Descubra como a inteligência artificial está revolucionando diversos setores da economia.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailUrl: "https://www.meupositivo.com.br/doseujeito/wp-content/uploads/2018/11/novas-tecnologias-futuro.jpg",
    category: "Tecnologia",
    duration: "28:45",
    views: 156000,
    publishedAt: "2024-01-13T16:20:00Z"
  },
  {
    id: 4,
    title: "Esporte Total: Resumo da Semana",
    description: "Tudo que aconteceu no mundo dos esportes nesta semana, com análises e comentários.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop",
    category: "Esporte",
    duration: "22:10",
    views: 67000,
    publishedAt: "2024-01-12T20:00:00Z"
  },
  {
    id: 5,
    title: "Cultura Viva: Festival de Música Local",
    description: "Cobertura completa do festival de música que reuniu artistas locais e nacionais.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=450&fit=crop",
    category: "Cultura",
    duration: "38:25",
    views: 43000,
    publishedAt: "2024-01-11T18:15:00Z"
  },
  {
    id: 6,
    title: "Saúde em Foco: Prevenção e Bem-estar",
    description: "Especialistas em saúde discutem métodos de prevenção e manutenção do bem-estar.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=450&fit=crop",
    category: "Saúde",
    duration: "41:30",
    views: 78000,
    publishedAt: "2024-01-10T12:45:00Z"
  }
];

export const videoCategories = [
  "Todos",
  "Política",
  "Economia",
  "Tecnologia", 
  "Esporte",
  "Cultura",
  "Saúde"
];
