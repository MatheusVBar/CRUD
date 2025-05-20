const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contatosRoutes = require('./routes/contatos');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/contatos', contatosRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});