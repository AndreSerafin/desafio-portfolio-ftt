import { Route, Routes } from "react-router-dom";
import List from "../pages/projects/list";
import Create from "../pages/projects/create";
import { Menu } from "../components";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Menu
            title={"Projetos"}
            subTitle={"Todos projetos cadastrados estão listados abaixo"}
          >
            <List />
          </Menu>
        }
      ></Route>
      <Route
        path="/create"
        element={
          <Menu>
            <Create />
          </Menu>
        }
      ></Route>
    </Routes>
  );
};

export default RoutesComponent;
