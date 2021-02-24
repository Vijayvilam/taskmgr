// backend/models/tasks.js
// load mongoose since we need it to define a model
var mongoose = require('mongoose');

var TaskSchema = mongoose.Schema({    
    task: {type:String}    
}, {collection: 'task'});    
    
module.exports = mongoose.model("TaskModel", TaskSchema);    

