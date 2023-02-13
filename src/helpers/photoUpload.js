const uploader=require('../config/cloudinary');


const blogImage = async (req) => {
    try {
        const tmp = req.files.photo.tempFilePath;
        const Result = await uploader.upload(
            tmp,
            { folder: 'my-brand' },
            (_, result) => result
        );
        return Result;
    } catch (error) {
        console.log(error);
    }
};


module.exports = blogImage;