import mongoose from 'mongoose';
import validator from 'validator'
//define schema
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
            type:String,
            required:true,
            unique:[true,"Email id already present"],
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("Invalid Email")
                }
            }
    },
    phone:{
        type:Number,
        minlength:10,
        maxlength:10,
        required:true,

    },
    address:{
        type:String,
        required:true,
    } 
})

// we will create a new Collection

const Student = new mongoose.model('Student',studentSchema);

// module.exports = Student;
export default Student;