# Projeto Full Stack — ChatGPT Clone

Aplicação **Full Stack** com:

- **Backend** em Node.js/Express para expor a API de prompt
- **Frontend** em React para interface de chat
- Integração com a API da OpenAI

---

## Descrição do Projeto

Este projeto implementa um chat inspirado no ChatGPT.

- O **backend** recebe um prompt, chama a OpenAI e devolve a resposta.
- O **frontend** envia a mensagem do usuário para a API e exibe a conversa.

A organização segue o padrão de **N-Tier Architecture** (em camadas), separando responsabilidades em:

- `routes` (roteamento)
- `controllers` (regra de fluxo)
- `models` (modelo de entrada)
- `config` (integrações e configuração)

---

## Tecnologias Utilizadas

### Backend

- Node.js
- JavaScript
- Express
- CORS
- dotenv
- OpenAI SDK
- Nodemon (**opcional** para desenvolvimento)

### Frontend

- React (Create React App)
- Axios
- CSS

---

## Estrutura do Projeto

```text
chatgpt-clone/
├── package.json                # backend
├── src/
│   ├── app.js
│   ├── server.js
│   ├── config/
│   │   └── openai.js
│   ├── controllers/
│   │   └── prompt-controller.js
│   ├── models/
│   │   └── input-prompt.js
│   └── routes/
│       └── routes.js
└── web/
    ├── package.json            # frontend
    └── src/
        ├── App.js
        ├── api/
        │   └── api.js
        ├── components/
        ├── assets/
        └── styles/
```

---

## Pré-requisitos

- Node.js 18+
- npm 9+
- Chave de API da OpenAI

---

## Instalação

### 1) Clonar o repositório

```bash
git clone https://github.com/PatriciaGheller/chatgpt-clone.git
cd chatgpt-clone
```

### 2) Instalar dependências do backend

```bash
npm install
```

### 3) Instalar dependências do frontend

```bash
cd web
npm install
cd ..
```

---

## Configuração de Ambiente

Na raiz do projeto, existe o arquivo `.env`.
Configure as variáveis abaixo:

```env
# Porta do backend (recomendado: 5555 para bater com o frontend atual)
PORT=5555

# Use uma das opções abaixo para a chave da OpenAI
OPENAI_API_KEY=sua_chave_aqui
# OPEN_AI_KEY=sua_chave_aqui
# OPENAI_KEY=sua_chave_aqui
```

> Observação: o frontend está apontando para `http://localhost:5555/api/prompt` em `web/src/api/api.js`.

---

## Execução do Projeto

Você deve rodar **backend** e **frontend** em terminais separados.

### Backend (raiz)

```bash
npm start
```

Backend disponível em:

- `http://localhost:5555` (ou a porta definida em `PORT`)

### Frontend (`/web`)

```bash
cd web
npm start
```

Frontend disponível em:

- `http://localhost:3000`

---

## Endpoint Principal

### `POST /api/prompt`

Envia o prompt para o backend e recebe a resposta da IA.

#### Exemplo de body

```json
{
  "prompt": "Explique o que é arquitetura em camadas."
}
```

#### Exemplo de resposta (sucesso)

```json
{
  "success": true,
  "data": "Arquitetura em camadas é..."
}
```

---

## Scripts Disponíveis

### Scripts do Backend (`/`)

- `npm start` — inicia o servidor com `node --watch src/server.js`

### Scripts do Frontend (`/web`)

- `npm start` — inicia o app React em modo desenvolvimento
- `npm run build` — gera build de produção
- `npm test` — executa os testes

---

## Melhorias Sugeridas

- Adicionar `nodemon` como dependência de desenvolvimento
- Criar `.env.example`
- Padronizar mensagens de erro da API
- Adicionar testes automatizados no backend

---

## Licença

Este projeto está sob licença ISC (backend) e segue as licenças das dependências utilizadas.
