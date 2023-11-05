const Veiculo = require('../models/Veiculo');

async function createVeiculo(req, res) {

    console.log('Requisição para criar veículo recebida:', req.body);

    try {
        const locadora = req.body.locadora;
        const modelo = req.body.modelo;
        const marca = req.body.marca;
        const ano = req.body.ano;
        const motor = req.body.motor;
        const portas = req.body.portas;
        const cambio = req.body.cambio;
        let ar_condicionado = req.body.ar_condicionado;

        if (ar_condicionado == 'on') {
            ar_condicionado = true;
        } else {
            ar_condicionado = false;
        }

        if (!locadora || !modelo || !marca || !ano || !motor || !portas || !cambio) {
            return res.status(400).json({ status: 'fail', message: 'Por favor, preencha todos os campos.' });
        }

        await Veiculo.create({ locadora, modelo, marca, ano, motor, portas, cambio, ar_condicionado });

        res.json({ status: 'ok' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 'fail', message: 'Erro interno do servidor.' });
    }
};


async function getVeiculos(req, res) {
    try {
        const veiculos = await Veiculo.findAll({
            attributes: ['locadora', 'modelo', 'marca', 'id'],
            raw: true
        });

        res.json(veiculos);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getVeiculoById(req, res) {
    try {
        const veiculo = await Veiculo.findByPk(req.params.id);
        if (!veiculo) {
            return res.status(404).json({ status: 'fail', message: 'Veículo não encontrado.' });
        }

        res.json(veiculo);
    } catch (error) {
        res.status(500).json({ status: 'fail', message: 'Erro interno do servidor.' });
    }
}

async function editVeiculo(req, res) {
    try {
        const id = req.params.id;
        const veiculo = await Veiculo.findByPk(id);

        if (!veiculo) {
            return res.status(404).json({ status: 'fail', message: 'Veículo não encontrado' });
        }

        veiculo.locadora = req.body.locadora;
        veiculo.modelo = req.body.modelo;
        veiculo.marca = req.body.marca;
        veiculo.ano = req.body.ano;
        veiculo.motor = req.body.motor;
        veiculo.portas = req.body.portas;
        veiculo.cambio = req.body.cambio;
        veiculo.ar_condicionado = req.body.ar_condicionado === 'on';

        await veiculo.save();

        res.json({ status: 'ok' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'fail', message: 'Erro interno do servidor.' });
    }
}

async function deleteVeiculo(req, res) {
    try {
        const veiculo = await Veiculo.findByPk(req.params.id);
        if (!veiculo) {
            return res.status(404).json({ status: 'fail', message: 'Veículo não encontrado.' });
        }

        await veiculo.destroy();

        res.json({ status: 'ok' });
    } catch (error) {
        res.status(500).json({ status: 'fail', message: 'Erro interno do servidor.' });
    }
}

module.exports = {
    createVeiculo,
    getVeiculos,
    getVeiculoById,
    editVeiculo,
    deleteVeiculo
};
