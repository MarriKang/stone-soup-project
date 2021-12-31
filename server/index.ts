import express, { Application, Request, Response, NextFunction, Errback} from 'express';

const app: Application = express();
const PORT = 8080;

app.get('/', (req: Request, res: Response) => res.send('Good job'));

app.listen(PORT, () => {
    console.log(`Server is connected at http://localhost/${PORT}`);
})