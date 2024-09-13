import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clerkId: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
    },
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
    },
    avatart: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

// this   

const User = mongoose.model("User", userSchema);
export default User;
