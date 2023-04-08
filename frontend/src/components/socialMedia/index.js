import { MediaLogo } from "./styles";

const SocialMediaComponent = ({ path, mediaUrl }) => {
  return (
    <a href={mediaUrl}>
      <MediaLogo alt={mediaUrl} src={path} />
    </a>
  );
};

export default SocialMediaComponent;
