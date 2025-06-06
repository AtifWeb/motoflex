import axios from "axios";

export const getParts = async (setdata) => {
  try {
    const response = await axios.get(
      "https://backend-moto.vercel.app/api/get/part"
    );
    console.log(response.data);
    setdata(response.data);
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
};

export const getPartById = async (id, setdata) => {
  try {
    const response = await axios.get(
      `https://backend-moto.vercel.app/api/get/part/id?id=${id}`
    );
    console.log(response.data);

    setdata(response.data);
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
};
