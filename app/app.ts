import express from 'express';
import ShibiCreator from "./framework/creator/ShibiCreator";
import Shibi from "./model/shibi/Shibi";
import ShibiSearch from "./framework/search/ShibiSearch";

const expressServer: express.Application = express();

const shibiCreator: ShibiCreator = new ShibiCreator();
const shibiSearch: ShibiSearch = new ShibiSearch();

// Define Port
const PORT = process.env.PORT || '8174';

expressServer.get("/shibi/tpt.shibi", async function (req, res, next) {
    let latitudeFrom    = req.query['latFrom'];
    let longitudeFrom   = req.query['lonFrom'];
    let latitudeTo      = req.query['latTo'];
    let longitudeTo     = req.query['lonTo'];
    let date            = req.query['date'];

    if (date == undefined) date = new Date(Date.now());

    let data = await shibiSearch.shibiTPTSearch(latitudeFrom, longitudeFrom, latitudeTo, longitudeTo, new Date(date));

    if (data == null) res.send("Request failed.");

    let finishedData: Shibi = shibiCreator.createShibiFromTPT(data);

    if (finishedData == null) res.send("Shibi parsing failed.");

    res.send(finishedData);
});

expressServer.get("/shibi/flixbus.shibi", async function (req, res, next) {
    let nameFrom        = req.query['nameFrom'];
    let nameTo          = req.query['nameTo'];
    let date            = req.query['date'];

    if (date == undefined) date = new Date(Date.now());

    let data = await shibiSearch.shibiFlixbusSearch(nameFrom, nameTo, new Date(date));

    if (data == null) res.send("Request failed.");

    let finishedData: Shibi = shibiCreator.createShibiFromFlixbus(data);

    if (finishedData == null) res.send("Shibi parsing failed.");

    res.send(finishedData);
});


expressServer.listen(PORT, function() {
    console.log('Shibi listening on port ' + PORT.toString());
});
