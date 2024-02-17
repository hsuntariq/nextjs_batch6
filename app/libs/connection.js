import mongoose from 'mongoose'

export const connectDB = async () => {
    const connected = {};
    if (connected.isConnected) return;
    try {
        const db = await mongoose.connect('mongodb+srv://pnyrwplecture:hello123@cluster0.i5ooxmu.mongodb.net/?retryWrites=true&w=majority')
        connected.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log(error)
    }

}