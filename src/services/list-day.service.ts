/* eslint-disable @typescript-eslint/no-unsafe-return */
import { AxiosResponse } from "axios";
import api from "./axios.config";

const getListFromUser = async (id: number) => {
  const respone: AxiosResponse = await api.get(`user/${id}`,
  );

  return respone.data;
};
const getId = async (id: number) => {
  const respone: AxiosResponse = await api.get(`day/${id}`);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return respone.data;
};
const updateDateTime = async (
  id: number,
  body: { date: string; isLate: boolean; detail: string }
) => {
  try {
    const respone: AxiosResponse = await api.put(
      `day/${id}`,
      body
    );

    return respone.data;
  } catch (error) {
    error;
  }
};
const createDateTime = async (

  body: { date: string; isLate: boolean; detail: string, userId: number }
) => {
  try {
    const respone: AxiosResponse = await api.post(
      `day`,
      body
    );

    return respone.data;
    
  } catch (error) {
    error;
  }
};
const deleteDay = async (id: number) => {
  try {
    const respone: AxiosResponse = await api.delete(`day/${id}`);

    return respone.data;
  } catch (error) {
    error;
  }
};
const listService = {
  getListFromUser,
  getId,
  updateDateTime,
  deleteDay,
  createDateTime,
};

export default listService;