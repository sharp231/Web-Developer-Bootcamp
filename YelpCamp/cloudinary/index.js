const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const path = require('path'); // 【追加】パスを操作する機能

// 【修正】場所を具体的に指定して .env を読み込む
if (process.env.NODE_ENV !== "production") {
    require('dotenv').config({ path: path.join(__dirname, '../.env') });
}

// 設定（前回と同じですが、念のため確認）
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'YelpCamp',
        allowedFormats: ['jpeg', 'jpg', 'png']
    },
});

module.exports = {
    cloudinary,
    storage
}