from pydantic import BaseModel
from typing import Optional

class ProjetoBase(BaseModel):
    titulo: str
    descricao: str
    tecnologias: str
    imagem_url: Optional[str] = None
    link_github: Optional[str] = None
    link_deploy: Optional[str] = None

class ProjetoCreate(ProjetoBase):
    pass

class ProjetoUpdate(ProjetoBase):
    pass

class Projeto(ProjetoBase):
    id: int

    class Config:
        from_attributes = True