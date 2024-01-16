import axios from "axios";

const getApiUrl = () => {
    return process.env.API_BASE_URL_DEV;
};
const getBearerToken = () => {
  return process.env.BEARER_TOKEN; 
};

const getDataFromApi = async (endpoint: string) => {
    const apiUrl = getApiUrl();
    const token = getBearerToken();
  try {
    const response = await axios.get(`${apiUrl}/${endpoint}`,{
        headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    console.log(response.data);
      return response.data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw error;
  }
};

export const getProductData = async () => {
  try {
      return getDataFromApi("/products");
      
  } catch (error) {
    console.error("Error fetching global data:", error);
    throw error;
  }
};

export const getColorData = async () => {
  try {
    return getDataFromApi("/colors");
  } catch (error) {
    console.error("Error fetching global data:", error);
    throw error;
  }
};
export const getMaterialData = async () => {
  try {
    return getDataFromApi("/material");
  } catch (error) {
    console.error("Error fetching global data:", error);
    throw error;
  }
};