let express = require('express');
let app = express();

//middleware de formularios
app.use(express.urlencoded({extended: false}))
//middleware de elementos estatiocos
app.use(express.static('public'))


app.get("/", function(req, res){
    res.send("Kaixo mundua!");
});

 app.listen( 3000, function() {
console.log("Zerbitzaria 3000 portuan entzuten");
});



app.post("/bezeroa", function (req, res) {
    // Recopila los datos del formulario desde req.body
    let izena = req.body.izena;
    let email = req.body.email;
    let password = req.body.password;
    let confpassword = req.body.confpassword;
    let gender = req.body.gender;
    let data = req.body.date
    let address = req.body.address;
    let city = req.body.city;
    let zip = req.body.zip;
    let agree = req.body.agree;
    let newsletter = req.body.newsletter;


    // Crea un objeto JSON con los datos
    let datuakJSON = {
        "izena": izena,
        "email": email,
        "password" : password,
        "confirm-password": confpassword,
        "gender": gender,
        "dob" : data,
        "address": address,
        "city": city,
        "zip": zip,
        "agree": agree,
        "newsletter": newsletter

    };

    // Envía una respuesta al cliente con los datos
    res.json(datuakJSON);
});

app.get('/bezeroa/:izena', function(req, res) {
    res.send("Bezeroaren izena: " + req.params.izena);
});

app.get('/bezero', function(req, res){
    res.send(`Kaixo ${req.query.izena} ${req.query.abizena}`)
})