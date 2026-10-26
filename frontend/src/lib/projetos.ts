import { Projeto } from '../types/projeto';

export const projetos: Projeto[] = [
  {
    id: '1',
    titulo: 'Talent Bridge',
    descricao: 'Plataforma de recrutamento. Desenvolvimento da interface frontend e integração de APIs de Inteligência Artificial no backend.',
    tecnologias: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    imagem: '/assets/images/talent-bridge.jpg',
    linkGithub: 'https://github.com/luisbsb23/talent-bridge',
    linkDeploy: ''
  },
  {
    id: '2',
    titulo: 'Med Control',
    descricao: 'Sistema projetado para Unidades Básicas de Saúde (UBS). Desenvolvimento focado no sistema de API de autenticação.',
    tecnologias: ['TypeScript', 'Node.js', 'MySQL', 'PostgreSQL'],
    imagem: '/assets/images/med-control.jpg',
    linkGithub: 'https://github.com/luisbsb23/med-control',
    linkDeploy: ''
  }
];