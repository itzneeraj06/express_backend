const User = require("../modal/users")
const Court = require("../modal/courts")
exports.createcourt = async (req, res) => {
    try {
        const id = req.headers["id"];
        const { courtname, location, sports, price } = req.body;

        const user = await User.findById(id);
        if (!user) {
            return res.status(400).json({ message: "Invalid user ID" });
        }
        if (user.role !== "admin") {
            console.log(user.role);
            return res.status(400).json({ message: "access denied need admin permission " })

        }
        const court = new Court({
            courtname,
            location,
            sports,
            price
        })
        const db = await court.save();
        res.status(200).json({
            message: "court added in the DB."
        })
    } catch (error) {
        res.status(500).json({ message: "check createcourt controller" })
    }

}
exports.updatecourt = async (req, res) => {

    try {
        const { id } = req.headers;
        const { courtid } = req.params;
        const { courtname, location, sports, price } = req.body;

        console.log(courtid);

        const user = await User.findById(id);
        if (!user) {
            return res.status(400).json({ message: "Invalid user ID" });
        }
        if (user.role !== "admin") {
            console.log(user.role);
            return res.status(400).json({ message: "access denied please login" })
        }
        const updateddata = await Court.findByIdAndUpdate(courtid, {
            courtname,
            location,
            sports,
            price
        });

        return res.json({
            status: "Success",
            data: updateddata
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "fetching failed" })
    }
}
exports.getcourtdetails = async (req, res) => {
    try {
        const court = await Court.find().select("-booking").select("-matchhistory").select("-customers");
        const newlyadded = court.reverse();
        return res.json({
            status: "success",
            data: newlyadded
        })
    } catch (error) {
        return res.status(500).json({ message: "failed to fetch all books" })
    }
}
exports.getcourt = async (req, res) => {
    try {
        const { id } = req.headers;
        const { courtid } = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(400).json({ message: "Invalid user ID" });
        }
        if (user.role !== "admin") {
            return res.status(400).json({ message: "access denied admin routes" })
        }
        const courtbyid = await Court.findById(courtid);

        return res.status(200).json({
            data: courtbyid
        })
    } catch (error) {
        return res.status(500).json({
            message: "failed to fetch check obj id"
        })
    }
}