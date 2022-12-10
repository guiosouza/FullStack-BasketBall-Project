# FullStack BasketBall Project

## Schema do Banco (SQL das tabelas, [aqui](https://github.com/guiosouza/FullStack-BasketBall-Project/blob/main/banco%20de%20dados/tabelas_basquete.sql)):

![image](https://user-images.githubusercontent.com/78989152/206875023-2b596c66-62c4-4be9-bea7-21d7b3d177f5.png)

## Divisão do Projeto e Tecnologias

- Backend: `Node.JS`
- Frontend: `React`
- Gerenciador das stacks: `Yarn`
- Banco de Dados: MySQL

## BACKEND

Foi construída uma API para para atender as requisições do FRONT. A Api basicamente:
- Faz as requisições com os "controllers";
- Define as rotas de requisições com o "routes";

## FRONTEND

No front temos dois `containers` estilizados: um para fazer as alterações nas tabelas e outro para exibir os dados do banco. 

Observação: Para estilização, não foram criados arquivos isolados para os componentes React, porém é mais aconselhável separar.

A renderização no front segue a ordem:

1) App do React carrega o arquivo Rotas
2) Rotas Carrega os componentes (inicialmente vai para o CRUD de `equipes`;
3) O arquivo `Rotas` possui todas os caminhos para o CRUD de todas as outras tabelas;
 

