import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePaths) => {
    console.log(process.env.CLOUDINARY_CLOUD_NAME)
    console.log(process.env.CLOUDINARY_API_KEY)
    console.log(process.env.CLOUDINARY_API_SECRET)

    
    try {
        if (!localFilePaths || !Array.isArray(localFilePaths) || localFilePaths.length === 0) {
            console.log("No files to upload");
            return null;
        }

        console.log("Files to upload:", localFilePaths);

        const uploadedUrls = [];

        for (const localFilePath of localFilePaths) {
            if (!localFilePath) continue;

            try {
                const response = await cloudinary.uploader.upload(localFilePath, {
                    resource_type: "auto",
                });

                console.log("Image URL:", response.url);

                uploadedUrls.push(response.url);

                // Delete the local file after a successful upload
                if (fs.existsSync(localFilePath)) {
                    fs.unlinkSync(localFilePath);
                    console.log("Deleted local file:", localFilePath);
                }
            } catch (uploadError) {
                console.error("Failed to upload file:", localFilePath, uploadError);
                // Optionally delete the file if upload fails
                if (fs.existsSync(localFilePath)) {
                    fs.unlinkSync(localFilePath);
                    console.log("Deleted local file after upload failure:", localFilePath);
                }
            }
        }

        return uploadedUrls;

    } catch (error) {
        console.error("Critical error during upload:", error);
        return null;
    }
};

export { uploadOnCloudinary };
