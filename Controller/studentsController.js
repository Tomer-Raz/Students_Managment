const express = require('express')
const router = express.Router();
const studentsBL = require('../BL/studentsBL')


//get all students

router.route('/').get(async (req, resp) => {
    let data = await studentsBL.getAllStudents();
    return resp.json(data)
})


//get student by id

router.route('/:id').get(async (req, resp) => {
    let id = req.params.id
    let status = await studentsBL.getStudentById(id)
    return resp.json(status)
})


//add student

router.route('/').post(async (req, resp) => {
    let newStudents = req.body
    let status = await studentsBL.addStudent(newStudents)
    return resp.json(status)
})


// update student

router.route('/:id').put(async (req, resp) => {
    let id = req.params.id
    let updatedStudents = req.body
    let status = await studentsBL.updateStudent(id, updatedStudents)
    return resp.json(status)
})


// delete student

router.route('/:id').delete(async (req, resp) => {
    let id = req.params.id
    let student = await studentsBL.deleteStudent(id)
    return resp.json(student)
})

module.exports = router;

