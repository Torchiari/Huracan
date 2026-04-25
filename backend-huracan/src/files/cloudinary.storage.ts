import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary';

export const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    const isPdf = file.mimetype === 'application/pdf';

    return {
      folder: 'huracan',
      resource_type: isPdf ? 'raw' : 'image',
      public_id: Date.now() + '-' + file.originalname.split('.')[0],
      format: isPdf ? 'pdf' : undefined,
    };
  },
});
