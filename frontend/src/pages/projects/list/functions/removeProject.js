import api from "../../../../services/api";

export const removeProject = async (id, setLoading, setSuccess, setError) => {
  console.log("Removeu");
  try {
    await api.delete(`/project/${id}`);
    setSuccess(true);
    setLoading(false);
  } catch (e) {
    setLoading(false);
    setError(true);
  }
};
