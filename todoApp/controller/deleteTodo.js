const Todo = require("../modals/todo.js");


//update data by id
exports.deleteTodo = async (req, res) => {
    try {
        //fetching data 
        const { id } = req.params;

        //function call find by id and update
        await Todo.findByIdAndDelete({_id:id})
        
        res.status(200).json({
            success: true,
            message: `Todo ${id} data delete`
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
