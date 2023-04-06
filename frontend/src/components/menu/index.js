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
} from "./styles";
import Logo from "../../assets/imgs/logo-ftt.png";

const MenuComponent = ({ children, title, subTitle }) => {
  return (
    <MainContainer>
      <Body>
        <a href="/">
          <ImgLogo src={Logo} width={180}></ImgLogo>
        </a>
        <SessionLinks>
          <Link>Inicio</Link>
          <Link>Projetos</Link>
        </SessionLinks>
      </Body>
      <Children>
        <TitleContainer>
          <MainTitle>{title}</MainTitle>
          <SubTitle>{subTitle}</SubTitle>
        </TitleContainer>
        {children}
      </Children>
    </MainContainer>
  );
};

export default MenuComponent;
