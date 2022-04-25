const http = require("../../config/axios")

async function find_all_boms(req, res) {


    try {
        const bom = await http.get(`/boms`)

        return res.json(bom.data)
    } catch (error) {
        return res.status(400).json({ "message": "erro na comunicação com o SAP" })
    }

}

module.exports = find_all_boms