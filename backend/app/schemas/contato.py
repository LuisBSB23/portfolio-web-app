from pydantic import BaseModel, EmailStr

class ContatoCreate(BaseModel):
    nome: str
    email: EmailStr
    mensagem: str