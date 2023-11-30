const express = require('express')
const {getAllTasks, createTask, getTask, udpateTask, deleteTask} = require('../controllers/tasks')
const { check } = require('express-validator')
const { existeTareaId } = require('../db-validator/db-validator')
const { validarCampos } = require('../middlewares/valida-campos')

const router = express.Router()


router.get('/', getAllTasks)

router.post('/',[
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], createTask)

router.get('/:id',[
    check('id', 'No es un ID valido de Mongo').isMongoId(),
    check('id').custom(existeTareaId), 
    validarCampos
], getTask)

router.patch('/:id', [
    check('id', 'No es un ID valido de Mongo').isMongoId(),
    check('id').custom(existeTareaId), 
    validarCampos
    ],udpateTask)

router.delete('/:id', [
    check('id', 'No es un ID valido de Mongo').isMongoId(),
    check('id').custom(existeTareaId), 
    validarCampos
    ],deleteTask)

module.exports = router