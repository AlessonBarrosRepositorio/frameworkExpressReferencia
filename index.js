const express = require('express');
const app = express();
const flash = require('connect-flash');
const session = require('express-session');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');

const paginaInicial = require("./controllers/paginaIncial")


app.engine('handlebars', engine({
    defaultLayout: 'main',
    helpers: {
        formatDate: (date) => {
            return moment(date).format('DD/MM/YYYY HH:mm')
        },
        isEqual: function (val1, val2, options) {
            return (val1 === val2) ? options.fn(this) : options.inverse(this);
        },
        add: function (value, increment) {
            return value + increment;
        },
        concat: function (){
            return Array.prototype.slice.call(arguments, 0, -1).join('');
        }
    },
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.use(session({
    secret: 'senhaDescobrir',
    resave: false,
    saveUninitialized: true
  }));

app.use(flash());

app.get("/",paginaInicial.get)

app.listen(3636, function () {
    console.log('Server is running on http://localhost:3636');
});
