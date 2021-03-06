const express=require('express')
require('./db/mongoose.js')
const User=require('./models/users.js')
const Task=require('./models/task')
const UserRouter=require('./router/users')
const TaskRouter=require('./router/task')

const app=express()
const port=process.env.PORT || 3000
app.use(express.json())
app.use(UserRouter)
app.use(TaskRouter)



app.listen(port,()=>{
    console.log('Server is up at '+port)
})