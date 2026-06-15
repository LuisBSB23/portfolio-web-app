from fastapi import APIRouter

from app.schemas.contato import ContatoCreate

router = APIRouter()

@router.post("/")
def enviar_contato(contato: ContatoCreate):
    # Nesta fase (Sprint 2), validamos os dados e simulamos o sucesso.
    # O envio real de e-mail pode ser adicionado posteriormente no módulo services/email.py
    print(f"Nova mensagem recebida de {contato.nome} ({contato.email}): {contato.mensagem}")
    return {"message": "Mensagem enviada com sucesso!", "dados": contato}