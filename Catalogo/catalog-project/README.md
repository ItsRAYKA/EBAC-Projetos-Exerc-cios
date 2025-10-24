# 🛒 Catálogo de Produtos

Aplicação desenvolvida em **React** utilizando **Vite**, com o objetivo de criar um catálogo de produtos dinâmico e funcional. O projeto aplica conceitos como **componentes reutilizáveis, hooks, formulário controlado, listagem dinâmica** e **simulação de carregamento de dados**, além de persistência com **localStorage**.

## 🚀 Tecnologias Utilizadas

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![LocalStorage](https://img.shields.io/badge/LocalStorage-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Hooks](https://img.shields.io/badge/React_Hooks-61DAFB?style=for-the-badge&logo=react&logoColor=white)

## ✨ Funcionalidades

A aplicação oferece os seguintes recursos:

- **ProdutoCard Reutilizável**: Exibe informações de cada produto (nome, preço, descrição e imagem).  
- **Formulário Controlado**: Permite cadastrar novos produtos no catálogo com campos obrigatórios: nome, preço e descrição.  
- **Listagem Dinâmica**: Renderiza os produtos utilizando `.map()` a partir do estado.  
- **Simulação de API**: `useEffect` simula carregamento inicial dos produtos com delay, exibindo mensagem de "Carregando produtos..." centralizada na tela.  
- **Persistência com LocalStorage**: Mantém os produtos cadastrados mesmo após atualizar a página.  
- **Deletar Produto**: Permite remover produtos individualmente da lista.

## 🧩 Componentes

- `ProdutoCard.jsx` → Componente para exibir cada produto. Recebe props: `nome`, `preco`, `descricao`, `imagem` e `onDelete`.  
- `Formulario.jsx` → Formulário controlado que atualiza o estado de novos produtos e envia os dados para o hook customizado.  
- `useProdutos.jsx` → Hook customizado que gerencia o estado de produtos, adiciona, remove e sincroniza com o `localStorage`.  
- `App.jsx` → Componente principal que integra todos os componentes e exibe a lista de produtos.

## 📁 Estrutura de Arquivos

```text
catalog-project/
├── node_modules/
├── public/
├── src/
│   ├── assets/              
│   ├── components/
│   │   ├── Formulario.jsx
│   │   ├── ProdutoCard.jsx
│   │   └── hooks/
│   │       └── useProdutos.js
│   ├── pages/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```
🧑‍💻 Como Rodar o Projeto

1. Clone este repositório:

```bash
git clone https://github.com/ItsRAYKA/EBAC-Projetos-Exerc-cios.git
```

2. Entre na pasta do projeto:

```bash
cd EBAC-Projetos-Exerc-cios
```
3. Instale as dependências:

```bash
npm install 
```
4. Execute o projeto:

```bash
npm run dev
```
5. Abra o link gerado pelo Vite no navegador. 

