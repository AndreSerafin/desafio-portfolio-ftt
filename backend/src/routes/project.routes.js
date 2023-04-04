import { create, get, getId } from "../controllers/project.controller";

const projectRoutes = (app) => {
  app.post("/project", create);
  app.get("/project", get);
  app.get("/project/:id", getId);
};

export default projectRoutes;
