import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary';

export const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    return {
      folder: 'huracan',
      resource_type: 'auto',
      public_id: Date.now() + '-' + file.originalname,
    };
  },
});
