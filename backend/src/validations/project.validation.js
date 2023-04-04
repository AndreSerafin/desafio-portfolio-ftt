import * as yup from "yup";

export const projectValidation = yup.object({
  project_name: yup.string().required(),
  project_category: yup.string().required(),
  project_description: yup.string().required(),
  tecnologies: yup.string(),
});
