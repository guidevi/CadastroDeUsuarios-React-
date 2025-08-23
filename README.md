# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Claro! Aqui está uma sugestão detalhada para um arquivo **README.md** do projeto demonstrado no vídeo “Aprendendo React do Zero, Conectando Back e Front End, e Consumindo API” — ideal para explicar com clareza o que é, como configurar e usar a aplicação:

---

### Projeto: Frontend em React com Vite consumindo API via Axios

---

### Sobre o projeto

Este projeto é um **Frontend desenvolvido com React**, criado usando **Vite**, que se conecta a uma API backend (desenvolvida anteriormente) para gerenciar usuários. A aplicação permite **listar, cadastrar e remover usuários** com interação em tempo real entre cliente e servidor — permitindo a prática dos principais conceitos modernos de frontend.
**Observaçâo**: Essa é a parte 2 de um projeto maior de Cadastro de Usuários, onde eu crio uma página Front simples com um formulário e conecto ela para consumir minha API REST(CRUD) que se encontra no repositório 'API-com-Node.js-e-Banco-de-Dados' do meu perfil do github(https://github.com/guidevi?tab=repositories).


---

### Tecnologias e ferramentas utilizadas

* **React** — biblioteca para construir interfaces interativas com componentes reutilizáveis.
* **Vite** — ferramenta de construção rápida (build tool), utilizada para inicializar e configurar o projeto com React de forma eficiente.
* **React Hooks** (`useState`, `useEffect`) — para gerenciar estado e executar operações assíncronas quando o componente monta.
* **Axios** — cliente HTTP baseado em promises para enviar requisições (GET, POST, DELETE etc.) à API com código mais limpo e tratamento de resposta automático.

---

### Pré-requisitos

* Ter **Node.js** (versão LTS recomendada) instalado.
* Ter uma **API backend rodando** (ex: a API em Node.js + Express conectada ao MongoDB).
* Editor de código (ex: Visual Studio Code).

---

### Como configurar e executar

#### 1. Criar o projeto com Vite

```bash
npm create vite@latest nome-do-projeto -- --template react
cd nome-do-projeto
npm install
```

*Esse comando inicia o scaffold do projeto com React via Vite.*

#### 2. Instalar Axios

```bash
npm install axios
```

#### 3. Estrutura básica esperada

* `src/App.jsx` ou `src/App.js`: componente principal.
* `src/components/`: onde ficam os componentes (form, lista).
* `src/services/api.js`: configuração do Axios (opcional).
* `src/styles/`: CSS ou outros estilos personalizados.

#### 4. Consumir a API com Axios dentro de um componente

```jsx
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('URL_DA_API/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1>Usuários</h1>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name} - {u.email}</li>
        ))}
      </ul>
    </div>
  )
}
export default App
```

*Aqui, `useEffect` roda no carregamento do componente e busca os usuários na API, salvando-os em `users` para renderização.*

#### 5. Implementar criação e remoção (exemplos)

```jsx
// API POST
axios.post('URL_DA_API/users', { name, email })
  .then(res => /* atualizar UI */)
  .catch(err => console.error(err))

// API DELETE
axios.delete(`URL_DA_API/users/${id}`)
  .then(res => /* atualizar UI */)
  .catch(err => console.error(err))
```

---

### Como executar o frontend

Para iniciar o servidor de desenvolvimento local (com hot reload):

```bash
npm run dev
```

Depois, abra o navegador e acesse o endereço indicado (ex: `http://localhost:5173`).

---

### Objetivos Do Projeto Concretizados

* Criação de interface interativa com React e Vite (rápido setup, build eficiente).
* Controle de estado e efeitos com Hooks (`useState`, `useEffect`).
* Consumo de API REST (GET, POST, DELETE) com Axios de modo simples e responsivo.
* Integração completa entre frontend e backend, aplicando boa parte do flow de um app real.
