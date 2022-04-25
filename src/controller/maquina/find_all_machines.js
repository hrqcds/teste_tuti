const http = require("../../config/axios")

async function find_all_machines(req, res) {

    try {
        const machines = (await http.get(`/maquinas`)).data

        return res.status(200).json(machines)
    } catch (error) {
        return res.status(400).json({ "message": "erro na comunicação com o SAP" })
    }

}

module.exports = find_all_machines