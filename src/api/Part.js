import axios from "axios";

export const getParts = async (setdata) => {
  try {
    const response = await axios.get(
      "https://motoflex-bacnekd.vercel.app/api/get/part"
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
      `https://motoflex-bacnekd.vercel.app/api/get/part/id?id=${id}`
    );

    const responsedata = response.data;

    if (responsedata?.images && Array.isArray(responsedata.images)) {
      const filteredImages = responsedata.images.filter((img) => {
        // A basic URL check (starts with http or https)
        return typeof img === "string" && /^https?:\/\/.+/i.test(img);
      });

      // Only update state if filtered array is different
      if (responsedata.images.length !== filteredImages) {
        setdata({ ...responsedata, images: filteredImages });
      } else {
        setdata(responsedata);
      }
    }
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
};
