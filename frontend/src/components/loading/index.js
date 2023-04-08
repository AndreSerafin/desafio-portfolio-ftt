import { Spin } from "antd";
import { Body, LoadSession } from "./styles";

const LoadingComponent = () => {
  return (
    <Body>
      <Spin size="large">
      </Spin>
        <LoadSession>Carregando...</LoadSession> 
    </Body>
  );
};

export default LoadingComponent;
