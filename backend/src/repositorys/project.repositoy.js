import { prisma } from "../services/prisma";

export const createProject = async (data) => {
  const project = await prisma.project.create({
    data,
    select: {
      id: true,
      project_name: true,
      project_category: true,
      project_description: true,
      tecnologies: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return project;
};

export const getAll = async () => {
  const projects = await prisma.project.findMany({});
  return projects;
};

export const getbyId = async (id) => {
  const project = await prisma.project.findUnique({
    where: {
      id,
    },
  });
  return project;
};
