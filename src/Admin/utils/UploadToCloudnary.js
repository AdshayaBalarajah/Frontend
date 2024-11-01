export const uploadToCloudinary = async (pics) => {
  if (pics) {
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", "foodie-social");
    data.append("cloud_name", "dvhypkgjx");

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/dvhypkgjx/image/upload`,
      {
        method: "post",
        body: data,
      }
    );

    const fileData = await res.json();
    console.log("url : ", fileData);
    return fileData.url;
  } else {
    console.log("error");
  }
};
