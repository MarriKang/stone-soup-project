import express, { Application, Request, Response, NextFunction, Errback} from 'express';
import path from 'path';
import { DataTypes, where } from 'sequelize';
import Stripe from 'stripe';

const app: Application = express();
const PORT = process.env.PORT || 8080;
// @ts-ignore
import db from './db/models';

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

app.put("/api/projects/:id/:data", async (req, res, next) => {
    try {
      const project = await db.Project.findByPk(req.params.id);
      const user = await db.User.findByPk(3);
      res.json(await project.addUser(user, { through: { amntPaid: req.params.data } }));
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

app.get("/api/users/:userId", async (req, res, next) => {
  try {
      const creator = await db.User.findByPk(req.params.userId);
      res.json(creator)
  } catch (err) {
      next(err);
  }
})

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is connected at http://localhost/${PORT}`);
    })
})
