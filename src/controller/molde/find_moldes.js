const http = require("../../config/axios")

async function find_molde(req, res) {

    const { code } = req.params

    try {
        const molde = await http.get(`/moldes/${code}`)

        return res.json(molde.data)
    } catch (error) {
        return res.status(400).json({ "message": "erro na comunicação com o SAP" })
    }

}

module.exports = find_molde