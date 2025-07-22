# 📋 Task - Sugestões de Melhoria

> Projeto Full Stack simples utilizando **React** no front-end e **Odoo 16 + PostgreSQL** no back-end, para registrar sugestões de melhoria via formulário e listá-las na mesma página.  
> As requisições são feitas via **API REST pura** utilizando `fetch()`.

---

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) (versão recomendada: 18 ou superior)
- [Docker](https://www.docker.com/)

---

## 🚀 Como executar o projeto

### 🔧 Back-end (Odoo + PostgreSQL)

1. Abra o terminal na raiz do projeto.

2. Execute o seguinte comando para iniciar os serviços:

```bash
docker-compose up
```

3. Acesse o Odoo no navegador: [localhost:8069](http://localhost:8069/)
  
4. Faça login com as credenciais:
```
Email: admin
Senha: admin
```
5. Vá até o menu **Apps** e instale o módulo **"Sugestão de Melhoria"**.

---

### 💻 Front-end (React)

1. Em outro terminal, navegue até a pasta `frontend`:

```
cd frontend
```

2. Instale as dependências: 

```
npm install
```

3. Execute a aplicação: 

```
npm run dev
```
4. Acesse o sistema no navegador: [localhost:5173](http://localhost:5173/)

---

## 📬 Funcionalidades
- Formulário para envio de sugestões com nome e descrição
- Listagem automática das sugestões mais recentes
- Comunicação direta com a API REST do Odoo

---

## 🛠️ Tecnologias Utilizadas
- React (Vite)
- Odoo 16
- PostgreSQL 13
- Docker / Docker Compose
- Fetch API

---

## 🧠 Autor
Desenvolvido por **Vinicius Ramos** para estudo das tecnologias no período de estágio na empresa **[Renovera](https://renovera.com.br/)**.
