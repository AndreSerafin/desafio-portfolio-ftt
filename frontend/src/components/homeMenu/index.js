import {
  Body,
  Children,
  Footer,
  ImgLogo,
  NavLinksSession,
  NavPage,
  NavSession,
  SocialMediaSession,
} from "./styles.js";
import { SocialMedia } from "../index.js";

import {
  uniLogo,
  fttLogo,
  instaLogo,
  facebookLogo,
  linkedinLogo,
} from "../../assets/index.js";

const HomeMenu = ({ children }) => {
  return (
    <>
      <Body>
        <a href="https://www4.unievangelica.edu.br">
          <ImgLogo src={uniLogo} alt="Universidade Evangélica de Goiás" />
        </a>
        <SocialMediaSession>
          <SocialMedia
            path={linkedinLogo}
            mediaUrl="https://www.linkedin.com/company/ftt-unievangelica/?originalSubdomain=br"
          />
          <SocialMedia
            path={facebookLogo}
            mediaUrl="https://pt-br.facebook.com/fttunievangelica/"
          />
          <SocialMedia
            path={instaLogo}
            mediaUrl="https://instagram.com/uni.computacaoesoftware?igshid=YmMyMTA2M2Y="
          />
        </SocialMediaSession>
      </Body>
      <NavSession>
        <a href="/">
          <ImgLogo
            src={fttLogo}
            style={{ marginLeft: "80px", maxWidth: "220px" }}
          />
        </a>
        <NavLinksSession>
          <a href="/">INÍCIO</a>
          <a>SOBRE NÓS</a>
          <a>CONTATO</a>
        </NavLinksSession>
      </NavSession>
      <Children>{children}</Children>
      <Footer>
        <a href="https://github.com/AndreSerafin">Developed By André Serafin</a>
      </Footer>
    </>
  );
};

export default HomeMenu;
