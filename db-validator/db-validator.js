const Task = require("../models/Task")



const existeTareaId = async(id) => {
    const existeTask = await Task.findById(id)
        if(!existeTask){
            throw new Error(`El id '${id}' no existe en la dB`)
            
        }
}

module.exports = {
    existeTareaId
}