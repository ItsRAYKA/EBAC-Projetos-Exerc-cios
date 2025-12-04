# 🛒 Catálogo de Produtos

Aplicação desenvolvida em **React** utilizando **Vite**, com o objetivo de criar um catálogo de produtos dinâmico e funcional.  
O projeto aplica conceitos como **componentes reutilizáveis**, **hooks**, **formulário controlado**, **listagem dinâmica**, **simulação de carregamento de dados** e **persistência com LocalStorage**.

---

## 🚀 Tecnologias Utilizadas

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![LocalStorage](https://img.shields.io/badge/LocalStorage-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Hooks](https://img.shields.io/badge/React_Hooks-61DAFB?style=for-the-badge&logo=react&logoColor=white)

---

## ✨ Funcionalidades

- **ProdutoCard Reutilizável**: Exibe informações de cada produto (nome, preço, descrição e imagem).  
- **Formulário Controlado**: Permite cadastrar novos produtos com campos obrigatórios.  
- **Listagem Dinâmica**: Renderiza os produtos utilizando `.map()` a partir do estado.  
- **Simulação de API**: `useEffect` simula carregamento inicial com delay, exibindo "Carregando produtos...".  
- **Persistência com LocalStorage**: Produtos continuam salvos após atualizar a página.  
- **Deletar Produto**: Remove itens individualmente da lista.

---

## 🧩 Componentes

- **ProdutoCard.jsx** → Exibe cada produto. Recebe: `nome`, `preco`, `descricao`, `imagem`, `onDelete`.  
- **Formulario.jsx** → Formulário controlado para cadastrar produtos.  
- **useProdutos.jsx** → Hook customizado que gerencia produtos e sincroniza com o LocalStorage.  
- **App.jsx** → Componente principal que integra tudo.

---

## 🎨 Estilização com Styled-Components

A estilização da aplicação foi feita usando **styled-components**, uma biblioteca que permite escrever CSS diretamente dentro dos componentes React.

### 🚀 Por que usar styled-components?

- Os estilos ficam próximos dos componentes, facilitando manutenção.
- Cada componente tem seu próprio escopo de CSS, evitando conflitos.
- Não é necessário criar diversos arquivos `.css`.
- É possível aplicar estilos globais com `createGlobalStyle`.

### 🧱 Estrutura dos estilos

- Cada componente possui um arquivo próprio: `Componente.styles.js`.
- Há um arquivo `GlobalStyles.js` para definições globais.
- No `App.jsx`, `GlobalStyles` é importado e aplicado no topo da aplicação.

---

## 📁 Estrutura de Arquivos

```text
📁 catalog-project  
├── 📁 node_modules  
├── 📁 public  
│   └── index.html  
├── 📁 src  
│   ├── 📁 assets  
│   ├── 📁 components  
│   │   ├── 📁 hooks  
│   │   │   └── useProdutos.js  
│   │   ├── Formulario.jsx  
│   │   ├── Formulario.styles.js  
│   │   ├── ProdutoCard.jsx  
│   │   ├── ProdutoCard.styles.js  
│   │   └── Carrinho.jsx  
│   ├── 📁 styles  
│   │   ├── GlobalStyles.js  
│   │   ├── App.jsx  
│   │   ├── App.styles.js  
│   │   ├── index.css  
│   │   └── main.jsx  
├── .gitignore  
├── eslint.config.js  
├── package-lock.json  
├── package.json  
├── README.md  
├── vite.config.js  
```
## 🧑‍💻 Como Rodar o Projeto
 1. Clone o repositório:
 ```bash
 git clone https://github.com/ItsRAYKA/EBAC-Projetos-Exerc-cios.git
  ```
2. **Entre na pasta do projeto:**
  ```bash
  cd EBAC-Projetos-Exerc-cios
  ```
3. **Instale as dependências:**
  ```bash
  npm install
  ```
4. **Execute o projeto:**
  ```bash
  npm run dev
  ```
5. Abra o **link gerado pelo Vite** no navegador.

