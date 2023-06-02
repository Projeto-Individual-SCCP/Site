var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");
// var graphpieController = require("../controllers/graphpieController");


router.get("/ultimas/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idUsuario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

// router.get("/ultimas/:idUsuario", function (req, res) {
//     graphpieController.buscarUltimasMedidas1(req, res);
// });

// router.get("/tempo-real/:idUsuario", function (req, res) {
//     graphpieController.buscarMedidasEmTempoReal1(req, res);
// })

module.exports = router;