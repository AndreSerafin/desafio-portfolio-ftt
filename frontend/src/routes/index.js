import { Route, Routes } from "react-router-dom";
import List from "../pages/projects/list";
import Create from "../pages/projects/create";
import HomePage from "../pages/home/homePage";
import { Menu, HomeMenu } from "../components";
import CreateRoute from "./createRoutes";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route
        path="/list"
        element={
          <Menu
            title={"Projetos"}
            subTitle={"Todos projetos cadastrados estão listados abaixo"}
          >
            <List />
          </Menu>
        }
      />
      <Route
        path="/create"
        element={
          <Menu
            onBack={"/list"}
            title={"Adicionar projetos"}
            subTitle={"Aqui você poderá adicionar seus projetos"}
          >
            <Create />
          </Menu>
        }
      />
      <Route
        path="/"
        element={
          <HomeMenu>
            <HomePage></HomePage>
          </HomeMenu>
        }
      ></Route>
      {CreateRoute()}
    </Routes>
  );
};

export default RoutesComponent;
