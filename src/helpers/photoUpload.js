const uploader=require('../config/cloudinary');

const blogImage = async (req) => {
    try {
        const tmp = req.files.photo.tempFilePath;
        const Result = await uploader.upload(
            tmp,
            { folder: 'my-brand' },
            /* istanbul ignore next*/
            (_, result) => result
        );
        return Result;
    } catch (error) {
            /* istanbul ignore next*/
        console.log(error);
    }
};
module.exports = blogImage;