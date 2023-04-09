Projeto fullstack criado com base no desafio do Processo de seleção da FTT-2023 segue os principais pontos que o
projeto deveria cumprir, as informações dos projetos se tratam de informações ficticias.

O projeto deverá ter as seguintes características:

1 - Design moderno e intuitivo;
2 - Desenvolvimento em linguagens e tecnologias atuais seguindo o fluxo utilizado pela FTT atualmente;
3 - Funcionalidades que possibilitem a apresentação dos serviços e projetos da FTT;
4 - Integração com redes sociais e outras plataformas de divulgação;
5 - Acesso a partir de dispositivos móveis, como smartphones e tablets;
6 - Testes de usabilidade e qualidade, para garantir a satisfação do usuário final.

O projeto desenvolvido consiste em uma aplicação full-stack desenvolvida usando React, Node, Express entre outras bibliotecas

Para iniciar deve-se ter o docker compose e node instalado na maquina assim como o yarn, e deve-se iniciar o banco de dados com o comando: 

  docker-compose up -d

logo em seguida iniciar o backend e front com o comando:

  yarn start

Rotas utilizadas pela aplicação
1- localhost:3001/projects - Rota utilizada para GET e POST

POST Exemplo: 
{
  "project_name": "Gerenciador de Tarefas",
  "project_category": "Software",
  "project_description": "Um aplicativo para gerenciar tarefas pessoais e profissionais",
  "about_project": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget dolor ut metus faucibus dignissim in sed quam. 
   Curabitur vel arcu vitae dolor commodo dignissim. Duis ultricies elit at elit tristique hendrerit. Maecenas vel consectetur velit. 
   Donec non nunc vel augue semper volutpat eget non arcu. Donec bibendum turpis enim, vel varius justo tincidunt id.",
  "tecnologies": "HTML, CSS, JavaScript, Vue.js, Firebase"
}

2- localhost:3000/        - Portfólio / pagina principal        
3- localhost:3000/list    - Gerenciamento de projetos
