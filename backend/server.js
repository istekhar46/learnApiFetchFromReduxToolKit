import path from 'path'
import express from 'express'

const PORT  = 8000;

const app = express()

const __dirname = path.resolve()
const file = path.resolve(__dirname, 'backend', 'index.html')

app.get('/',(req,res)=>{
//    res.send('hello server')
    // res.status(200).json({sucsess: 'hello server !!' })
    res.status(200).sendFile(file)
})



app.listen(PORT, ()=> console.log(`server is listing on Port http://localhost:${PORT}`))
