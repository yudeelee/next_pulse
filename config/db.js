import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
  mongoose.set('strictQuery', true);

  if (connected) {
    console.log('DB is allready connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB);
    connected = true;
    console.log('DB connected');
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
