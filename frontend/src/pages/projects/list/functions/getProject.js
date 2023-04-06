import api from "../../../../services/api";

export const getUsers = async (setLoading, setData, setError) => {
  try {
    const response = await api.get("/project");
    setData(response.data);
    setLoading(false);
    setError(false);
  } catch (e) {
    setLoading(false);
    setError(true);
  }
};
