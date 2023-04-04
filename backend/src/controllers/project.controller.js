import {
  createProject,
  getAll,
  getbyId,
} from "../repositorys/project.repositoy";
import { projectValidation } from "../validations/project.validation";

export const create = async (req, res) => {
  try {
    await projectValidation.validate(req.body);

    const project = await createProject(req.body);
    res.status(200).send(project);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const get = async (req, res) => {
  try {
    const projects = await getAll();
    res.status(200).send(projects);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const getId = async (req, res) => {
  try {
    const project = await getbyId(Number(req.params.id));
    res.status(200).send(project);
  } catch (e) {
    res.status(400).send(e);
  }
};
