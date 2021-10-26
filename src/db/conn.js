//create connection with database
import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost:27017/student_Data'
// ,{
//     useCreateIndex:true,
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// }
).then(()=>{
    console.log('connection is successful')
}).catch((e)=>{
    console.log('No conection');
})



