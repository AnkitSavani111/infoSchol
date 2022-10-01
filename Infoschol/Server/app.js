const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

require('./Database/connection')

app.use(express.json());
const Scholership = require('./Models/scholSchema');
app.use(express.urlencoded({extended : true}));


app.get('/',(req,res)=>{
    res.send("Home page");
})

app.get('/scholarships',async (req, res) => {
    const data = await Scholership.find();
    res.send(data)
}); 

app.get('/scholarships/:_id',async (req,res)=>{
    const data = await Scholership.findOne({_id:req.params._id})
    res.send(data)
})

app.post('/add', async (req, res) => {
    try {
        const name = req.body.name;
        const award = req.body.award;
        const type = req.body.type;
        const image = req.body.image;
        const cast = req.body.cast;
        const education = req.body.education;
        const income = req.body.income;
        const documents = req.body.documents;
        const stepstoapply = req.body.stepstoapply;
        const about = req.body.about;
        const website = req.body.website;

        const createSchol = new Scholership({
            name: name,
            award: award,
            type: type,
            image: image,
            cast: cast,
            education: education,
            income: income,
            documents: documents,
            stepstoapply: stepstoapply,
            about: about,
            website : website,
        });

        const created = await createSchol.save();
        res.status(200).send("Registered");
        console.log(created);
    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(4000, () => {
    console.log("Server is listening");
});