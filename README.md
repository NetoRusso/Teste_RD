# Teste Técnico - Recomendador de Produtos RD Station

Este projeto é parte do teste técnico para a vaga de desenvolvedor front-end na RD Station. O objetivo principal é implementar a lógica de recomendação de produtos RD Station em uma aplicação web existente.

## Missão

Sua missão é desenvolver a funcionalidade central de recomendação de produtos dentro de uma aplicação React.js pré-existente. Você deverá implementar a lógica que permite aos usuários selecionar suas preferências e funcionalidades desejadas, e então receber recomendações de produtos correspondentes.

## Contexto

Este projeto é parte de uma etapa técnica do processo seletivo para a vaga de desenvolvedor front-end na RD Station. A estrutura básica da aplicação já está construída com React.js para o front-end e utiliza json-server para simular um servidor RESTful com dados de produtos.

Seu foco deve ser na implementação da lógica de recomendação e na integração desta funcionalidade com a interface do usuário existente. A aplicação já possui um layout básico utilizando Tailwind CSS.

## Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias principais:

- React.js: Para o desenvolvimento do front-end
- json-server: Para simular um servidor RESTful com dados de produtos
- Tailwind CSS: Para estilização e layout responsivo

## Requisitos Técnicos

### Familiaridade com Tailwind CSS

O layout da aplicação foi desenvolvido utilizando Tailwind CSS. Familiaridade básica com este framework de CSS utilitário será útil para entender e potencialmente modificar o layout existente.

### Versão do Node.js

Este projeto requer Node.js versão 18.3 ou superior. Se você não tem essa versão instalada, siga as instruções abaixo para instalá-la usando `n` ou `nvm`.

#### Usando `n` (Node Version Manager):

1. Instale `n` globalmente (caso ainda não tenha): npm install -g n

2. Instale e use a versão 18.3 do Node.js: n 18.3

#### Usando `nvm` (Node Version Manager):

1. Instale `nvm` (caso ainda não tenha) seguindo as instruções em: https://github.com/nvm-sh/nvm

2. Instale e use a versão 18.3 do Node.js: nvm install 18.3 & nvm use 18.3

Após instalar a versão correta do Node.js, você pode prosseguir com a instalação das dependências do projeto e iniciar o desenvolvimento.

## Foco do Desenvolvimento

Para completar este teste, você deve concentrar-se principalmente em três arquivos específicos:

1. `App.js`: Neste componente, você encontrará o comentário "Dadas atualizações no formulário, necessário atualizar a lista de recomendações". Implemente a lógica necessária para atualizar a lista de recomendações com base nas entradas do usuário.

2. `Form.js`: Este componente contém o comentário "Defina aqui a lógica para atualizar as recomendações e passar para a lista de recomendações". Desenvolva a lógica para processar as entradas do usuário e gerar as recomendações apropriadas.

3. `recommendation.service.js`: Neste arquivo de serviço, você verá o comentário "Crie aqui a lógica para retornar os produtos recomendados." Implemente a lógica de negócios para determinar quais produtos devem ser recomendados com base nos critérios fornecidos.

## Observações Adicionais

- Sinta-se à vontade para implementar melhorias na cobertura de testes e no layout da aplicação, caso tenha tempo adicional.
- O código existente serve como base para sua implementação. Concentre-se em desenvolver a funcionalidade de recomendação de produtos conforme especificado nos requisitos do projeto e nos arquivos mencionados acima.

## Requisitos

- Implementar a lógica de recomendação de produtos com base nas preferências do usuário.
- Utilizar React.js para o desenvolvimento do front-end.
- Consumir a API fornecida pelo json-server para obter os dados dos produtos.
- Seguir as boas práticas de desenvolvimento e organização de código.
- Implementar testes unitários para as funcionalidades desenvolvidas.

## Como Executar

1. Clone o repositório: `git clone <URL_DO_REPOSITORIO>`
2. Instale as dependências: `yarn install`
3. Para instalar o projeto, execute o script `./install.sh` 
4. Inicie a aplicação: `yarn start`

### Scripts Disponíveis

- `start`: Inicia a aplicação React em modo de desenvolvimento.
- `start:frontend`: Inicia apenas a parte frontend da aplicação em modo de desenvolvimento.
- `start:backend`: Inicia apenas a parte backend da aplicação em modo de desenvolvimento.
- `dev`: Inicia simultaneamente a parte frontend e backend da aplicação em modo de desenvolvimento.

## Critérios de Aceite

