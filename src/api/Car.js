import axios from "axios";

export const getCars = async (setdata) => {
  try {
    const response = await axios.get("http://localhost:8000/api/get/car");
    console.log(response.data);
    setdata(response.data);
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
};

export const getCarById = async (id, setdata) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/get/car/id?id=${id}`
    );
    console.log(response.data);

    setdata(response.data);
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
};
