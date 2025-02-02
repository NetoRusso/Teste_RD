![Image](https://github.com/user-attachments/assets/bc98b093-cc73-40b4-a220-16824695b184)
## Autor

Desenvolvido por Argeu do Carmo Russo Neto

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---

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

### 1. Clonar o Repositório

Clone o repositório para o seu ambiente local utilizando o comando:
```
git clone git@github.com:NetoRusso/Teste_RD.git
```

### 2. Instalar as Dependências

Dentro do diretório do projeto, execute o comando abaixo para instalar todas as dependências necessárias:
```
yarn install
```
Ou, caso prefira usar o npm:
```
npm install
```

### 3. Instalar o projeto

Execute o script:
```
./install.sh
```

### 4. Inicie a aplicação

```
yarn start
```

Scripts disponiveis:

Inicia a aplicação React em modo de desenvolvimento.
```
start
```
Inicia apenas a parte frontend da aplicação em modo de desenvolvimento.
```
start:frontend
```
Inicia apenas a parte backend da aplicação em modo de desenvolvimento.
```
start:backend
```
Inicia simultaneamente a parte frontend e backend da aplicação em modo de desenvolvimento.
```
dev
```


### 4.1. Acessar a Aplicação

Abra o navegador e acesse o endereço http://localhost:3000 para ver a aplicação em funcionamento. No formulário de preferências, altere as seleções e veja como a lista de produtos recomendados é atualizada em tempo real.

### 4.2. Testar a Funcionalidade de Recomendação

  - Acesse a página principal da aplicação.
  - Selecione as preferências e funcionalidades desejadas através do formulário.
  - Verifique a lista de produtos recomendados, que será exibida conforme os critérios selecionados.
  - Para garantir que o sistema está funcionando corretamente, modifique as seleções e observe como as recomendações se ajustam.

### 5. Testes Unitários:

Execute os testes unitários com o comando abaixo para garantir que a lógica de recomendação está funcionando corretamente:

```
yarn test
```

