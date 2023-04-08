import { useEffect, useState } from "react";
import { getProjects } from "../pages/projects/list/functions/getProject";
import ProjectPage from "../pages/home/projectPage";
import { HomeMenu } from "../components";
import { Route } from "react-router-dom";

const CreateRoute = () => {
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState(false);

  useEffect(() => {
    getProjects(false, setData, false);
  }, [success]);

  const renderCards = () => {
    let aux = [];

    for (let i = 0; i < data.length; i++) {
      aux.push(
        <Route
          path={data[i].project_name
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^\w\s]/gi, "")
            .toLowerCase()
            .replace(/\s+/g, "-")}
          element={
            <HomeMenu>
              <ProjectPage
                data={data[i]}
                imgUrl={`https://source.unsplash.com/random/80${i}x600/?software`}
              ></ProjectPage>
            </HomeMenu>
          }
        />
      );
    }

    return aux;
  };

  return renderCards();
};

export default CreateRoute;
