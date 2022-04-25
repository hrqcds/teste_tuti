const http = require("../../config/axios")

async function find_all_rmps(req, res) {


    try {
        const find_all_rmps = await http.get(`/rmp`)

        return res.json(find_all_rmps.data)
    } catch (error) {
        return res.status(400).json({ "message": "erro na comunicação com o SAP" })
    }

}

module.exports = find_all_rmps