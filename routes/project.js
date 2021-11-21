const router = require("express").Router();
const Project = require("../model/Project");
const verify = require("./verifyToken");
const { projectValidation } = require("../validation");

router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.send(projects);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/create", async (req, res) => {
  const { error } = projectValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const project = new Project({
    title: req.body.title,
    content: req.body.content,
    authorFirstName: req.body.authorFirstName,
    authorLastName: req.body.authorLastName,
  });

  try {
    const newProject = await project.save();
    res.status(200).send(newProject);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
