const { messageSchema } = require("../helpers/validation_schema");
const Message = require("../models/messageModel")

      
const sendMessage=async (req,res)=>{
  try {
    const validationResult = await messageSchema.validateAsync(req.body);
    const message=new Message({
        name:validationResult.name,
        email:validationResult.email,
        phone:validationResult.phone,
        subject:validationResult.subject,
        message:validationResult.message
    })
    message.save()
    .then(result=>{
        res.status(200).json({message:'message sent successful'})
    })
  } catch (error) {
    /* istanbul ignore next*/
      res.status(500).json({error})
  }
}

const getAllMessages=async (req,res)=>{
    if(req.user.role.toString()=='admin')
        {
    Message.find()
    .then(messages=>{
        res.json({messages})
    })
    /* istanbul ignore next*/
    .catch(error=>res.json(error))
}else
{
    /* istanbul ignore next*/
    res.json({message:'User Not Authorized'}).status(401)
}

}
const deleteMessage=(req,res)=>{
const {id}=req.params
Message.deleteOne({_id:id})
.then(result=>{
    console.log(result)
    res.status(200).json(result)
})
.catch(error=>console.log(error))
}

module.exports={
    sendMessage,getAllMessages,deleteMessage
}