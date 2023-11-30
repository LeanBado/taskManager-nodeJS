const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        trim: true,//para que borre espacios erroneos
        maxlength: [20, 'name max length 20 characters'],
    },
    completed: {
        type: Boolean,
        default: false,
    }

})

TaskSchema.methods.toJSON = function(){
    const { __v, ...task } = this.toObject()
       
    return task                      
}

module.exports = mongoose.model('Task', TaskSchema)