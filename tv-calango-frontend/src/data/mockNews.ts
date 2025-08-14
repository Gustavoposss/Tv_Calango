export interface News {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  author: string;
  publishedAt: string;
  readTime: number;
  featured?: boolean;
}

export const mockNews: News[] = [
  {
    id: 1,
    title: "Nova política econômica impacta mercado brasileiro",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    excerpt: "Análise detalhada sobre os impactos da nova política econômica no mercado brasileiro e suas consequências para investidores.",
    category: "Economia",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
    author: "João Silva",
    publishedAt: "2024-01-15T10:30:00Z",
    readTime: 5,
    featured: true
  },
  {
    id: 2,
    title: "Eleições municipais: confira as principais propostas",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    excerpt: "Candidatos apresentam suas principais propostas para as eleições municipais deste ano.",
    category: "Política",
    imageUrl: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&h=400&fit=crop",
    author: "Maria Santos",
    publishedAt: "2024-01-14T15:45:00Z",
    readTime: 4
  },
  {
    id: 3,
    title: "Tecnologia: inovações que mudarão o futuro",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    excerpt: "Descubra as principais inovações tecnológicas que prometem revolucionar diversos setores.",
    category: "Tecnologia",
    imageUrl: "https://blog.singularityubrazil.com/wp-content/uploads/2022/10/novas-tecnologias-iot.jpg",
    author: "Carlos Oliveira",
    publishedAt: "2024-01-13T09:20:00Z",
    readTime: 6
  },
  {
    id: 4,
    title: "Esporte: time local conquista título histórico",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    excerpt: "Em uma partida emocionante, o time local conquistou seu primeiro título em 20 anos.",
    category: "Esporte",
    imageUrl: "https://lattualita.com.br/wp-content/uploads/2020/10/esporte.jpg",
    author: "Ana Costa",
    publishedAt: "2024-01-12T20:15:00Z",
    readTime: 3
  },
  {
    id: 5,
    title: "Cultura: festival reúne artistas locais",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    excerpt: "Festival cultural promove encontro entre artistas locais e público em evento gratuito.",
    category: "Cultura",
    imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=400&fit=crop",
    author: "Pedro Lima",
    publishedAt: "2024-01-11T14:30:00Z",
    readTime: 4
  },
  {
    id: 6,
    title: "Saúde: novas descobertas sobre prevenção",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    excerpt: "Pesquisadores anunciam descobertas importantes sobre métodos de prevenção de doenças.",
    category: "Saúde",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMZd0KljfeXNQrpP-W7YJjvD0FBPxzWUhXw&s",
    author: "Dr. Roberto Almeida",
    publishedAt: "2024-01-10T11:00:00Z",
    readTime: 7
  }
];

export const categories = [
  "Todas",
  "Política",
  "Economia", 
  "Tecnologia",
  "Esporte",
  "Cultura",
  "Saúde"
];
