import mongoose from 'mongoose'

export const connectDB =async()=>{
    await mongoose.connect('mongodb+srv://jatinjoshi4437:9568467454@cluster0.kncdnv1.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}