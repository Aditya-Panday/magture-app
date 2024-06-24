// imageHandler.js

export const uploadImageToCloudinary = (imageFile) => {
    console.log("Uploading image", imageFile);
    const cloudName = "adityapanday";
    const uploadPreset = "chat-app";

    // Check if the file type is allowed (optional check)
    
    if (
        imageFile.type === "image/jpeg" ||
        imageFile.type === "image/png" ||
        imageFile.type === "image/jpg"
    ) {
        const formData = new FormData();
        formData.append("file", imageFile);
        formData.append("upload_preset", uploadPreset);
        formData.append("cloud_name", cloudName);

        return fetch("https://api.cloudinary.com/v1_1/adityapanday/image/upload", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                return data.url.toString(); // Return the URL of the uploaded image
            })
            .catch((error) => {
                console.error("Error uploading image to Cloudinary:", error);
                throw error; // Propagate the error for handling in the component
            });
    } else {
        throw new Error("Invalid file type. Only JPEG, PNG, and JPG are allowed.");
    }
};
