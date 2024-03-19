const bookings = require('../../../models/Billing/bookingSchema');


/**
* @method GET
* @api /bookingDetails
* @description
*  - To get booking Details that are pending 
*/
module.exports = async (req, res) => {

    try {
        if (Object.keys(req.query).length === 0) {
            const user = req.user;
            const result = await bookings.find({ ownerId: user._id, status: "pending" }).populate("hotelId");

            const data = result.filter((item) => {
                return item.hotelId != null
            })

            res.send(data);
        }
        else {
            const limit = req.query.limit;
            const page = req.query.page;
            const user = req.user;
            const sortby = req.query.sortby === "asc" ? 1 : -1;
            const orderby = req.query.orderby;
            const search = req.query.search;
            if (search === "") {
                const result = await bookings.find({ ownerId: user._id, status: "pending" }).limit(limit)
                    .skip(limit * page)
                    .sort({ [orderby]: sortby })
                    .populate("hotelId");
                const data = result.filter((item) => {
                    return item.hotelId != null
                })

                res.send(data)
            }

            else {
                const result = await bookings.find({
                    ownerId: user._id, status: "pending", $or: [
                        { fullName: { $regex: search, $options: 'i' } },
                        { email: { $regex: search, $options: "i" } },
                        { phone: { $regex: search, $options: "i" } },

                        // { bookTo: { $regex: search, $options: "i" } },

                    ]
                }).limit(limit)
                    .skip(limit * page)
                    .sort({ [orderby]: sortby })

                    .populate("hotelId");
                const data = result.filter((item) => {
                    return item.hotelId != null
                })

                res.send(data)
            }
        }
    } catch (error) {
        console.log(error)
        res.send(false)

    }




}        