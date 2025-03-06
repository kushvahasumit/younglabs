const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

//middleware
app.use(cors());
app.use(express.json());

// api
app.get("/api/greet", (req, res) => {
  const name = req.query.name;
  if(name){
    res.json({message : `Hey ${name} ! Welcome to younglabs `});
  }else{
    res.json({ message: `Name is required...! ` });
  }
  
});

app.listen(PORT, () =>
  console.log(`server running on port :: ${PORT}`)
);
