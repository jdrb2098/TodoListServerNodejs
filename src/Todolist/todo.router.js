const router = require('express').Router()
const httpTodoList = require('./todo.http')


router.route('/todolist')
    .get(httpTodoList.getAll)
    .post(httpTodoList.create)

router.route('/todolist/:id')
    .get(httpTodoList.getById)
    .put(httpTodoList.update)
    .delete(httpTodoList.deleteById)


module.exports = {
    router
}
