//connecting to MongoDB    
var mongoose = require('mongoose');   
mongoose.connect('mongodb://127.0.0.1:27017/ToDos'); 
//backend/routes.js
// expose the routes to our app with module.exports
var TaskModel = require('./model/tasks');
module.exports = function(app) {
    //POST request to save todo task in database    
app.post("/api/create/todo", createTodo);    
function createTodo(req, res) {    
    var todoTask = req.body;    
    //console.log(todoTask);    
        
    //save the todoTask in db    
    TaskModel    
        .create(todoTask)    
        .then(    
            function (success) {    
                console.log('Success');    
            },    
            function (error) {    
                console.log('Error');    
            }    
        )    
        
    res.json(todoTask);    
}    
//GET all task    
app.get("/api/get/tasks", getAllTasks);    
function getAllTasks(req, res) {    
    TaskModel    
    .find()    
    .then(    
        function (tasks) {    
            res.json(tasks);    
        },    
        function (err) {    
            res.sendStatus(400);    
        });    
}    
    
//DELETE task    
app.delete("/api/delete/task/:id", deleteTask);    
function deleteTask(req, res) {    
    var taskId = req.params.id;    
    //console.log(taskId);    
    TaskModel    
    .deleteOne({_id: mongoose.Types.ObjectId(taskId)})    
        .then(function () {    
            res.sendStatus(200);    
        },    
        function () {    
            res.sendStatus(400)    
        });    
}    

}