Projeto final do Módulo 8: Develas
Aluna: Isabella Sá

- Banco de dados utilizado:  Postgres em conjunto com Dbeaver
- A criação foi feita por migrations e toda a integração por Sequelize
- Projeto cadastro de veículos carros com CRUD, para adicionar um veículo no banco de dados, ler, fazer update em parte (patch) e deletar o mesmo.

- Informações Necessárias Para Rodar o Projeto: 6 passos.

1. No terminal da pasta do projeto dê um npm i para baixar todas as dependências que foram usadas 

2. Para baixar (fazer a migrations) do banco de dados dê o comando 
npx sequelize-cli init
npx sequelize-cli db:create
npx sequelize-cli model:generate --name DbCars --attributes id:uuid,modelo:string,marca:string,cor:string,preco:double
npx sequelize-cli db:migrate
npx sequelize-cli seed:generate --name demo-cars
npx sequelize-cli db:seed:all

modelo para seeders:
      {
        modelo: "modelo",
        marca: "marca",
        cor: "cor",
        preco: 00000.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

3. Configure seu arquivo .env com as infromações necessárias segundo o arquivo .envexample

PORT=<<PORT>>
HOST_DB=<<HOST_DB>>
PORT_DB=<<PORT_DB>>
USER_DB=<<USER_DB>>
PASS_DB=<<PASS_DB>>
DATABASE=<<DATABASE>>
DIALECT=<<DIALECT>>

4. também faça o mesmo com seu arquivo config/config.json para rodar os dados do banco de dados passando as informações necessárias

5. Para rodar o projeto dê um npm run dev ou nodemon app.js no terminal da pasta do projeto e pode ir para a parte de testes no thunder client

6. Para testar o funcionamento do projeto no Thunder Client importe o arquivo das collections car_store

createCars (post): http://localhost/cars
modelo teste para post:
      {
        "modelo": "BMW X4",
        "marca": "BMW",
        "cor": "azul",
        "preco": 80000000
      }

- getAllCars (get): http://localhost/cars
- getCarsById (get): http://localhost/cars/?marca=digiteamarca (Fiat por exemplo)
- updateCars (patch): http://localhost/cars/passaroId -> se der status 200 funcionou! e ai dê um get para ver a mudança
- removeCars (delete):http://localhost/cars/passaroId -> se der status 200 funcionou! e ai dê um get para ver que deletou


