const express = require('express');

module.exports =(app)=> {
    const Scholership = require('../Models/scholSchema');
    app.use(express.urlencoded({ extended: true }));


    app.get('/', (req, res) => {
        res.send("Home page");
    });

    app.get('/scholarships', async (req, res) => {
        const data = await Scholership.find();
        res.send(data)
    });

    app.get('/scholarships/:_id', async (req, res) => {
        const data = await Scholership.findOne({ _id: req.params._id })
        res.send(data)
    })
}