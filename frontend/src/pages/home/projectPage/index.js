import {
  Body,
  SubTitle,
  Title,
  TitleSession,
  TitleContainer,
  ProjectsContainer,
  DescriptionSession,
  ImageContainer,
  TecnologiesSession,
  Image,
  AboutSession,
  TecnologiesUl,
  TecnologiesLi,
  TecsTitle,
  AboutParagraph,
} from "./styles";

const ProjectPage = ({ data, imgUrl }) => {
  const renderTecs = () => {
    let tecs = data.tecnologies.split(",");
    let aux = [];

    for (let i = 0; i < tecs.length; i++) {
      aux.push(<TecnologiesLi>{tecs[i]}</TecnologiesLi>);
    }

    return aux;
  };

  return (
    <Body>
      <TitleContainer>
        <TitleSession>
          <Title>{data.project_name}</Title>
          <SubTitle>{data.project_category}</SubTitle>
        </TitleSession>
      </TitleContainer>

      <ProjectsContainer>
        <DescriptionSession>{data.project_description}</DescriptionSession>
        <ImageContainer>
          <Image width={300} src={imgUrl} alt="Principal Image" />
        </ImageContainer>
        <TecnologiesSession>
          <TecsTitle>Tecnologias</TecsTitle>
          <TecnologiesUl>{renderTecs()}</TecnologiesUl>
        </TecnologiesSession>
        <AboutSession>
          <TecsTitle>Sobre o projeto</TecsTitle>
          <AboutParagraph>{data.about_project}</AboutParagraph>
        </AboutSession>
      </ProjectsContainer>
    </Body>
  );
};

export default ProjectPage;
