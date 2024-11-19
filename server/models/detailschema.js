const mongoose = require('mongoose');
const {Schema}=mongoose;


const employeeSchema = new Schema({
  empID:{
  type:String,
  unique:true
  },
  firstname:{
    type:String
  },
  lastname:{
    type:String
  },
  email:{
    type:String,
    unique:true
  },
  salary:{
    type:String
  },
  account_no:{
    type:String
  },
  IFSC_code:{
    type:String
  },
  
company_ex:{
  type:String
},
performance_appraisal:{
  type:String
},
  date_of_joining:{
    type:String
  },
  phoneno:{
    type:Number
  },
  jobrole:{
    type:String
  },
  image:{
    type:String
  }
   });
const Employee = mongoose.model('employee',employeeSchema);
module.exports = Employee
