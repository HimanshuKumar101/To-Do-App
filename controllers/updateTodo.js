// /controllers/updateTodo.js

const Todo = require("../models/Todo");

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params; // Extract ID from URL parameters
    const { title, description } = req.body; // Extract title and description from request body

    // Find the Todo item by ID and update it
    const todo = await Todo.findByIdAndUpdate(
      id, // ID to find the Todo
      { title, description, updatedAt: Date.now() }, // Fields to update
      { new: true } // Option to return the updated document
    );

    // Send a success response
    res.status(200).json({
      success: true,
      data: todo,
      message: "Updated Successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Internal Server Error",
    });
  }
};
