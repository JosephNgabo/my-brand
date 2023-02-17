const express=require('express')
const { sendMessage, getAllMessages, deleteMessage } = require('../controllers/messageController')
const { protect } = require('../middlewares/AuthMiddleWare')
const router=express.Router()

router.post('/send', sendMessage)

router.get('/',protect , getAllMessages)

router.delete('/delete/:id',protect , deleteMessage)

module.exports=router