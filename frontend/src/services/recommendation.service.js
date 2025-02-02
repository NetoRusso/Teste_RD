// getRecommendations.js

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [] },
  products
) => {
  /**
   * Crie aqui a lógica para retornar os produtos recomendados.
   */

  
  // Inserindo a logica de pontuação na seleção de preferências e funcionalidades;

  let newProduct = products.map((produto) => {
    return { ...produto, score: 0 };
  });

  if (formData.selectedPreferences) {
    formData.selectedPreferences.forEach((preference) => {
      newProduct = newProduct.map((product) => {
        if (product.preferences.includes(preference)) {
          return { ...product, score: product.score + 1 };
        } else {
          return { ...product, score: product.score };
        }
      })
    });
  }

  if (formData.selectedFeatures) {
    formData.selectedFeatures.forEach((feature) => {
      newProduct = newProduct.map((product) => {
        if (product.features.includes(feature)) {
          return { ...product, score: product.score + 1 };
        } else {
          return { ...product, score: product.score };
        }
      })
    });
  }


  // Ordenando os produtos pela pontuação;
  const sortProductForScore = newProduct.sort((a, b) => b.score - a.score);

  // Verificando a pontuação dos produtos se houver empate;
  let verificaScore = 0;
  let numero = 0;
  
  sortProductForScore.forEach((product) => {
    if (numero <= product.score) {
      numero = product.score;
      verificaScore++;
    }
  })
  
  // Verificando a seleção e o tipo que estão sendo recebidas no formulário (formData), pois se o usuário selecionar somente funcionalidades a lógica continuará funcionando;
  
  const selecao = formData.selectedPreferences.length > 0 ? formData.selectedPreferences : formData.selectedFeatures;
  const tipo = formData.selectedPreferences.length > 0 ? "preferences" : "features";

  // Verificando a seleção entre Produto Único ou Múltiplos Produtos. Para Produto Único, a lógica começa verificando se houve empate. Se houver, um find localiza se o tipo do produto é "preferências" ou "funcionalidades", e um includes seleciona o último produto que corresponde ao tipo escolhido. Caso não haja empate, retorna diretamente o produto com a maior pontuação (score). Para Múltiplos Produtos, é aplicado um filter para remover todos os produtos com score zerado.
  const resultado = formData.selectedRecommendationType && formData.selectedRecommendationType === "SingleProduct" ?
    (
      [(
        verificaScore > 1 ? sortProductForScore.find((pref) => pref[tipo].includes((selecao)[selecao.length - 1])) : sortProductForScore[0]
      )]
    ) : (
      sortProductForScore.filter(({ score }) => score > 0)
    );


  return resultado;
}

export default { getRecommendations };
