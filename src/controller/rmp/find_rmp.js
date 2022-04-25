const http = require("../../config/axios")

async function find_rmp(req, res) {

    const { code } = req.params

    try {
        const rmp = await http.get(`/rmp/${code}`)

        return res.json(rmp.data)
    } catch (error) {
        return res.status(400).json({ "message": "erro na comunicação com o SAP" })
    }

}

module.exports = find_rmp