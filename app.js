require('./db/connect')
const express = require("express");
const connectDB = require('./db/connect');
const notFound = require('./middlewares/notFound');
const app = express()
const tasks = require('./routes/tasks')

require('dotenv').config()


//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes


app.use('/api/v1/tasks', tasks)

app.use(notFound)

// //tiene todas las tareas
// app.get('/api/v1/tasks')

// //crea una nueva tarea
// app.post('/api/v1/tasks')

// //obtiene una tarea seleccionada
// app.get('/api/v1/tasks/:id')

// //actualiza la tarea seleccionada
// app.patch('/api/v1/tasks/:id')

// //borra la tarea seleccionada
// app.delete('/api/v1/tasks/:id')

const port = 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        console.log(`CONNECTED TO MongoDB...`.bgGreen)
        app.listen(port, console.log(`Server is listening on port ${port}...`.bgGreen))
    } catch (error) {
        console.log(`${error}`.bgRed)
    }
}

start()
