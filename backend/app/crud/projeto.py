from sqlalchemy.orm import Session
from app.database.models import Projeto
from app.schemas.projeto import ProjetoCreate, ProjetoUpdate

def get_projeto(db: Session, projeto_id: int):
    return db.query(Projeto).filter(Projeto.id == projeto_id).first()

def get_projetos(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Projeto).offset(skip).limit(limit).all()

def create_projeto(db: Session, projeto: ProjetoCreate):
    db_projeto = Projeto(**projeto.model_dump())
    db.add(db_projeto)
    db.commit()
    db.refresh(db_projeto)
    return db_projeto

def update_projeto(db: Session, projeto_id: int, projeto: ProjetoUpdate):
    db_projeto = db.query(Projeto).filter(Projeto.id == projeto_id).first()
    if db_projeto:
        for key, value in projeto.model_dump().items():
            setattr(db_projeto, key, value)
        db.commit()
        db.refresh(db_projeto)
    return db_projeto

def delete_projeto(db: Session, projeto_id: int):
    db_projeto = db.query(Projeto).filter(Projeto.id == projeto_id).first()
    if db_projeto:
        db.delete(db_projeto)
        db.commit()
    return db_projeto