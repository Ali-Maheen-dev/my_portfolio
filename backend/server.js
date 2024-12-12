const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Contact = require("./models/Contact.js");
const Project = require("./models/Project");
const app = express();
require('dotenv').config();

app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(process.env.dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.post("/api/projects", async (req, res) => {
  try {
    const { id, title, description, link } = req.body;

    const newProject = new Project({
      id,
      title,
      description,
      link,
    });

    await newProject.save();
    res.status(201).json({ message: "Project added successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add project" });
  }
});

app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve projects" });
  }
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({ name, email, message });

    await newContact.save();

    res.status(201).json({ message: "Message sent successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to send message" });
  }
});

const path = require("path");


app.use(express.static(path.join(__dirname, "../mahi-makes-webs/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../mahi-makes-webs/build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));