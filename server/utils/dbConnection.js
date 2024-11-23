import mongoose from 'mongoose'

const connectDB = async() => {
    try {
        const connInstance = await mongoose.connect(`${process.env.MONGO_URI}/userInfo`)
        console.log('Connected to Mongo',connInstance.connection.host);
    } catch (error) {
        console.log('DB Connection Error --> ',error)
    }
    
}

export default connectDB;