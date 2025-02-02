// Form.js

import React from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';
// import recommendationService from '../../services/recommendation.service';

function Form({ setRecommendations }) {
  const { preferences, features, products } = useProducts();
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const { getRecommendations, recommendations } = useRecommendations(products);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataRecommendations = getRecommendations(formData);

    /**
     * Defina aqui a lógica para atualizar as recomendações e passar para a lista de recomendações
     */

    // recommendations.splice(0, recommendations.length);
    // dataRecommendations.forEach((selecao) => {
    //   recommendations.push(selecao);
    // })

    setRecommendations(dataRecommendations);
  };

  return (
    <form
      className="mx-auto p-4 bg-white rounded-lg shadow-md flex flex-col gap-8"
      onSubmit={handleSubmit}
    >
      <div
        className="flex flex-col md:flex-row gap-8 "
      >
        <Preferences
          preferences={preferences}
          onPreferenceChange={(selected) =>
            handleChange('selectedPreferences', selected)
          }
        />
        <Features
          features={features}
          onFeatureChange={(selected) =>
            handleChange('selectedFeatures', selected)
          }
        />
      </div>
      <div className='mx-w-4/4 flex flex-col gap-4 justify-center items-center mb-8'>
        <RecommendationType
          onRecommendationTypeChange={(selected) =>
            handleChange('selectedRecommendationType', selected)
          }
        />
        <SubmitButton text="Obter recomendação" />
      </div>
    </form>
  );
}

export default Form;
