const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('')
})

app.send('/download', (req, res) =>{
    res.send('resume')
})