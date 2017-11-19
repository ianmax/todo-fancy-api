const Todo = require('../models/todoModels')

class TodoApp {
    static getAll(){
        return (req, res) => {
            Todo.find()
            .then(todo => {
              res.send(todo);
            })
            .catch(err => {
              res.send(err);
            });
          }
    }
    static create(){
        return (req, res) => {
          Todo.create({
            activity: req.body.activity,
            due: req.body.due,
            status: 'uncompleted',
            tags: req.body.tags,
            userid: req.body.userid
          })
          .then(todo => {
            res.send({
              message: 'Insert Success',
              data: todo
            })
          })
          .catch(err => {res.send(err)})
        }
      }
    
      static find_by_userid(){
        return (req, res) => {
          Todo.find({
            userid: req.params.userid
          })
            .then(todos => {
              res.send(todos)
            })
            .catch(err => {
              res.send(err)
            })
        }
      }
    
      static update(){
        return (req, res) => {
          var status_todo = ''
          if(req.body.status){
            status_todo = req.body.status
          } else {
            status_todo = 'uncompleted'
          }
    
          Todo.findOneAndUpdate({
              _id: req.params.todos_id
          },
          {
            activity: req.body.activity,
            due: req.body.due,
            status: status_todo,
            tags: req.body.tags,
            userid: req.body.userid
          })
          .then(dataUpdates => {
            res.send({
              message: 'Update Success',
              data: dataUpdates
            })
          })
          .catch(err => {res.send(err)})
    
        }
      }
    
      static remove(){
        return (req, res) => {
          Todo.remove({
            _id:req.params.todos_id
          })
          .then(result => {
            res.send({
              message: 'Delete Success',
              data: result
            })
          })
          .catch(err => {res.send(err)})
        }
      }
}

module.exports = TodoApp