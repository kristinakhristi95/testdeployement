import express from 'express';

const app = express();

app.get('/', (req,res) => {
    res.send("hello word")
});

app.get('/test', (req,res) => {
    res.send("hello word test")
});

const PORT = 8080;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
