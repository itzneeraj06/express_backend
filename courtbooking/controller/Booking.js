const Booking = require("../modal/bookings")
const User = require("../modal/users")
const Court = require("../modal/courts")

exports.booking = async (req, res) => {
    try {
        const { id } = req.headers;
        const { name, sports, court, price, date } = req.body;

        const user = await User.findById(id);
        if (!user) {
            return res.status(400).json({ message: "Invalid user ID" });
        }
        if (user.role !== "user") {
            console.log(user.role);
            return res.status(400).json({ message: "access denied please login" })
        }

        const newBooking = new Booking({ name: name, sports: sports, court: court, price: price, date: date });
        const bookingDataFromDb = await newBooking.save();

        await User.findByIdAndUpdate(id, { $push: { booking: bookingDataFromDb._id } })
        await Court.findByIdAndUpdate(court, { $push: { booking: bookingDataFromDb._id } })

        const customerdb = await Court.findById(court)
        if (!customerdb.customers.includes(id)) {
            await Court.findByIdAndUpdate(court, { $push: { customers: id } })
        }

        return res.json({
            status: "Success",
            message: "Booking Confirmed"
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "booking failed" })
    }
}
exports.checkbooking = async (req, res) => {
    try {
        const { id } = req.headers;

        const user = await User.findById(id);
        if (!user) {
            return res.status(400).json({ message: "Invalid user ID" });
        }
        if (user.role !== "admin") {
            console.log(user.role);
            return res.status(400).json({ message: "access denied please login" })
        }
        const bookingdata = await Booking.find();

        return res.json({
            status: "Success",
            data: bookingdata
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "fetching failed" })
    }


}
exports.updatebooking = async (req, res) => {
    try {
        const { id } = req.headers;
        const { booking, paid } = req.body;

        const user = await User.findById(id);
        if (!user) {
            return res.status(400).json({ message: "Invalid user ID" });
        }
        if (user.role !== "admin") {
            console.log(user.role);
            return res.status(400).json({ message: "access denied please login" })
        }
        const bookingdata = await Booking.findByIdAndUpdate(booking, {
            paid: paid
        });

        return res.json({
            status: "Success",
            data: bookingdata
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "fetching failed" })
    }
}
