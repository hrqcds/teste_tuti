const http = require("../../config/axios")

async function find_machine(req, res) {

    const { pre, pos } = req.params

    try {
        const machine = await http.get(`/maquinas/${pre}%2F${pos}`)

        return res.json(machine.data)
    } catch (error) {
        return res.status(400).json({ "message": "erro na comunicação com o SAP" })
    }

}

module.exports = find_machine