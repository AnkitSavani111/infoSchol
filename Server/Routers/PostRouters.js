const Scholership = require('../Models/scholSchema');
module.exports = (app)=> {
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
                website: website,
            });

            const created = await createSchol.save();
            res.status(200).send("Registered");
            console.log(created);
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    })
}