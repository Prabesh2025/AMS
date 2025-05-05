import express from "express";
import mongoose, { Schema } from "mongoose";
import cors from "cors";




//1. configure serve
const app = express();

// 2.Middleware
app.use(express.json());
app.use(cors({
     origin:"http://localhost:5173"
}));

app.get("/", (req, res) => {
  res.send("Hello from ams blog server ");
});

//3. DB connection
try {
  mongoose.connect(
    "mongodb+srv://neupaneprabesh83:jjDGTb96i8k6dixZ@cluster0.7kxqmds.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );

  console.log("Db connected successfully");
} catch (error) {
  console.log("Could not connect to db", error);
}

//5. Make attendence schema
const attendenceSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  time: { type: String, required: true },
});

// 6. Make the table
const Attendence = mongoose.model("Attendence", attendenceSchema);

//7. ROUTES

//1. create
app.post("/create-attendence", async (req, res) => {
  try {
    const newlyCreatedAttendence = await Attendence.create(req.body);
    return res.status(201).json({
       success:true,
       msg:"Your attendence has been recorded",
       data:newlyCreatedAttendence, 
    });
    
  } catch (error) {
    return res.status(500).json({
      success:false,
      msg:`Something went wrong`,
      data:null,
      error
    });
  }
});

//2. get all
app.get("/get-all-attendence", async (req, res) => {
  try {
    const allAttendence = await Attendence.find();
    return res.status(200).json({
      success:true,
       msg:"All attendence has been fetch successfully",
       data:allAttendence,
    });
    
  } catch (error) {
    return res.status(500).json({
      success:false,
      msg:`Something went wrong`,
      data:null,
      error
    });
  }
});

//3. get-one
app.get("/get-single-attendence/:id", async (req, res) => {
  try {
    const singleAttendence = await Attendence.findById(req.params.id);

    if(!singleAttendence){
      return res.status(404).json({
         success:false,
         msg:"Attendence not found",
         data:null,
      });
    }
    return res.status(200).json({
      success:true,
       msg:"Single attendence fetched successfully",
       data:singleAttendence,
    });
    
  } catch (error) {
    return res.status(500).json({
      success:false,
      msg:`Something went wrong`,
      data:null,
      error
    });
  }
});

//4.Update
app.patch("/update-attendence/:id", async (req, res) => {
  try {
    const updatedAttendence = await Attendence.findByIdAndUpdate(req.params.id, req.body,{new:true});
    if(!updatedAttendence){
      return res.status(404).json({
        success:false,
        msg:"Attendence not found",
        data:null,
      });
    }

    return res.status(200).json({
       success:true,
       msg:"Attendence updated",
       data: updatedAttendence,
    });
    
  } catch (error) {
    return res.status(500).json({
      success:false,
      msg:`Something went wrong`,
      data:null,
      error
    });
  }
});

//5.delete
app.delete("/delete-attendence/:id", async (req, res) => {
  try {
    const deletedAttendence = await Attendence.findByIdAndDelete(req.params.id);
    if(!deletedAttendence){
      return res.status(404).json({
        success:false,
        msg:"Attendence not found",
        data:null,
      });
    }
    return res.status(200).json({
      success:true,
      msg:"Attendence has been deleted",
      data:deletedAttendence,
    })
    
  } catch (error) {
    return res.status(500).json({
      success:false,
      msg:`Something went wrong`,
      data:null,
      error
    });
  }
});






// Staff Management

//Schema
// const staffManagementSchema = new mongoose.Schema({
//   fullname:{type:String, required:true},
//   position:{type:String, required:true},
//   salary:{type:String, required:true},
//   age:{type:Number, required:false},

// });

// //Table
// const staffManagement = mongoose.model("staffManagement", staffManagementSchema);


// //Create
// app.post("/create-staff", async (req, res)=>{
//  try {
//   const createStaff = await staffManagement.create(req.body);
//   return res.status(200).json({
//     success:true,
//     msg:"Staff record  has been created",
//     data:createStaff,
//   });
//  } catch (error) {
//   return res.status(500).json({
//     success: false,
//     msg:"Something went wrong",
//     data:null,
//     error
//   });
//  }


// });

// //2. get all
// app.get("/get-all-staff", async (req, res) => {
//   try {
//     const allStaff = await staffManagement.find();
//     return res.status(200).json({
//       success:true,
//        msg:"All staff record  has been fetch successfully",
//        data:allStaff,
//     });
    
//   } catch (error) {
//     return res.status(500).json({
//       success:false,
//       msg:`Something went wrong`,
//       data:null,
//       error
//     });
//   }
// });

// //3. get-one
// app.get("/get-single-staff/:id", async (req, res) => {
//   try {
//     const singleStaff = await Attendence.findById(req.params.id);

//     if(!singleStaff){
//       return res.status(404).json({
//          success:false,
//          msg:"Staff record not found",
//          data:null,
//       });
//     }
//     return res.status(200).json({
//       success:true,
//        msg:"Single staff record fetched successfully",
//        data:singleStaff,
//     });
    
//   } catch (error) {
//     return res.status(500).json({
//       success:false,
//       msg:`Something went wrong`,
//       data:null,
//       error
//     });
//   }
// });

// //4.Update
// app.patch("/update-attendence/:id", async (req, res) => {
//   try {
//     const updatedStaff = await Attendence.findByIdAndUpdate(req.params.id, req.body,{new:true});
//     if(!updatedStaff){
//       return res.status(404).json({
//         success:false,
//         msg:"Staff record not found",
//         data:null,
//       });
//     }

//     return res.status(200).json({
//        success:true,
//        msg:"Staff record updated",
//        data: updatedStaff,
//     });
    
//   } catch (error) {
//     return res.status(500).json({
//       success:false,
//       msg:`Something went wrong`,
//       data:null,
//       error
//     });
//   }
// });

// //5.delete
// app.delete("/delete-staff/:id", async (req, res) => {
//   try {
//     const deletedStaff = await Attendence.findByIdAndDelete(req.params.id);
//     if(!deletedStaff){
//       return res.status(404).json({
//         success:false,
//         msg:"Staff record not found",
//         data:null,
//       });
//     }
//     return res.status(200).json({
//       success:true,
//       msg:"Staff record has been deleted",
//       data:deletedStaff,
//     })
    
//   } catch (error) {
//     return res.status(500).json({
//       success:false,
//       msg:`Something went wrong`,
//       data:null,
//       error
//     });
//   }
// });




// 4. Expose the port
app.listen(5000, () => {
  console.log("server is running on port 5000");
});




