import axios from "axios";

export const upload = async (file) => {
  //for single uplload
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "myHomes");
    const { data } = await axios.post(
      "https://api.cloudinary.com/v1_1/drvn4rjye/image/upload",
      formData
    );

    return { public_id: data?.public_id, url: data?.secure_url };
  } catch (error) {
    console.log(error);
  }
};
