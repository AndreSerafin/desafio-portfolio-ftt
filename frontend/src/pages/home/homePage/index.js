import introImg from '../../../assets/imgs/homepage-img.png';
import {
  Body,
  ArrowContainer,
  IntroContainer,
  IntroIgm,
  IntroParagraph,
  IntroSession,
  IntroTitle,
  ProjectsContainer,
  CardsContainer,
} from './styles';
import { useState, useEffect } from 'react';

import { arrowDown } from '../../../assets';
import { Card } from '../../../components';
import { getProjects } from '../../projects/list/functions/getProject';

const HomePage = () => {
  const imageUrl = '';

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    getProjects(setLoading, setData, setError);
  }, [success]);

  const renderCards = (imgUrl) => {
    return data.map((i, index) => {
      return (
        <Card
          id={i.id}
          imgUrl={`https://source.unsplash.com/random/80${index}x60${index}/?software`}
          href={i.project_name
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^\w\s]/gi, '')
            .toLowerCase()
            .replace(/\s+/g, '-')}
          title={i.project_name}
          category={i.project_category}
        />
      );
    });
  };

  return (
    <Body>
      <IntroContainer>
        <IntroSession>
          <IntroTitle>Portfólio / Projetos</IntroTitle>
          <IntroParagraph>
            A Fábrica de Tecnologias Turing é uma empresa dedicada a auxiliar na
            formação de novos profissionais e no desenvolvimento de projetos
            internos da Universidade Evangélica de Goiás e eventualmente
            projetos externos. Nossa equipe é composta por discentes dos cursos
            de computação, que estão sempre em busca de novos desafios e
            oportunidades para aprender e crescer profissionalmente.
          </IntroParagraph>
          <IntroParagraph>
            Conheça os projetos desenvolvidos pela Fábrica de Tecnologias Turing
          </IntroParagraph>
        </IntroSession>
        <IntroIgm src={introImg} />
      </IntroContainer>
      <ArrowContainer>
        <img width="40" src={arrowDown} alt="arrowDown" />
      </ArrowContainer>
      <ProjectsContainer>
        {/* <FilterContainer>
          <FilterButton>TODOS</FilterButton>
        </FilterContainer> */}
        <CardsContainer>{renderCards(imageUrl)}</CardsContainer>
      </ProjectsContainer>
    </Body>
  );
};

export default HomePage;
