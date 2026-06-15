```markdown
# Portfólio Web - Luis Otavio Ferreira Dias

Bem-vindo ao repositório do meu portfólio web! Este projeto foi desenvolvido para apresentar meus projetos, certificações (como AWS Cloud Foundations e Scrum) e habilidades no desenvolvimento de software, destacando conhecimentos em tecnologias como Python, Node.js, Laravel e o ecossistema Next.js.

## 🚀 Como executar o projeto

O projeto é dividido em duas partes principais: **Frontend** (Next.js) e **Backend** (FastAPI). Siga o passo a passo abaixo para rodar a aplicação localmente no seu ambiente.

### Pré-requisitos

Certifique-se de ter instalados em seu computador:
* [Node.js](https://nodejs.org/) (para o frontend)
* [Python 3.8+](https://www.python.org/) (para o backend)

### Passo 1: Clone o repositório

Abra o terminal e faça o clone do projeto (caso ainda não tenha feito):
```bash
git clone [https://github.com/luisbsb23/portfolio-web-app.git](https://github.com/luisbsb23/portfolio-web-app.git)
cd portfolio-web-app

```

---

### Passo 2: Executando o Backend (FastAPI)

O backend é responsável pela API de projetos e envio de contatos.

1. **Acesse a pasta do backend:**
```bash
cd backend

```


2. **Crie o ambiente virtual:**
```bash
python -m venv venv

```


3. **Ative o ambiente virtual:**
* **No Windows (Prompt de Comando/PowerShell):**
```bash
venv\Scripts\activate

```


* **No Windows (Git Bash):**
```bash
source venv/Scripts/activate

```


* **No Linux/Mac:**
```bash
source venv/bin/activate

```




4. **Instale as dependências:**
```bash
pip install -r requirements.txt

```


5. **Inicie o servidor de desenvolvimento:**
```bash
uvicorn app.main:app --reload

```


> A API estará rodando em `http://127.0.0.1:8000`. Você pode acessar a documentação interativa (Swagger) em `http://127.0.0.1:8000/docs`.



---

### Passo 3: Executando o Frontend (Next.js)

Abra uma **nova aba no terminal** (para manter o servidor do backend rodando simultaneamente).

1. **Acesse a pasta do frontend:**
```bash
cd frontend

```


*(Nota: Se você abrir a nova aba na raiz do projeto, digite `cd frontend`)*
2. **Instale as dependências:**
```bash
npm install

```


3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev

```


4. **Acesse no navegador:**
Abra [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) no seu navegador para visualizar a aplicação.

```

Com isso, o seu repositório estará super organizado e qualquer pessoa (ou até mesmo você no futuro) vai saber exatamente como subir as duas partes da aplicação sem dor de cabeça!

```