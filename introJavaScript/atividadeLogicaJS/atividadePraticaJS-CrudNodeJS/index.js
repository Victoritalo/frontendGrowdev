import express from "express";
const app = express();
app.use(express.json());
const usersData = [];
let userId = 0;


app.post("/user/signup", (req, res) => {
  const emailExists = usersData.some(email => {
    return email === req.body.userEmail
  })
  if(emailExists){
    res.status(400)
    res.send("Email already registered by another user!")
  } else{
    const newUser = {
      "userEmail": req.body.userEmail,
      "userName": req.body.userName,
      "userPass": req.body.userPass,
      "id": userId,
      "userMsgs": [],
    };
    userId++;
    usersData.push(newUser);
    res.status(200).json(usersData)
  }

});

app.get("/user/:id", (req, res) => {
  res.send(usersData.id);
});

app.listen(3000, () => {
  console.log("Connected!");
  console.log("Node API running on port 3000");
});
