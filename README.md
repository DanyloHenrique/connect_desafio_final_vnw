# 🤝 Connect - Vai na Web (Desafio Final)

> Desafio final do módulo de Front-end do curso **Vai na Web**.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## 💻 Sobre o Projeto

O **Connect** é uma plataforma desenvolvida com o objetivo de conectar pessoas a projetos de voluntariado, mentorias e eventos sociais. A aplicação serve como um hub para quem deseja contribuir com causas sociais e para institutos que buscam apoio.

Este projeto foi desenvolvido como requisito para a conclusão do módulo de Front-end da escola técnica **Vai na Web**.

---

## ⚙️ Funcionalidades

- **Listagem de Oportunidades:** Visualização de cards contendo eventos, mentorias e vagas de voluntariado.
- **Navegação SPA:** Transição fluida entre páginas utilizando React Router.
- **Design Responsivo:** Interface adaptada para diferentes tamanhos de tela (Mobile e Desktop).
- **Componentização:** Estrutura modular para fácil manutenção e escalabilidade.

---

## 🛠 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **[React](https://reactjs.org/)** - Biblioteca JavaScript para construção de interfaces.
- **[Vite](https://vitejs.dev/)** - Build tool rápida para projetos web modernos.
- **[Sass](https://sass-lang.com/)** - Pré-processador CSS para estilização avançada e organizada.
- **[React Router](https://reactrouter.com/)** - Gerenciamento de rotas e navegação.
- **[React Icons](https://react-icons.github.io/react-icons/)** - Biblioteca de ícones.

---

## 📂 Estrutura de Pastas

A estrutura do projeto segue uma organização modular, separando componentes, páginas e estilos.

```bash
src
├── assets/cards          # Imagens dos cards (events, institute, mentoring, voluntary)
├── components            # Componentes reutilizáveis
│   ├── Button
│   ├── Card
│   ├── Footer
│   ├── Header
│   ├── Logo
│   ├── Nav               # Navegação e Menu Mobile (DialogNav)
│   ├── section
│   └── StatsItems
├── domain/data           # Dados estáticos (mock) da aplicação
├── pages                 # Páginas da aplicação (features, user)
└── styles                # Estilos globais e configurações do Sass
    ├── abstract          # Variáveis, mixins e placeholders
    └── base              # Reset e tipografia
```

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina as seguintes ferramentas:

*Git*

*Node.js* (versão 18 ou superior recomendada)

### Rodando a aplicação

```bash
### Clone este repositório
$ git clone https://github.com/DanyloHenrique/connect_desafio_final_vnw.git

# Acesse a pasta do projeto no terminal/cmd
$ cd connect_desafio_final_vnw

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
```
