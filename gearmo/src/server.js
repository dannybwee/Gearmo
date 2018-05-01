/**
 * Dependencies
 */
let express = require('express');       // Express framework
let router = express.Router();          // Express router
let bodpParser = require('body-parser');
let morgan = require('morgan')
let pg = require ('pg');
const PORT = 3000;

let app = express();

let pgConnect = new pg.Pool({
    user: 'danielbui',
        host: 'localhost',
        database: 'Funtime',
        password: '',
        port: 5432,
})




app.use(bodpParser.json());
app.use(bodpParser.urlencoded({extended: true}));

app.use(morgan('dev'));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.post('/api/test', function (request,response) {
    console.log(request.body)
    var user_name = request.body.user_name;
    var password = request.body.password;
    let values = [user_name, password]
    pgConnect.connect((err, db, done) => {
        if (err) {
            return console.log(err);
        } else {
            db.query('INSERT into users (name, pass) VALUES ($1, $2)',[...values], (err, table)=> {
                if (err){
                    return console.log(err)
                } else {
                    console.log('DATA INSERTED')
                    db.end();
                }
            })
        }
    })
    
})

app.listen(PORT, ()=> console.log('Listen on port' + PORT ));
  
