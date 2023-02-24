const express = require('express');
const { dbConnect } = require('./src/config/db');
const blogRouter = require('./src/routes/blogRouter');
const userRouter = require('./src/routes/userRouter');
const docRouter = require('./src/documentation/swagger.doc')
const messageRouter = require('./src/routes/messageRouter');
const cors = require('cors');
const fileUploader=require('express-fileupload')
const { json } = require('express');
const PORT=process.env.PORT || 5000;
const app = express()
dbConnect();
app.use(cors({
    origin: '*',
  
    methods: [
      'GET',
      'POST',
      'DELETE',
      'PATCH'
    ],
  
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With','Authentication']
  }));
app.use(json());
app.use(fileUploader({useTempFiles: true}));

app.listen(PORT, ()=>{
console.log(`Server has started on port ${PORT}`);
}) 
app.get('/', (req, res)=>{
res.json('Welcome to my brand server').status(200)
})
app.use('/api/docs',docRouter)
app.use('/api/blog',blogRouter);
app.use('/api/users', userRouter);
app.use('/api/message', messageRouter);
module.exports= app;