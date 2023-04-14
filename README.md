# Processo de seleção FTT 2023 - Desafio Full Stack

Este projeto foi criado como parte do processo de seleção da FTT-2023, e segue os principais pontos que o projeto deveria cumprir. As informações contidas no projeto são fictícias.

O desafio consiste em desenvolver uma aplicação full-stack com as seguintes características:

- Design moderno e intuitivo;
- Desenvolvimento em linguagens e tecnologias atuais seguindo o fluxo utilizado pela FTT atualmente;
- Funcionalidades que possibilitem a apresentação dos serviços e projetos da FTT;
- Integração com redes sociais e outras plataformas de divulgação;
- Acesso a partir de dispositivos móveis, como smartphones e tablets;
- Testes de usabilidade e qualidade, para garantir a satisfação do usuário final.
- Tecnologias utilizadas
- O projeto desenvolvido consiste em uma aplicação full-stack desenvolvida usando as seguintes tecnologias:

1. React (frontend), axios, yup, entre outras
2. Node.js e Express (backend), yup entre outras
3. Docker

### Como executar o projeto:

1. Antes de iniciar, certifique-se de ter o Docker Compose e o Node.js instalados na sua máquina.

2. Clone este repositório na sua máquina;
3. No terminal, navegue até o diretório do backend e execute o seguinte comando para iniciar o banco de dados:

```
docker-compose up -d
```

4. Em seguida, execute o seguinte comando nas pastas do backend, frontend e pasta principal para instalar as dependências:

```
yarn install
```

5. Por fim, execute o seguinte comando no diretório principal para iniciar o projeto:

```
yarn start
```

## Rotas utilizadas pela aplicação

- localhost:3001/projects - Rota utilizada para GET e POST

### Exemplo de POST:

```
{
  "project_name": "Gerenciador de Tarefas",
  "project_category": "Software",
  "project_description": "Um aplicativo para gerenciar tarefas pessoais e profissionais",
  "about_project": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget dolor ut metus faucibus dignissim in sed quam. Curabitur vel arcu vitae dolor commodo dignissim. Duis ultricies elit at elit tristique hendrerit. Maecenas vel consectetur velit. Donec non nunc vel augue semper volutpat eget non arcu. Donec bibendum turpis enim, vel varius justo tincidunt id.",
  "tecnologies": "HTML, CSS, JavaScript, Vue.js, Firebase"
}

```

- localhost:3000/ - Portfólio / página principal
- localhost:3000/list - Gerenciamento de projetos
