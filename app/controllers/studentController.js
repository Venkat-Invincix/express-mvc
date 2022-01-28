const Student = require('../models/student')

const studentController = {}

studentController.list = (req, res) => {
    Student.find()
        .then((students) => {
            res.json(students)
        })
        .catch((err) => {
            res.json(err.message)
        })
}

studentController.create = (req, res) => {
    const body = req.body
    const student = new Student(body)
    student.save()
        .then((student) => {
            res.json(student)
        })
        .catch((err) => {
            res.json(err.message)
        })
}

studentController.edit = (req, res) => {
    const id = req.params.id
    const { body } = req
    Student.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        .then((student) => {
            res.json(student)
        })
        .catch((err) => {
            res.json(err)
        })
}

studentController.delete = (req, res) => {
    const id = req.params.id
    Student.findByIdAndDelete(id)
        .then((student) => {
            res.json(student)
        })
        .catch((err) => { res.json(err) })
}

module.exports = studentController