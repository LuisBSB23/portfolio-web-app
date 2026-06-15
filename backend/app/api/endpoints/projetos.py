from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.database.session import get_db
from app.schemas import projeto as schemas
from app.crud import projeto as crud

router = APIRouter()

@router.post("/", response_model=schemas.Projeto)
def create_projeto(projeto: schemas.ProjetoCreate, db: Session = Depends(get_db)):
    return crud.create_projeto(db=db, projeto=projeto)

@router.get("/", response_model=List[schemas.Projeto])
def read_projetos(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.get_projetos(db, skip=skip, limit=limit)

@router.get("/{projeto_id}", response_model=schemas.Projeto)
def read_projeto(projeto_id: int, db: Session = Depends(get_db)):
    db_projeto = crud.get_projeto(db, projeto_id=projeto_id)
    if db_projeto is None:
        raise HTTPException(status_code=404, detail="Projeto não encontrado")
    return db_projeto

@router.put("/{projeto_id}", response_model=schemas.Projeto)
def update_projeto(projeto_id: int, projeto: schemas.ProjetoUpdate, db: Session = Depends(get_db)):
    db_projeto = crud.update_projeto(db, projeto_id=projeto_id, projeto=projeto)
    if db_projeto is None:
        raise HTTPException(status_code=404, detail="Projeto não encontrado")
    return db_projeto

@router.delete("/{projeto_id}")
def delete_projeto(projeto_id: int, db: Session = Depends(get_db)):
    db_projeto = crud.delete_projeto(db, projeto_id=projeto_id)
    if db_projeto is None:
        raise HTTPException(status_code=404, detail="Projeto não encontrado")
    return {"message": "Projeto eliminado com sucesso"}