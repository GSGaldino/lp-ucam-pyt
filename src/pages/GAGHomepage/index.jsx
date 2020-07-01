import React from 'react';

import Header from '../components/Header';
import FirstSection from '../components/FirstSection';
import GoalsSection from '../components/GoalsSection';
import CourseObjective from '../components/CourseObjective';
import ForWhoContainer from '../components/ForWhoContainer';
import ModulesSection from '../components/ModulesSection';
/* import Teachers from '../components/Teachers'; */
import FAQSection from '../components/FAQSection';
import CTA from '../components/CTA';
import AlgumaDuvidaSection from '../components/AlgumaDuvidaSection';
import MobileMatriculese from '../components/MobileMatriculese';
import Footer from '../components/Footer';

import './styles.css';
import './responsive.css';

export default function GAGHomepage(){
  const firstSectionTitle = () => <p>Gerente<br></br>Ágil</p>

  const modulesSectionContent = () => (
    <ol>
          <li><strong>Fundamentos do Agile</strong>
            <ul>
              <li>
                <strong>Curso fundamentos de agilidade:</strong>
                <p>seus primeiros passos para transformação ágil</p>
              </li>

              <li>
                <strong>Curso Scrum:</strong>
                <p>Agilidade em seu processo</p>
              </li>

              <li>
                <strong>Podcast:</strong>
                <p>Agilidade</p>
              </li>

              <li>
                <strong>Podcast:</strong>
                <p>Scrum- do zero ao Sprint</p>
              </li>

              <li>
                <strong>Post:</strong>
                <p>Princípios ágeis revisitados- técnicas e práticas</p>
              </li>

            </ul>
          </li>

          <li><strong>Gerenciamento Ágil de Projetos</strong>
            <ul>
              <li>
                <strong>Curso Scrum Parte 1:</strong>
                <p>Gerencie o seu projeto de forma ágil</p>
              </li>

              <li>
                <strong>Curso Scrum Parte 2:</strong>
                <p>O Manifesto Ágil, Liderança, organização em Scrum</p>
              </li>

              <li>
                <strong>Curso Scrum Parte 3:</strong>
                <p>Iniciando Projetos com Agile</p>
              </li>

              <li>
                <strong>Curso Scrum Parte 4:</strong>
                <p>Planejando Projetos com Ágile</p>
              </li>

              <li>
                <strong>Post:</strong>
                <p>Scrum- A meta da Sprint</p>
              </li>

              <li>
                <strong>Curso Scrum Parte 5:</strong>
                <p>Executando projetos com Agile</p>
              </li>

              <li>
                <strong>Curso Scrum Parte 6:</strong>
                <p>Revisão, Retrospectiva e encerramento de Projetos com Agile</p>
              </li>

              <li>
                <strong>Podcast:</strong>
                <p>Kanban e o fluxo de trabalho</p>
              </li>

              <li>
                <strong>Curso Kanban Parte 1:</strong>
                <p>Fundamentos Essenciais</p>
              </li>

              <li>
                <strong>Post:</strong>
                <p>Kanban além do gerenciamento de software</p>
              </li>

              <li>
                <strong>Post:</strong>
                <p>Implantação de scrum e 1 ano de podcast</p>
              </li>

              <li>
                <strong>Curso Kanban parte 2:</strong>
                <p>Métricas e práticas avançadas</p>
              </li>

            </ul>
          </li>

          <li>
            <strong>Talentos do Gerente Ágil</strong>
            <ul>
              <li>
                <strong>Curso liderança parte 1:</strong>
                <p>Seja líder no novo mercado</p>
              </li>

              <li>
                <strong>Curso liderança parte 2:</strong>
                <p>Seja o líder que o mercado procura</p>
              </li>

              <li>
                <strong>Podcast:</strong>
                <p>Gestão com Management 3.0</p>
              </li>

              <li>
                <strong>Podcast:</strong>
                <p>Squads não-suicidas</p>
              </li>

            </ul>
          </li>
          
          <li>
            <strong>Agile Avançado</strong>
            <ul>
              <li>
                <strong>Curso Agile na Prática:</strong>
                <p>Técnicas aplicadas para gestão ágil</p>
              </li>
              
              <li>
                <strong>Curso Agile Avançado:</strong>
                <p>Crie modelos e descubra Nexus</p>
              </li>
              
              <li>
                <strong>Podcast:</strong>
                <p>Design Sprint</p>
              </li>
              
              <li>
                <strong>Post:</strong>
                <p>Pensando em metricas para times ágeis</p>
              </li>
              
            </ul>
          </li>

        </ol>
  )
  return (
    <div className="GAGHomepage">
      <Header />
      <FirstSection 
        title={firstSectionTitle()}
        formId="8cbb93dd-332b-4d93-b17d-dabd9963c5f1"
        linkMatricula="https://cursos.alura.com.br/compra/candido-mendes-gerente-agil"
      />
      <GoalsSection cargaHoraria="110 horas"/>
      
      <CourseObjective text="O curso tem como objetivo ensinar e tangibilizar todas as etapas pré, durante e pós implantação de negócio, esclarecendo ao empreendedor todo conhecimento sobre as questões burocráticas,mercadológicas, legais, financeiras, gerenciais, comerciais, tecnológicas e promocionais atreladas ao mercado digital. Possibilitando assim uma maior exploração do mercado Digital, fortalecendo novas e melhoradas práticas."/>

      <ForWhoContainer text="Este curso é voltado para gestores e profissionais que já aplicam esta metodologia e desejam aperfeiçoar a técnica. Mas também é direcionado aos profissionais que querem aprender e entender melhor como funciona esta metodologia na prática, a fim de aumentar as possibilidades de ingressar nesta área."/>

      <ModulesSection content={modulesSectionContent()}/>
      {/* <Teachers /> */}
      <FAQSection certification="Gerente Ágil"/>
      <CTA href="https://cursos.alura.com.br/compra/candido-mendes-gerente-agil"/>
      <AlgumaDuvidaSection />
      <MobileMatriculese />
      <Footer />
    </div>
  )
}

