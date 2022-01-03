import express, { Application, Request, Response, NextFunction, Errback} from 'express';

const app: Application = express();
const PORT = 8080;
// @ts-ignore
import db from './db/models';

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


db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is connected at http://localhost/${PORT}`);
    })
})
