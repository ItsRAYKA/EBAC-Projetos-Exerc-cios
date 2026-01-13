# 📚 Catálogo de Livros

Aplicação desenvolvida em **React** + **TypeScript** com o objetivo de gerenciar um catálogo de livros. O projeto não se limita apenas ao consumo da API gratuita [crudcrud.com](https://crudcrud.com), mas também foi criado para **aplicar e consolidar conceitos fundamentais de TypeScript** dentro de um ambiente real de desenvolvimento front-end.


## ✨ Funcionalidades

- 📖 Listar livros armazenados na API  
- ➕ Adicionar um novo livro (Título, Autor, Status: "Lido"/"Não Lido")  
- ❌ Remover livros da lista  
- 🔄 Atualizar status do livro ("Lido"/"Não Lido")  

---

## 📁 Estrutura das pastas

```bash
bookCatalog/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── BookForm.tsx
│   │   ├── BookItem.tsx
│   │   └── BookList.tsx
│   ├── api.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── types.ts
├── package.json
├── tsconfig.json
└── vite.config.ts

```

## 🛠️ Ferramentas Utilizadas

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)  ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)  ![CRUDCRUD](https://img.shields.io/badge/CRUDCRUD-API-blue?style=for-the-badge)  

---

## 🚀 Como usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/RaykaDev/EBAC-Projects.git
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Gere um endpoint único em crudcrud.com
   copie a URL gerada e substitua no arquivo src/api.ts
   ```javascript
   const api = axios.create({
      baseURL: "https://crudcrud.com/api/SEU_ENDPOINT_AQUI"
    });
   ```
4. Rode a aplicação
   ```bash
   npm run dev
   ```
