# 🐾 Pet&Style – Loja Virtual

Este projeto foi desenvolvido para criar uma página inicial para uma loja fictícia chamada **Pet&Style**, especializada em produtos estilosos para pets.

## 🧱 Estrutura do Projeto

```bash
petstyle-loja-virtual/ 
├── index.html 
├── imagens
├── src/ 
├── input.css
│ └── output.css
├── package.json 
├── package-lock.json
```
---
## 🖥️ Tecnologias Utilizadas

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)   

## 🖼️ Seções do Site

### 🔸 Header
- Logotipo fictício
- Menu de navegação com links para Hero, Produtos, Depoimentos e Contato

### 🔸 Hero
- Chamada principal com destaque visual
- Imagem decorativa de pets estilizados posicionada ao centro

### 🔸 Produtos
- cards com título e descrição 
- Layout em grid responsivo (`grid-cols-1`, `md:grid-cols-2`, `lg:grid-cols-4`)

### 🔸 Depoimentos
- Frases curtas de 2 a 3 clientes fictícios
- Estilo amigável e confiável

### 🔸 Contato
- Informações básicas: e-mail e telefone
- Formulário simples com campos de entrada e botão de envio

---

## 📱 Responsividade

- Estratégia **mobile-first**
- Uso de breakpoints (`sm:`, `md:`, `lg:`) para adaptação em diferentes telas
- Layout flexível com `flex`, `grid`, `gap`, `justify-center`, `items-center`

---

## 🚀 Como Executar

```bash
git clone https://github.com/ItsRAYKA/EBAC-Projetos-Exerc-cios/tree/main/petstyle-loja-virtual
```

**Instale as depedências:**

```bash
npm install
```

**Execute o  Tailwind em modo watch:**

```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```
