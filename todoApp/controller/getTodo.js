// importing model
const Todo = require("../modals/todo.js");

//get all data
exports.getTodo = async (req, res) => {
    try {
        //fetch all data from db
        const todos = await Todo.find({});//find method called from Todo schema and result store in todos

        //response
        res.status(200)//success code
            .json({
                success: true,
                data: todos,
                message: "data fetch successfull"
            })

    } catch (error) {
        res.status(500)//error code
            .json({
                success: false,
                error: error.message,
                message: "server error"
            })
        console.log("route not found");
        console.log(error);
    }
}

// get by id
exports.getTodoById = async (req, res) => {
    try {
        // extract basis on id
        const id = req.params.id;//fetch id feom url
        const todo = await Todo.findById({ _id: id })//find by id method and store in todo 
        if (!todo) {
            // if not found
            return res.status(404)
                .json({
                    success: false,
                    message: "not found"
                })
            
        }
        // if  found 
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} data fetched`
        })
    } catch (error) {
        res.status(500)
            .json({
                success: false,
                error: error.message,
                message: "server error"
            })
        console.log("route not found");
        console.log(error);
    }
}
