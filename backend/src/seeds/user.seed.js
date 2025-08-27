import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "sita.sharma@example.com",
    fullName: "Sita Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    email: "anita.tamang@example.com",
    fullName: "Anita Tamang",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    email: "pramila.pandey@example.com",
    fullName: "Pramila Pandey",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    email: "binita.rai@example.com",
    fullName: "Binita Rai",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    email: "nisha.maharjan@example.com",
    fullName: "Nisha Maharjan",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    email: "kriti.oli@example.com",
    fullName: "Kriti Oli",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/15.jpg",
  },

  // Male Users
  {
    email: "ramesh.thapa@example.com",
    fullName: "Ramesh Thapa",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    email: "niraj.koirala@example.com",
    fullName: "Niraj Koirala",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    email: "bishal.gurung@example.com",
    fullName: "Bishal Gurung",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    email: "suman.gautam@example.com",
    fullName: "Suman Gautam",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    email: "dipesh.basnet@example.com",
    fullName: "Dipesh Basnet",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    email: "kiran.adhikari@example.com",
    fullName: "Kiran Adhikari",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/15.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
