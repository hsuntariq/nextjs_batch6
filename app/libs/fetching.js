const { connectDB } = require("./connection")
const { User } = require("./models")

export const fetchData = async (q) => {
    const pattern = new RegExp(q, 'i')
    connectDB()
    const users = await User.find({ username: { $regex: pattern } });
    return users
}