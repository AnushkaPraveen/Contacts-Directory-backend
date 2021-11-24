import mongoose from 'mongoose';
//https://www.mongodb.com/atlas/database
const CONNECTION_URL = 'mongodb+srv://eams123:eams123@cluster0.uo4ap.mongodb.net/EAMS_DB?retryWrites=true&w=majority';
const  PORT = process.env.PORT || 5000;

const connectDB = async () =>{
    try {
        await mongoose.connect(CONNECTION_URL, {
            useUnifiedTopology:true,
            useNewUrlParser:true,

        });
        console.log('MongoDB connected...')
    } catch (err) {
        console.error(err.message);

        //exit process with failure
        process.exit(1);

    }
}

export default connectDB;