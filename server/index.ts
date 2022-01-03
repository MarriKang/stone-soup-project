import express, { Application, Request, Response, NextFunction, Errback} from 'express';
import path from 'path';

const app: Application = express();
const PORT = 8080;
// @ts-ignore
import db from './db/models';

app.use(express.static(path.resolve(__dirname, '../client/build')));

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
