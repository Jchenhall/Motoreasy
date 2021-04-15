const express = require('express');
const mongoose = require('mongoose')
const cors= require('cors')
const app = express();
const TyreModel = require('./models/Tyres.js');

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://testuser:nqsOsBdI3Qn67ia1@motereasy.7gtbm.mongodb.net/tyres?retryWrites=true&w=majority', 
{
    userNewUrlParser: true,
}
);

// app.get('/', async (req, res) => {
// const tyres = new TyreModel({               //node index.js
//     Brand: "Bridgestone",
//     Title: "Turanza ER300",
//     Size:205,
//     Price:69,
//     Image: "https://www.tyresavings.com/storage/products/Bridgestone/er300.jpg"
// });
// try{
//     await tyres.save();
// }catch(err) {
//     console.log(err)
// }
// });


app.get("/read", async (req, res) => {
    TyreModel.find({}, (err, result) => {
if (err) {
    res.send(err)
}
res.send(result);
    })
});

app.listen(3001, () => {
    console.log('Server is running on port 3001...')
});