const http = require("../../config/axios")

async function find_all_moldes(req, res) {


    try {
        const moldes = await http.get(`/moldes`)

        return res.json(moldes.data)
    } catch (error) {
        return res.status(400).json({ "message": "erro na comunicação com o SAP" })
    }

}

module.exports = find_all_moldes