import api from "../../../../services/api";

export const updateProject = async (id, data, setLoading, alert, navigate) => {
  setLoading(true);

  try {
    await api.put(`project/${id}`, data);
    setLoading(false);
    alert.show("Projeto editado com sucesso");
    navigate("/list");
  } catch (e) {
    setLoading(false);
    alert.error("Não foi possivel editar o projeto! Tente novamente!");
  }
};
