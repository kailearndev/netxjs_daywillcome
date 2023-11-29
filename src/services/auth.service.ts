import api from "./axios.config";

const Login = async (body: { username?: string; password?: string }) => {
  try {
    const respone = await api.post("auth/login", body);
    
    return respone.data;
  } catch (error) {}
};

const getProfile = async (token: string | undefined | null) => {
  try {
    const respone = await api.get("auth/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return respone.data;
  } catch (error) {
    throw new Error();
  }
};

const authService = {
  Login,
  getProfile
  
};

export default authService;