import express from "express"; //import Express and allows us to use it inside our server.js file.
import mongoose from "mongoose";
import cors from "cors";
import saveAddressModel from "./models/saveAddress.js";
import UserModel from "./models/User.js";
/* import userRouter from './routes/users' */
const port = process.env.PORT || 5000; // It will set the Express server on which port it will run on.
const dburl =
  "mongodb+srv://justin:justinbro@cluster0.9f9un.mongodb.net/userprofile?retryWrites=true&w=majority";
const connectionParams = {
  useNewUrlParser: true,
};
const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(dburl, connectionParams)
  .then(() => {
    console.log("connected");
  })
  .catch((e) => {
    console.log("error:", e);
  });

//insert
app.post("/adduser", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const user = new UserModel({
    name: name,
    email: email,
    password: password,
  });
  await user.save();
  res.send("data inserted");
});

app.get("/user/read", async (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

//insert  user details
app.post("/address", async (req, res) => {
  const email = req.body.email;
  const address = req.body.address;
  const phone = req.body.phone;
  const useraddress = new saveAddressModel({
    email: email,
    address: address,
    phone: phone,
  });
  await useraddress.save();
  res.send("address inserted");
});

//display address
app.get("/user/address", async (req, res) => {
  saveAddressModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

// create a GET route
app.get("/", (req, res) => {
  res.send("hello server");
});
app.get("/user", (req, res) => {
  res.send("hello user");
});

app.listen(5000, () => console.log(`server is running in ${port}`)); //will display a message on the console that the server is working as expected.
