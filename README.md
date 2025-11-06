
# Sistema Web - API e Frontend

## 📘 Descrição do Projeto

Este projeto consiste em um **sistema Web** com **API backend em TypeScript** e um **frontend web**, desenvolvido como trabalho de Programação Backend. O sistema foi criado para complementar um site do semestre anterior, permitindo gerenciamento completo de dados via **CRUD**, autenticação segura com **JWT**, e integração contínua via **GitHub Actions**.  

O projeto utiliza **Docker** para padronização do ambiente de desenvolvimento e produção, garantindo que tanto o site quanto a API possam ser executados de forma consistente em qualquer máquina ou servidor.

---

## 🎯 Funcionalidades

O sistema implementa as seguintes funcionalidades:

- **Autenticação JWT:** todas as rotas protegidas por token.  
- **CRUD completo:** cadastro, leitura, atualização e exclusão de dados.  
- **Integração Frontend/API:** todas as ações do site refletem imediatamente na API e no banco de dados.  
- **Documentação Swagger:** rotas da API documentadas e testáveis.  
- **Publicação em cloud:** site e API deployados automaticamente via GitHub Actions.  
- **Uso de containers:** aplicação e banco de dados Dockerizados para ambiente padronizado.

### Módulos implementados

- **Cadastro e gerenciamento de professores:** CRUD de docentes, vinculação a disciplinas e horários.  
- **Cadastro de laboratórios e agendamento de uso:** controle de reservas, disponibilidade e capacidade.  

*(Substitua ou adicione os módulos específicos do seu projeto.)*

---

## 🛠 Tecnologias Utilizadas

- **Backend:** TypeScript, Node.js, Express  
- **ORM:** Sequelize ou TypeORM  
- **Autenticação:** JWT (JSON Web Token)  
- **Documentação:** Swagger  
- **Banco de Dados:** PostgreSQL  
- **Frontend:** HTML, CSS, JavaScript (ou framework utilizado)  
- **DevOps:** Docker, GitHub Actions (CI/CD)

---

## 🌐 URLs de Acesso

- **Site:** [https://seusite.com](https://seusite.com)  
- **API:** [https://suaapi.com](https://suaapi.com)  
- **Swagger (Documentação):** [https://suaapi.com/docs](https://suaapi.com/docs)

---

## ⚙️ Instruções para Execução Local

### Requisitos

- Node.js >= 18  
- Docker e Docker Compose  
- Git

### Passo a passo

1. Clone o repositório:

```bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
cd SEU_REPOSITORIO
````

2. Instale as dependências:

```bash
npm install
```

3. Configure variáveis de ambiente (exemplo `.env`):

```env
PORT=3000
DATABASE_URL=postgres://user:password@localhost:5432/dbname
JWT_SECRET=sua_chave_secreta
```

4. Inicie o banco de dados via Docker:

```bash
docker-compose up -d
```

5. Rode a aplicação:

```bash
npm run dev
```

6. Acesse:

* **Frontend:** `http://localhost:3000`
* **Swagger:** `http://localhost:3000/docs`

---

## 📦 Estrutura do Projeto

```
/site
  ├─ index.html
  ├─ utils.js
  |─ scripts.js
  ├─ home.html
  |─ scripts.js
  ├─ register.html
  |─ labs.html
  └─ registration.html

/backend
  ├─ src
  │  ├─ controllers
  │  ├─ models
  │  ├─ routes
  │  ├─ middlewares
  │  └─ app.ts
  ├─ package.json
  └─ tsconfig.json

/docker-compose.yml
/Dockerfile
/README.md
```

---

## 🔒 Autenticação

Todas as rotas da API exigem autenticação via **JWT**.

* Para acessar rotas protegidas, envie o token no header:

```
Authorization: Bearer SEU_TOKEN_AQUI
```

* O token é gerado ao realizar login no endpoint `/auth/login`.

---

## 📄 Documentação da API

O Swagger está disponível em:

```
http://localhost:3000/api/docs
```

Lá é possível testar todos os endpoints da API e visualizar os schemas de dados.

---

## 🚀 CI/CD com GitHub Actions

O projeto possui pipeline configurado para **publicação automática**:

* Ao fazer push na branch `main`, o site e a API são deployados na cloud automaticamente.
* Repositório privado garante controle de versões e segurança.


---

## ✅ Critérios de Avaliação Atendidos

* **Funcionalidade da API:** CRUD completo e JWT implementado.
* **Integração Frontend/API:** site comunica-se com a API corretamente.
* **Containers:** Docker usado para padronização do ambiente.
* **Publicação (CD):** GitHub Actions configurado para deploy automático.
* **Documentação:** README e Swagger completos e claros.

---

## 📆 Observações

Durante a apresentação, será possível:

* Demonstrar o site consumindo a API.
* Testar a API no Swagger, incluindo cadastro em tempo real que reflete no site imediatamente.

```

---

Se você quiser, posso criar **uma versão ainda mais “profissional”**, com badges de build, Docker, e links diretos para CI/CD, Swagger e frontend, pronta para colocar no GitHub. Isso deixaria o README muito mais visual e impactante para apresentação.  

Quer que eu faça essa versão?

