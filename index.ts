import express from 'express';

const app = express();
const PORT = 8080;

app.get('/', (req, res) => res.send('Good job'));

app.listen(PORT, () => {
    console.log(`Server is connected at ${PORT}`);
})