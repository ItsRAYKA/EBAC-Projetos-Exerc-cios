# To-do-list

Uma aplicação To-do List em **React**, criada para treinar **componentização**, **Context API**, **hooks**, **otimização com memo**, organização de pastas e estilização com TailwindCSS.
Permite **adicionar**, **filtrar**, **concluir** e **remover tarefas**, além de salvar o usuário e suas tarefas no LocalStorage.

- **useState** e **useEffect** → controle de estados e efeitos
- **Context API** → compartilhamento global de tarefas e ações
- **useMemo** → otimização e prevenção de cálculos desnecessários
- **Custom Hook (`useLocalStorage`)** → salvar e recuperar dados do navegador
- **Componentização clara** → fácil manutenção e expansão

## Visualização

<p align="center">
  
  ![Preview](lista/src/assets/to-do-list.jpg)
  
</p>

## Estrutura dos Arquivos

```
src/
├── components/
│   ├── Layout.jsx
│   ├── Login.jsx
│   ├── TodoApp.jsx
│   ├── TodoFilters.jsx
│   ├── TodoForm.jsx
│   ├── TodoItem.jsx
│   └── TodoList.jsx
│
├── context/
│   └── TodoContext.jsx
│
├── hooks/
│   └── useLocalStorage.js
│
└── assets/
    └── to-do-list.jpg ← imagem do projeto
```

---

## Tecnologias Utilizadas

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)

---

## Como Utilizar / Baixar o Projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/ItsRAYKA/EBAC-Projetos-Exerc-cios.git
```

2. **Acesse a pasta do projeto:**

```bash
cd To-do-list/lista
```

3. **Instale as depedências:**
   
```bash
npm install
```

4. **Instale as depedências:**

```bash
npm run dev
```
4. **Abra no navegador:**

```bash
http://localhost:5173/
```
---


