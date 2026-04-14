const express = require('express')
require('dotenv').config()
const connectDB = require('./config/db')
const PORT = process.env.PORT
const taskRoutes = require('./routes/taskRoutes')
const authRoutes = require('./routes/authRoutes');
const app = express()
app.use(express.json())
connectDB()
app.use('/api', authRoutes);
app.use('/api', taskRoutes);
app.listen(PORT||3000,()=>{
    console.log(`Running on port ${PORT}`)
})
