import axios from "axios";
import { base_url } from "../base_url";

export const getAllCategories = async () => {
  try {
    const { data } = await axios.get(`${base_url}/api/post-categories`);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
