
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/cloudinary.js';

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'crime_proofs',
    allowed_formats: ['jpg', 'jpeg', 'png', 'mp4', 'avi', 'mov'],
  },
});

const upload = multer({ storage });

export default upload;
