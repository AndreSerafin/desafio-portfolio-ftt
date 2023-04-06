import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "antd/dist/antd.css";

import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  positions: positions.TOP_CENTER,
};

const App = () => {
  return (
    <BrowserRouter>
      <Provider template={AlertTemplate} {...options}>
        <Routes />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
