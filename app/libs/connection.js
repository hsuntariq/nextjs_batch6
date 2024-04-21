import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
         await mongoose.connect('mongodb+srv://pnyrwplecture:hello123@cluster0.i5ooxmu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
         console.log(mongoose.connection.host)
    } catch (error) {
        console.log(error)
    }

}