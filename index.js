const express = require('express');
const path = require('path');
const app = express();
const basePath = path.join(__dirname, 'views');
const conn = require('./db/conn');
const Veiculo = require('./models/Veiculo');
const veiculosController = require('./controllers/veiculosController.js');

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.post('/veiculos/create', veiculosController.createVeiculo);
app.get('/api/veiculos', veiculosController.getVeiculos);
app.get('/api/veiculos/:id', veiculosController.getVeiculoById);
app.put('/api/veiculos/:id', veiculosController.editVeiculo);
app.delete('/api/veiculos/:id', veiculosController.deleteVeiculo);

app.get('/veiculos/create', (req, res) => {
    res.sendFile(`${basePath}/addveiculo.html`);
});

app.get('/api/veiculos', async (req, res) => {
    try {
        const veiculos = await Veiculo.findAll({
            attributes: ['locadora', 'modelo', 'marca', 'id'],
            raw: true
        });

        res.json(veiculos);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/veiculos/:id', async (req, res) => {
    try {
        const veiculo = await Veiculo.findByPk(req.params.id);
        if (!veiculo) {
            return res.status(404).json({ status: 'fail', message: 'Veículo não encontrado.' });
        }

        res.json(veiculo);
    } catch (error) {
        res.status(500).json({ status: 'fail', message: 'Erro interno do servidor.' });
    }
});

app.get('/veiculos/edit/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const veiculo = await Veiculo.findByPk(id);

        if (!veiculo) {
            return res.status(404).send('Veículo não encontrado');
        }

        res.sendFile(`${basePath}/editveiculo.html`);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

app.get('/veiculos', (req, res) => {
    res.sendFile(`${basePath}/listaVeiculos.html`);
});

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/main.html`);
});

conn.sync().then(() => {
    app.listen(port);
}).catch((err) => console.log(err));
