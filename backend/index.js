const express = require('express');
const cors = require('cors');


const app = express();
const port = 5000;

const userRouter = require('./routers/userRouter')
const postRouter = require('./routers/postRouter')
const tournamentRouter = require('./routers/tournamentRouter')
const utilRouter = require('./routers/util');
const req = require('express/lib/request');



app.use(cors({
    origin: ['https://game-quests.vercel.app' , 'http://localhost:3000']
}));
app.use(express.json());

app.use('/user',userRouter);
app.use('/post',postRouter);
app.use('/tournament',tournamentRouter);
app.use('/util', utilRouter);

app.use(express.static('./uploads'));

app.get('/',(req, res)=>{
    res.send("hello from the server!!");
})

app.get('/about',(req, res)=>{
    res.send("about the server!!");
})

app.post('/submit', (req, res)=>{
    const data = req.data.data;
    // save it the the database and
    res.send("success saved to the db");
})

app.listen(port, ()=>{
    console.log("server listening on 5000");
})