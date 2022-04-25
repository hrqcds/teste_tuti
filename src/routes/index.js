const { Router } = require("express")
const find_all_machines = require("../controller/maquina/find_all_machines")
const find_machine = require("../controller/maquina/find_machine")
const find_op = require("../controller/op/find_op")
const find_bom = require("../controller/bom/find_bom")
const find_all_boms = require("../controller/bom/find_boms")
const find_molde = require("../controller/molde/find_moldes")
const find_all_moldes = require("../controller/molde/find_all_moldes")
const find_rmp = require("../controller/rmp/find_rmp")
const find_all_rmp = require("../controller/rmp/find_all_rmp")

const route = Router()
const baseURL = "/api/v1/sap/tutilabs"

route.get(`${baseURL}/machines`, find_all_machines)
route.get(`${baseURL}/machines/:pre/:pos`, find_machine)
route.get(`${baseURL}/ops/:code_op`, find_op)
route.get(`${baseURL}/boms/:code_bom`, find_bom)
route.get(`${baseURL}/boms`, find_all_boms)
route.get(`${baseURL}/moldes/:code`, find_molde)
route.get(`${baseURL}/moldes`, find_all_moldes)
route.get(`${baseURL}/rmp/:code`, find_rmp)
route.get(`${baseURL}/rmp`, find_all_rmp)

module.exports = route