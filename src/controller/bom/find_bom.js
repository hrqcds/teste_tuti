const http = require("../../config/axios")

async function find_bom(req, res) {

    const { code_bom } = req.params

    try {
        const bom = await http.get(`/boms/${code_bom}`)

        return res.json(bom.data)
    } catch (error) {
        return res.status(400).json({ "message": "erro na comunicação com o SAP" })
    }

}

module.exports = find_bom