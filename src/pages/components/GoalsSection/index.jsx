import React from 'react';
import GoalContainer from '../GoalContainer';

import chargeImg from '../../../assets/charge.jpg';
import startImg from '../../../assets/start.jpg';
import modalityImg from '../../../assets/modality.jpg';
import investimentImg from '../../../assets/investiment.jpg';

import './responsive.css';

export default function GoalsSection(){
  return (
    <div className="Goals__Section">
      
      <div className="goals">
        <GoalContainer
          src={chargeImg}
          title="Carga horária"
          firstText="Carga horária"
          secondText="90 horas"
        />

        <GoalContainer
          src={startImg}
          title="Início"
          firstText="Início"
          secondText="Julho/2020"
        />
      </div>
      <div className="goals">
        <GoalContainer
          src={modalityImg}
          title="Modalidade"
          firstText="Modalidade"
          secondText="100% on-line"
        />

        <GoalContainer
          src={investimentImg}
          title="Investimento"
          firstText="Investimento"
          secondText="R$: 900,00"
        />
      </div>
    </div>
  )
}