1. O serviço de recomendação de produtos deve ser capaz de receber as preferências e funcionalidades desejadas do usuário através de um formulário.
2. O serviço deve retornar recomendações de produtos com base nas preferências e funcionalidades selecionadas pelo usuário.
3. Se o tipo de recomendação selecionado for "SingleProduct", o serviço deve retornar apenas um produto que corresponda melhor às preferências e funcionalidades do usuário.
4. Se o tipo de recomendação selecionado for "MultipleProducts", o serviço deve retornar uma lista de produtos que correspondam às preferências e funcionalidades do usuário.
5. Em caso de empate na seleção de produtos com base nas preferências e funcionalidades do usuário, o serviço deve retornar o último produto que atende aos critérios de seleção.
6. O serviço deve ser capaz de lidar com diferentes tipos de preferências e funcionalidades selecionadas pelo usuário.
7. O serviço deve ser modular e facilmente extensível para futuras atualizações e adições de funcionalidades.

Certifique-se de que todos os critérios de aceite são atendidos durante o desenvolvimento do projeto.

## Autor

Desenvolvido por [Argeu do Carmo Russo Neto]

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

=================================================================================//==================================================================================

# Implementação da Funcionalidade de Recomendação de Produtos

Este repositório contém a implementação da funcionalidade de recomendação de produtos RD Station, conforme o teste técnico para a vaga de desenvolvedor front-end. O objetivo principal foi implementar a lógica de recomendação de produtos com base nas preferências e funcionalidades fornecidas pelos usuários, integrando-a a uma aplicação React.js pré-existente.

## O que foi feito

A funcionalidade de recomendação de produtos foi construída a partir de uma aplicação React.js, com integração ao serviço `json-server` para simulação de um servidor RESTful que armazena os dados dos produtos. Abaixo estão os detalhes de implementação, alterações realizadas, e como o sistema foi desenvolvido.

### 1. **Implementação da Lógica de Recomendação de Produtos**

A lógica de recomendação foi implementada no arquivo `recommendation.service.js`. A ideia central é permitir que, com base nas preferências e funcionalidades selecionadas pelos usuários, a aplicação forneça recomendações personalizadas de produtos.

#### Etapas principais:

- **Estruturação e Pontuação dos Produtos**: Cada produto possui uma pontuação (score) inicial de 0. Com base nas preferências e funcionalidades selecionadas pelo usuário, ajustamos a pontuação. Produtos que atendem aos critérios definidos pelo usuário ganham um aumento na pontuação.

- **Seleção de Preferências e Funcionalidades**: Para cada preferência ou funcionalidade, o sistema percorre a lista de produtos, incrementando a pontuação dos produtos que correspondem aos critérios do usuário.

- **Ordenação e Tratamento de Empate**: Após ajustar as pontuações, os produtos são classificados. Em caso de empate (produtos com a mesma pontuação), a lógica garante que o último produto que atenda aos critérios será retornado.

- **Filtragem e Tipo de Recomendação**: O sistema pode recomendar um único produto ou múltiplos produtos, dependendo da escolha do usuário. Quando a recomendação é para múltiplos produtos, produtos com pontuação zero são descartados, garantindo que apenas produtos relevantes sejam sugeridos.

### 2. **Integração com a Interface do Usuário**

O front-end foi adaptado para incluir um formulário interativo onde os usuários podem selecionar suas **preferências** e **funcionalidades** desejadas. Ao atualizar as preferências, a lista de recomendações de produtos é automaticamente atualizada.

#### Passos principais:

- **Formulário de Preferências**: Um formulário foi criado para capturar as escolhas do usuário. Cada alteração no formulário dispara a execução da lógica de recomendação, que processa as entradas do usuário e retorna os produtos recomendados.

- **Exibição das Recomendações**: A lista de recomendações de produtos é exibida dinamicamente com base nas seleções do usuário, mostrando os produtos com maior pontuação, seja uma recomendação única ou múltiplas.

### 3. **Melhoria na Lógica de Seleção de Produto Único ou Múltiplos Produtos**

A recomendação pode ser feita de duas formas:

- **Produto Único**: Quando selecionado, o sistema retorna o produto com a maior pontuação ou o último produto em caso de empate.
  
- **Múltiplos Produtos**: Quando selecionado, o sistema retorna uma lista de produtos, sempre filtrando aqueles com pontuação zero.

### 4. **Testes e Validação**

Foram implementados testes para garantir que a lógica de recomendação funcione corretamente:

- **Testes de Pontuação**: Verificação de que os produtos recebem a pontuação correta com base nas preferências e funcionalidades.
  
- **Testes de Empate**: Garantia de que, em caso de empate, o sistema seleciona o último produto que atende aos critérios.

- **Testes de Funcionalidade**: Verificação da exibição correta das recomendações, seja para um único produto ou múltiplos produtos.

### 5. **Modularização e Manutenção**

A aplicação foi projetada de forma modular, com a lógica de recomendação separada em funções específicas, permitindo fácil manutenção e extensibilidade. Isso facilita futuras atualizações ou a adição de novos critérios de recomendação sem impactar outras partes do sistema.

## Passo a Passo para Execução

Siga os passos abaixo para configurar o projeto, instalar as dependências, executar a aplicação e rodar os testes.

### 1. **Clonar o Repositório**

Clone o repositório para o seu ambiente local utilizando o comando:
git clone <URL_DO_REPOSITORIO>

