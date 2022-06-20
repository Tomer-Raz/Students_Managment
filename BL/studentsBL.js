const StudentsModel = require('../models/studentsModel')


// get all students
const getAllStudents = () => {
    return new Promise((resolve, reject) => {
        StudentsModel.find({}, (err, students) => {
            if (err) {
                reject(err);
            } else {
                resolve(students)
            }
        })
    })
}

// get student by id
const getStudentById = (id) => {
    return new Promise((resolve, reject) => {
        StudentsModel.findById(id, (err, student) => {
            if (err) {
                reject(err);
            } else {
                resolve(student)
            }
        })
    })
}

// add a new student (post)
const addStudent = (StudentObj) => {
    return new Promise((resolve, reject) => {
        let newStudent = new StudentsModel({
            fullName: StudentObj.fullName,
            email: StudentObj.email,
            faculty: StudentObj.faculty,
            birthDate: StudentObj.birthDate
        })
        newStudent.save((err) => {
            err ? reject(err) : resolve("Student Added")
        })
    })
}

// update student (put)
const updateStudent = (id, objToUpdate) => {
    return new Promise((resolve, reject) => {
        StudentsModel.findByIdAndUpdate(id,
            {
                fullName: objToUpdate.fullName,
                email: objToUpdate.email,
                faculty: objToUpdate.faculty,
                birthDate: objToUpdate.birthDate,
                grades: objToUpdate.grades
            }, (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve("Student was Succefully Updated")
                }
            })
    })
}

// delete student
const deleteStudent = (id) => {
    return new Promise((resolve, reject) => {
        StudentsModel.findByIdAndDelete(id, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("Student deleted succefully")
            }
        })
    })
}
module.exports = {
    getAllStudents, getStudentById, addStudent, updateStudent, deleteStudent
}
