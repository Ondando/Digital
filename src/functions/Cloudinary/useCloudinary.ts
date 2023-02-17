"use client";

export default async function PostImage() {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const cloudGetImageQuery = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  const dataForm = new FormData();
  const wikirulimage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/New_Mexico_territory_coat_of_arms_%28illustrated%2C_1876%29.jpg/800px-New_Mexico_territory_coat_of_arms_%28illustrated%2C_1876%29.jpg";
  dataForm.append("file", wikirulimage);
  dataForm.append(
    "upload_preset",
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOADS_PRESET!
  );
  dataForm.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET!);
  try {
    fetch(cloudGetImageQuery, {
      method: "POST",
      body: dataForm,
    })
      .then((e) => {
        return e.json();
      })
      .then((data) => {
        console.log(data);
      });
  } catch (error) {
    throw new Error(error);
  }
}
