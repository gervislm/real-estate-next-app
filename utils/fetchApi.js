import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

const headers = {
  "x-rapidapi-key": "db30c35b13mshcf99fb7e0c2d9c6p1e2fddjsn00fbd0bd3121",
  "x-rapidapi-host": "bayut.p.rapidapi.com",
};

export const fetchApi = async (url) => {
  try {
    const { data } = await axios.get(url, { headers });
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
