const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public/css'));
app.use(express.static('public/js'));
app.use(express.static('public/images'));
app.use(express.static('public/view'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'/public/view','/index.html'));
});

app.get('/share', (req,res) => {
    console.log(req);
    res.sendFile(path.join(__dirname,'/public/view','/share.html'));
});

app.get('/lovepercentage', (req,res) => {
    console.log(req);
    res.sendFile(path.join(__dirname,'/public/view','/lovepercentage.html'));
});

app.get('/pranked', (req,res) => {
    console.log(req);
    res.sendFile(path.join(__dirname,'/public/view','/pranked.html'));
});

app.get('/reallove', (req,res) => {
    console.log(req);
    res.sendFile(path.join(__dirname,'/public/view','/reallove.html'));
});

const PORT = 5000; 

app.listen(PORT,()=>{
    console.log('listening server...')
})