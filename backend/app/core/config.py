from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "API do Portfólio"
    DATABASE_URL: str = "sqlite:///./portfolio.db"

    class Config:
        env_file = ".env"

settings = Settings()