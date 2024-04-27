const express    = require('express');
const handlebars = require('express-handlebars');
const path       = require('path');
const app        = express();
const PORT       = 3000;
const db         = require('./db/connection');
const bodyParser = require('body-parser');
const AppController = require('./controllers/AppController');

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`);
});

//db connection
db.authenticate().then(() => {
    console.log("A conexão com o BD foi realizada com sucesso!");
}).catch(err => {
    console.log("Ocorreu um erro ao conectar!", err);
});

app.get('/', AppController.handleHomePageRequest);

//jobs
app.use('/jobs', require('./routes/jobs'));

//handle bars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//static folder
app.use(express.static(path.join(__dirname, 'public')));