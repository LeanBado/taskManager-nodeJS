const {response} = require('express')
const Task = require('../models/Task')

const getAllTasks = async (req, res = response) => {
    const tasks = await Task.find()
    try {
        res.status(200).json({
            msg: true,
            TAREAS: tasks
        })
    } catch (error) {
        res.status(500).json({
            msg: error.errors
        })
    }
}

const createTask = async (req, res = response) => {
    tareaSolicitada = req.body

    try {
        const tareaDB = await Task.findOne({name: tareaSolicitada.name.toUpperCase()})

        if(tareaDB){
            return res.status(400).json({
                 msg: `la tarea ${tareaDB.name} ya existe`
             })
         }
         const data = {
            name: tareaSolicitada.name.toUpperCase(),
            completed: tareaSolicitada.completed
        }

        const task = await Task.create(data)
        res.status(201).json({
            msg: true,
            'tarea creada': task
        })
        
    } catch (error) {
        res.status(500).json({
            msg: error.errors
        })
    }
}

const getTask = async (req, res = response) => {
    const taskID = req.params.id
    const task = await Task.findById(taskID)
    try {
        res.status(200).json({
            msg: true,
            TAREA: task
        })
        
    } catch (error) {
        res.status(500).json({
            msg: error.errors
        })
    }
}

const udpateTask = async (req, res = response) => {
    try {

        const taskID = req.params.id
        const task = await Task.findByIdAndUpdate(taskID, req.body, {new: true, runValidators: true}) 
        res.status(200).json({
            msg: true,
            task
        })
    } catch (error) {
        res.status(500).json({
            msg: error.errors
        })
    }
}

const deleteTask = async (req, res = response) => {
    const taskID = req.params.id
    const task = await Task.findByIdAndDelete(taskID)
    try {
        res.status(200).json({
            msg: true,
            'TAREA ELIMINADA': task
        })
        
    } catch (error) {
        res.status(500).json({
            msg: error.errors
        })
    }
}


module.exports = {getAllTasks, createTask, getTask, udpateTask, deleteTask}

