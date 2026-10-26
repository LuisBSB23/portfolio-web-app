export interface Projeto {
  id: string;
  titulo: string;
  descricao: string;
  tecnologias: string[];
  imagem: string;
  linkGithub: string;
  linkDeploy?: string;
}