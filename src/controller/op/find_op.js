const http = require("../../config/axios")

async function find_op(req, res) {

    const { code_op } = req.params

    try {
        const op = await http.get(`/ops/${code_op}`)

        return res.json(op.data)
    } catch (error) {
        return res.status(400).json({ "message": "erro na comunicação com o SAP" })
    }

}

module.exports = find_op