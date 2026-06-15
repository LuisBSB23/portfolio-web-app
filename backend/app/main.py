from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.endpoints import projetos, contato
from app.database.base import Base
from app.database.session import engine

# Cria as tabelas na base de dados automaticamente (SQLite)
Base.metadata.create_all(bind=engine)

app = FastAPI(title="API do Portfólio")

# Configuração do CORS para permitir pedidos do Frontend (Next.js)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Atenção: Em produção, mude "*" para o URL do seu frontend (ex: "http://localhost:3000")
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Inclusão das rotas criadas
app.include_router(projetos.router, prefix="/api/projetos", tags=["Projetos"])
app.include_router(contato.router, prefix="/api/contato", tags=["Contato"])

@app.get("/")
def root():
    return {"message": "Bem-vindo à API do Portfólio. Aceda a /docs para ver a documentação."}