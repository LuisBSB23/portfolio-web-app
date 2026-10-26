import { Projeto } from '../types/projeto';
import { projetos } from './projetos';

export async function getProjetos(): Promise<Projeto[]> {
  return projetos;
}

export async function getProjetoById(id: string): Promise<Projeto | undefined> {
  return projetos.find(projeto => projeto.id === id);
}