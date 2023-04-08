import api from "../../../../services/api";

export const getProjectById = async (id, setLoading, alert) => {
  setLoading(true);

  try {
    const response = await api.get(`/project/${id}`);
    setLoading(false);
    return response.data;
  } catch (e) {
    setLoading(false);
    alert.error("Não foi possivel carregar os dados do projeto");
  }
};
