const cloudinary =  require('cloudinary').v2;
cloudinary.config({ 
        cloud_name: 'dstfyfqlz', 
        api_key: '717782669134497', 
        api_secret: 'lWogmmz6ViTowljWJmTDg_kdT9g' 
      });
module.exports = cloudinary.uploader;