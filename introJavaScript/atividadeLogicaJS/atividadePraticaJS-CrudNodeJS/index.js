import express from "express";
const app = express();
app.use(express.json());

const usersData = [
  // {
  //   userEmail: "reginaldo@victor.com",
  //   userName: "Reginaldo",
  //   userPass: 4444,
  //   userId: 0,
  //   userMsgs: [{ messageId: 0, title: "Hello", message: "Hello World!" }],
  // },
  // {
  //   userEmail: "victor@victor.com",
  //   userName: "Victor",
  //   userPass: 4444,
  //   userId: 1,
  //   userMsgs: [{ message: "Hello Reginaldo" }, { message: "Hello Reginaldo" }],
  // },
];
let userUniqueId = 0;
let userMsgId = 2345234;
app.post("/user/signup", (req, res) => {
  const emailExists = usersData.some((user) => {
    return req.body.userEmail === user.userEmail;
  });

  if (emailExists) {
    res.status(400);
    res.send("Email already registered by another user!");
  } else {
    const newUser = {
      userEmail: req.body.userEmail,
      userName: req.body.userName,
      userPass: req.body.userPass,
      userId: userUniqueId,
      userMsgs: [
        { messageId: userMsgId, title: "Welcome", message: "Hello World!" },
      ],
    };
    userUniqueId++;
    userMsgId++;
    usersData.push(newUser);
    res.status(200).json(usersData);
  }
});

//temporary /users only for tests
app.get("/users", (req, res) => {
  res.status(200).json({ UsersList: usersData });
});

app.get("/user/login", (req, res) => {
  const verifyUser = usersData.find((user) => {
    return (
      user.userEmail === req.body.userEmail &&
      user.userPass === req.body.userPass
    );
  });
  if (verifyUser) {
    res.status(200).json({ message: "Login successful!", verifyUser });
  } else {
    res.status(400).json({ message: "Wrong credentials!" });
  }
});

app.post("/user/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  const userMessage = usersData.find((user) => {
    return user.userId === userId;
  });

  if (userMessage) {
    res
      .status(200)
      .json({ user: userMessage.userName, message: userMessage.userMsgs });
  } else {
    res.status(404).json({ message: "User not found!" });
  }

  const newMessage = {
    messageId: userMsgId,
    title: req.body.title,
    message: req.body.message,
  };
  usersData.userMsgs.push(newMessage);
  userMsgId++;
  res.status(200);
  res.send(newMessage);
  console.log(newTitle);
  console.log(newMsg);
});

app.listen(3000, () => {
  console.log("Connected!");
  console.log("Node API running on port 3000");
});
