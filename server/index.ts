import express, { Application, Request, Response, NextFunction, Errback} from 'express';

const app: Application = express();
const PORT = 8080;
// @ts-ignore
import db from './db/models';

app.get('/', (req, res) => {
    res.send('yeah')
})

app.get('/api/users', (req, res) => {
    db.User.findAll()
    .then((result: object) => res.json(result))
    .catch((err: object) => console.error(err));
})

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is connected at http://localhost/${PORT}`);
    })
})
