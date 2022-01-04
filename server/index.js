const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.static("../client/build"));

app.get('/', (req, res) => {
    res.send('yeah')
})

app.get("/api/users", async (req, res, next) => {
    try {
      res.send(await db.User.findAll());
    } catch (err) {
      next(err);
    }
});

app.get("/api/projects", async (req, res, next) => {
    try {
      res.send(await db.Project.findAll());
    } catch (err) {
      next(err);
    }
});

app.get("/api/projects/:id", async (req, res, next) => {
    try {
        const project = await db.Project.findByPk(req.params.id);
        res.json(project)
    } catch (err) {
      next(err);
    }
});

app.put("/api/projects/:id", async (req, res, next) => {
    try {
      const project = await db.Project.findByPk(req.params.id);
      const user = await db.User.findByPk(3);
      res.json(await project.addUser(user, { through: { amntPaid: 25 } }));
    } catch (error) {
      next(error);
    }
  });

app.get("/api/projects/:id/rewards", async (req, res, next) => {
    try {
        const rewards = await db.Reward.findAll({
            where: {
                ProjectId: req.params.id
            }
        })
        res.json(rewards)
    } catch (err) {
        next(err);
    }
})


db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is connected at http://localhost/${PORT}`);
    })
})
