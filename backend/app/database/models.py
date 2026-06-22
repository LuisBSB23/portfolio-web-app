from sqlalchemy import Column, Integer, String, Text, Boolean
from app.database.base import Base

class Projeto(Base):
    __tablename__ = "projetos"

    id = Column(Integer, primary_key=True, index=True)
    titulo = Column(String, index=True)
    descricao = Column(Text)
    tecnologias = Column(String) # String separada por vírgulas (ex: "React, FastAPI")
    imagem_url = Column(String, nullable=True)
    link_github = Column(String, nullable=True)
    link_deploy = Column(String, nullable=True)
    destaque = Column(Boolean, default=False) # Nova coluna adicionada