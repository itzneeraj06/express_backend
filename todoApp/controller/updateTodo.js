const Todo = require("../modals/todo.js");


//update data by id
exports.updateTodo = async (req, res) => {
    try {
        //fetching data 
        const { id } = req.params;
        const { title, description } = req.body;

        //function call find by id and update
        const todo = await Todo.findByIdAndUpdate(
            { _id: id },
            { title, description, updatedAt: Date.now() },
        )
        
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} data fetched`
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
