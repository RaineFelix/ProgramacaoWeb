# Lista de Compras 🗒️

Este projeto é uma aplicação web interativa desenvolvida com React para a disciplina de Programação Web. A aplicação permite que os usuários gerenciem suas listas de compras de maneira eficiente, adicionando itens, visualizando os preços e calculando automaticamente o valor total. Além disso, oferece funcionalidades adicionais como copiar e compartilhar a lista de compras.


## Participantes do Grupo 🧑🏽‍💻👩🏽‍💻

- Raine Vitoria Felix Moreira
- Larissa Gabrielle de Souza
- Fábio Eloy Passos

## Funcionalidades ⚒️

- Adicionar itens à lista de compras
- Exibir itens adicionados com seus respectivos preços
- Calcular e exibir o valor total da lista
- Copiar a lista
- Compartilhar a lista de compras

## Tecnologias Utilizadas 🖥️

- React
- Vite
- JavaScript
- CSS

## Estrutura do Projeto 🗺️
```
ListaCompra/
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── vite.config.js
├── .eslintrc.cjs
├── public/
│ ├── vite.svg
│ └── img/
│ └── no-data.webp
└── src/
├── app.css
├── main.jsx
├── routes.jsx
├── components/
│ ├── footer/
│ │ └── index.jsx
│ ├── header/
│ │ └── index.jsx
│ ├── item-form/
│ │ └── index.jsx
│ ├── list-item/
│ │ └── index.jsx
│ ├── list-view/
│ │ ├── index.jsx
│ │ └── partials/
│ │ └── no-data.jsx
├── pages/
│ └── home/
│ └── index.jsx
└── providers/
└── basket.jsx
```


## Como Rodar o Projeto ⚙️

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node)

### Passo a Passo

1. **Clone o repositório:**

   ```sh
   git clone <endereço repositório>  
   cd dev_web

2. **Instale as dependências:**

    ```bash
   npm install
    ```

3. **Execute o servidor de desenvolvimento:**

    ```bash
    npm run dev
     ```

4. **Abra o navegador e acesse:**

     ```
      http://localhost:5173
     ```

