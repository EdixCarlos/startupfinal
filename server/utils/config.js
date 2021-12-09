require('dotenv').config();
const cloudinary = require('cloudinary').v2;

const PORT = process.env.PORT||9000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://root:root@cluster0.nqkx7.mongodb.net/marketplace?retryWrites=true&w=majority';
const SECRET = process.env.SECRE ||'API';
const UPLOAD_PRESET = process.env.UPLOAD_PRESET || 'ml_default';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = {
  PORT,
  MONGODB_URI,
  SECRET,
  cloudinary,
  UPLOAD_PRESET,
};
