export interface Schedule {
  id: number;
  program: string;
  startTime: string;
  endTime: string;
  isLive: boolean;
  description: string;
  host: string;
  category: string;
}

export const mockSchedule: Schedule[] = [
  {
    id: 1,
    program: "Jornal da Manhã",
    startTime: "07:00",
    endTime: "09:00",
    isLive: false,
    description: "Notícias e análises da manhã com apresentação de Maria Santos",
    host: "Maria Santos",
    category: "Jornalismo"
  },
  {
    id: 2,
    program: "Debate Político",
    startTime: "12:00",
    endTime: "13:30",
    isLive: true,
    description: "Debate ao vivo sobre os principais temas políticos da semana",
    host: "João Silva",
    category: "Política"
  },
  {
    id: 3,
    program: "Análise Econômica",
    startTime: "14:00",
    endTime: "15:00",
    isLive: false,
    description: "Análise detalhada do mercado financeiro e economia",
    host: "Carlos Oliveira",
    category: "Economia"
  },
  {
    id: 4,
    program: "Esporte Total",
    startTime: "18:00",
    endTime: "19:30",
    isLive: true,
    description: "Cobertura completa dos principais eventos esportivos",
    host: "Ana Costa",
    category: "Esporte"
  },
  {
    id: 5,
    program: "Cultura Viva",
    startTime: "20:00",
    endTime: "21:00",
    isLive: false,
    description: "Programa dedicado à cultura, arte e entretenimento",
    host: "Pedro Lima",
    category: "Cultura"
  },
  {
    id: 6,
    program: "Jornal da Noite",
    startTime: "22:00",
    endTime: "23:00",
    isLive: true,
    description: "Resumo das principais notícias do dia",
    host: "Roberto Almeida",
    category: "Jornalismo"
  }
];

export const getCurrentProgram = (): Schedule | null => {
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes(); // Convert to minutes
  
  return mockSchedule.find(program => {
    const startMinutes = parseInt(program.startTime.split(':')[0]) * 60 + parseInt(program.startTime.split(':')[1]);
    const endMinutes = parseInt(program.endTime.split(':')[0]) * 60 + parseInt(program.endTime.split(':')[1]);
    
    return currentTime >= startMinutes && currentTime < endMinutes;
  }) || null;
};

export const getNextProgram = (): Schedule | null => {
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();
  
  return mockSchedule.find(program => {
    const startMinutes = parseInt(program.startTime.split(':')[0]) * 60 + parseInt(program.startTime.split(':')[1]);
    return startMinutes > currentTime;
  }) || null;
};
