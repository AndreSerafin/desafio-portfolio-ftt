import api from "../../../../services/api";

export const saveProject = async (data, setLoading, alert, navigate) => {
  setLoading(true);
  try {
    console.log(data);
    await api.post("/project", data);
    alert.show("Projeto adicionado com sucesso!");
    navigate("/list");
    setLoading(false);
  } catch (e) {
    setLoading(false);
    alert.error("Não foi possível adicionar o projeto! Tente novamente!");
  }
};
