# 📝Cadastro de Endereço com CEP

Este é um pequeno projeto prático desenvolvido como parte dos estudos da linguagem **JavaScript**, com foco nos conceitos de:

- Consumo de API com `fetch()`
- Manipulação do DOM
- Validação de dados
- Armazenamento local com `localStorage`

## 📋 Funcionalidade

O projeto simula um **formulário de cadastro de endereço**, onde o usuário digita o **CEP** e, automaticamente, os demais campos como **logradouro, bairro, cidade e estado** são preenchidos com os dados da API ViaCEP.

### 🛠️ Recursos:

- Autopreenchimento dos campos de endereço ao digitar o CEP.
- Validação de CEP inválido ou com menos de 8 dígitos.
- Exibição de aviso ao usuário em caso de erro.
- Os dados preenchidos são armazenados no navegador utilizando o `localStorage`, mesmo após atualizar a página.
- Botão de limpar formulário, caso o usuário deseje.

## 💻 Tecnologias utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![API ViaCEP](https://img.shields.io/badge/API_ViaCEP-darkblue?style=for-the-badge&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI%2BPHBhdGggZD0iTTEyIDJjNS41MjMgMCAxMCA0LjQ3NyAxMCAxMHMtNC40NzcgMTAtMTAgMTAtMTAtNC40NzctMTAtMTBjMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMFptMCAyYy00LjQxOCAwLTggMy41ODItOCA4czMuNTgyIDggOCA4IDgtMy41ODIgOC04LTMuNTgyLTgtOC04em0wIDJjMi4yMDkgMCA0IDEuNzkgNCA0cy0xLjc5IDQtNCA0LTQtMS43OS00LTRzMS43OS00IDQtNHoiIGZpbGw9IiNGRkZGRkYiLz48L3N2Zz4%3D&logoColor=white)


## 📁 Estrutura

/cadastro CEP
├── index.html
├── style.css
├── script.js
├── ico.png
└── README.md

## 📌 Observações

- Este projeto **não possui botão de cadastro**, pois o foco é exclusivamente demonstrar a lógica de integração com API e persistência de dados localmente.

## 🚀 Como executar

1. Clone este repositório:
```bash

git clone https://github.com/Raylunaris/EBAC-Projetos-Exerc-cios


