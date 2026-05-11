const mongoose=require('mongoose');
const todoSchema=new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    details: {
        type: String
    },
    //what the object of time is doing here is to automatically set the time when a new todo is created, and it will be stored in the database as a timestamp. The default value of Date.now means that it will use the current date and time when the todo is created.
    time:{
        type: Date,
        default: Date.now
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});
//timestamps: true is a mongoose option that automatically adds createdAt and updatedAt fields to the schema, which will store the date and time when a document is created and last updated, respectively. This can be useful for tracking when a todo was created and last modified.
module.exports=mongoose.model("Todo", todoSchema);
/*you can also do the exporting as 
const todoModel=mongoose.model("Todo", todoSchema);
module.exports=todoModel;
you can always rename a default export when importing, but you cannot rename a named export when importing.
*/