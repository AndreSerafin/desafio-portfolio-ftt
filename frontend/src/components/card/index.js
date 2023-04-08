import {
  CardImage,
  CardContainer,
  CardDescription,
  CardTitle,
  CardSubtitle,
} from "./styles";

const CardComponent = ({ href, imgUrl, title, category }) => {
  return (
    <a href={href}>
      <CardContainer>
        <CardImage width={300} src={imgUrl} alt="Card Image" />
        <CardDescription>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{category}</CardSubtitle>
        </CardDescription>
      </CardContainer>
    </a>
  );
};

export default CardComponent;
