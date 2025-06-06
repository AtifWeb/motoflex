import axios from "axios";

export const postOrder = async (data, setactive) => {
  setactive(true);
  try {
    const response = await axios.post(
      "https://motoflex-bacnekd.vercel.app/api/post/order",
      data
    );
    console.log(response.data);
    setactive(false);
  } catch (error) {
    setactive(false);
    console.error("Error fetching cars:", error);
    throw error;
  }
};

export const getOrders = async (setdata) => {
  try {
    const response = await axios.get(
      "https://motoflex-bacnekd.vercel.app/api/get/order"
    );
    console.log(response.data);
    setdata(response.data);
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
};

export const getOrderById = async (id, setdata) => {
  try {
    const response = await axios.get(
      `https://motoflex-bacnekd.vercel.app/api/get/order/id?id=${id}`
    );
    console.log(response.data);

    setdata(response.data);
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
};
