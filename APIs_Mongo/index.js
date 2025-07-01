let express = require("express");
let mongoose = require("mongoose");

let app = express();
let PORT = 3000;

mongoose
  .connect("mongodb://127.0.0.1/node2025")
  .then(() => console.log("Mongo Database Connected"))
  .catch((err)=> console.log("Error in connection!"));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get("/",(req,resp)=>{
    resp.send("<h1>Hello world</h1>");
})

// Define the schema
const categorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    is_enable: {
      type: String,
    },
  },
  { timestamps: true }
);


// model
const Category = mongoose.model("category", categorySchema);

//Middleware
app.use(express.urlencoded({ extended: false }));

app.get("/category",async (req,resp)=>{
    const categoryList = await Category.find({});
    let html = `
    <table align='center' border='1' cellpadding='2'>
        
            <tr>
                <th>Category Name</th>
                <th>Description</th>
                <th>Is Enable</th>
            </tr>
        
        
        ${categoryList.map((Category)=>`{
            <tr>
                <td>${Category.categoryName}</td>
                <td>${Category.description}</td>
                <td>${Category.is_enable}</td>
            </tr>
            }`).join("")}
        
    </table>
    `;
    console.log(categoryList);
    resp.send(html);

})

// Fetch all record
app.get("/api/category",async (req,resp)=>{
  const categoryList = await Category.find();
  if(!categoryList){
    return resp.status(500).json({msg:"Internal Error!"});
  }
  return resp.status(200).json({msg:categoryList});
})

//Fetch single document
app.get("/api/category/:id",async(req,resp)=>{
  const category = await Category.findById(req.params.id)
  if(!category._id){
    return resp.status(500).json({msg:'Internal Error'})
  }
  return resp.status(200).json({msg:category})
})

//Insert document
app.post("/api/category",async(req,resp)=>{
  const body = req.body;
  // Validation
  if(!body.categoryName){
    return resp.status(404).json({err:"Mandatory field is missing!"})
  }
  //insertion
  const result = await Category.create({
    categoryName:body.categoryName,
    description: body.description,
    is_enable: body.is_enable
  })
  //response
  return resp.status(200).json({msg:"One Record Inserted Successfully!"})
})

//Update
app.patch("/api/category/:id",async (req,resp)=>{
  await Category.findByIdAndUpdate(req.params.id,{description:"Any new description.."});
  return resp.status(200).json({msg:'Record updated successfully!'})
})

//Delete
app.delete("/api/category/:id",async (req,resp)=>{
  await Category.findByIdAndDelete(req.params.id)
  return resp.status(200).json({msg:'Record deleted successfully'})
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.listen(PORT, () => {
  console.log("Application is running on port 3000");
});
