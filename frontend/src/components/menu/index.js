import {
  Body,
  SessionLinks,
  Link,
  ImgLogo,
  Children,
  MainTitle,
  SubTitle,
  MainContainer,
  TitleContainer,
  ArrowLink,
} from "./styles";
import { fttLogo, arrowLeft } from "../../assets";

function testOnBack(onBack) {
  if (onBack != null) {
    return (
      <ArrowLink href={onBack}>
        <img alt="Back" width={17} src={arrowLeft} />
      </ArrowLink>
    );
  }
  return null;
}

const MenuComponent = ({ children, title, subTitle, onBack }) => {
  return (
    <MainContainer>
      <Body>
        <a href="/">
          <ImgLogo src={fttLogo} width={180}></ImgLogo>
        </a>
        <SessionLinks>
          <Link href="/">Inicio</Link>
          <Link href="/list">Projetos</Link>
        </SessionLinks>
      </Body>
      <Children>
        <TitleContainer>
          {testOnBack(onBack)}
          <MainTitle>{title}</MainTitle>
          <SubTitle>{subTitle}</SubTitle>
        </TitleContainer>
        {children}
      </Children>
    </MainContainer>
  );
};

export default MenuComponent;
