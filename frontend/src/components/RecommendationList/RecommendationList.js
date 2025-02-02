import React from 'react';

function RecommendationList({ recommendations }) {
  return (
    <div className='mx-w-4/4 flex flex-col gap-4 justify-center items-center'>
      <h2 className="text-lg font-bold mb-4">Lista de Recomendações:</h2>

      {recommendations.length === 0 && <p>Nenhuma recomendação encontrada.</p>}

      <ul className='flex gap-8 flex-wrap justify-center items-center'>
        {recommendations.map((recommendation, index) => (
          <li key={index} className="mb-2">
            {recommendation.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;
