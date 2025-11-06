
# Sistema Web - API e Frontend
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![YAML](https://img.shields.io/badge/yaml-%23ffffff.svg?style=for-the-badge&logo=yaml&logoColor=151515) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white) ![Azure](https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white)
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

