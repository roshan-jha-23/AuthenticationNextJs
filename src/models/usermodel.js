import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please Provide a user name"],
      unique: [true, "Username  already exists"],
    },
    email: {
      type: String,
      required: [true, "Please Provide a user Email"],
      unique: [true, "Username  already exists"],
    },
    password: {
      type: String,
      required: [true, "Please Provide a Password"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  },
  { timestamps: true }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;
