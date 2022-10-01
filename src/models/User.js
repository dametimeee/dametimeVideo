import bcrypt from "bcrypt";
import mongoose from "mongoose";

const githubUserSchema = new mongoose.Schema({
  avatarUrl: String,
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  location: String,
  socialOnly: { type: Boolean, default: false },
});

githubUserSchema.pre("save", async function () {
  this.password = bcrypt.hash(this.password, 5);
});

export const githubUser = mongoose.model("githubUser", githubUserSchema);

const kakaoUserSchema = new mongoose.Schema({
  avatarUrl: String,
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  location: String,
  socialOnly: { type: Boolean, default: false },
});

kakaoUserSchema.pre("save", async function () {
  this.password = bcrypt.hash(this.password, 5);
});

export const kakaoUser = mongoose.model("kakaoUser", kakaoUserSchema);
