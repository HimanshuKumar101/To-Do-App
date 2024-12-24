//import the model

const Todo = require("../models/Todo");

//define the route handler

exports.createTodo = async(req,res) => {
try{

    //extract title and description from request body
    const { title,description} = req.body;

    //create a new Todo obj and Insert in DB

    const response = await Todo.create({title, description});


    //send a JSON response with a success flag
    res.status(200).json(
        {
            success:true,
            data: response,
            Message:'Entry Created Successfully'
        }
    );





}
catch(err){
    console.error(err);
    console.log(err);
    res.status(500)
    .json({
        success:false,
        data:"internal server error",
        message:err.message,
    })

}
    
}