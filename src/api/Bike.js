import axios from "axios";

export const getBikes = async (setdata) => {
  try {
    const response = await axios.get(
      "https://backend-moto.vercel.app/api/get/bike"
    );
    console.log(response.data);
    setdata(response.data);
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
};

export const getBikeById = async (id, setdata) => {
  try {
    const response = await axios.get(
      `https://backend-moto.vercel.app/api/get/bike/id?id=${id}`
    );
    console.log(response.data);

    setdata(response.data);
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
};
