const router = require('express').Router()
const httpTodoList = require('./todo.http')

//! router.get('/users', httpUsers.getAll)
//! router.post('/users')

//! router.get('/users/:id', httpUsers.getById)
//! router.put('/users/:id')
//! router.delete('/users/:id')

router.route('/todolist')
    .get(httpTodoList.getAll)
    //.post()

router.route('/todolist/:id')
    .get(httpTodoList.getById)
    .put(httpTodoList.update)
    .delete(httpTodoList.deleteById)


module.exports = {
    router
}
