import mongo from "mongoose";

const { model, Schema } = mongo;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String,
});

const User = model("User", userSchema);

export default User;
