import {
  create,
  get,
  getId,
  update,
  remove,
} from "../controllers/project.controller";

const projectRoutes = (app) => {
  app.post("/project", create);
  app.get("/project", get);
  app.get("/project/:id", getId);
  app.put("/project/:id", update);
  app.delete("/project/:id", remove);
};

export default projectRoutes;
